<script>
  
  import RowSlot from "@layouts/_slots/RowSlot.svelte"
  import {  alertStores, alert } from './stores.ts'
  export let message = '(Message)'
  const divClass = "fixed top-20 right-0 text-sm rounded-lg "

</script>
  
<div class={divClass} >
<RowSlot >
  <button on:click={() => alert(message)} slot="header" > Alerts : </button>
  
      <ul>

        {#each $alertStores as message }
          <li>{JSON.stringify(message, null, 2)}</li>
        {/each}

    </ul>
    </RowSlot>
</div>


