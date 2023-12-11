import { JSX } from 'preact'

export default function LinkButton(props: JSX.HTMLAttributes<HTMLAnchorElement>) {
	return (
		<a
			{...props}
			class={`inline-block cursor-pointer rounded px-3 py-2 hover:bg-gray-100 ${props.class ?? ''}`}
		/>
	)
}
