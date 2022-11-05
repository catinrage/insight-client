<script>
  import { fade } from 'svelte/transition';

  export let width = '22rem',
    height = '30rem';
</script>

<div
  class="fixed left-0 top-0 w-full h-full flex items-center justify-center bg-[#0005]"
  transition:fade={{ duration: 75 }}
>
  <div
    style="width: {width};height: {height}"
    class="relative bg-gray-50 rounded-md p-4 flex flex-col gap-2 overflow-auto"
  >
    <slot />
  </div>
</div>
