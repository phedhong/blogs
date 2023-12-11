<script lang="ts">
	export let enabled: boolean
	export let action: (value: boolean) => void
	export let label: string | undefined = undefined
	const performAction = (e: Event) => {
		action((<HTMLInputElement>e.target).checked)
	}
</script>

<input type="checkbox" checked={enabled} on:change={performAction} aria-label={label} />
