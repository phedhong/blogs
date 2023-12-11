<script lang="ts">
	import GridAreaSlot from './_slots/GridAreaSlot.svelte'
	import TodoList from './TodoList.svelte'
	import NewTodo from './NewTodo.svelte'
	import MoreActions from './MoreActions.svelte'
	import FilterButton from './FilterButton.svelte'
	import FilterAction from './FilterAction.svelte'
	import Form from './Form.svelte'
	import { Filter, type tTodo } from './types.ts'
	import { add, clear } from './stores.ts'

	export let todos: tTodo[] = []
	let selectedId

	let statuses = [false, true]
	let filter: Filter = Filter.ALL

	const checkAllTodos = (status: boolean) => {
		todos = todos.map((t) => ({ ...t, status }))
	}
	const removeCompletedTodos = () => {
		todos = todos.filter((t) => !t.status)
	}

	$: selectedId = 0
	$: selectedTodo = todos[selectedId]
</script>

<GridAreaSlot>
	<sevelte:fragment>
		<div class="grid grid-rows-[1fr_1fr] h-full">
			<div class="grid grid-cols-[1fr_1fr] w-full">
				<div>
					{JSON.stringify(selectedTodo, 2, null)}
				</div>
				<Form bind:fields={selectedTodo} />
			</div>
			<div class="grid grid-cols-[1fr_1fr] w-full">
				{#each statuses as status}
					<TodoList store={todos} {status} />
				{/each}
			</div>
		</div>
	</sevelte:fragment>

	<sevelte:fragment slot="p-hd"> Todos </sevelte:fragment>
	<sevelte:fragment slot="p-sd"
		><FilterAction bind:selectedId bind:items={todos} />
	</sevelte:fragment>
	<sevelte:fragment slot="p-ft"
		><MoreActions
			{todos}
			on:checkAll={(e) => checkAllTodos(e.detail)}
			on:removeCompleted={removeCompletedTodos}
		/>
	</sevelte:fragment>
	<sevelte:fragment slot="p-ad"> </sevelte:fragment>
</GridAreaSlot>

<!-- 
<script lang='ts'>

  $: newTodoId = todos.length > 0 ? Math.max(...todos.map(t => t.id)) + 1 : 1

  function addTodo(name: string) {
    todos = [...todos, { id: newTodoId, name, completed: false }]
    $alert = `Todo '${name}' has been added`
  }

  function removeTodo(todo: tTodo) {
    todos = todos.filter(t => t.id !== todo.id)
    todosStatus.focus()             // give focus to status heading
    $alert = `Todo '${todo.name}' has been deleted`
  }

  function updateTodo(todo: tTodo) {
    const i = todos.findIndex(t => t.id === todo.id)
    if (todos[i].name !== todo.name)            $alert = `todo '${todos[i].name}' has been renamed to '${todo.name}'`
    if (todos[i].completed !== todo.completed)  $alert = `todo '${todos[i].name}' marked as ${todo.completed ? 'completed' : 'active'}`
    todos[i] = { ...todos[i], ...todo }
  }

  let filter: Filter = Filter.ALL
  const filterTodos = (filter: Filter, todos: tTodo[]) => 
    filter === Filter.ACTIVE ? todos.filter(t => !t.completed) :
    filter === Filter.COMPLETED ? todos.filter(t => t.completed) : 
    todos

  $: {
    if (filter === Filter.ALL)               $alert = 'Browsing all todos'
    else if (filter === Filter.ACTIVE)       $alert = 'Browsing active todos'
    else if (filter === Filter.COMPLETED)    $alert = 'Browsing completed todos'
  }

</script>

<div class="todoapp stack-large">

  <NewTodo autofocus on:addTodo={e => addTodo(e.detail)} />

  <FilterButton bind:filter />

  <TodosStatus bind:this={todosStatus} {todos} />

  <ul >
  {#each filterTodos(filter, todos) as todo (todo.id)}
    <li class="todo">
      <Todo {todo}
        on:update={e => updateTodo(e.detail)}
        on:remove={e => removeTodo(e.detail)}
      />
    </li>
  {:else}
    <li>Nothing to do here!</li>
  {/each}
  </ul>

  <hr />



</div> -->
