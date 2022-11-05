<script>
  import pluralize from 'pluralize';

  export let caption,
    data,
    filter = false,
    sort,
    search,
    newClick;

  const _filter = {};
  if (filter) {
    for (const option of filter.options) {
      _filter[option] = true;
    }
  }

  let _sort = sort.default;

  let searchKeyword = '';

  export let resolved;

  $: resolved = data
    .filter((item) => {
      if (searchKeyword !== '') {
        if (!item[search.field].toLowerCase().includes(searchKeyword.toLocaleLowerCase())) return false;
      }
      if (filter && !_filter[item[filter.field]]) return false;
      return true;
    })
    .sort((a, b) => {
      if (_sort.order === 'DESC') return a[_sort.by] > b[_sort.by] ? 1 : -1;
      return a[_sort.by] > b[_sort.by] ? -1 : 1;
    });
</script>

<div
  class="fixed border-t border-t-gray-100 text-sm bottom-0 left-0 w-full flex bg-gray-50"
>
  <div
    class="px-2 py-1 cursor-pointer text-xs duration-150 hover:bg-gray-100"
    on:click={newClick}
  >
    <ion-icon class="relative top-0.5 mr-0.5" name="add-outline" />
    <span>New</span>
  </div>
  {#if filter}
    <div
      class="relative px-2 py-1 cursor-pointer text-xs group duration-150 hover:bg-gray-100"
    >
      <ion-icon class="relative top-0.5 mr-0.5" name="funnel-outline" />
      <span>Filter</span>
      <div
        class="absolute w-full bottom-full left-0 hidden group-hover:flex flex-col text-[11px] bg-gray-50 rounded-t-md overflow-hidden"
      >
        {#each filter.options as option}
          <div
            class:text-gray-800={_filter[option]}
            class:text-gray-400={!_filter[option]}
            class="px-2 py-1 capitalize hover:bg-gray-100"
            on:click={() => {
              _filter[option] = !_filter[option];
            }}
          >
            {option.toLowerCase()}
          </div>
        {/each}
      </div>
    </div>
  {/if}
  <div
    class="relative px-2 py-1 cursor-pointer text-xs group duration-150 hover:bg-gray-100"
    on:click={() => {
      _sort.order = _sort.order === 'DESC' ? 'ASC' : 'DESC';
    }}
  >
    <ion-icon
      class="relative top-0.5 mr-0.5"
      name="arrow-{_sort.order === 'DESC' ? 'down' : 'up'}-outline"
    />
    <span>Sort By</span>
    <div
      class="absolute w-[150%] bottom-full left-0 hidden group-hover:flex flex-col text-[11px] bg-gray-50 rounded-t-md overflow-hidden"
    >
      {#each sort.options as option}
        <div
          class:text-gray-800={_sort.by === option.field}
          class:text-gray-400={_sort.by !== option.field}
          class="px-2 py-1 hover:bg-gray-100"
          on:click|stopPropagation={() => {
            _sort.by = option.field;
          }}
        >
          {option.label}
        </div>
      {/each}
    </div>
  </div>
  <div class="px-2 py-1 text-xs">
    <ion-icon class="relative top-0.5 mr-0.5" name="search-outline" />
    <input
      class="border-0 bg-white text-xs px-2 outline-none rounded-md"
      type="text"
      placeholder="Enter Keywords"
      bind:value={searchKeyword}
    />
  </div>
  <div class="absolute right-2 top-1 text-xs">
    {pluralize(caption, resolved.length, true)}
  </div>
</div>
