"use client";

import { useEffect, useState } from "react";
import SimpleCardComponent from "@/components/share/card/simple-card";
import FooterComponent from "@/components/share/footer/footer";
import PlaceHolderImage from "@/public/assets/images/placeholder-1.svg";

import { Button } from "@/components/ui/button";
import { useAOS } from "@/hooks/useAOS";
import PaginationButtons from "../pagination/page";

export default function TenagaPendidikDanPegawaiComponent() {
  useAOS();

  const [result, setResult] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [totalData, setTotalData] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState(1);

  const dataPerPage = 10;
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = result?.slice(indexOfFirstData, indexOfLastData);
  const totalPages = Math.ceil(totalData / dataPerPage);

  const fetchingData = async (page: any) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://admin.smpnegeri1dobo.sch.id/api/teachers/list?limit=10&page=${page}`
      );
      const result = await response.json();

      if (result) {
        setResult(result?.data);
        setTotalData(result.pagination?.total_items);
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
      await fetchingData(pageNumber);
    }
  };

  const renderElementTenagaPendidikDanPegawai = () => {
    if (!isLoading) {
      if (result?.length === 0 || result === undefined) {
        return (
          <h3 className="text-center font-bold text-white text-4xl">
            Tidak Ada Data
          </h3>
        );
      } else {
        return (
          <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
            {result?.map((data) => (
              <SimpleCardComponent
                image={data?.avatar ?? PlaceHolderImage}
                name={data?.name}
                buttons={[data?.status_kepegawaian]}
                key={data?.id}
              />
            ))}
          </div>
        );
      }
    } else {
      return (
        <div className="flex justify-center items-center w-full">
          <h3 className="text-white font-semibold text-2xl">Loading...</h3>
        </div>
      );
    }
  };

  useEffect(() => {
    fetchingData("1");
  }, []);

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
        <PaginationButtons
          currentPage={currentPage}
          totalPages={totalPages}
          paginate={paginate}
        />
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
