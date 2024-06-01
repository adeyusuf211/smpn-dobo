"use client";

import { useAOS } from "@/hooks/useAOS";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import FotoVisiMisi from "@/public/assets/images/Foto Profil Sekolah/visi_misi.webp";
import FotoKepalaSekolah from "@/public/assets/images/Foto Profil Sekolah/kepala_sekolah.png";
import FotoTentangKami from "@/public/assets/images/Foto Profil Sekolah/tentang_kami.webp";

interface ProfileData {
  image: StaticImageData | "";
  imageResolution?: {
    width: number;
    height: number;
  };
  text: string;
  linkUrl: string;
}

const PROFILE_DATA: ProfileData[] = [
  {
    image: FotoKepalaSekolah,
    imageResolution: {
      width: 300,
      height: 300,
    },
    text: "sambutan kepala sekolah",
    linkUrl: "/sambutan-kepala-sekolah",
  },
  {
    image: FotoVisiMisi,
    imageResolution: {
      width: 400,
      height: 300,
    },
    text: "visi misi",
    linkUrl: "/visi-misi",
  },
  {
    image: FotoTentangKami,
    imageResolution: {
      width: 400,
      height: 300,
    },
    text: "Tentang Kami",
    linkUrl: "/tentang-kami",
  },
] as const;

export default function ProfileComponent() {
  useAOS();

  return (
    <div
      className="w-full min-h-screen h-full py-20 flex flex-col lg:gap-5 gap-2 items-center"
      data-aos="fade-up"
    >
      <h1 className="text-center font-semibold lg:text-5xl text-2xl uppercase text-gray-100">
        Profil Sekolah
      </h1>
      <div className="flex lg:flex-row flex-col w-full lg:gap-20 gap-1 mt-20 lg:px-[50px]">
        {PROFILE_DATA.map((profile) => (
          <div
            className="flex flex-col w-full h-full gap-8 relative"
            key={profile.text}
          >
            <div className="relative min-h-[400px] min-w-[400px] w-full flex items-end overflow-hidden px-10">
              <div className="rounded-rectangle ml-auto" />
              <div className="absolute bottom-0 left-0">
                <Image
                  src={profile.image}
                  alt="custom-card-background"
                  width={profile.imageResolution?.width}
                  height={profile.imageResolution?.height}
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              </div>
            </div>
            <h3 className="font-bold text-2xl text-white w-full uppercase text-center">
              {profile.text}
            </h3>
            <Link href={profile.linkUrl} prefetch>
              <button className="bg-destructive rounded-xl text-destructive-foreground shadow-sm hover:bg-destructive/90 flex justify-center items-center w-full px-5 py-3">
                Read More
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
