<script>
  
  import {  alertStores } from './stores.ts'
  const divClass = "fixed top-20 right-0 text-sm rounded-lg "

</script>
  
<div class={divClass} >
  
      <ul>
        {#each $alertStores as message }
          <li>{JSON.stringify(message, null, 2)}</li>
        {/each}
      </ul>
</div>


