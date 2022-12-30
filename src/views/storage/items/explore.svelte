<script>
  import notifications from '../../../assets/dialogs/notification/notification';
  import prompt from '../../../assets/dialogs/prompt/prompt';
  import categoryDialog from '../../../assets/dialogs/category/category';

  import Modal from '../../../assets/components/modal.svelte';

  import {
    client,
    everything,
  } from '../../../core/providers/apiClientGenerator';

  export let window, loaded, data;

  const typeIconMap = {
    NUMBER: 'information-outline',
    STRING: 'text-outline',
    BOOLEAN: 'toggle-outline',
    LIST: 'list-outline',
  };


  let fieldDataList = [];

  async function getFieldData(id) {
    if (!fieldDataList.length) {
      fieldDataList = (await client.chain.query.ListStorageCategoryFormFields({skip: 0, take: 10000, orderBy: 'updatedAt', orderType: 'desc'}).get({ id: true, label: true, type: true, name: true }));
    }
    return fieldDataList.find(field => field.id === id);
  }

  let category = [];
  let items = [];
  let resolvedItems = [];
  let filters = [];
  let pointer = 1;

  async function loadItemsFromDatabase() {
    await getFieldData(1);
    category = await client.chain.query.GetStorageCategory({id: pointer}).get({ name: true, fields: {...everything}, inheritedFields: {...everything}, nestedItems: {...everything, category: { name: true, parent: { name: true } }} });
    items = category.nestedItems;
    resolvedItems = items;
    filters = [{ type: 'ID' }, ...category.inheritedFields, ...category.fields];
    $loaded = true;
  };

  $: {
    resolvedItems = items;
    for (const filter of filters) {
      if (filter.type === 'ID') {
        if (!['', undefined].includes(filter.value)) {
          resolvedItems = resolvedItems.filter(item => {
            return item.id === filter.value;
          })
        }
      }
      if (filter.type === 'NUMBER') {
        if (!['', undefined].includes(filter.value)) {
          resolvedItems = resolvedItems.filter(item => {
            return eval(item.properties[filter.id] + filter.term + filter.value)
          })
        }
      }
      if (filter.type === 'STRING') {
        if (!['', undefined].includes(filter.value)) {
          resolvedItems = resolvedItems.filter(item => {
            return item.properties[filter.id].toLowerCase().includes(filter.value.toLowerCase());
          })
        }
      }
      if (filter.type === 'BOOLEAN' || filter.type === 'LIST') {
        if (!['', undefined].includes(filter.value)) {
          resolvedItems = resolvedItems.filter(item => {
            return item.properties[filter.id] == filter.value;
          })
        }
      }
    }
  }
  
  $: loadItemsFromDatabase(pointer)

  async function changeCategory() {
    const result = Number(await categoryDialog.show({ all: true }));
    if (isNaN(result)) return
    pointer = result
  }

  let editItemObject;

  const action = {
    create: async () => {
      for (const field of fields) {
        if (field.required && [undefined, ''].includes(fieldsBuffer[field.name])) {
          notifications.error(`Field '${field.label}' is required !`);
          return;
        }
      }
      const parsedFields = {}
      for (let name in fieldsBuffer) {
        let field = fields.find(field => field.name === name);
        parsedFields[field.id] = field.type === 'BOOLEAN' ? Number(fieldsBuffer[name]) : fieldsBuffer[name];
      }
      const item = await client.chain.mutation.CreateStorageItem({ input: { properties: parsedFields, categoryId: Number(createCategoryObject.id) } }).get({on_Error: {...everything}, on_StorageItem: {...everything}});
      if (item.__typename === 'StorageItem') {
        await loadItemsFromDatabase();
        notifications.success('Item created successfully !');
        action.cancel();
      } else {
        if (item.code === 'P2002') {
          notifications.error('An item with exact same properties already exists !');
       } else {
          notifications.error('An error occurred while creating item !');
        }
      }
    },
    edit: async () => {
      for (const field of fields) {
        if (field.required && [undefined, ''].includes(fieldsBuffer[field.name])) {
          notifications.error(`Field '${field.label}' is required !`);
          return;
        }
      }
      const parsedFields = {}
      for (let name in fieldsBuffer) {
        let field = fields.find(field => field.name === name);
        parsedFields[field.id] = field.type === 'BOOLEAN' ? Number(fieldsBuffer[name]) : fieldsBuffer[name];
      }
      const item = await client.chain.mutation.UpdateStorageItem({ id: Number(editItemObject.id), input: { properties: parsedFields, categoryId: Number(editItemObject.category.id) } }).get({on_Error: {...everything}, on_StorageItem: {...everything}});
      if (item.__typename === 'StorageItem') {
        await loadItemsFromDatabase();
        notifications.success('Item Updated successfully !');
        action.cancel();
      } else {
        if (item.code === 'P2002') {
          notifications.error('An item with exact same properties already exists !');
        } else {
          notifications.error('An error occurred while updating item !');
        }
      }
    },
    delete: async () => {
      let confirmation = await prompt.show({
        message: 'Are you sure you want to delete this item ?',
        options: ['yes', 'cancel'],
        icon: 'trash-bin',
        safe: {
          word: 'confirm',
          placeholder: `Type 'confirm'`,
          cancel: 1,
        },
      });
      if (confirmation === 'yes') {
        const field = await client.chain.mutation.DeleteStorageItem({id: Number(editItemObject.id)}).get({on_Error: {...everything}, on_StorageItem: {...everything}});
        if (field.__typename === 'StorageItem') {
          await loadItemsFromDatabase();
          notifications.success('Item deleted successfully !');
          action.cancel();
        } else {
          notifications.error('An error occurred while deleting item !')
        }
      }
    },
    cancel: () => {
      fields = [];
      fieldsBuffer = {};
      lastBufferState = fieldsBuffer;
      createCategoryObject = null;
      mode = '';
    }
  };

  let mode = '';
  let createCategoryObject = null;
  let fields = [];
  let fieldsBuffer = {};
  let lastBufferState = fieldsBuffer;
  let ignore = false;

  $: {
    if (!ignore) {
      let changedFields = [];
      for (const field of fields) {
        if (lastBufferState[field.name] !== fieldsBuffer[field.name]) {
          changedFields.push(field.name);
          break;
        }
      }
      if (!changedFields.length) changedFields = [undefined];
      while (changedFields.length) {
        const changedField = changedFields.pop();
        for (const field of fields) {
          if (field.name === changedField) {
            continue;
          }
          if (field.default) {
            if (changedField === undefined || field.default.indexOf(`${changedField}`) !== -1) {
              let parsedDefault = field.default;
              if (parsedDefault.match(/{([^}]*)}/g)) {
                for (let experssion of parsedDefault.match(/{([^}]*)}/g)) {
                  parsedDefault = parsedDefault.replace(experssion, '" + ' + (['NUMBER', 'BOOLEAN'].includes(field.type) ? 'Number' : '') + '(' + experssion.replace(/([a-z][a-z1-9_]*)/g, '((isNaN(fieldsBuffer["$1"]) ? fieldsBuffer["$1"] : Number(fieldsBuffer["$1"])) || "")').slice(1, -1) + ') + "');
                }
              }
              if (field.type === 'BOOLEAN') {
                fieldsBuffer[field.name] = eval('Number("' + parsedDefault + '")');
              } else {
                fieldsBuffer[field.name] = eval('"' + parsedDefault + '"');
              }
              changedFields.push(field.name);
            }
          }
        }
      }
      lastBufferState = JSON.parse(JSON.stringify(fieldsBuffer));
    }
  }

  const modal = {
    create: async (categoryId) => {
      let createPointer;
      if (!categoryId || typeof(categoryId) === 'object') {
        createPointer = await Number(await categoryDialog.show({ final: true }));
        if (!createPointer) return;
      } else {
        createPointer = categoryId
      }
      createCategoryObject = await client.chain.query.GetStorageCategory({ id: createPointer }).get({ id: true, name: true, generators: {...everything, field: {id: true}}, fields: {...everything}, inheritedFields: {...everything} });
      fields = [...createCategoryObject.inheritedFields, ...createCategoryObject.fields];
      fields.map(field => {
        field.default = '';
        createCategoryObject.generators.forEach(generator => {
          if (field.id === generator.field.id) {
            field.default = generator.generator;
          }
        });
        return field;
      });
      mode = 'CREATE';
    },
    edit: async (id) => {
      editItemObject = await client.chain.query.GetStorageItem({ id: Number(id) }).get({...everything, category: { id: true, name: true, generators: {...everything, field: {id: true}}, fields: {...everything}, inheritedFields: {...everything} }});
      fields = [...editItemObject.category.inheritedFields, ...editItemObject.category.fields];
      fields.map(field => {
        field.default = '';
        editItemObject.category.generators.forEach(generator => {
          if (field.id === generator.field.id) {
            field.default = generator.generator;
          }
        });
        return field;
      });
      ignore = true;
      for (let fieldId in editItemObject.properties) {
        fieldsBuffer[((await getFieldData(fieldId)).name)] = editItemObject.properties[fieldId];
      }
      ignore = false;
      fieldsBuffer = fieldsBuffer;
      mode = 'EDIT';
    },
  };

  let record = {
    state: false,
    pointer: null,
    quantity: 1,
    description: '',
    create: async () => {
      if (isNaN(record.quantity) || !record.quantity) {
        notifications.error('Quantity must be a non-zero number (negative or positive) !');
        return;
      }
      const result = await client.chain.mutation.CreateStorageItemRecord({ input: { itemId: Number(record.pointer), quantity: record.quantity, description: record.description } }).get({ on_Error: {...everything}, on_StorageItemRecord: {...everything} });
      if (result.__typename === 'StorageItemRecord') {
        notifications.success('Record created successfully !');
        let index = items.indexOf(items.find(item => {
          return item.id === record.pointer;
        }));
        items[index].quantity += record.quantity;
        record.state = false;
        record.quantity = 1;
        record.description = '';
      } else {
          notifications.error('An error occurred while creating record !');
      }
    },
    cancel: () => {
      record.state = false;
      record.quantity = 1;
      record.description = '';
    }
  }

  // [=- DATA -=]
  if ($data) {
    if ($data.categoryId)
      pointer = Number($data.categoryId);
    if ($data.insert)
      modal.create(Number($data.insert));
  }

