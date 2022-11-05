<script>
  import { fly } from 'svelte/transition';

  import notifications from './notification';

  export let type = 'success';
  export let message = '';
  export let duration = 4000;
  export let id;
  export let icon = '';
  if (icon === '') {
    switch (type) {
      case 'success':
        icon = 'checkmark-circle';
        break;
      case 'error':
        icon = 'close-circle';
      default:
        icon = 'alert-circle';
    }
  }

  let hovered = false;

  let colorSchema = {
    'success': '#7387f9',
    'error': '#f2776e',
    'warning': '#f6bd62',
  };

  let timebar;

  let i = 100;
  const timer = setInterval(() => {
    if (timebar) {
      timebar.style.width = `${i}%`;
      if (!hovered)
        i--;
      if (i === -1) {
        notifications.delete(id);
        clearInterval(timer);
      }
    }
  }, duration / 100);
</script>

<div
  style="background-color: {colorSchema[type]};"
  class="relative w-full p-2 text-white rounded-md mb-2 overflow-hidden"
  transition:fly={{ x: -300, duration: 500 }}
  on:mouseenter={() => {
    hovered = true;
  }}
  on:mouseleave={() => {
    hovered = false;
  }}
>
  <ion-icon class="text-sm block float-left" name={icon} />
  <span class="ml-6 relative duration-0 text-xs block bottom-px">{message}</span
  >
  <div
    bind:this={timebar}
    class="absolute bottom-0 left-0 w-full h-1 bg-[#fff5]"
  />
</div>
