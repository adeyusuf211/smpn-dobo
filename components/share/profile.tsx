"use client";

import { Button } from "@/components/ui/button";
import { useAOS } from "@/hooks/useAOS";
import CustomCardBackground from "@/public/assets/images/custom-card.svg";
import Image from "next/image";

interface ProfileData {
  image: string;
  text: string;
}

const PROFILE_DATA: ProfileData[] = [
  {
    image: "",
    text: "sambutan kepala sekolah",
  },
  {
    image: "",
    text: "visi misi",
  },
  {
    image: "",
    text: "tentang kami",
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
      <div className="flex lg:flex-row flex-col w-full lg:gap-5 gap-1 -mt-40 lg:px-[50px]">
        {PROFILE_DATA.map((profile) => (
          <div className="flex flex-col w-full h-full gap-5" key={profile.text}>
            <div className="relative">
              <div className="w-[100px] lg:h-[650px] h-[400px]">
                <Image
                  src={CustomCardBackground}
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  fill
                  alt="custom-card-background"
                />
              </div>
            </div>
            <h3 className="font-bold text-2xl text-white w-full uppercase text-center">
              {profile.text}
            </h3>
            <Button variant="destructive" size="lg" className="rounded-full">
              Read More
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
