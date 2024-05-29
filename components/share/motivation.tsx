"use client";

import { useAOS } from "@/hooks/useAOS";

import { fotoP5Images as ImagesLists } from "@/helpers/all-static-images";
import ImageCardComponent from "@/components/share/card/image-card";
import Image from "next/image";

export default function MotivationComponent() {
  useAOS();
  return (
    <div className="w-full h-full my-10 flex flex-col gap-5" data-aos="fade-up">
      <div className="flex lg:flex-row flex-col gap-3">
        <Image
          width={500}
          height={500}
          src={ImagesLists[8]}
          alt="mutiara deskripsi"
        />
        <div className="w-full h-full p-4 italic text-white text-3xl">
          MUTIARA (Mutu, Intelektual & Karakter): Yang mempunyai arti bahwa SMP
          Negeri 1 Dobo menjadikan Mutu sebagai tujuan utama, dengan sarana
          Intelektual Guru dan Peserta Didik yang berpedoman kepada Karakter
          Bangsa dalam mewujudkan Peserta Didik Cerdas dan Kompetitif.
        </div>
      </div>
      <div className="flex flex-col gap-5 my-5">
        <h1 className="2xl:text-6xl lg:text-4xl text-center font-semibold text-white">
          Pengembangan Projek Profil Pelajar Pancasila
        </h1>
        <div className="grid lg:grid-cols-6 grid-cols-1 gap-3">
          {ImagesLists.map((image: any) => (
            <ImageCardComponent imageSource={image} alt="example" key={image} />
          ))}
        </div>
      </div>
    </div>
  );
}
