import type { APIContext } from 'astro'

export async function GET({}: APIContext) {
	return new Response(
		JSON.stringify({
			body: 'export const search = () => {return {results: []}}'
		})
	)
}
