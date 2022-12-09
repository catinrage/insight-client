<script>
  
  import notifications from './assets/dialogs/notification/notification';
  import Notification from './assets/dialogs/notification/notification.svelte';

  import prompt from './assets/dialogs/prompt/prompt';
  import Prompt from './assets/dialogs/prompt/prompt.svelte';

  import categoryDialog from './assets/dialogs/category/category';
  import CategoryDialog from './assets/dialogs/category/category.svelte';

  import system from './core/providers/widgetManager';
  system.widgets.storage.run();

  const { runningWidgets } = system;
</script>

<div class="flex items-center justify-center h-full text-gray-700">
  {#each $runningWidgets as widget}
    <svelte:component
      this={widget.window.component}
      {...widget.window.properties}
      view={widget.window.view}
      menu={widget.window.menu}
      loaded={widget.window.loaded}
      loading={widget.window.loading}
      kill={widget.kill(widget)}
      window={widget.window}
      data={widget.window.data}
      bind:setTitle={widget.window.properties.setTitle}
    />
  {/each}
  <div class="fixed left-3 top-3 w-[27rem] z-20">
    {#each $notifications as notification (notification)}
      <Notification {...notification} />
    {/each}
  </div>
  {#if $prompt.showing}
    <Prompt />
  {/if}
  {#if $categoryDialog.showing}
    <CategoryDialog />
  {/if}
</div>
