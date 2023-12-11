<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	type CodeBlockEvent = {
		copy: never
	}
	const dispatch = createEventDispatcher<CodeBlockEvent>()

	import { storeHighlightJs } from './stores.js'
	import { clipboard } from './clipboard.js'

	export let language = 'plaintext'
	export let code = ''
	export let lineNumbers = false
	export let background = ''
	export let blur = ''
	export let text = ''
	export let color = ''
	export let rounded = 'rounded-container-token'
	export let shadow = 'shadow'
	export let button = ''
	export let buttonLabel = 'Copy'
	export let buttonCopied = '👍'

	// Base Classes
	const cBase = 'overflow-hidden shadow'
	const cHeader = 'uppercase flex justify-between items-center p-2 pl-4'
	const cPre = 'break-all p-4 pt-1'

	// Local
	let formatted = false
	let displayCode: string = code
	let copyState = false

	// Allow shorthand alias, but show full text in UI
	function languageFormatter(lang: string): string {
		if (lang === 'js') return 'javascript'
		if (lang === 'ts') return 'typescript'
		return lang
	}

	// Handle Copy Text
	function onCopyClick() {
		copyState = true
		setTimeout(() => {
			copyState = false
		}, 2000)
		dispatch('copy')
	}

	// Trigger syntax highlighting if highlight.js is available
	$: if ($storeHighlightJs !== undefined) {
		displayCode = $storeHighlightJs.highlight(code, { language }).value.trim()
		formatted = true
	}

	$: if (lineNumbers) {
		displayCode = displayCode.replace(/^/gm, () => {
			return '<span class="line"></span>\t'
		})
		formatted = true
	}

	// Reactive
	$: classesBase = `${cBase} ${background} ${blur} ${text} ${color} ${rounded} ${shadow} ${
		$$props.class ?? ''
	}`
</script>

{#if language && code}
	<div class=" {classesBase}">
		<header class=" {cHeader}">
			<span>{languageFormatter(language)}</span>
			<button class={button} on:click={onCopyClick} use:clipboard={code}>
				{!copyState ? buttonLabel : buttonCopied}
			</button>
		</header>
		<pre class={cPre}>
			<code class="language-{language} lineNumbers">
				{#if formatted}{@html displayCode}{:else}{code.trim()}{/if}</code
			></pre>
	</div>
{/if}

<style>
	code {
		background: var(--code-bg);
		font-family: var(--font-mono);
		font-size: 0.9em;
		padding: 0.15rem 0.3rem;
		border-radius: var(--border-radius);
	}
</style>
