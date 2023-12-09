type Props = {
  active: string;
};

export default function Header({ active }: Props) {
  const menus = [
    { name: "About", href: "/about" },
    { name: "Tags", href: "/tags" },

    { name: "Components", href: "/components" },
    { name: "Docs", href: "/docs" },
    { name: "Blogs", href: "/blogs" },
    { name: "Rss", href: "/rss.xml" },
  ];

  return (
    <div class=" w-full  flex flex-col md:flex-row gap-4">
      <div class="flex items-center flex-1">
        Icon
        <div class="text-2xl ml-1 font-bold">
          <a href={"/"}> Home</a>
        </div>
      </div>
      <ul class="flex items-center gap-6">
        {menus.map((menu) => (
          <li>
            <a
              href={menu.href}
              class={
                "text-gray-500 hover:text-gray-700 py-1 border-gray-500" +
                (menu.href === active ? " font-bold border-b-2" : "")
              }
            >
              {menu.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
