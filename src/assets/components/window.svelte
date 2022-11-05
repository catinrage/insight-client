<svelte:options accessors />

<script>
  import { fly } from 'svelte/transition';
  import { linear } from 'svelte/easing';

  import { moveable } from '../../assets/actions/moveable';

  export let title, icon;
  export let width, height;
  export let menu, view, kill;

  export let setTitle = (newTitle) => {
    title = newTitle;
  };
</script>

<div
  class="window absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 duration-0 bg-white overflow-hidden rounded-md shadow-md"
  style="width: {width};height: calc({height} + 1.75rem);"
  transition:fly={{
    delay: 0,
    duration: 100,
    x: 0,
    y: -30,
    opacity: 0.5,
    easing: linear,
  }}
  use:moveable
>
  <div
    class="relative w-full h-7 text-xs bg-gray-100 font-medium duration-0 text-gray-700 active:cursor-move box-border"
    handle
  >
    <div class="absolute left-2 top-1">
      <ion-icon class="relative top-0.5 mr-1 text-sm" name={icon} />
      <pre class="relative inline">{title}</pre>
    </div>
    <div class="absolute right-2 bottom-1">
      <ion-icon
        class="text-yellow-400 hover:cursor-pointer hover:text-yellow-500"
        name="ellipse"
      />
      <ion-icon
        class="text-red-400 ml-px hover:cursor-pointer hover:text-red-500"
        name="ellipse"
        on:click={kill}
      />
    </div>
  </div>
  <div class="flex flex-row h-[calc(100%-1.75rem)]">
    <div class="flex flex-row relative translate-x-0 w-full">
      {#if menu}
        <div
          class="w-[14rem] h-full border-r border-r-gray-100 bg-gray-50 flex flex-col gap-1 py-6 text-left px-6 text-xs"
        >
          {#each menu.items as item}
            <div>
              <div
                on:click|stopPropagation={() => {
                  item.onClick();
                  item = item;
                }}
                class:active={item.active ||
                  (item.subItems.some((subItem) => subItem.active) &&
                    !item.open)}
                class="relative px-4 py-1.5 cursor-pointer rounded-[.3rem] text-[12px] text-gray-600 hover:bg-gray-100"
              >
                <ion-icon class="relative top-0.5 mr-1" name={item.icon} />
                <span>{item.title}</span>
                {#if item.subItems.length}
                  <ion-icon
                    class:rotate-90={item.open}
                    class="absolute right-1 top-[.5rem] duration-150 text-gray-400"
                    name="chevron-forward-outline"
                  />
                {/if}
              </div>
              <div
                class:show={item.subItems && item.open}
                class="relative left-6 h-0 overflow-hidden text-[.7rem] duration-150 flex flex-col gap-1"
              >
                {#each item.subItems as subItem}
                  <div
                    on:click|stopPropagation={() => {
                      subItem.onClick();
                      subItem = subItem;
                    }}
                    class:active={subItem.active}
                    class="px-2 py-0.5 cursor-pointer rounded-[.3rem] text-[11px] text-gray-600 hover:bg-gray-100 w-[calc(100%-24px)]"
                  >
                    <ion-icon
                      class="relative top-0.5 mr-1"
                      name={subItem.icon}
                    />
                    <span>{subItem.title}</span>
                  </div>
                {/each}
              </div>
            </div>
          {/each}
        </div>
      {/if}
      <div
        class="relative translate-x-0 w-[calc(100%-14rem)] overflow-y-auto h-full"
      >
        <svelte:component this={$view} />
      </div>
    </div>
  </div>
</div>

<style>
  .active {
    color: black;
    --tw-bg-opacity: 1;
    background-color: rgb(243 244 246 / var(--tw-bg-opacity));
  }
  .show {
    margin-block: 0.3rem;
    height: auto;
  }
</style>
