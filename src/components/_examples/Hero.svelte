<script lang="ts">
	export let title: string = 'title'
	export let description: string = 'description'
</script>

<div class="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-10 items-center">
	<!-- Info -->
	<div class="flex flex-col items-center xl:items-start text-center xl:text-left space-y-4">
		<h1 class="!text-3xl md:!text-5xl max-w-[600px]">{title}</h1>
		<p class="!text-xl max-w-[475px]">{description}</p>
		<div class="flex gap-4">
			<a href="#">
				Get Started<i class="fa-solid fa-arrow-right-long" />
			</a>
			<a href="#">Learn More</a>
		</div>
	</div>

	<!-- Components -->
	<div class="hidden md:inline-block w-full max-w-[650px] mx-auto mt-20">
		<!-- variant-ringed-error -->
		<div class="aspect-video relative">
			<!-- Avatar -->
			<div class="anim-float-avatar absolute z-[1] top-[32%] left-[40%]"></div>
			<!-- Progress Radial -->
			<div class="anim-float-progress anim-delay-200 absolute z-[1] top-[0%] left-[10%]">
				<div class="card variant-glass p-4">Widget</div>
			</div>
			<!-- Search Input -->
			<div class="anim-float-search anim-delay-200 absolute z-[1] top-[-12%] left-[35%]">
				<label for="demo-search">
					<span>Search</span>
					<input class="input" type="search" name="demo-search" placeholder="Search..." />
				</label>
			</div>

			<!-- Card -->
			<div class="anim-float-card absolute z-[1] top-[60%] left-[65%]">
				<a
					class="block card card-hover p-4 space-y-2"
					href="https://twitter.com/SkeletonUI"
					target="_blank"
					rel="noreferrer"
				>
					<div class="flex items-center gap-4">
						<div>
							<p class="font-bold">Skeleton</p>
							<small class="opacity-50">@SkeletonUI</small>
						</div>
					</div>
					<p class="whitespace-nowrap">UI toolkit for Svelte and Tailwind.</p>
					<div class="flex just gap-4">
						<small><strong>50</strong> <span class="opacity-50">Following</span></small>
						<small><strong>500</strong> <span class="opacity-50">Followers</span></small>
					</div>
				</a>
			</div>

			<!-- Button -->
			<div class="anim-float-button absolute z-[1] top-[78%] left-[15%]">
				<button class="btn variant-glass-secondary">
					<span>Design</span>
					<i class="fa-solid fa-spa" />
				</button>
			</div>

			<!-- Icon Badge -->
			<div class="anim-float-badge absolute z-[1] top-[45%] left-[25%]">
				<span class="badge-icon variant-filled">
					<i class="fa-solid fa-skull" />
				</span>
			</div>
			<!-- BG Circles -->
			<div class="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-0">
				<div
					class="w-96 aspect-square border-2 border-black/5 dark:border-white/5 rounded-full flex justify-center items-center"
				>
					<div
						class="w-[240px] aspect-square border-2 border-black/5 dark:border-white/5 rounded-full flex justify-center items-center"
					/>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.anim-float-avatar {
		animation: float-up 13s ease-in-out infinite;
	}
	.anim-float-progress {
		animation: float-down 15s ease-in-out infinite;
	}
	.anim-float-search {
		animation: float-up 14s ease-in-out infinite;
		animation-delay: 3s;
	}
	.anim-float-radio {
		animation: float-down 17s ease-in-out infinite;
	}
	.anim-float-card {
		animation: float-up 12s ease-in-out infinite;
	}
	.anim-float-light-switch {
		animation: float-down 18s ease-in-out infinite;
		animation-delay: 2s;
	}
	.anim-float-button {
		animation: float-up 15s ease-in-out infinite;
	}
	.anim-float-toggle {
		animation: float-down 13s ease-in-out infinite;
		animation-delay: 5s;
	}
	.anim-float-badge {
		animation: float-up 15s ease-in-out infinite;
	}
	/* prettier-ignore */
	@keyframes float-up {
		0% { transform: translateY(0px); }
		50% { transform: translateY(-20px); }
		100% { transform: translateY(0px); }
	}
	/* prettier-ignore */
	@keyframes float-down {
		0% { transform: translateY(0px); }
		50% { transform: translateY(20px); }
		100% { transform: translateY(0px); }
	}
</style>
