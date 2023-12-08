export default function Footer() {
  const menus = [
    {
      title: "Documentation",
      children: [
        { name: "Getting Started", href: "#" },
        { name: "Guide", href: "#" },
        { name: "API", href: "#" },
        { name: "Showcase", href: "#" },
        { name: "Pricing", href: "#" },
      ],
    },
    {
      title: "Community",
      children: [
        { name: "Forum", href: "#" },
        { name: "Discord", href: "#" },
      ],
    },
  ];

  return (
    <div class=" flex flex-row gap-4 text-sm">
      <div class="flex-1">
        <div class="flex items-center gap-1">
          Icon
          <div class="font-bold text-2xl">Fresh</div>
        </div>
        <div class="text-gray-500">Full Stack Framework</div>
      </div>

      {menus.map((item) => (
        <div class="" key={item.title}>
          <div class="font-bold">{item.title}</div>
          <ul class="mt-2">
            {item.children.map((child) => (
              <li class="mt-2" key={child.name}>
                <a class="text-gray-500 hover:text-gray-700" href={child.href}>
                  {child.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div class="text-gray-500">
        <div class="text-xs">
          Copyright © 2020 DenoLand
          <br />
          All right reserved.
        </div>

        <a
          href="https://github.com/denoland/fresh"
          class="inline-block hover:text-black"
          aria-label="GitHub"
        >
          GithubIcon
        </a>
      </div>
    </div>
  );
}
