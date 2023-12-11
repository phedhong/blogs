<!-- components/MoreActions.svelte -->
<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	const dispatch = createEventDispatcher()
	import { add, clear } from './stores.ts'

	import type { TodoType } from './types.ts'

	export let todos: TodoType[]

	let status = true

	const selectAll = () => {
		dispatch('selectAll', status)
		status = !status
	}

	const removeCompleted = () => dispatch('removeCompleted')

	$: filteredTodos = todos.filter((t) => t.status).length
</script>

<button disabled={todos.length === 0} on:click={selectAll}
	>{status ? 'Check' : 'Uncheck'} all</button
>
<button disabled={filteredTodos === 0} on:click={removeCompleted}>Remove Completed Todos</button>
<button on:click={clear}>Clear completed</button>
