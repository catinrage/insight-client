<script>
  import pluralize from 'pluralize';

  import outclick from '../../../assets/actions/outclick';

  import notifications from '../../../assets/dialogs/notification/notification';
  import prompt from '../../../assets/dialogs/prompt/prompt';

  import Modal from '../../../assets/components/modal.svelte';
  import Toolbar from '../../../assets/components/toolbar.svelte';

  import {
    client,
    everything,
  } from '../../../core/providers/apiClientGenerator';

  function arraymove(arr, fromIndex, toIndex) {
    var element = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(Math.max(Math.min(arr.length, toIndex), 0), 0, element);
  } 

  const typeIconMap = {
    NUMBER: 'information-outline',
    STRING: 'text-outline',
    BOOLEAN: 'toggle-outline',
    LIST: 'list-outline',
  };

  let form = {
    name: '',
    fields: [],
  };
  let formFields = [];
  let formInheritedFields = [];

  let categories = [];
  let location = [{id: 1, name: 'Root'}];

  const modal = {
    create: async () => {
      mode = 'CREATE';
      const parentId = location.at(-1).id;
      const category = await client.chain.query.GetStorageCategory({id: parentId}).get({ fields: { id: true, name: true, label: true, type:true }, inheritedFields: { id: true, name: true, label: true, type: true } });
      formInheritedFields = [...category.inheritedFields, ...category.fields];
    },
    edit: async (id) => {
      mode = 'EDIT';
      targetId = Number(id);
      const category = await client.chain.query.GetStorageCategory({id: targetId}).get({...everything, fields: { id: true, name: true, label: true, type:true }, inheritedFields: { id: true, name: true, label: true, type: true } });
      form.name = category.name;
      form.fields = category.fields.map(field => Number(field.id));
      formFields = category.fields;
      formInheritedFields = category.inheritedFields;
    },
  };

  let mode = '';
  let targetId;

  const action = {
    create: async () => {
      const parentId = location.at(-1).id;
      if (form.name) {
        const category = await client.chain.mutation.CreateStorageCategory({input: {name: form.name, fields: form.fields, parentId}}).get({on_Error: {...everything}, on_StorageCategory: {...everything}})
        if (category.__typename === 'StorageCategory') {
          await loadCategoriesFromDatabase();
          notifications.success('Category created successfully !');
          action.cancel();
        } else {
          if (category.code === 'P2002') {
            notifications.error('A category with exact same name already exists in this directory !');
          } else {
            notifications.error('An error occured while creating category !');
          }
        }
      } else {
        notifications.error(`Name is required !`);
      }
    },
    edit: async () => {
      if (!form.name) {
        notifications.error(`Name is required !`);
        return;
      };
      const confirmation = await prompt.show({
        message: 'Are you sure you want yo edit this category ?',
        options: ['yes', 'cancel'],
        icon: 'create-outline',
      });
      if (confirmation === 'yes') {
        const parentId = location.at(-1).id;
        delete form.id;
        delete form.createdAt;
        delete form.updatedAt;
        delete form.__typename;
        const category = await client.chain.mutation.UpdateStorageCategory({id: targetId, input: {name: form.name, fields: form.fields, parentId}}).get({on_Error: {...everything}, on_StorageCategory: {...everything}});
        if (category.__typename === 'StorageCategory') {
          await loadCategoriesFromDatabase();
          notifications.success('Category updated successfully !');
          action.cancel();
        } else {
          if (category.code === 'P2002') {
            notifications.error('A category with exact same name already exists in this directory !');
          } else {
            notifications.error('An error occured while updating category !');
          }
        }
      }
    },
    delete: async () => {
      let confirmation = await prompt.show({
        message: 'Are you sure you want to delete this category ?',
        options: ['yes', 'cancel'],
        icon: 'trash-bin',
        safe: {
          word: 'confirm',
          placeholder: `Type 'confirm'`,
          cancel: 1,
        },
      });
      if (confirmation === 'yes') {
        const category = await client.chain.mutation.DeleteStorageCategory({id: targetId}).get({on_Error: {...everything}, on_StorageCategory: {...everything}});
        if (category.__typename === 'StorageCategory') {
          await loadCategoriesFromDatabase();
          notifications.success('Category deleted successfully !');
          action.cancel();
        } else {
          notifications.error('An error occured while deleting category !')
        }
      }
    },
    cancel: () => {
      mode = '';
      form = {
        name: '',
        fields: [],
      };
      formFields = [];
      formInheritedFields = [];
    },
  };

  async function loadCategoriesFromDatabase() {
    categories = (await client.chain.query.GetStorageCategory({id: location.at(-1).id}).get({
      id: true,
      name: true,
      children: {
        id: true,
        name: true,
        items: {
          id: true,
        },
        fields: {
          name: true,
        },
        children: {
          id: true
        },
        createdAt: true,
        updatedAt: true,
      },
    })).children.map(child => {
      return {...child, final: child.children.length ? 'Category' : 'Final'}
    });
  }

  // dont remove location ($ reactivity)
  $: loadCategoriesFromDatabase(location)

  let categoriesResolved = [];

  let fieldsSearchResultsPromise = new Promise((resolve) => resolve([]));

  $: {
    fieldsSearchInput;
    fieldsSearchResultsPromise = client.chain.query.SearchStorageCategoryFormFieldsByName({keyword: fieldsSearchInput}).get({id: true, type: true, name: true});
  }

  let fieldsSearchInput = '';
  let fieldsSearchInputFocused = false;

  function addField(field) {
    if (![...formFields, ...formInheritedFields].find(formField => formField.id === field.id)) {
      formFields.push(field)
      form.fields.push(Number(field.id))
      formFields = formFields;
      fieldsSearchInput = ''
    }
  }

  function deleteField(field) {
    formFields = formFields.filter(formField => field.id !== formField.id);
    form.fields = form.fields.filter(fieldId => fieldId !== Number(field.id));
    fieldsSearchInput = ''
  }
