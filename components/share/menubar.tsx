import Link from "next/link";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  MENU_LIBRARI,
  MENU_PROGRAM_SEKOLAH,
  MENU_WARGA_SEKOLAH,
} from "@/components/share/menu-list";

export default function NavbarComponent() {
  return (
    <Menubar className="flex gap-3 w-full h-[80px] justify-between">
      <div>
        <MenubarMenu>
          <MenubarTrigger className="uppercase text-2xl">
            <Link href="/">SMP NEGERI 1 DOBO</Link>
          </MenubarTrigger>
        </MenubarMenu>
      </div>
      <div className="flex gap-5">
        <MenubarMenu>
          <MenubarTrigger className="uppercase">
            <Link href="/">HOME</Link>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="uppercase">PROGRAM SEKOLAH</MenubarTrigger>
          <MenubarContent className="uppercase">
            {MENU_PROGRAM_SEKOLAH.map((menu) => (
              <MenubarItem key={menu.title}>
                <Link href={menu.href} className="w-full">
                  {menu.title}
                </Link>
              </MenubarItem>
            ))}
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="uppercase">WARGA SEKOLAH</MenubarTrigger>
          <MenubarContent className="uppercase">
            {MENU_WARGA_SEKOLAH.map((menu) => (
              <MenubarItem key={menu.title}>
                <Link href={menu.href} className="w-full">
                  {menu.title}
                </Link>
              </MenubarItem>
            ))}
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="uppercase">LIBRARI</MenubarTrigger>
          <MenubarContent className="uppercase">
            {MENU_LIBRARI.map((menu) => (
              <MenubarItem key={menu.title}>
                <Link href={menu.href} className="w-full">
                  {menu.title}
                </Link>
              </MenubarItem>
            ))}
          </MenubarContent>
        </MenubarMenu>
      </div>
    </Menubar>
  );
}
