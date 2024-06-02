"use client";

import Image from "next/image";
import TaglineComponent from "@/components/share/tagline";
import ModelSekolahImage from "@/public/assets/images/Foto Siswa/model.webp";
import { useAOS } from "@/hooks/useAOS";

export default function TentangKamiComponent({ showAddressLabel }: any) {
  useAOS();
  return (
    <section id="tentang-kami">
      <div
        className="w-full min-h-screen h-full relative flex gap-3 lg:mt-0 mb-20"
        data-aos="fade-up"
      >
        <div className="flex lg:flex-row flex-col justify-between">
          <div className="w-full h-full flex items-center p-5">
            <div className="lg:w-[750px] w-full lg:p-10 p-6 bg-gray-200 absolute right-0 top-20">
              <h3 className="font-semibold text-2xl uppercase text-gray-700 text-center">
                deskripsi
              </h3>
              <h3 className="text-lg font-regular text-gray-600 mt-5">
                MUTIARA (Mutu, Intelektual & Karakter): Yang mempunyai arti
                bahwa SMP Negeri 1 Dobo menjadikan Mutu sebagai tujuan utama,
                dengan sarana Intelektual Guru dan Peserta Didik yang berpedoman
                kepada Karakter Bangsa dalam mewujudkan Peserta Didik Cerdas dan
                Kompetitif.
              </h3>
            </div>
          </div>
          <div className="w-[750px] h-[600px] p-4 absolute lg:bottom-0 -bottom-[40rem] lg:left-10 -left-10 mb-5">
            <Image
              src={ModelSekolahImage}
              fill
              style={{ objectFit: "cover" }}
              alt="model"
            />
          </div>
        </div>
        <div className="absolute lg:bottom-0 -bottom-[40rem] left-0">
          <TaglineComponent showAddressLabel={showAddressLabel} />
        </div>
      </div>
    </section>
  );
}
