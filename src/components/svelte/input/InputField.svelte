<script lang="ts">
	export let value: string
	export let label: string

	import { setContext } from 'svelte'
	// Props (Item)
	export let padding: string = 'px-4 py-1'

	// Classes
	const cBase = 'relative mb-2.5'
	const cInput =
		'block py-1 pl-12 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
	const cLabel =
		'absolute text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto'
	// Reactive
	// display space-x only on row flex as it is not needed on column flex.
</script>

<div class={cBase}>
	<input type="text" bind:value class={cInput} placeholder=" " />
	<label for={value} class={cLabel}> {label}</label>
</div>
