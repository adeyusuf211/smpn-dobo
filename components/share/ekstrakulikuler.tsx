"use client";

import { useAOS } from "@/hooks/useAOS";
import ImageCardComponent from "./card/image-card";

import { fotoSiswaImages as ImagesLists } from "@/helpers/all-static-images";

export default function ExtrakulikulerComponent() {
  useAOS();
  return (
    <section id="ekstrakulikuler" data-aos="fade-up">
      <div className="w-full flex flex-col my-10">
        <h1 className="text-center font-semibold text-white uppercase lg:text-5xl text-2xl mb-3">
          program ekstra kulikuler
        </h1>
        <div className="flex flex-col gap-5">
          <ul className="text-white text-2xl mt-5 flex flex-col gap-3">
            <li className="flex gap-3 items-center">
              <span>{">>>"}</span> Olahraga
            </li>
            <li className="flex gap-3 items-center">
              <span>{">>>"}</span> Seni dan Kreativitas
            </li>
            <li className="flex gap-3 items-center">
              <span>{">>>"}</span> Formasi dan Aktivitas
            </li>
          </ul>
          <div className="grid lg:grid-cols-6 grid-cols-1 gap-5">
            {ImagesLists.map((image: any) => (
              <ImageCardComponent
                imageSource={image}
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
