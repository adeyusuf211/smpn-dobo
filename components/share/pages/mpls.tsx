"use client";

import Image from "next/image";
import FooterComponent from "../footer/footer";
import VideoPlayerComponent from "../video/video-player";

import ModelSekolah from "@/public/assets/images/Foto Siswa/model.webp";

import { fotoGuruImages as imagesLists } from "@/helpers/all-static-images";
import { URL_YOUTUBE } from "@/helpers/all-static-videos";
import { useState } from "react";

import { Button } from "@/components/ui/button";

export default function MPLSComponent() {
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 8;
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = imagesLists?.slice(indexOfFirstImage, indexOfLastImage);

  const totalPages = Math.ceil(imagesLists?.length / imagesPerPage);

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
    <div className="w-full min-h-screen h-full flex flex-col gap-5 items-center">
      <div className="grid lg:grid-cols-2 grid-cols-1 h-full min-h-screen mt-20">
        <div className="relative bottom-0 mt-32 lg:p-4 p-0">
          <Image
            src={ModelSekolah}
            style={{ objectFit: "cover" }}
            alt="model"
            className="lg:w-full w-[320px] lg:h-full h-[320px] object-cover"
          />
        </div>
        <div className="w-full h-full flex items-center">
          <div className="bg-white lg:p-10 p-4">
            <h1 className="lg:text-4xl font-semibold text-2xl uppercase mb-5">
              Tentang SMP Negeri 1 DOBO
            </h1>
            <p className="text-lg font-regular">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              pariatur voluptas unde molestias veniam quas ducimus suscipit,
              possimus nulla. Minima enim quidem quos dignissimos voluptatem!
            </p>
            <br />
            <p className="text-lg font-regular">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
              ullam maiores sequi, asperiores numquam fugit, odit doloremque
              vitae voluptatem quibusdam architecto porro pariatur tempora
              repellat repellendus nostrum, maxime consequatur hic? Ratione fuga
              ipsum vel provident nobis error commodi consectetur id nihil
              inventore incidunt eius, sint laudantium earum facere praesentium
              impedit fugit reprehenderit qui.
            </p>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col gap-10 w-full h-full">
        <h1 className="text-white font-bold mt-10 text-center uppercase 2xl:text-6xl lg:text-4xl text-xl">
          Guru Tutor Pengajar
        </h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
          {currentImages?.map((src, index) => (
            <div
              className="p-2 bg-white flex justify-center items-center w-full min-h-[300px] h-full"
              key={index}
            >
              <Image
                src={src}
                style={{ objectFit: "cover" }}
                alt="model"
                loading="lazy"
                className="w-full h-full"
              />
            </div>
          ))}
        </div>
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
      <div className="relative flex flex-col gap-10 w-full h-full my-10">
        <h1 className="text-white font-bold 2xl:text-6xl lg:text-4xl text-xl text-center uppercase">
          Kumpulan video MPLS
        </h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 justify-center">
          {URL_YOUTUBE?.map((url) => (
            <VideoPlayerComponent title="Video 1" sourceVideo={url} key={url} />
          ))}
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}
