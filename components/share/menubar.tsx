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
import ImageLogo from "@/public/assets/image-backup.jpg";
import Image from "next/image";

export default function NavbarComponent() {
  return (
    <Menubar className="flex w-full h-[80px] justify-between items-start">
      <div className="flex">
        <MenubarMenu>
          <MenubarTrigger className="flex flex-col">
            <Link href="/">
              <Image src={ImageLogo} width={60} height={50} alt="logo" />
            </Link>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="flex flex-col -ml-3">
            <Link href="/">
              <h1 className="text-3xl uppercase font-bold">
                SMP NEGERI 1 DOBO
              </h1>
              <p className="text-start text-xl font-normal">
                Jalan Ali Moertopo
              </p>
            </Link>
          </MenubarTrigger>
        </MenubarMenu>
      </div>
      <div className="flex gap-5 pt-3">
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
