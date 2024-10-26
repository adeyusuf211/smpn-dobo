"use client";

import { Button } from "@/components/ui/button";
import FooterComponent from "@/components/share/footer/footer";
import { SimpleFormComponent } from "@/components/share/form/simple-form";
import PlaceHolderImage from "@/public/assets/images/placeholder-1.svg";

import { useEffect, useState } from "react";
import PaginationButtons from "../pagination/page";
import SimpleCardComponent from "../card/simple-card";
import { useRouter } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Props {
  id?: string;
}

export default function ERaportComponent({ id }: Props) {
  const router = useRouter();

  const [result, setResult] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoadingButton, setIsLoadingButton] = useState<boolean>(false);
  const [valueText, setValueText] = useState<string>("");

  const [totalData, setTotalData] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState(1);

  const dataPerPage = 10;
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = !id && result?.slice(indexOfFirstData, indexOfLastData);
  const totalPages = Math.ceil(totalData / dataPerPage);

  const onChangeValue = (e: any) => setValueText(e.target.value);

  const fetchingData = async (page?: any) => {
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

      const data = await response?.json();

      if (data) {
        if (!id) {
          setResult(data?.data);
          setTotalData(data?.pagination?.total);
        } else {
          setResult([data?.assesments]);
        }
      }

      setIsLoading(false);
    } catch (error) {
      console.log("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  const downloadRaport = async (assesment: any) => {
    try {
      setIsLoadingButton(true);

      const response = await fetch(
        `https://admin.smpnegeri1dobo.sch.id/api/rapor/${id}/${assesment?.rombel}/${assesment?.semester}`,
        {
          method: "GET",
        }
      );

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      // Buat link download dan klik secara otomatis
      const link = document.createElement("a");
      link.href = url;
      link.download = `rapor-${id}-${assesment?.rombel}-${assesment?.semester}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setIsLoadingButton(false);
    } catch (error) {
      console.log("Error fetching data:", error);
      setIsLoadingButton(false);
    }
  };

  const paginate = async (pageNumber: any) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      await fetchingData(pageNumber);
    }
  };

  const renderElements = () => {
    if (isLoading) {
      return (
        <div className="flex justify-center items-center w-full">
          <h3 className="text-white font-semibold text-2xl">Loading...</h3>
        </div>
      );
    }

    if (!isLoading && result?.length === 0) {
      return (
        <h3 className="text-center font-bold text-white text-4xl">
          Tidak Ada Data {!id ? "Siswa" : "Nilai"}
        </h3>
      );
    }

    if (!isLoading && result?.length !== 0) {
      return renderElementData();
    }
  };

  const renderElementData = () => {
    if (!id) {
      return (
        <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-5 justify-center">
          {result?.map((data) => (
            <div data-aos="fade-up" key={data?.id}>
              <SimpleCardComponent
                key={data?.id}
                image={data?.photo !== "" || PlaceHolderImage}
                name={data?.name}
                buttons={["Lihat"]}
                onClickDetail={() => router.push(`/e-raport/${data.nisn}`)}
              />
            </div>
          ))}
        </div>
      );
    } else {
      return (
        result !== undefined &&
        result?.map((assesment, index) => (
          <div
            data-aos="fade-up"
            key={assesment?.id ?? index}
            className="flex w-full justify-center"
          >
            <Tabs defaultValue={assesment?.rombel} className="w-[400px]">
              <TabsList className="flex">
                <TabsTrigger
                  value={assesment?.rombel}
                  defaultValue={assesment?.rombel}
                >
                  {assesment?.rombel}
                </TabsTrigger>
              </TabsList>
              <TabsContent value={assesment?.rombel}>
                <SimpleCardComponent
                  key={assesment?.rombel_id}
                  image={PlaceHolderImage}
                  name={assesment?.school_year}
                  buttons={["Download"]}
                  onClickDetail={() => downloadRaport(assesment)}
                  loadingButton={isLoadingButton}
                />
              </TabsContent>
            </Tabs>
          </div>
        ))
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
      {!id ? (
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
          >
            {isLoading ? "..." : "Cari"}
          </Button>
        </div>
      ) : null}
      {renderElements()}
      {!id ? (
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
      ) : (
        <div className="flex justify-center">
          <Button
            size="lg"
            onClick={() => router.push("/e-raport")}
            className={`px-3 py-1 mx-3 w-40 bg-blue-700 text-white flex gap-2`}
          >
            {"<<<"} <span>Back</span>
          </Button>
        </div>
      )}
      <FooterComponent />
    </div>
  );
}
