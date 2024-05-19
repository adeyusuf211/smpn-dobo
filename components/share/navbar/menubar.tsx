"use client";

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
import ImageLogo from "@/public/assets/images/logo1.png";
import Image from "next/image";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";

export default function NavbarComponent() {
  const [showMenu, setShowMenu] = useState(false);

  const styleMenuBarContent = `uppercase z-[100000]`;

  return (
    <Menubar className="flex 2xl:w-[90vw] lg:w-[80vw] h-[100px] w-full bg-yellow-primary text-gray-700 justify-between 2xl:pl-[200px] lg:pr-20 pr-0 items-center fixed top-0 left-0 z-[10000] border-none 2xl:mt-10 md:mt-5 mt-0 lg:rounded-tr-3xl rounded-none">
      <Link href="/">
        <MenubarMenu>
          <MenubarTrigger className="flex w-full gap-3 min-w-[350px] -ml-3">
            <Image src={ImageLogo} width={60} height={50} alt="logo" />
            <div className="flex flex-col">
              <h4 className="lg:text-lg text-md uppercase font-bold">
                SMP NEGERI 1 DOBO
              </h4>
              <p className="text-start lg:text-xl text-sm font-normal">
                Jalan Ali Moertopo
              </p>
            </div>
          </MenubarTrigger>
        </MenubarMenu>
      </Link>
      <div className="lg:flex hidden gap-5 pt-3">
        <MenubarMenu>
          <MenubarTrigger className="uppercase">
            <Link href="/">HOME</Link>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="uppercase hover:cursor-pointer">
            PROGRAM SEKOLAH
          </MenubarTrigger>
          <MenubarContent className={styleMenuBarContent}>
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
          <MenubarContent className={styleMenuBarContent}>
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
          <MenubarContent className={styleMenuBarContent}>
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
      <div className="lg:hidden flex flex-col pr-6">
        <CiMenuFries
          className="lg:hidden flex w-[30px] h-[30px] font-bold cursor-pointer relative"
          onClick={() => setShowMenu(!showMenu)}
        />
        {showMenu && (
          <div className="lg:hidden absolute w-full right-0 top-full bg-white p-4 flex flex-col gap-3">
            <MenubarMenu>
              <MenubarTrigger className="uppercase">
                <Link href="/">HOME</Link>
              </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger className="uppercase">
                PROGRAM SEKOLAH
              </MenubarTrigger>
              <MenubarContent className={`${styleMenuBarContent} ml-24`}>
                {MENU_PROGRAM_SEKOLAH.map((menu) => (
                  <MenubarItem key={menu.title} className="w-full">
                    <Link href={menu.href} className="w-full">
                      {menu.title}
                    </Link>
                  </MenubarItem>
                ))}
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger className="uppercase">
                WARGA SEKOLAH
              </MenubarTrigger>
              <MenubarContent className={`${styleMenuBarContent} ml-24`}>
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
              <MenubarContent className={`${styleMenuBarContent} ml-24`}>
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
        )}
      </div>
    </Menubar>
  );
}
