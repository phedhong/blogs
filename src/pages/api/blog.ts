import type { APIRoute } from "astro";
import { getCollection, type CollectionEntry } from "astro:content";



export const GET: APIRoute = async ({ request }) => {
  const allPosts = await getCollection('posts');



  return new Response(null, { body: allPosts });
};
