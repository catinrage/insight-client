<script>
  import { fade } from 'svelte/transition';

  import {
    client,
    everything,
  } from '../../../core/providers/apiClientGenerator';

  import categoryDialog from './category';

  let location = 1;
  let categories;

  $: {
    if (location === 1) {
      categories = client.chain.query.GetStorageCategory({ id: 1 }).get({ children: { ...everything, children: { id: true } }, parent: { id: true } })
    } else {
      categories = client.chain.query.GetStorageCategory({ id: Number(location) }).get({ children: { ...everything, children: { id: true } }, parent: { id: true } })
    }
  }

  async function back() {
    const result = await categories;
    location = Number(result?.parent?.id) || 1;
  }

  function select(category) {
    if ($categoryDialog.final === !category.children.length || $categoryDialog.all) {
      categoryDialog.update((current) => {
        return {
          ...current,
          showing: false,
          choice: category.id,
        };
      });
    }
  }

  function cancel() {
    categoryDialog.update((current) => {
      return {
        ...current,
        showing: false,
        choice: '-',
      };
    });
  }
</script>

<div
  class="z-[49] fixed left-0 top-0 w-full h-full bg-[#000b]"
  transition:fade={{ duration: 100 }}
>
  <div
    class="absolute w-[25rem] p-4 text-xs top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-50 rounded-sm"
  >
    <b class="text-sm"
      >Select a category ({$categoryDialog.final ? 'Final' : 'Non-Final'}) :</b
    >
    <ul class="mt-3 h-[300px] overflow-y-auto">
      <li
        class="bg-gray-100 border-b border-gray-200 p-2 font-medium"
        class:text-gray-400={location === 1}
        class:cursor-pointer={location !== 1}
        class:hover:bg-gray-200={location !== 1}
        on:click={back}
      >
        <ion-icon class="mr-1" name="caret-back-outline" />
        <span>Back</span>
        {#if (!$categoryDialog.final || $categoryDialog.all) && location === 1}
          <button
            class="bg-theme text-white text-[10px] border-0 rounded-md px-2 float-right opacity-60 hover:opacity-100"
            on:click|stopPropagation={() => {
              select({ children: [1], id: 1 });
            }}>Select Root</button
          >
        {/if}
      </li>
      {#await categories then response}
        {@const content = response.children || response}
        {@const finals = content.filter(
          (category) => !category.children.length
        )}
        {@const non_finals = content.filter(
          (category) => category.children.length
        )}
        {#each non_finals as non_final}
          <li
            class="bg-gray-100 rounded-sm p-2 border-b cursor-pointer font-medium hover:bg-gray-200"
            on:click={() => (location = non_final.id)}
          >
            <ion-icon class="mr-1" name="folder-outline" />
            <span>{non_final.name}</span>
            {#if !$categoryDialog.final || $categoryDialog.all}
              <button
                class="bg-theme text-white text-[10px] border-0 rounded-md px-2 float-right opacity-60 hover:opacity-100"
                on:click|stopPropagation={() => {
                  select(non_final);
                }}>Select</button
              >
            {/if}
          </li>
        {/each}
        {#each finals as final}
          <li
            class="bg-gray-100 rounded-sm p-2 border-b cursor-pointer font-medium hover:bg-gray-200"
            on:click={() => {
              select(final);
            }}
          >
            <ion-icon class="mr-1" name="cube-outline" />
            <span>{final.name}</span>
          </li>
        {/each}
      {/await}
    </ul>
    <button
      class="bg-gray-200 border-0 rounded-md py-3 px-5 mt-2 float-right hover:bg-gray-300"
      on:click={cancel}>Cancel</button
    >
  </div>
</div>
