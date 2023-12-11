<script lang="ts">
	import InputField from '@components/svelte/input/InputField.svelte'

	import { add } from './stores.ts'
</script>

<input placeholder="+ Todo" on:keydown={(event) => event.key === 'Enter' && add(event.target)} />
