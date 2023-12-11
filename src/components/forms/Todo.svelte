<!-- components/Todo.svelte -->
<script lang="ts">
	import ColSlot from '@components/forms/_slots/ColSlot.svelte'

	import { createEventDispatcher } from 'svelte'
	const dispatch = createEventDispatcher()
	import { remove, add, update, clear, mark } from './stores.ts'

	import type { tTodo } from './types.ts'

	export let todo: tTodo
</script>

<ColSlot>
	<svelte:fragment slot="plt">
		<input
			type="checkbox"
			bind:checked={todo.status}
			on:change={(event) => update(todo)}
		/></svelte:fragment
	>

	<svelte:fragment>
		<input
			type="text"
			bind:value={todo.description}
			on:change={(event) => update(todo)}
		/></svelte:fragment
	>

	<svelte:fragment slot="prt"><button on:click={() => remove(todo)}> X </button></svelte:fragment>
</ColSlot>
