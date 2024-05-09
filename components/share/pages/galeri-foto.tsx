"use client";

import { useState } from "react";
import CardWithImageComponent from "../card/card-with-image";

import { allImages as imageList } from "@/helpers/all-static-images";
import FooterComponent from "../footer/footer";
import { Button } from "@/components/ui/button";

export default function GaleriFotoComponent() {
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
    <div className="w-full h-full min-h-screen">
      <h1 className="2xl:text-6xl lg:text-4xl text-2xl uppercase text-center font-semibold text-white mt-48">
        Arsip Foto
      </h1>
      <div className="my-20 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 justify-center">
        {currentImages.map((image, index) => (
          <CardWithImageComponent
            imageSource={image}
            title="Your title for image here"
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
