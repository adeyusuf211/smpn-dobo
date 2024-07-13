"use client";

import { useEffect, useState } from "react";
import SimpleCardComponent from "@/components/share/card/simple-card";
import FooterComponent from "@/components/share/footer/footer";

import { Button } from "@/components/ui/button";
import { useAOS } from "@/hooks/useAOS";

export default function TenagaPendidikDanPegawaiComponent() {
  useAOS();

  const [result, setResult] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState(1);

  const dataPerPage = 10;
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = result?.slice(indexOfFirstData, indexOfLastData);
  const totalPages = Math.ceil(result?.length / dataPerPage);

  const fetchingData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/teachers");
      const result = await response.json();

      if (response) {
        setResult(result.response?.data);
      }

      setIsLoading(false);
    } catch (error) {
      console.log("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  const paginate = async (pageNumber: any) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://admin.smpnegeri1dobo.sch.id/api/teachers/list?limit=10&page=${pageNumber}`
        );
        const result = await response.json();

        if (response) {
          setResult(result?.data);
        }

        setIsLoading(false);
      } catch (error) {
        console.log("Error: ", error);
      }
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

  const renderElementTenagaPendidikDanPegawai = () => {
    if (isLoading) {
      return (
        <div className="flex justify-center items-center w-full">
          <h3 className="text-white font-semibold text-2xl">Loading...</h3>
        </div>
      );
    } else {
      return (
        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
          {currentData?.map((data) => (
            <SimpleCardComponent
              image={data?.avatar}
              name={data?.name}
              buttons={[data?.status_kepegawaian]}
              key={data?.id}
            />
          ))}
        </div>
      );
    }
  };

  useEffect(() => {
    fetchingData();
  }, []);

  console.log(currentData);

  return (
    <div
      className="flex flex-col gap-10 w-full min-h-screen h-full"
      data-aos="fade-up"
    >
      <h1 className="text-center text-white 2xl:text-6xl lg:text-4xl text-xl font-semibold lg:mt-44 mt-20 mb-8 uppercase">
        Tenaga Pendidik dan Pegawai
      </h1>
      {renderElementTenagaPendidikDanPegawai()}
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
