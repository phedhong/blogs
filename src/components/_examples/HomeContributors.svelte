<script lang="ts">
	export let contributors: any[]
</script>

<div class="space-y-10">
	<!-- Info -->
	<div class="space-y-4 text-center">
		<h2 class="h2">Built by Awesome People.</h2>
		<p>Here are a few of the people responsible for creating and maintaining Skeleton.</p>
	</div>
	<div class="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-4 items-center">
		<!-- Skeleton Labs -->
		<div class="card variant-soft-secondary overflow-hidden">
			<header
				class="variant-filled-secondary grid grid-cols-[1fr_auto_auto] gap-4 items-center p-4 md:p-8 md:py-8"
			>
				<a class="btn-icon variant-filled" href="mailto:admin@skeleton.dev">
					<i class="fa-solid fa-envelope" />
				</a>
				<a
					class="btn-icon variant-filled"
					href="https://skeletonlabs.co/"
					target="_blank"
					rel="noreferrer"
				>
					<i class="fa-solid fa-arrow-up-right-from-square" />
				</a>
			</header>
			<section class="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 md:p-10">
				<div class="flex flex-col items-center gap-2">
					<h3 class="h3">Chris Simmons</h3>
					<p class="!text-sm">Co-founder and core maintainer.</p>
				</div>
				<div class="flex flex-col items-center gap-2">
					<h3 class="h3">Trey Weir</h3>
					<p class="!text-sm">Co-founder and business relations.</p>
				</div>
			</section>
		</div>
		<!-- Contributors -->
		<div class="space-y-4 text-center lg:text-left">
			<div class="grid grid-cols-6 gap-4 max-w-[480px] mx-auto">
				{#each contributors as c}
					<a href={c.html_url} target="_blank" rel="noreferrer" title={c.login}> </a>
				{/each}
			</div>
		</div>
	</div>
</div>
