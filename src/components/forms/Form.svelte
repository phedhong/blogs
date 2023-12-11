<script lang="ts">
	import ColSlot from '@components/forms/_slots/ColSlot.svelte'

	let responseMessage

	export let fields = {
		title: '(Title)',
		description: '(Description)',
		draft: '(Complete)'
	}

	let todos = Object.entries(fields)

	async function handleSubmit() {
		const formData = Object.fromEntries(todos)

		// const response = await fetch("/api/feedback", {
		//   method: "POST",
		//   body: formData,
		// });
		// const data = await response.json();
		responseMessage = JSON.stringify(formData, null, 2)
	}
</script>

<form on:submit|preventDefault={handleSubmit} class="h-full grid grid-rows-[1fr_auto]">
	<div>
		{#each todos as todo, i}
			<ColSlot>
				<svelte:fragment slot="plt">{todo[0]}</svelte:fragment>
				<svelte:fragment><input type="text" bind:value={todos[i][1]} /></svelte:fragment>
			</ColSlot>
		{/each}
	</div>
	<div>
		<button>Send</button>

		{#if responseMessage}
			<p>{responseMessage}</p>
		{/if}
	</div>
</form>
