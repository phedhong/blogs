import type { JSX } from 'preact'

export default function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
	return (
		<button
			{...props}
			class="rounded border-2 border-gray-500 px-2 py-1 transition-colors hover:bg-gray-200"
		/>
	)
}
