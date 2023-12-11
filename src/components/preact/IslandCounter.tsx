import { useSignal } from '@preact/signals'
import type { ComponentChildren } from 'preact'
import Button from './_elements/Button.tsx'

interface Props {
	children: ComponentChildren
}

export default function IslandCounter({ children }: Props) {
	const count = useSignal(0)

	return (
		<div class="flex gap-8 py-6">
			<Button onClick={() => (count.value -= 1)}>-</Button>
			<p class="text-3xl tabular-nums"> Server Render : {count}</p>

			<Button onClick={() => (count.value += 1)}>+</Button>

			<div>{children}</div>
		</div>
	)
}
