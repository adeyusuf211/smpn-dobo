"use client";

import { useEffect, useState } from "react";
import CardWithImageComponent from "../card/card-with-image";

import { allImages as imageList } from "@/helpers/all-static-images";
import FooterComponent from "../footer/footer";
import { Button } from "@/components/ui/button";

interface Galeri {
  id: number;
  thumbnail: string;
  name: string;
}

export default function GaleriFotoComponent() {
  const [data, setData] = useState<Galeri[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 8;
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = imageList.slice(indexOfFirstImage, indexOfLastImage);

  const totalPages = Math.ceil(imageList.length / imagesPerPage);

  const BASE_PATH_URL_API = "https://admin.smpnegeri1dobo.sch.id/api";

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

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${BASE_PATH_URL_API}/get-galeries`);
      const result: any = await response.json();
      setData(result?.data);
      setLoading(false);
    } catch (error) {
      console.log("Errror: ", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full h-full min-h-screen">
      <h1 className="2xl:text-6xl lg:text-4xl text-2xl uppercase text-center font-semibold text-white mt-48">
        Arsip Foto
      </h1>
      <div className="my-20 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 justify-center">
        {loading && <h1 className="text-white text-xl">Loading...</h1>}
        {!loading &&
          data?.map((item) => (
            <CardWithImageComponent
              imageSource={item?.thumbnail}
              title={item?.name}
              key={1}
            />
          ))}
      </div>
      {/* <div className="flex justify-center mt-5">
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
      </div> */}
      <FooterComponent />
    </div>
  );
}
