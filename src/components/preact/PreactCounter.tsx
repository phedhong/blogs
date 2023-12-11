import { h, Fragment } from 'preact'
import type { Signal } from '@preact/signals'
import Button from './_elements/Button.tsx'

export default function PreactCounter({ children, count }) {
	return (
		<>
			<div class="flex gap-8 py-6">
				<Button onClick={() => (count.value -= 1)}>-1</Button>
				<p class="text-3xl tabular-nums">{count}</p>
				<Button onClick={() => (count.value += 1)}>+1</Button>
			</div>

			<div>{children}</div>
		</>
	)
}
