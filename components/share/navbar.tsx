"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const MENU_PROGRAM_SEKOLAH: { title: string; href: string }[] = [
  {
    title: "MPLS",
    href: "/mpls",
  },
  {
    title: "Pemilihan Ketua OSIS",
    href: "/pemilihan-ketua-osis",
  },
  {
    title: "PPDB",
    href: "/ppdb",
  },
  {
    title: "Laporan Dana BOS",
    href: "/laporan-dana-bos",
  },
  {
    title: "Berita Sekolah",
    href: "/berita-sekolah",
  },
];

const MENU_WARGA_SEKOLAH: { title: string; href: string }[] = [
  {
    title: "Tenaga Pendidik dan Pegawai",
    href: "/tenaga-pendidik-dan-pegawai",
  },
  {
    title: "Data Peserta Didik",
    href: "/data-peserta-didik",
  },
  {
    title: "Agenda Sekolah",
    href: "/agenda-sekolah",
  },
  {
    title: "Pengembangan Diri",
    href: "/pengembangan-diri",
  },
];

const MENU_LIBRARI: { title: string; href: string }[] = [
  {
    title: "E-Perpus",
    href: "/e-perpus",
  },
  {
    title: "E-Raport",
    href: "/e-raport",
  },
  {
    title: "Galeri Foto",
    href: "/galeri-foto",
  },
  {
    title: "Galeri Vidio",
    href: "/galeri-vido",
  },
  {
    title: "Redaksi Pendidik",
    href: "/redaksi-pendidik",
  },
  {
    title: "Pengumunan",
    href: "/pengumuman",
  },
];

export default function NavbarComponent() {
  return (
    <div className="w-full flex justify-between py-4">
      <NavigationMenu className="py-4 px-2">
        <NavigationMenuList className="flex gap-6">
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                SMP NEGERI 1 DOBO
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <NavigationMenu className="py-4 px-2">
        <NavigationMenuList className="flex gap-6">
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                HOME
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>PROGRAM SEKOLAH</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px] uppercase">
                {MENU_PROGRAM_SEKOLAH.map((programSekolah) => (
                  <ListItem
                    key={programSekolah.title}
                    title={programSekolah.title}
                    href={programSekolah.href}
                  ></ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>WARGA SEKOLAH</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px] uppercase">
                {MENU_WARGA_SEKOLAH.map((wargaSekolah) => (
                  <ListItem
                    key={wargaSekolah.title}
                    title={wargaSekolah.title}
                    href={wargaSekolah.href}
                  ></ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>LIBRARI</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px] uppercase">
                {MENU_LIBRARI.map((librari) => (
                  <ListItem
                    key={librari.title}
                    title={librari.title}
                    href={librari.href}
                  ></ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
