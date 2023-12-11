<script>
	import RowSlot from '@components/forms/_slots/RowSlot.svelte'
	import { remove, add, update, clear, mark } from './stores.ts'
	import Todo from './Todo.svelte'

	export let store
	export let status
	$: totalTodos = store.length
	$: completedTodos = store.filter((todo) => todo.status === status).length
</script>

<RowSlot>
	<svelte:fragment slot="phd">
		{completedTodos} out of {totalTodos} items {JSON.stringify(status)}
	</svelte:fragment>
	<svelte:fragment>
		<div class="p-4">
			<ul>
				{#each store.filter((todo) => todo.status === status) as todo (todo.id)}
					<li class:status>
						<Todo {todo} />
					</li>
				{/each}
			</ul>
		</div>
	</svelte:fragment>
	<svelte:fragment slot="pft">Footer</svelte:fragment>
</RowSlot>
