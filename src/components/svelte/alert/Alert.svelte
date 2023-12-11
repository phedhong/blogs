<script>
	import { alertStores, alert } from './stores.ts'
	export let messages
</script>

<div class="rounded-lg grid grid-rows-[auto_1fr_auto] gap-1">
	<div class="p-4">
		<button on:click={() => alert(messages)}>Alert </button>
	</div>
	<div class="p-4">
		<ul>
			{#each $alertStores as message}
				<li>{message}</li>
			{/each}
		</ul>
	</div>
	<div class="p-4">()</div>
</div>

<style>
	div {
		position: fixed;
		margin-right: 1.5rem;
		margin-left: 1.5rem;
		margin-top: 10rem;
		right: 0;
		align-items: center;
		z-index: 100;
		opacity: 95%;
	}
</style>
