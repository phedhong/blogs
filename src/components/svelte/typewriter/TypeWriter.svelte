<script>
	import { typewriter } from './transition.js'

	export let message = 'This is My Place'
</script>

<h1 in:typewriter>{message}</h1>
<p in:typewriter>The quick brown fox jumps over the lazy dog</p>
