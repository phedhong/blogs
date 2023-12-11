const createStringPair: StringMap = (property: keyof StringMap, value: string) => {
	return { [property]: value }
}

export const Collections = {
	about: '/about',
	blogs: '/blogs',
	tags: '/tags',
	docs: '/docs',
	rss: '/rss.xml'
}

type CollectionType = keyof typeof Collections

export const Headers = Object.entries(Collections).map(([k, v]) => {
	return { name: k, href: v }
})

export const Footers = [
	{
		title: 'Documentation',
		children: [
			{ name: 'Getting Started', href: '#' },
			{ name: 'Guide', href: '#' },
			{ name: 'API', href: '#' },
			{ name: 'Showcase', href: '#' },
			{ name: 'Pricing', href: '#' }
		]
	},
	{
		title: 'Community',
		children: [
			{ name: 'Forum', href: '#' },
			{ name: 'Discord', href: '#' }
		]
	}
]

// export type collectionHref

export const dbMaps = {
	components: '/examples/*/*.{astro, svelte, html,tsx, jsx}',
	blogs: '/src/content/mdx/*.mdx'
}

export const Tags = {
	content: ['astro', 'svelte', 'tsx', 'html', 'jsx'],
	frontmatter: ['md', 'mdx', 'doc']
}

export const getFiles = async () => {
	const modules = import.meta.glob(
		['/src/components/elements/**/*.{astro,svelte,tsx,jsx,html}', '/src/content/**/*.{md,mdx}'],
		{ import: 'default', eager: true }
	)

	const files = Object.entries(modules).map(([path, content]) => {
		const filename = path.split('/').pop()
		const [title, type] = filename.split('.')
		return {
			title,
			type,
			slug: path,
			content
		}
	})

	return files
}

export const getCategoryFromUrl = (url: URL) => {
	const [, category] = url.pathname.split('/')
	if (category in Collections) return category as string
	return defaultCategory
}
