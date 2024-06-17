"use client";

import { Button } from "@/components/ui/button";
import FooterComponent from "../footer/footer";
import { SimpleFormComponent } from "../form/simple-form";
import { SimpleSelectBoxComponent } from "../input/simple-selectbox";

import ExampleImage6 from "@/public/assets/images/example-6.svg";
import CardWithImageComponentAndDownloadFile from "../card/card-with-image-and-download-file";
import { getDataBuku } from "@/helpers/fetching-data";
import { useEffect, useState } from "react";

const dummyData = ["Terbaru", "Terpopuler"];

export default function EPerpusComponent() {
  const [result, setResult] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchingData = async () => {
    try {
      setIsLoading(true);
      const response = await getDataBuku();

      if (response) {
        setResult(response?.data);
      }
      setIsLoading(false);
    } catch (error) {
      console.log("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  const renderElementBuku = () => {
    if (!isLoading) {
      return result?.map((data: any) => (
        <>
          {data?.length < 1 ? (
            <h3 className="text-center font-bold text-white text-4xl">
              Tidak Ada Data / Buku Kosong
            </h3>
          ) : (
            <CardWithImageComponentAndDownloadFile
              keyData={data?.id}
              imageSource={data?.images ?? ExampleImage6}
              title={data?.title}
              author={data?.author}
              publisherYear={data?.publication_year}
              description={data?.description}
              filePath={`${process.env.API_BASE_URL}/download/books/${data?.id}`}
              pathToView={data?.pdf}
            />
          )}
        </>
      ));
    }
  };

  useEffect(() => {
    fetchingData();
  }, []);

  return (
    <div
      className="flex flex-col gap-10 w-full min-h-screen h-full"
      data-aos="fade-up"
    >
      <h1 className="text-center text-white 2xl:text-6xl lg:text-4xl text-xl font-semibold lg:mt-44 mt-20 mb-8 uppercase">
        E-Perpus
      </h1>
      <div className="flex items-center justify-between gap-3 w-full p-5 bg-white">
        <SimpleFormComponent
          inputType="text"
          inputName="e-raport"
          placeholder="Ketik Judul Buku"
          customClassName="bg-gray-100 rounded-lg flex px-5 text-lg"
        />
        <SimpleSelectBoxComponent placeholder="Filter" inputData={dummyData} />
        <Button size="lg" variant="destructive" className="text-lg">
          Cari
        </Button>
      </div>
      {isLoading && (
        <div className="flex justify-center items-center w-full">
          <h3 className="text-white font-semibold text-2xl">Loading...</h3>
        </div>
      )}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 justify-center">
        {renderElementBuku()}
      </div>
      <FooterComponent />
    </div>
  );
}
