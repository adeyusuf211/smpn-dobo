"use client";

import { useAOS } from "@/hooks/useAOS";
import ImageCardComponent from "./card/image-card";

import { fotoEskull as ImagesLists } from "@/helpers/all-static-images";
import { useState } from "react";

export default function ExtrakulikulerComponent() {
  useAOS();

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredImages = selectedCategory
    ? ImagesLists.filter((image) => {
        if (selectedCategory === "Olahraga" && image.category === "Olahraga")
          return true;
        if (
          selectedCategory === "Seni dan Kreativitas" &&
          image.category === "Seni"
        )
          return true;
        if (
          selectedCategory === "Formasi dan Aktivitas" &&
          image.category === "Aktivitas"
        )
          return true;
        return false;
      })
    : ImagesLists;

  return (
    <section id="ekstrakulikuler" data-aos="fade-up">
      <div className="w-full flex flex-col my-10">
        <h1 className="text-center font-semibold text-white uppercase lg:text-5xl text-2xl mb-3">
          program ekstra kulikuler
        </h1>
        <div className="flex flex-col gap-5">
          <div className="text-white text-2xl my-5 flex lg:flex-row flex-col lg:gap-3 gap-1">
            <button
              className={`flex gap-3 items-center cursor-pointer lg:text-xl text-lg  ${
                selectedCategory === "Olahraga" ? "bg-destructive" : ""
              } px-7 py-3 border-none rounded-lg`}
              onClick={() => handleCategoryClick("Olahraga")}
            >
              Olahraga
            </button>
            <button
              className={`flex gap-3 items-center cursor-pointer lg:text-xl text-lg  ${
                selectedCategory === "Seni dan Kreativitas"
                  ? "bg-destructive"
                  : ""
              } px-7 py-3 border-none rounded-lg`}
              onClick={() => handleCategoryClick("Seni dan Kreativitas")}
            >
              Seni dan Kreativitas
            </button>
            <button
              className={`flex gap-3 items-center cursor-pointer lg:text-xl text-lg  ${
                selectedCategory === "Formasi dan Aktivitas"
                  ? "bg-destructive"
                  : ""
              } px-7 py-3 border-none rounded-lg`}
              onClick={() => handleCategoryClick("Formasi dan Aktivitas")}
            >
              Formasi dan Aktivitas
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
