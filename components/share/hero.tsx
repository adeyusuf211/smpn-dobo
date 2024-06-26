"use client";

interface HeroProps {
  readonly showAddressLabel?: boolean;
}

import Image from "next/image";
import TaglineComponent from "./tagline";
import ModelSekolahImage from "@/public/assets/images/Foto Siswa/model.webp";
import ImageLogo from "@/public/assets/images/logo1.png";

import { useAOS } from "@/hooks/useAOS";

export default function HeroComponent({ showAddressLabel }: HeroProps) {
  useAOS();

  return (
    <div className="w-full h-screen relative" data-aos="fade-up">
      <div className="flex md:flex-row flex-col justify-between">
        <div className="w-full h-full flex justify-center items-center">
          <div className="lg:w-[200px] flex justify-center items-center absolute lg:top-0 top-10 right-0 lg:mt-[300px] mt-[80px] mr-[10%] rounded-full">
            <Image src={ImageLogo} width={1000} height={1000} alt="logo" />
          </div>
        </div>
        <div
          className={`min-w-[750px] h-[600px] lg:p-4 p-0 absolute ${
            showAddressLabel ? "bottom-20" : "bottom-0"
          } lg:left-10 -left-10 mb-5`}
        >
          <Image
            src={ModelSekolahImage}
            fill
            style={{ objectFit: "cover" }}
            alt="model"
            priority={true}
          />
        </div>
      </div>
      <div className="absolute bottom-0 left-0">
        <TaglineComponent showAddressLabel={showAddressLabel} />
      </div>
    </div>
  );
}
