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

</script>

<div class="flex flex-col text-xs overflow-x-hidden">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full">
          <thead class="bg-white border-b">
            <tr>
              <th
                scope="col"
                class="text-sm font-medium text-gray-900 px-6 py-2 text-left"
              >
                #
              </th>
              <th
                scope="col"
                class="text-sm font-medium text-gray-900 px-6 py-2 text-left"
              >
                Item ID
              </th>
              <th
                scope="col"
                class="text-sm font-medium text-gray-900 px-6 py-2 text-left"
              >
                Quantity
              </th>
              <th
                scope="col"
                class="text-sm font-medium text-gray-900 px-6 py-2 text-left"
              >
                Description
              </th>
              <th
                scope="col"
                class="text-sm font-medium text-gray-900 px-6 py-2 text-left"
              >
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {#each records as record}
              <tr
                class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
              >
                <td
                  class="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900"
                  >{record.id}
                </td>
                <td
                  class="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap"
                >
                  {record.item.id}
                </td>
                <td
                  class="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap"
                >
                  <div
                    class:text-green-600={record.quantity > 0}
                    class:text-red-600={record.quantity < 0}
                    class=" px-3 rounded"
                  >
                    {record.quantity}
                  </div>
                </td>
                <td
                  class="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap"
                >
                  {record.description}
                </td>
                <td
                  class="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap"
                >
                  {timeConverter(+record.createdAt)}
                </td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
