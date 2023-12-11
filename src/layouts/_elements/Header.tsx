import { Headers } from '@layouts/configs'

type Props = {
	active: string
}

export default function Header({ active }: Props) {
	const menus = Headers || [
		{ name: 'About', href: '/about' },
		{ name: 'Tags', href: '/tags' },

		{ name: 'Components', href: '/components' },
		{ name: 'Docs', href: '/docs' },
		{ name: 'Blogs', href: '/blogs' },
		{ name: 'Rss', href: '/rss.xml' }
	]

	return (
		<div class="flex w-full flex-row gap-4 capitalize">
			<div class="flex flex-1 items-center">
				Icon
				<div class="ml-1 text-2xl font-bold">
					<a href={'/'}> Home</a>
				</div>
			</div>
			<ul class="flex items-center gap-4">
				{menus.map((menu) => (
					<li>
						<a
							href={menu.href}
							class={
								'border-gray-500 py-1 text-gray-500 hover:text-gray-700' +
								(menu.href === active ? ' border-b-2 font-bold' : '')
							}
						>
							{menu.name}
						</a>
					</li>
				))}
			</ul>
		</div>
	)
}
