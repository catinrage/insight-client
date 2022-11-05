<script>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';

  import prompt from './prompt';

  let field;
  let input = '';
  let placeholder = '';

  $: if ($prompt.safe) placeholder = $prompt.safe.placeholder;
  $: if ($prompt.input) placeholder = $prompt.input.placeholder;

  function select(option) {
    if ($prompt.input) {
      if (option === $prompt.options[$prompt.input.cancel]) {
        prompt.update((current) => ({
          ...current,
          choice: '-',
          showing: false,
        }));
        input = '';
      } else {
        if (input !== '') {
          prompt.update((current) => ({
            ...current,
            choice: input,
            showing: false,
          }));
          input = '';
        }
      }
      return;
    }
    if (
      !$prompt.safe ||
      ($prompt.safe &&
        input.toLowerCase() === $prompt.safe.word.toLowerCase()) ||
      option === $prompt.options[$prompt.safe.cancel]
    ) {
      prompt.update((current) => ({
        ...current,
        choice: option,
        showing: false,
      }));
      input = '';
    }
  }

  function enter(e) {
    if (e.keyCode === 13) select($prompt.options[0]);
  }

  onMount(() => {
    if (field) field.focus();
    document.addEventListener('keypress', enter);
    return () => {
      document.removeEventListener('keypress', enter);
    };
  });
</script>

<div
  class="z-50 fixed left-0 top-0 w-full h-full bg-[#000b]"
  transition:fade={{ duration: 100 }}
>
  <div
    class="absolute w-[40rem] p-8 text-sm top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-50 rounded-sm"
  >
    <ion-icon
      class="absolute right-12 top-1/2 -translate-y-1/2 text-6xl"
      name={$prompt.icon === '' ? 'finger-print' : $prompt.icon}
    />
    <div class="mb-4 capitalize">{$prompt.message}</div>
    {#if $prompt.safe || $prompt.input}
      {#if $prompt?.input?.sensitive}
        <input
          class="block mb-4 px-2 py-1 bg-white w-80 border-2 border-dashed rounded-sm outline-none"
          type="password"
          bind:this={field}
          bind:value={input}
          {placeholder}
        />
      {:else}
        <input
          class="block mb-4 px-2 py-1 bg-white w-80 border-2 border-dashed rounded-sm outline-none"
          type="text"
          bind:this={field}
          bind:value={input}
          {placeholder}
        />
      {/if}
    {/if}
    {#each $prompt.options as option}
      <button
        class="p-2 text-xs bg-gray-200 min-w-[4rem] rounded-md mr-2 capitalize hover:bg-gray-300"
        on:click|stopPropagation={() => {
          select(option);
        }}>{option}</button
      >
    {/each}
  </div>
</div>
