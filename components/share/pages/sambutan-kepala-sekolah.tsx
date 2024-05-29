"use client";

import FooterComponent from "../footer/footer";

export default function SambutanKepalaSekolahComponent() {
  return (
    <div
      className="flex flex-col gap-10 w-full min-h-screen h-full"
      data-aos="fade-up"
    >
      <h1 className="text-center text-white 2xl:text-6xl lg:text-4xl text-xl font-semibold lg:mt-44 mt-20 mb-8 uppercase">
        Sambutan Kepala Sekolah
      </h1>
      <FooterComponent />
    </div>
  );
}
