<script>
  import notifications from '../../../assets/dialogs/notification/notification';
  import prompt from '../../../assets/dialogs/prompt/prompt';

  import Modal from '../../../assets/components/modal.svelte';
  import Toolbar from '../../../assets/components/toolbar.svelte';

  import {
    client,
    everything,
  } from '../../../core/providers/apiClientGenerator';

  export let window, loaded, data;

  let fields = [];

  async function loadFormFieldsFromDatabase() {
    fields = await client.chain.query
      .ListStorageCategoryFormFields({skip: 0, take: 1000, orderBy: 'updatedAt', orderType: 'desc'})
      .get({ ...everything });
    $loaded = true;
  }
  loadFormFieldsFromDatabase();

  let mode = '';
  let targetId;

  const typeIconMap = {
    NUMBER: 'information-outline',
    STRING: 'text-outline',
    BOOLEAN: 'toggle-outline',
    LIST: 'list-outline',
  };

  let form = {
    name: '',
    label: '',
    type: 'NUMBER',
    required: true,
    format: '',
    properties: {
      list: [],
    },
  };

  const modal = {
    create: () => {
      mode = 'CREATE';
    },
    edit: (id) => {
      mode = 'EDIT';
      targetId = Number(id);
      form = Object.assign(
        {},
        fields.find((field) => field.id === id)
      );
    },
  };

  const action = {
    create: async () => {
      if (form.name && form.label) {
        const field = await client.chain.mutation.CreateStorageCategoryFormField({input: form}).get({on_Error: {...everything}, on_StorageCategoryFormField: {...everything}})
        if (field.__typename === 'StorageCategoryFormField') {
          await loadFormFieldsFromDatabase();
          notifications.success('Field created successfully !');
          action.cancel();
        } else {
          if (field.code === 'P2002') {
            notifications.error('A field with exact same name already exists !');
          } else {
            notifications.error('An error occurred while creating field !');
          }        
        }
      } else {
        notifications.error(`Name & Label are required !`);
      }
    },
    edit: async () => {
      if (!form.name || !form.label) {
        notifications.error(`Name & Label are required !`);
        return;
      }
      const confirmation = await prompt.show({
        message: 'Are you sure you want yo edit this field ?',
        options: ['yes', 'cancel'],
        icon: 'create-outline',
      });
      if (confirmation === 'yes') {
        delete form.id;
        delete form.createdAt;
        delete form.updatedAt;
        delete form.__typename;
        const field = await client.chain.mutation.UpdateStorageCategoryFormField({id: targetId, input: form}).get({on_Error: {...everything}, on_StorageCategoryFormField: {...everything}});
        if (field.__typename === 'StorageCategoryFormField') {
          await loadFormFieldsFromDatabase();
          notifications.success('Field updated successfully !');
          action.cancel();
        } else {
          if (field.code === 'P2002') {
            notifications.error('A field with exact same name already exists !');
          } else {
            notifications.error('An error occurred while updating field !');
          }
        }
      }
    },
    delete: async () => {
      let confirmation = await prompt.show({
        message: 'Are you sure you want to delete this field ?',
        options: ['yes', 'cancel'],
        icon: 'trash-bin',
        safe: {
          word: 'confirm',
          placeholder: `Type 'confirm'`,
          cancel: 1,
        },
      });
      if (confirmation === 'yes') {
        const field = await client.chain.mutation.DeleteStorageCategoryFormField({id: targetId}).get({on_Error: {...everything}, on_StorageCategoryFormField: {...everything}});
        if (field.__typename === 'StorageCategoryFormField') {
          await loadFormFieldsFromDatabase();
          notifications.success('Field deleted successfully !');
          action.cancel();
        } else {
          if (field.code === 'P2003') {
            notifications.error('Can not delete this, some category is currently using this field !');
          } else {
            notifications.error('An error occurred while deleting field !')
          }
        }
      }
    },
    cancel: () => {
      mode = '';
      form = {
        name: '',
        label: '',
        type: 'NUMBER',
        required: true,
        format: '',
        properties: {
          list: [],
        },
      };
    },
  };

  let fieldsResolved = [];
