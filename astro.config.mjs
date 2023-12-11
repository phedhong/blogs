import { defineConfig } from 'astro/config'
import preact from '@astrojs/preact'
import svelte from '@astrojs/svelte'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'
import AutoImport from 'astro-auto-import'
import astroHello from './src/scripts/plugins/astro-hello'
import lifecycleLogs from './src/scripts/plugins/lifecycle-logs'
import remarkModifiedTime from './src/scripts/plugins/remark-modified-time.mjs'
import remarkReadingTime from './src/scripts/plugins/remark-reading-time.mjs'
import remarkFileType from './src/scripts/plugins/file-type.mjs'
import remarkPublishedTime from './src/scripts/plugins/remark-publish-time.mjs'
import remarkDeruntify from './src/scripts/plugins/remark-deruntify.mjs'
import addClasses from './src/scripts/plugins/add-classes.mjs'

import sitemap from '@astrojs/sitemap'
const customScripts = [astroHello(), lifecycleLogs()]

// https://astro.build/config
export default defineConfig({
	// site: 'https://example.com',
	site: "https://phedhong.github.io",

	integrations: [
		AutoImport({
			imports: [
				'./src/components/astro/mdx/mdxComponents.ts',
				'./src/components/astro/mdx/Intro.astro',
				'./src/components/astro/mdx/Note.astro',
				{
					'astro-embed': ['YouTube']
				}
			]
		}),
		mdx(),
		preact(),
		svelte(),
		tailwind(),
		...customScripts,
		sitemap()
	],
	markdown: {
		remarkPlugins: [
			remarkDeruntify,
			remarkModifiedTime,
			remarkReadingTime,
			remarkFileType,
			remarkPublishedTime
		],
		rehypePlugins: [[addClasses, { 'h1,h2,h3': 'title' }]]
	}
})
