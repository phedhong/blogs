<script>
	import { add } from './stores.ts'
	import Form from './Form.svelte'
	import NewTodo from './NewTodo.svelte'

	export let items
	export let selectedId

	let prefix = ''
	$: filteredItems = prefix
		? items.filter((item) => {
				const searchString = `${item.title}, ${item.description}`
				return searchString.toLowerCase().startsWith(prefix.toLowerCase())
			})
		: items
</script>

<div class="h-full grid grid-rows-[auto_1fr_auto] gap-1">
	<input placeholder="Filter " bind:value={prefix} />

	<select bind:value={selectedId} size={5}>
		{#each filteredItems.slice(0, 20) as todo, i}
			<option value={i}> {todo.title}</option>
		{/each}
	</select>

	<div><NewTodo /></div>
</div>
