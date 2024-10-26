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
import SimpleListCardComponent from "../card/simple-list-card";

interface Props {
  id?: string;
}

export default function LaporanDanaBosComponent({ id }: Props) {
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

  const rootUrl = "https://admin.smpnegeri1dobo.sch.id/api";

  const fetchingData = async (page?: any) => {
    try {
      setIsLoading(true);

      const response = await fetch(
        `${rootUrl}/school-operational-assistences?limit=10&page=${page}&search=${
          valueText ?? ""
        }`
      );

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

  const downloadDataBos = async (id: any) => {
    try {
      setIsLoadingButton(true);

      const response = await fetch(`${rootUrl}/download/bos/${id}`, {
        method: "GET",
      });

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      // Buat link download dan klik secara otomatis
      const link = document.createElement("a");
      link.href = url;
      link.download = `rapor-${id}.pdf`;
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

  const openNewTab = (id: any) => {
    return window.open(`${rootUrl}/show-file/bos/${id}`, "_blank");
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
          Tidak Ada Data Dana Bos
        </h3>
      );
    }

    if (!isLoading && result?.length !== 0) {
      return renderElementData();
    }
  };

  const renderElementData = () => {
    return (
      <div className="w-full">
        {result?.map((data) => (
          <div data-aos="fade-up" key={data?.id}>
            <SimpleListCardComponent
              key={data?.id}
              title={data?.name}
              onClickDetail={() => openNewTab(data?.id)}
              onClickDownload={() => downloadDataBos(data?.id)}
              loadingButton={isLoadingButton}
            />
          </div>
        ))}
      </div>
    );
  };

  useEffect(() => {
    fetchingData("1");
  }, []);

  return (
    <div className="flex flex-col gap-10 w-full min-h-screen h-full">
      <h1 className="text-center text-white 2xl:text-6xl lg:text-4xl text-2xl font-semibold mt-44 mb-8 uppercase">
        Laporan Dana BOS
      </h1>
      <div className="flex flex-col w-full">{renderElements()}</div>
      <FooterComponent />
    </div>
  );
}
