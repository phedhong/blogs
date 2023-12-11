import { writable } from 'svelte/store'
import { localStorageStore } from '@scripts/LocalStorageStore'
import type { tTodo } from './types.ts'

export const todosinit: tTodo[] = [
	{ id: 1, status: true, title: 'todo', description: 'write some docs' },
	{
		id: 2,
		status: true,
		title: 'other',
		description: 'start writing JSConf talk'
	},
	{ id: 3, status: false, title: 'test', description: 'buy some milk' }
]
export const todoStore = localStorageStore<tTodo[]>('todoStore', todosinit)

export const add = (input: any) => {
	todoStore.update((todos) => {
		const newId = todos.length > 0 ? Math.max(...todos.map((t) => t.id)) + 1 : 1
		return [
			...todos,
			{
				id: newId,
				status: false,
				title: input.value || '',
				description: input.description || input.value
			}
		]
	})
	input.value = ''
}

export const remove = (todo: tTodo) => {
	todoStore.update((todos) => {
		todos = todos.filter((t) => t.id !== todo.id)
		return todos
	})
}

export const update = (todo: tTodo) => {
	todoStore.update((todos) => {
		const idx = todos.findIndex((t) => t.id === todo.id)
		todos[idx] = { ...todos[idx], ...todo }
		return todos
	})
}

export const mark = (todo: tTodo, status: boolean) => {
	todoStore.update((todos) => {
		const idx = todos.findIndex((t) => t.id === todo.id)
		todos[idx] = { ...todos[idx], status }

		return todos
	})
}
// mark: (todo: tTodo) => update((todos) => {return todos}),
// update: (todo: tTodo) => update((todos) => {
//   const idx = todos.findIndex(t => t.id === todo.id)
//   todos[idx] = { ...todos[idx], ...todo }

//   return todos
// }),

export const clear = () => {
	todoStore.update((todos) => {
		return todos.filter((t) => !t.status)
	})
}

export const alertStores = writable<string[]>([])

const durations = 3000

export const alert = (message: any) => {
	alertStores.update((alerts) => [message, ...alerts])
	setTimeout(removeAlert, durations)
}

const removeAlert = () => {
	alertStores.update((alerts) => {
		return [...alerts.slice(0, alerts.length - 1)]
	})
}
