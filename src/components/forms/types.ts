export enum Filter {
	ALL = 'all',
	ACTIVE = 'active',
	COMPLETED = 'completed'
}

export type TodoType = {
	id: number
	name: string
	completed: boolean
}

export type tTodo = {
	id: number
	title: string
	status: boolean
	description: string
}

export interface ITodo {
	id: number
	status: boolean
	title: string
	description: string
}