</script>

<div class="h-full flex">
  <div
    class="w-3/4 flex content-start gap-2 p-2 pb-8 flex-wrap text-xs h-full overflow-y-auto overflow-x-hidden"
  >
    <div class="py-2 w-full border-dashed bg-gray-50 px-2 rounded-md">
      Showing Result For <span
        class:hidden={category?.name === undefined}
        class="px-2 rounded bg-gray-100">{category?.name}</span
      >
    </div>
    {#each resolvedItems as item}
      <div
        class="relative w-[calc(33.333%-0.333rem)] h-fit p-2 bg-gray-50 rounded-md  border-gray-100 border"
      >
        <div class="mb-2 flex whitespace-nowrap">
          <div
            class="px-2 h-4 mr-2 text-[11px] text-center rounded-md bg-gray-100"
          >
            ID: {item.id}
          </div>
          <ion-icon class="relative top-0.5 mr-1" name="cube-outline" />
          <span class="text-gray-400">{item.category.parent.name + ' → '}</span>
          <span class="pl-1 overflow-hidden" title={item.category.name}
            >{item.category.name}</span
          >
        </div>
        <div class="flex flex-col gap-2 w-[calc(100%-2rem)]">
          <div
            class="h-[146px] relative overflow-hidden group hover:overflow-visible"
          >
            <div
              class="absolute top-o left-0 flex flex-col duration-100 w-min rounded-md cursor-help group-hover:z-[1] group-hover:bg-white group-hover:p-2 group-hover:border"
            >
              {#each Object.keys(item.properties) as property}
                <div
                  class="whitespace-nowrap fit-content inline-block overflow-hidden bg-gray-100 px-2 py-1 min-w-[10rem] h-[24px] mb-1 rounded-md last-of-type:mb-0"
                  title={item.properties[property]}
                >
                  <span>
                    {#await getFieldData(property) then { label }}
                      {label} :
                    {/await}
                  </span>
                  <span>
                    {#await getFieldData(property) then { type }}
                      {#if type === 'BOOLEAN'}
                        {#if item.properties[property] == 0}
                          <ion-icon
                            class="relative top-0.5"
                            name="ellipse-outline"
                          />
                        {:else}
                          <ion-icon
                            class="relative top-0.5"
                            name="checkmark-circle"
                          />
                        {/if}
                      {:else}
                        {item.properties[property]}
                      {/if}
                    {/await}
                  </span>
                </div>
              {/each}
            </div>
          </div>
          <div
            class="vertically-center right-2 flex p-1 rounded-full cursor-pointer hover:bg-gray-200"
            title="Open"
            on:click|stopPropagation={() => {
              modal.edit(item.id);
            }}
          >
            <ion-icon name="ellipsis-vertical-outline" />
          </div>
        </div>
        <div
          class="pt-1 mt-2 px-2 font-medium border-t border-dashed flex justify-between"
        >
          <div>Stock : {item.quantity}</div>
          <div
            class="text-gray-400 cursor-pointer hover:text-gray-700"
            title="Create a record for this item"
            on:click={() => {
              record.pointer = item.id;
              record.state = true;
            }}
          >
            <ion-icon class="relative top-1" name="receipt-outline" />
          </div>
        </div>
      </div>
    {:else}
      <div class="w-full text-gray-400 text-sm mt-2 text-center">
        No Items Exists (change filter setting or add one)
      </div>
    {/each}
    <div
      class="absolute h-6 bg-gray-100 border-t bottom-0 left-0 w-3/4 leading-[1.4rem] px-2 z-[3]"
    >
      Total Inventory Based On Filters : {resolvedItems.reduce((pv, cv) => {
        return pv + cv.quantity;
      }, 0)}
    </div>
  </div>
  <div class="flex flex-col gap-2 w-1/4 bg-gray-50 h-full p-2">
    <div class="text-sm font-bold border-b border-dashed pb-1">ACTIONS</div>
    <div class="mb-2 flex flex-col gap-2">
      <div
        class="w-full text-[14px] px-1 cursor-pointer rounded-md duration-100 hover:bg-gray-100"
        on:click={changeCategory}
      >
        <ion-icon class="relative top-0.5 mr-1" name="grid-outline" />
        <span>Change Category</span>
      </div>
      <div
        class="w-full text-[14px] px-1 cursor-pointer rounded-md duration-100 text-white bg-green-400 hover:bg-green-500"
        on:click={modal.create}
      >
        <ion-icon class="relative top-0.5 mr-1" name="add-circle" />
        <span>Create New Item</span>
      </div>
    </div>
    <div class="text-sm font-bold border-b border-dashed pb-1">FILTERS</div>
    <div class="flex flex-col h-full overflow-y-auto gap-2">
      {#each filters as filter}
        {#if filter.type === 'ID'}
          <div class="flex gap-1 text-xs w-full flex-col">
            <div class="font-medium">ID</div>
            <div class="flex gap-1">
              <input
                class="bg-white rounded-md grow px-2 outline-none h-[24px]"
                type="text"
                placeholder="Enter a value"
                bind:value={filter.value}
              />
            </div>
          </div>
        {/if}
        {#if filter.type === 'NUMBER'}
          <div class="flex gap-1 text-xs w-full flex-col">
            <div class="font-medium">{filter.label}</div>
            <div class="flex gap-1">
              <select
                class="rounded-l-md bg-white p-1 w-8 text-center noDropDownArrow outline-none"
                bind:value={filter.term}
              >
                <option value="==">=</option>
                <option value=">">&gt;</option>
                <option value="<">&lt;</option>
                <option value=">=">&ge;</option>
                <option value="<=">&le;</option>
                <option value="!=">&ne;</option>
              </select>
              <input
                class="bg-white rounded-md grow px-2 outline-none"
                type="text"
                placeholder="Enter a value"
                bind:value={filter.value}
              />
            </div>
          </div>
        {/if}
        {#if filter.type === 'STRING'}
          <div class="flex gap-1 text-xs w-full flex-col">
            <div class="font-medium">{filter.label}</div>
            <div class="flex gap-1">
              <input
                class="bg-white rounded-md grow px-2 outline-none h-[24px]"
                type="text"
                placeholder="Enter a value"
                bind:value={filter.value}
              />
            </div>
          </div>
        {/if}
        {#if filter.type === 'LIST'}
          <div class="flex gap-1 text-xs w-full flex-col">
            <div class="font-medium">{filter.label}</div>
            <div class="flex gap-1">
              <select
                class="rounded-l-md bg-white p-1 grow outline-none"
                bind:value={filter.value}
              >
                <option value="">Any</option>
                {#each filter.properties.list.split(',') as item}
                  <option value={item}>{item}</option>
                {/each}
              </select>
            </div>
          </div>
        {/if}
        {#if filter.type === 'BOOLEAN'}
          <div class="flex gap-1 text-xs w-full flex-col">
            <div class="font-medium">{filter.label}</div>
            <div class="flex gap-1">
              <select
                class="rounded-l-md bg-white p-1 grow outline-none"
                bind:value={filter.value}
              >
                <option value="">Any</option>
                <option value="1">True</option>
                <option value="0">False</option>
              </select>
            </div>
          </div>
        {/if}
      {:else}
        <div class="text-center w-full text-gray-500 text-xs mt-2">
          this category has no filter
        </div>
      {/each}
    </div>
  </div>
  {#if record.state}
    <Modal height="fit-content" width="30rem">
      <div class="text-xs">
        <div class="mb-1">Quantity :</div>
        <input
          class="bg-white rounded-md outline-0 w-full px-2 py-2 border border-gray-100"
          type="number"
          bind:value={record.quantity}
        />
        <div class="mb-1">Description :</div>
        <input
          class="bg-white rounded-md outline-0 w-full px-2 py-2 border border-gray-100"
          type="text"
          placeholder="Optional"
          bind:value={record.description}
        />
      </div>
      <div class="mt-1 flex gap-2 text-xs">
        <button
          class="px-4 py-2 bg-green-400 text-white rounded-md duration-150 hover:scale-[1.03]"
          on:click={record.create}>Create</button
        >
        <button
          class="px-4 py-2 bg-gray-50 border text-gray-500 rounded-md duration-150 hover:bg-gray-100"
          on:click={record.cancel}>Cancel</button
        >
      </div>
    </Modal>
  {/if}
  {#if mode !== ''}
    <Modal>
      {#if mode === 'CREATE'}
        <div class="text-xs border-b border-gray-200 pb-1 border-dashed">
          Creating an item for
          <span class="bg-gray-100 rounded px-2 py-1">
            {createCategoryObject.name}
          </span>
        </div>
      {/if}
      {#each fields as field}
        {#if field.type === 'NUMBER' || field.type === 'STRING'}
          <div class="text-xs w-full">
            <div class="flex">
              <ion-icon
                class="relative top-0.5 bg-gray-100 mr-1 rounded-full"
                name={typeIconMap[field.type]}
              />
              <div class="text-[11px] mb-1 font-medium" title={field.name}>
                {field.label} :
              </div>
              {#if field.default.indexOf('{') !== -1}
                <div
                  class="ml-auto relative top-0.5 text-xs"
                  title={field.default}
                >
                  <ion-icon name="color-wand-outline" />
                </div>
              {/if}
            </div>
            <input
              class="bg-white rounded-md outline-0 w-full px-2 py-2 border border-gray-100"
              type="text"
              bind:value={fieldsBuffer[field.name]}
              placeholder={field.required ? 'Required' : 'Optional'}
            />
          </div>
        {:else if field.type === 'LIST'}
          <div class="text-xs w-full">
            <div class="flex">
              <ion-icon
                class="relative top-0.5 bg-gray-100 mr-1 rounded-full"
                name={typeIconMap[field.type]}
              />
              <div class="text-[11px] mb-1 font-medium" title={field.name}>
                {field.label} :
              </div>
              {#if field.default.indexOf('{') !== -1}
                <div
                  class="ml-auto relative top-0.5 text-xs"
                  title={field.default}
                >
                  <ion-icon name="color-wand-outline" />
                </div>
              {/if}
            </div>
            <select
              class="bg-white rounded-md outline-0 w-full px-2 py-2 border border-gray-100"
              bind:value={fieldsBuffer[field.name]}
            >
              {#each field.properties.list.split(',') as value}
                <option {value}>{value}</option>
              {/each}
            </select>
          </div>
        {:else if field.type === 'BOOLEAN'}
          {@const uniqueId = Math.random()
            .toString(36)
            .replace(/[^a-z]+/g, '')
            .substr(2, 10)}
          <div class="text-xs w-full">
            <div class="flex">
              <ion-icon
                class="relative top-0.5 bg-gray-100 mr-1 rounded-full"
                name={typeIconMap[field.type]}
              />
              <div class="text-[11px] mb-1 font-medium" title={field.name}>
                {field.label} :
              </div>
              {#if field.default.indexOf('{') !== -1}
                <div
                  class="ml-auto relative top-0.5 text-xs"
                  title={field.default}
                >
                  <ion-icon name="color-wand-outline" />
                </div>
              {/if}
            </div>
            <div class="flex items-center">
              <input
                id={uniqueId}
                type="checkbox"
                bind:checked={fieldsBuffer[field.name]}
                class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-300 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for={uniqueId}
                class="ml-2 text-xs font-medium text-gray-900">Toggle</label
              >
            </div>
          </div>
        {/if}
      {/each}
      <div class="mt-1 flex gap-2 text-xs">
        {#if mode === 'CREATE'}
          <button
            class="px-4 py-2 bg-green-400 text-white rounded-md duration-150 hover:scale-[1.03]"
            on:click={action.create}>Create</button
          >
        {:else}
          <button
            class="px-4 py-2 bg-blue-400 text-white rounded-md duration-150 hover:scale-[1.03]"
            on:click={action.edit}>Edit</button
          >
          <button
            class="px-4 py-2 bg-red-400 text-white rounded-md duration-150 hover:scale-[1.03]"
            on:click={action.delete}>Delete</button
          >
        {/if}
        <button
          class="px-4 py-2 bg-gray-50 border text-gray-500 rounded-md duration-150 hover:bg-gray-100"
          on:click={action.cancel}>Cancel</button
        >
      </div>
    </Modal>
  {/if}
</div>
