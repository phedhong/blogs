<script>
</script>

<div class="p-page">
	<div class="p-hd"><slot name="p-hd">(Header p-hd)</slot></div>
	<div class="p-sd"><slot name="p-sd">(Side p-sd)</slot></div>
	<div class="p-ct"><slot>(Content)</slot></div>
	<div class="p-ad"><slot name="p-ad">(Ad p-ad)</slot></div>
	<div class="p-ft"><slot name="p-ft">(Footer p-ft)</slot></div>
</div>

<style>
	.p-hd {
		grid-area: hd;
	}
	.p-sd {
		grid-area: sd;
	}
	.p-ad {
		grid-area: ad;
	}
	.p-ft {
		grid-area: ft;
	}
	.p-ct {
		grid-area: ct;
	}

	.p-page {
		display: grid;
		gap: 10px;
		margin: auto;
		min-height: 100%;
		grid-auto-rows: auto 1fr auto;
		grid-auto-columns: auto 1fr auto;
		grid-template-areas:
			'. hd hd'
			'sd ct ad'
			'. ft ad';
	}
</style>
