"use client";

import { useState } from "react";
import SimpleCardComponent from "@/components/share/card/simple-card";
import FooterComponent from "@/components/share/footer/footer";

import FotoGuru1 from "@/public/assets/images/Foto Guru/1.avif";
import FotoGuru2 from "@/public/assets/images/Foto Guru/2.avif";
import FotoGuru3 from "@/public/assets/images/Foto Guru/3.avif";
import FotoGuru4 from "@/public/assets/images/Foto Guru/4.avif";
import FotoGuru5 from "@/public/assets/images/Foto Guru/5.avif";
import FotoGuru6 from "@/public/assets/images/Foto Guru/6.avif";
import FotoGuru7 from "@/public/assets/images/Foto Guru/7.avif";
import FotoGuru8 from "@/public/assets/images/Foto Guru/8.avif";
import FotoGuru9 from "@/public/assets/images/Foto Guru/9.avif";
import FotoGuru10 from "@/public/assets/images/Foto Guru/10.avif";
import FotoGuru11 from "@/public/assets/images/Foto Guru/11.avif";
import FotoGuru12 from "@/public/assets/images/Foto Guru/12.avif";
import FotoGuru13 from "@/public/assets/images/Foto Guru/13.avif";
import FotoGuru14 from "@/public/assets/images/Foto Guru/14.avif";
import FotoGuru15 from "@/public/assets/images/Foto Guru/15.avif";
import FotoGuru16 from "@/public/assets/images/Foto Guru/16.avif";
import FotoGuru17 from "@/public/assets/images/Foto Guru/17.avif";
import FotoGuru18 from "@/public/assets/images/Foto Guru/18.avif";
import FotoGuru19 from "@/public/assets/images/Foto Guru/19.avif";
import FotoGuru20 from "@/public/assets/images/Foto Guru/20.avif";
import FotoGuru21 from "@/public/assets/images/Foto Guru/21.avif";
import FotoGuru22 from "@/public/assets/images/Foto Guru/22.avif";
import FotoGuru23 from "@/public/assets/images/Foto Guru/23.avif";
import FotoGuru24 from "@/public/assets/images/Foto Guru/24.avif";
import FotoGuru25 from "@/public/assets/images/Foto Guru/25.avif";
import FotoGuru26 from "@/public/assets/images/Foto Guru/26.avif";
import FotoGuru27 from "@/public/assets/images/Foto Guru/27.avif";
import FotoGuru28 from "@/public/assets/images/Foto Guru/28.avif";
import FotoGuru29 from "@/public/assets/images/Foto Guru/29.avif";
import FotoGuru30 from "@/public/assets/images/Foto Guru/30.avif";
import FotoGuru31 from "@/public/assets/images/Foto Guru/31.avif";
import FotoGuru32 from "@/public/assets/images/Foto Guru/32.avif";
import FotoGuru33 from "@/public/assets/images/Foto Guru/33.avif";
import FotoGuru34 from "@/public/assets/images/Foto Guru/34.avif";
import FotoGuru35 from "@/public/assets/images/Foto Guru/35.avif";
import FotoGuru36 from "@/public/assets/images/Foto Guru/36.avif";
import FotoGuru37 from "@/public/assets/images/Foto Guru/37.avif";
import FotoGuru38 from "@/public/assets/images/Foto Guru/38.avif";
import FotoGuru39 from "@/public/assets/images/Foto Guru/39.avif";
import FotoGuru40 from "@/public/assets/images/Foto Guru/40.avif";
import FotoGuru41 from "@/public/assets/images/Foto Guru/41.avif";
import SimplePaginationComponent from "../pagination/simple-pagination";
import { Button } from "@/components/ui/button";

export default function TenagaPendidikDanPegawaiComponent() {
  const imageList = [
    FotoGuru1,
    FotoGuru2,
    FotoGuru3,
    FotoGuru4,
    FotoGuru5,
    FotoGuru6,
    FotoGuru7,
    FotoGuru8,
    FotoGuru9,
    FotoGuru10,
    FotoGuru11,
    FotoGuru12,
    FotoGuru13,
    FotoGuru14,
    FotoGuru15,
    FotoGuru16,
    FotoGuru17,
    FotoGuru18,
    FotoGuru19,
    FotoGuru20,
    FotoGuru21,
    FotoGuru22,
    FotoGuru23,
    FotoGuru24,
    FotoGuru25,
    FotoGuru26,
    FotoGuru27,
    FotoGuru28,
    FotoGuru29,
    FotoGuru30,
    FotoGuru31,
    FotoGuru32,
    FotoGuru33,
    FotoGuru34,
    FotoGuru35,
    FotoGuru36,
    FotoGuru37,
    FotoGuru38,
    FotoGuru39,
    FotoGuru40,
    FotoGuru41,
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 8;
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = imageList.slice(indexOfFirstImage, indexOfLastImage);

  const totalPages = Math.ceil(imageList.length / imagesPerPage);

  const paginate = (pageNumber: any) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    const visiblePages = 3;
    let start = Math.max(1, currentPage - Math.floor(visiblePages / 2));
    let end = Math.min(totalPages, start + visiblePages - 1);

    if (totalPages > visiblePages && end === totalPages) {
      start = Math.max(1, end - visiblePages + 1);
    }

    for (let i = start; i <= end; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => paginate(i)}
          className={`px-3 py-1 mx-1 ${
            currentPage === i ? "bg-gray-700 text-white" : "bg-gray-300"
          }`}
        >
          {i}
        </button>
      );
    }

    return buttons;
  };

  return (
    <div className="flex flex-col gap-10 w-full min-h-screen h-full">
      <h1 className="text-center text-white 2xl:text-6xl lg:text-4xl text-xl font-semibold lg:mt-44 mt-20 mb-8 uppercase">
        Tenaga Pendidik dan Pegawai
      </h1>
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
        {currentImages.map((src, index) => (
          <SimpleCardComponent
            image={src}
            name="Your Name"
            buttons={["Guru"]}
            key={index}
          />
        ))}
      </div>
      <div className="flex justify-center mt-5">
        <Button
          size="lg"
          onClick={() => paginate(currentPage - 1)}
          className={`w-20 py-1 ${
            currentPage === 1
              ? "bg-blue-500 cursor-not-allowed"
              : "bg-blue-700 text-white"
          }`}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        {renderPaginationButtons()}
        <Button
          size="lg"
          onClick={() => paginate(currentPage + 1)}
          className={`px-3 py-1 mx-3 w-20 ${
            currentPage === totalPages
              ? "bg-blue-500 cursor-not-allowed"
              : "bg-blue-700 text-white"
          }`}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
      <FooterComponent />
    </div>
  );
}
