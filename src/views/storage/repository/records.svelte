<script>
  import notifications from '../../../assets/dialogs/notification/notification';
  import prompt from '../../../assets/dialogs/prompt/prompt';
  import categoryDialog from '../../../assets/dialogs/category/category';

  import {
    client,
    everything,
  } from '../../../core/providers/apiClientGenerator';

  export let window, loaded, data;

  let records = [];

  async function loadRecordsDatabase() {
    records = await client.chain.query
      .ListStorageItemRecords
      .get({ ...everything, item: { ...everything } });
    $loaded = true;
  }
  loadRecordsDatabase();

  function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
  }

  async function deleteRecord(id) {
    let confirmation = await prompt.show({
        message: 'Are you sure you want to delete this record ?',
        options: ['yes', 'cancel'],
        icon: 'trash-bin',
        safe: {
          word: 'confirm',
          placeholder: `Type 'confirm'`,
          cancel: 1,
        },
      });
      if (confirmation === 'yes') {
        const record = await client.chain.mutation.DeleteStorageItemRecord({id: Number(id)}).get({on_Error: {...everything}, on_StorageItemRecord: {...everything}});
        if (record.__typename === 'StorageItemRecord') {
          await loadRecordsDatabase();
          notifications.success('Record deleted successfully !');
        } else {
          notifications.error('An error occurred while deleting record !')
        }
      }
  }

</script>

<div class="p-2 text-xs">
  <div class="flex gap-2 font-semibold">
    <div class="bg-gray-100 p-1 px-3 rounded w-[calc((100%-2.5rem)/6*0.3)]">
      #
    </div>
    <div class="bg-gray-100 p-1 px-3 rounded w-[calc((100%-2.5rem)/6)]">
      Item ID
    </div>
    <div class="bg-gray-100 p-1 px-3 rounded w-[calc((100%-2.5rem)/6*0.5)]">
      Quantity
    </div>
    <div class="bg-gray-100 p-1 px-3 rounded w-[calc((100%-2.5rem)/6*2)] ">
      Description
    </div>
    <div class="bg-gray-100 p-1 px-3 rounded w-[calc((100%-2.5rem)/6*1.2)]">
      Date
    </div>
    <div class="bg-gray-100 p-1 px-3 rounded w-[calc((100%-2.5rem)/6)]">
      Delete
    </div>
  </div>
  <div class="flex flex-col gap-2 mt-2">
    {#each records as record}
      <div class="flex gap-2 bg-gray-50 rounded hover:bg-gray-100">
        <div class="p-1 px-3 rounded w-[calc((100%-2.5rem)/6*0.3)]">
          {record.id}
        </div>
        <div class="p-1 px-3 rounded w-[calc((100%-2.5rem)/6)]">
          <span>
            {record.item.id}
          </span>
          <span
            class="ml-1 bg-green-300 duration-50 cursor-pointer rounded text-white px-0.5 hover:bg-green-400"
            on:click={() => {
              window.load('Items/Explore', { itemId: record.item.id });
            }}
          >
            <ion-icon class="relative top-0.5" name="arrow-redo" />
            Show
          </span>
        </div>
        <div class="p-1 px-3 rounded w-[calc((100%-2.5rem)/6*0.5)]">
          {#if record.quantity > 0}
            <ion-icon
              class="relative top-[2px] text-blue-300"
              name="add-circle"
            />
          {:else}
            <ion-icon
              class="relative top-[2px] text-red-300"
              name="remove-circle"
            />
          {/if}
          <span>
            {Math.abs(record.quantity)}
          </span>
        </div>
        <div
          class="p-1 px-3 rounded w-[calc((100%-2.5rem)/6*2)] whitespace-nowrap overflow-hidden text-ellipsis"
          title={record.description}
        >
          {record.description}
        </div>
        <div class="p-1 px-3 rounded w-[calc((100%-2.5rem)/6*1.2)]">
          {timeConverter(+record.createdAt)}
        </div>
        <div class="p-1 px-3 rounded w-[calc((100%-2.5rem)/6)]">
          <span
            class="px-1 bg-red-300 text-white rounded duration-50 cursor-pointer hover:bg-red-400"
            on:click={() => {
              deleteRecord(record.id);
            }}
          >
            <ion-icon class="relative top-[2px]" name="trash-bin" />
          </span>
        </div>
      </div>
    {/each}
  </div>
</div>
