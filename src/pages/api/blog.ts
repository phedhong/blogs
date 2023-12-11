import { getCollection } from 'astro:content'
import type { APIRoute } from 'astro'
import { Debug } from 'astro:components'

export const GET: APIRoute = ({ params, request }) => {
	return new Response(
		JSON.stringify({
			body: 'This was a GET!'
		})
	)
}

export const POST: APIRoute = async ({ request }) => {
	const data = await request.formData()
	const name = data.get('name')
	const email = data.get('email')
	const body = data.get('body')
	// Validate the data - you'll probably want to do more than this
	if (!name || !email || !body) {
		return new Response(
			JSON.stringify({
				body: 'Missing required fields'
			}),
			{ status: 400 }
		)
	}
	// Do something with the data, then return a success response
	return new Response(
		JSON.stringify({
			body: 'Success!'
		}),
		{ status: 200 }
	)
}

export const DELETE: APIRoute = ({ request }) => {
	return new Response(
		JSON.stringify({
			body: 'This was a DELETE!'
		})
	)
}

export const ALL: APIRoute = ({ request }) => {
	return new Response(
		JSON.stringify({
			body: `This was a ${request.method}!`
		})
	)
}