</script>

<div class="h-full">
  <div
    class="flex content-start h-[calc(100%-24px)] overflow-auto flex-row flex-wrap gap-2 p-2"
  >
    {#each fieldsResolved as field}
      <div
        class="relative w-[calc(25%-0.375rem)] h-fit p-2 bg-gray-50 rounded-md"
      >
        <div class="flex">
          <div
            class="flex p-2 mr-3 bg-gray-100 rounded-full items-center justify-center capitalize"
            title={field.type}
          >
            <ion-icon class="text-xl" name={typeIconMap[field.type]} />
          </div>
          <div class="flex flex-col gap-1">
            <div class="text-gray-600 text-xs">{field.label}</div>
            <div class="text-gray-400 text-xs before:content-['']">
              {field.name}
            </div>
          </div>
          <div
            class="absolute right-3 top-1/2 -translate-y-1/2 flex p-2 rounded-full cursor-pointer hover:bg-gray-100"
            title="open"
            on:click={() => {
              modal.edit(field.id);
            }}
          >
            <ion-icon name="ellipsis-vertical-outline" />
          </div>
        </div>
      </div>
    {:else}
      <div class="w-full text-gray-400 text-sm mt-2 text-center">
        No Fields Exists (change filter setting or add one)
      </div>
    {/each}
  </div>
  <Toolbar
    bind:resolved={fieldsResolved}
    caption="field"
    data={fields}
    filter={{
      field: 'type',
      options: ['NUMBER', 'STRING', 'BOOLEAN', 'LIST'],
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
          label: 'Label',
          field: 'label',
        },
        {
          label: 'Type',
          field: 'type',
        },
      ],
    }}
    search={{ field: 'name' }}
    newClick={modal.create}
  />
  {#if mode === 'EDIT' || mode === 'CREATE'}
    <Modal>
      <div class="text-xs w-full">
        <div class="text-[11px] mb-1 font-medium" title="use a-z and _">
          Name :
        </div>
        <input
          class="bg-white rounded-md outline-0 w-full px-2 py-2 border border-gray-100"
          type="text"
          placeholder="Required (use a-z and _)"
          bind:value={form.name}
        />
      </div>
      <div class="text-xs w-full">
        <div class="text-[11px] mb-1 font-medium">Type :</div>
        <select
          class="bg-white p-2 border border-gray-100 font-normal text-xs outline-none rounded-md select-sm w-full max-w-xs"
          bind:value={form.type}
        >
          <option class="capitalize">NUMBER</option>
          <option class="capitalize">STRING</option>
          <option class="capitalize">BOOLEAN</option>
          <option class="capitalize">LIST</option>
        </select>
      </div>
      {#if form.type === 'LIST'}
        <div class="text-xs w-full">
          <div class="text-[11px] mb-1 font-medium">List Values :</div>
          <input
            class="bg-white rounded-md outline-0 w-full px-2 py-2 border border-gray-100"
            type="text"
            placeholder="Required"
            bind:value={form.properties.list}
          />
        </div>
      {/if}
      <div class="text-xs w-full">
        <div class="text-[11px] mb-1 font-medium">Label :</div>
        <input
          class="bg-white rounded-md outline-0 w-full px-2 py-2 border border-gray-100"
          type="text"
          placeholder="Required"
          bind:value={form.label}
        />
      </div>
      {#if form.type !== 'BOOLEAN'}
        <div class="text-xs w-full">
          <div class="text-[11px] mb-1 font-medium">Format :</div>
          <input
            class="bg-white rounded-md outline-0 w-full px-2 py-2 border border-gray-100"
            type="text"
            placeholder="Optional"
            bind:value={form.format}
          />
        </div>
      {/if}
      <div class="form-control w-full">
        <label class="label cursor-pointer">
          <span class="label-text text-xs">Required</span>
          <input
            type="checkbox"
            class="checkbox checkbox-sm"
            bind:checked={form.required}
          />
        </label>
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
