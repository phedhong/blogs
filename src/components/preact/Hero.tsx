export default function Hero() {
	return (
		<div
			class="flex min-h-[24em] w-full flex-col items-center justify-center gap-8 rounded-xl bg-gray-100 bg-cover bg-center bg-no-repeat px-8 py-10 text-white"
			style="background-image:linear-gradient(rgba(0, 0, 40, 0.8),rgba(0, 0, 40, 0.8)), url('/gallery/hero-bg.webp');"
		>
			<div class="space-y-4 text-center">
				<h1 class="inline-block text-4xl font-bold">Fresh Components Beta</h1>
				<p class="max-w-lg text-xl text-blue-100">
					Fresh Components is a collection of components built with Preact and Tailwind CSS.
				</p>
			</div>

			<div class="flex flex-col items-center md:flex-row">
				<a
					href="#"
					class="group mt-4 block inline-flex cursor-pointer items-center rounded-md px-8 py-2 font-bold text-blue-600 text-blue-800 hover:bg-blue-50"
				>
					Sign Up{' '}
				</a>
				<a
					href="#"
					class="group mt-4 block inline-flex cursor-pointer items-center px-4 py-2 text-blue-400 transition-colors hover:text-blue-100"
				>
					Documentation IconChevronRight
				</a>
			</div>
		</div>
	)
}
