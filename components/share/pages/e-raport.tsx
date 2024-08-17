"use client";

import { Button } from "@/components/ui/button";
import FooterComponent from "@/components/share/footer/footer";
import { SimpleFormComponent } from "@/components/share/form/simple-form";
import PlaceHolderImage from "@/public/assets/images/placeholder-1.svg";

import IconsPDF from "@/public/assets/images/icons/icons-pdf.svg";
import { useEffect, useState } from "react";
import PaginationButtons from "../pagination/page";
import SimpleCardComponent from "../card/simple-card";

export default function ERaportComponent() {
  const [result, setResult] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [valueText, setValueText] = useState<string>("");

  const [totalData, setTotalData] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState(1);

  const dataPerPage = 10;
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = result?.slice(indexOfFirstData, indexOfLastData);
  const totalPages = Math.ceil(totalData / dataPerPage);

  const onChangeValue = (e: any) => setValueText(e.target.value);

  const fetchingData = async (page?: any, id?: any) => {
    try {
      setIsLoading(true);
      let response;
      if (!id) {
        response = await fetch(
          `https://admin.smpnegeri1dobo.sch.id/api/get-students?limit=10&page=${page}&search=${
            valueText ?? ""
          }`
        );
      } else {
        response = await fetch(
          `https://admin.smpnegeri1dobo.sch.id/api/get-students/${id}`
        );
      }
      const result = await response.json();

      if (result) {
        setResult(result?.data);
        setTotalData(result?.pagination?.total_items);
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

  const renderElements = () => {
    if (!isLoading) {
      if (result?.length === 0 || result === undefined) {
        return (
          <h3 className="text-center font-bold text-white text-4xl">
            Tidak Ada Data Siswa
          </h3>
        );
      } else {
        return result?.map((data) => (
          <div data-aos="fade-up">
            <SimpleCardComponent
              key={data?.id}
              image={data?.photo !== "" || PlaceHolderImage}
              name={data?.name}
              buttons={["Lihat"]}
              onClickDetail={() => fetchingData("1", data?.nisn)}
            />
          </div>
        ));
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
    <div className="flex flex-col gap-10 w-full min-h-screen h-full">
      <h1 className="text-center text-white 2xl:text-6xl lg:text-4xl text-2xl font-semibold mt-44 mb-8 uppercase">
        E-Raport
      </h1>
      <div className="flex lg:flex-row flex-col items-center justify-between gap-3 w-full lg:p-5 p-3 bg-white overflow-x-hidden">
        <SimpleFormComponent
          inputType="text"
          inputName="e-raport"
          placeholder="Ketik NISN atau nama siswa"
          customClassName="bg-gray-200 rounded-lg flex px-5 text-lg"
          onChange={onChangeValue}
          value={valueText}
        />
        <Button
          size="lg"
          variant="destructive"
          className="text-lg lg:w-32 w-full"
          onClick={fetchingData}
          disabled={valueText === "" || isLoading}
        >
          {isLoading ? "..." : "Cari"}
        </Button>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 justify-center">
        {renderElements()}
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
