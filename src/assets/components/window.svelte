<script>
  import { fly, fade } from 'svelte/transition';
  import { linear } from 'svelte/easing';

  import { moveable } from '../../assets/actions/moveable';

  export let window, data;
  export let title, icon;
  export let width, height;
  export let menu, view, kill, loading, loaded;

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
                    bind:this={subItem.element}
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
        {#if $loading}
          <div
            class="absolute left-0 top-0 w-full h-full bg-white z-[9]"
            transition:fade={{ duration: 300 }}
          >
            <svg class="spinner" viewBox="0 0 50 50">
              <circle
                class="path"
                cx="25"
                cy="25"
                r="20"
                fill="none"
                stroke-width="5"
              />
            </svg>
          </div>
        {/if}
        <svelte:component this={$view} {loaded} {window} {data} />
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
  .spinner {
    animation: rotate 2s linear infinite;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -25px 0 0 -25px;
    width: 50px;
    height: 50px;
  }

  .spinner .path {
    stroke: #eee;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
</style>
