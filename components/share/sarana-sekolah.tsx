"use client";

import { useAOS } from "@/hooks/useAOS";
import ImageCardComponent from "@/components/share/card/image-card";

import { fotoSaranaSekolah as ImagesLists } from "@/helpers/all-static-images";
import { useState } from "react";

export default function SaranaSekolahComponent() {
  useAOS();

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredImages = selectedCategory
    ? ImagesLists.filter((image) => {
        if (
          selectedCategory === "Sarana Utama" &&
          image.category === "Sarana Utama"
        )
          return true;
        if (
          selectedCategory === "Laboratorium Praktek" &&
          image.category === "Lab Praktek"
        )
          return true;
        if (
          selectedCategory === "Ruang Belajar dan Pendukung" &&
          image.category === "Ruang Kelas"
        )
          return true;
        return false;
      })
    : ImagesLists;

  return (
    <section id="sarana-sekolah" data-aos="fade-up">
      <div className="w-full flex flex-col my-10">
        <h1 className="text-center font-semibold text-white uppercase lg:text-5xl text-2xl mb-3 lg:mt-0 mt-[40rem]">
          sarana dan fasilitas sekolah
        </h1>
        <div className="flex flex-col gap-5 mt-5">
          <div className="text-white text-2xl my-5 flex gap-3">
            <button
              className={`flex gap-3 items-center cursor-pointer  ${
                selectedCategory === "Sarana Utama" ? "bg-destructive" : ""
              } px-7 py-3 border-none rounded-lg`}
              onClick={() => handleCategoryClick("Sarana Utama")}
            >
              Sarana Utama
            </button>
            <button
              className={`flex gap-3 items-center cursor-pointer  ${
                selectedCategory === "Laboratorium Praktek"
                  ? "bg-destructive"
                  : ""
              } px-7 py-3 border-none rounded-lg`}
              onClick={() => handleCategoryClick("Laboratorium Praktek")}
            >
              Laboratorium Praktek
            </button>
            <button
              className={`flex gap-3 items-center cursor-pointer  ${
                selectedCategory === "Ruang Belajar dan Pendukung"
                  ? "bg-destructive"
                  : ""
              } px-7 py-3 border-none rounded-lg`}
              onClick={() => handleCategoryClick("Ruang Belajar dan Pendukung")}
            >
              Ruang Belajar dan Pendukung
            </button>
          </div>
          <div className="grid lg:grid-cols-6 grid-cols-1 gap-5">
            {filteredImages.map((image: any) => (
              <ImageCardComponent
                imageSource={image.name}
                alt="example"
                key={image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
