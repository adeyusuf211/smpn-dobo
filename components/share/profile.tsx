"use client";

import { useAOS } from "@/hooks/useAOS";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import FotoVisiMisi from "@/public/assets/images/Foto Profil Sekolah/visi_misi.webp";
import FotoKepalaSekolah from "@/public/assets/images/Foto Profil Sekolah/kepala_sekolah.webp";
import FotoTentangKami from "@/public/assets/images/Foto Profil Sekolah/tentang_kami.webp";

interface ProfileData {
  image: StaticImageData;
  text: string;
  linkUrl: string;
}

const PROFILE_DATA: ProfileData[] = [
  {
    image: FotoKepalaSekolah,
    text: "sambutan kepala sekolah",
    linkUrl: "/sambutan-kepala-sekolah",
  },
  {
    image: FotoVisiMisi,
    text: "visi misi",
    linkUrl: "/visi-misi",
  },
  {
    image: FotoTentangKami,
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
      <div className="flex lg:flex-row flex-col w-full lg:gap-5 gap-1 mt-20 lg:px-[50px]">
        {PROFILE_DATA.map((profile) => (
          <div className="flex flex-col w-full h-full gap-5" key={profile.text}>
            <div className="relative">
              <div className="lg:h-[470px] h-[350px] w-full">
                <Image
                  src={profile.image}
                  fill
                  alt="custom-card-background"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                    display: "flex",
                  }}
                />
              </div>
            </div>
            <h3 className="font-bold text-2xl text-white w-full uppercase text-center">
              {profile.text}
            </h3>
            <Link href={profile.linkUrl} prefetch>
              <button className="bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 flex justify-center items-center w-full px-5 py-3">
                Read More
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
