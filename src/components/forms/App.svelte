<!-- App.svelte -->
<script lang="ts">
	import Todos from './Todos.svelte'
	import { todoStore } from './stores.ts'
</script>

<Todos bind:todos={$todoStore} />
