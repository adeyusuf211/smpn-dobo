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
    <div
      className="w-full h-screen relative overflow-x-hidden"
      data-aos="fade-up"
    >
      <div className="flex md:flex-row justify-between">
        <div className="w-full h-full flex justify-center items-center">
          <div className="lg:w-[200px] flex justify-center items-center absolute lg:top-0 top-0 right-0 lg:mt-[300px] mt-[100px] lg:mr-[10%] mr-0 rounded-full">
            <Image
              src={ImageLogo}
              className="lg:w-full w-[350px] lg:h-full h-[350px] object-cover"
              alt="logo"
              priority={true}
            />
          </div>
        </div>
        <div
          className={`min-w-[750px] h-[600px] lg:p-4 p-0 absolute ${
            showAddressLabel ? "bottom-20" : "bottom-0"
          } lg:left-10 left-0 lg:mb-5 mb-0`}
        >
          <Image
            src={ModelSekolahImage}
            alt="model"
            priority={true}
            className="lg:w-full w-[320px] lg:h-full h-[320px] object-cover lg:relative absolute lg:bottom-0 bottom-24"
          />
        </div>
      </div>
      <div className="absolute bottom-0 left-0">
        <TaglineComponent showAddressLabel={showAddressLabel} />
      </div>
    </div>
  );
}
