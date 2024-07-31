"use client";

import Image from "next/image";
import ListBackgroundCard from "@/public/assets/images/background-card.svg";
import SeragamBatik1 from "@/public/assets/images/Foto Siswa/batik-1.webp";
import SeragamBatik2 from "@/public/assets/images/Foto Siswa/batik-2.webp";
import SeragamPutihBiru from "@/public/assets/images/Foto Siswa/model.webp";
import SeragamKostum from "@/public/assets/images/Foto Siswa/kostum.webp";
import SeragamPramuka from "@/public/assets/images/Foto Siswa/pramuka.webp";

import { useAOS } from "@/hooks/useAOS";

const LIST_SERAGAM: string[] = [
  "biru dan putih",
  "batik",
  "batik",
  "kostum",
  "pramuka",
] as const;

export default function SeragamSekolahComponent() {
  useAOS();
  return (
    <section id="seragam">
      <h1
        className="lg:text-5xl text-2xl font-semibold uppercase text-center text-white p-6"
        data-aos="fade-up"
      >
        seragam sekolah
      </h1>
      <div className="flex flex-col mt-10">
        <div className="flex justify-end w-full">
          <div className="relative w-full">
            <div className="flex lg:flex-row flex-col gap-3">
              <div className="rounded-rectangle ml-auto" />
              <div className="rounded-rectangle ml-auto" />
              <div className="rounded-rectangle ml-auto" />
              <div className="rounded-rectangle ml-auto" />
              <div className="rounded-rectangle ml-auto" />
            </div>
            <div className="flex lg:flex-row flex-col lg:gap-0 gap-20 w-full absolute top-0">
              <div className="flex gap-10 z-10">
                <Image
                  src={SeragamPutihBiru}
                  width={250}
                  height={250}
                  alt="seragam-batik"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </div>
              <div className="flex z-10">
                <Image
                  src={SeragamBatik1}
                  width={250}
                  height={250}
                  alt="seragam-batik"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                    marginLeft: "50px",
                  }}
                />
              </div>
              <div className="flex z-10">
                <Image
                  src={SeragamBatik2}
                  width={250}
                  height={250}
                  alt="seragam-batik"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                    marginLeft: "50px",
                  }}
                />
              </div>
              <div className="flex z-10">
                <Image
                  src={SeragamKostum}
                  width={250}
                  height={250}
                  alt="seragam-kostum"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                    marginLeft: "50px",
                  }}
                />
              </div>
              <div className="flex z-10">
                <Image
                  src={SeragamPramuka}
                  width={250}
                  height={250}
                  alt="seragam-pramuka"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                    marginLeft: "50px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full bg-blue-secondary p-4 flex lg:flex-row flex-col justify-between pr-32">
          {LIST_SERAGAM.map((seragam) => (
            <h3
              className="font-bold text-xl text-white uppercase"
              key={seragam}
            >
              {seragam}
            </h3>
          ))}
        </div>
      </div>
    </section>
  );
}
