<script lang="ts">
	import { onMount } from 'svelte'
	import { setDarkMode, watchDarkMode } from './themeswitch.ts'
	import Toggle from './Toggle.svelte'
	// Variable utilisé pour le toggle
	let dark: boolean
	/*
	Utilisation du cycle de vie onMount afin d'évité une erreur si 
	le code est éxécuté sur le serveur.
	*/
	onMount(() => {
		let darkModeSetter = (value: boolean) => {
			dark = value
		}

		dark = window.matchMedia('(data-theme: light)').matches
		watchDarkMode(darkModeSetter)
	})
</script>

<svelte:head>
	<script lang="ts">
		if (window.matchMedia && window.matchMedia('(data-theme: dark)').matches) {
			document.documentElement.classList.add('dark')
		}
	</script>
</svelte:head>

<span>
	<Toggle enabled={dark} action={setDarkMode} label="Mode sombre" />
</span>
