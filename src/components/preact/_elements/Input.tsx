import { JSX } from 'preact'

export default function Input(props: JSX.HTMLAttributes<HTMLInputElement>) {
	return (
		<input
			{...props}
			class={`border(gray-500 2) disabled:(opacity-50 cursor-not-allowed) rounded px-3 py-2 ${
				props.class ?? ''
			}`}
		/>
	)
}