</script>

<div class="h-full">
  <div class="flex gap-2 p-2 pb-0 flex-wrap text-xs">
    <div class="flex gap-2 text-xs">
      {#each location as loc}
        <div
          class="flex gap-1 px-2 py-1 bg-gray-50 rounded-md cursor-pointer hover:bg-gray-100"
          on:click={() => {
            location = location.slice(
              0,
              location.map((l) => l.id).indexOf(loc.id) + 1
            );
          }}
        >
          <span>{loc.name}</span>
          <ion-icon class="relative top-0.5" name="chevron-forward-outline" />
        </div>
      {/each}
    </div>
    <div
      class:cursor-pointer={location.length !== 1}
      class:hover:bg-gray-100={location.length !== 1}
      class:text-gray-400={location.length === 1}
      class="relative w-full h-fit p-2 bg-gray-50 rounded-md"
      on:click={() => {
        if (location.length === 1) return;
        location.pop();
        location = location;
      }}
    >
      <ion-icon class="relative top-0.5 mr-1" name="caret-back-outline" />
      <span>Back</span>
    </div>
  </div>
  <div
    class="flex content-start h-[calc(100%-104px)] text-xs overflow-auto flex-row flex-wrap gap-2 p-2"
  >
    {#each categoriesResolved as category}
      <div
        class="relative w-full h-fit p-2 bg-gray-50 rounded-md cursor-pointer hover:bg-gray-100"
        on:click={() => {
          location = [
            ...location,
            { id: Number(category.id), name: category.name },
          ];
        }}
      >
        <ion-icon
          class="relative top-0.5 mr-1"
          name={category.children.length
            ? 'folder-open-outline'
            : 'cube-outline'}
        />
        <span>{category.name}</span>
        <div class="absolute left-72 vertically-center flex gap-3">
          {#if category.form}
            <div
              class="flex px-2 rounded-full cursor-pointer border border-[#eee]"
            >
              <div class="flex text-xs gap-2">
                <ion-icon
                  class="relative top-0.5"
                  name="document-text-outline"
                />
                <span>{category.form.name}</span>
              </div>
            </div>
          {/if}
          {#if category.children.length}
            <div
              class="flex px-2 rounded-full cursor-pointer border border-[#eee]"
            >
              <div class="flex text-xs gap-2">
                <ion-icon class="relative top-0.5" name="folder-outline" />
                <span
                  >{pluralize(
                    'Sub-category',
                    category.children.length,
                    true
                  )}</span
                >
              </div>
            </div>
          {/if}
          {#if category.items.length}
            <div
              class="flex px-2 rounded-full cursor-pointer border border-[#eee]"
            >
              <div class="flex text-xs gap-2">
                <ion-icon
                  class="relative top-0.5"
                  name="file-tray-stacked-outline"
                />
                <span>{pluralize('Item', category.items.length, true)}</span>
              </div>
            </div>
          {/if}
        </div>
        <div
          class="vertically-center right-2 flex p-1 rounded-full cursor-pointer hover:bg-gray-200"
          title="open"
          on:click|stopPropagation={() => {
            modal.edit(category.id);
          }}
        >
          <ion-icon name="ellipsis-vertical-outline" />
        </div>
      </div>
    {/each}
  </div>

  <Toolbar
    bind:resolved={categoriesResolved}
    caption="category"
    data={categories}
    filter={{
      field: 'final',
      options: ['Category', 'Final'],
    }}
    sort={{
      default: {
        by: 'createdAt',
        order: 'ASC',
      },
      options: [
        {
          label: 'Last Created',
          field: 'createdAt',
        },
        {
          label: 'Last Updated',
          field: 'updatedAt',
        },
        {
          label: 'Name',
          field: 'name',
        },
        {
          label: 'Type',
          field: 'final',
        },
      ],
    }}
    search={{ field: 'name' }}
    newClick={modal.create}
  />
  {#if mode === 'EDIT' || mode === 'CREATE'}
    <Modal>
      <div class="text-xs w-full">
        <div class="text-[11px] mb-1 font-medium">Name :</div>
        <input
          class="bg-white rounded-md outline-0 w-full px-2 py-2 border border-gray-100"
          type="text"
          placeholder="Required"
          bind:value={form.name}
        />
      </div>
      <div class="text-[11px] -mb-2 font-medium">Fields :</div>
      <div class="text-xs f-full bg-white p-2 rounded-md">
        <div class="relative">
          <div class="mb-1 flex flex-col gap-1">
            {#each formInheritedFields as field}
              <div class="relative flex gap-2 py-1 px-2 rounded-md bg-gray-100">
                <ion-icon
                  class="relative top-0.5"
                  name={typeIconMap[field.type]}
                />
                <div>{field.name}</div>
                <div
                  class="absolute flex right-2 top-1/2 -translate-y-1/2 rounded-full"
                >
                  <ion-icon name="bookmark-outline" />
                </div>
              </div>
            {/each}
            {#each formFields as field, i}
              <div class="relative flex gap-2 py-1 px-2 rounded-md bg-gray-50">
                <ion-icon
                  class="relative top-0.5"
                  name={typeIconMap[field.type]}
                />
                <div>{field.name}</div>
                <div
                  class="absolute flex right-2 top-1/2 -translate-y-1/2 rounded-full cursor-pointer hover:bg-gray-200"
                  title="Delete"
                  on:click={() => {
                    deleteField(field);
                  }}
                >
                  <ion-icon name="close-outline" />
                </div>
                <div
                  class="absolute flex right-5 top-1/2 -translate-y-1/2 rounded-full cursor-pointer hover:bg-gray-200"
                  title="Delete"
                  on:click={() => {
                    arraymove(formFields, i, i + 1);
                    arraymove(form.fields, i, i + 1);
                    formFields = formFields;
                  }}
                >
                  <ion-icon name="chevron-down-outline" />
                </div>
                <div
                  class="absolute flex right-8 top-1/2 -translate-y-1/2 rounded-full cursor-pointer hover:bg-gray-200"
                  title="Delete"
                  on:click={() => {
                    arraymove(formFields, i, i - 1);
                    arraymove(form.fields, i, i - 1);
                    formFields = formFields;
                  }}
                >
                  <ion-icon name="chevron-up-outline" />
                </div>
              </div>
            {/each}
          </div>
          <input
            class:rounded-b-md={fieldsSearchInput === ''}
            class="w-full border border-gray-100 bg-white px-2 pt-1 text-xs rounded-t-md outline-0"
            placeholder="Enter Field Name"
            type="text"
            use:outclick
            bind:value={fieldsSearchInput}
            on:focus={() => {
              fieldsSearchInputFocused = true;
            }}
            on:outclick={() => {
              fieldsSearchInputFocused = false;
            }}
          />
          <div
            class:hidden={!fieldsSearchInputFocused}
            class="z-[2] absolute w-full top-[calc(100%-1px)] p-1 border bg-white border-gray-100 rounded-b-md"
          >
            {#await fieldsSearchResultsPromise then fieldsSearchResults}
              {#each fieldsSearchResults as fieldSearchResult}
                <div
                  class="flex gap-2 py-1 px-2 cursor-pointer rounded-md hover:bg-gray-50"
                  on:click={() => {
                    addField(fieldSearchResult);
                  }}
                >
                  <ion-icon
                    class="relative top-0.5"
                    name={typeIconMap[fieldSearchResult.type]}
                  />
                  <div>{fieldSearchResult.name}</div>
                </div>
              {/each}
            {/await}
          </div>
        </div>
      </div>
      <div class="absolute left-4 bottom-4 flex gap-2 text-xs">
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
