"use client";

import { Button } from "@/components/ui/button";
import FooterComponent from "../footer/footer";
import { SimpleFormComponent } from "../form/simple-form";

import ExampleImage6 from "@/public/assets/images/example-6.svg";
import CardWithImageComponentAndDownloadFile from "../card/card-with-image-and-download-file";
import { useEffect, useState } from "react";

export default function EPerpusComponent() {
  const [result, setResult] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [valueText, setValueText] = useState<string>("");

  const onChangeValue = (e: any) => setValueText(e.target.value);

  const paramsUrl = {
    list: "list",
    search: `search?search=${valueText ?? ""}`,
  };

  const fetchingData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://admin.smpnegeri1dobo.sch.id/api/books/${
          valueText === "" ? `${paramsUrl.list}` : `${paramsUrl.search}`
        }`
      );
      const result = await response.json();

      if (result) {
        setResult(result?.data);
      }

      setIsLoading(false);
    } catch (error) {
      console.log("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  const renderElementBuku = () => {
    if (!isLoading) {
      if (result?.length === 0 || result === undefined) {
        return (
          <h3 className="text-center font-bold text-white text-4xl">
            Tidak Ada Data / Buku Kosong
          </h3>
        );
      } else {
        return result?.map((data: any) => (
          <div
            className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 justify-center"
            key={data?.id}
          >
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
    fetchingData();
  }, []);

  return (
    <div
      className="flex flex-col gap-10 w-full min-h-screen h-full"
      data-aos="fade-up"
    >
      <h1 className="text-center text-white 2xl:text-6xl lg:text-4xl text-2xl font-semibold mt-44 mb-8 uppercase">
        E-Perpus
      </h1>
      <div className="flex lg:flex-row flex-col items-center justify-between w-full gap-3 lg:p-5 p-3 bg-white overflow-hidden">
        <SimpleFormComponent
          inputType="text"
          inputName="e-raport"
          placeholder="Ketik Judul Buku"
          customClassName="bg-gray-100 rounded-lg flex px-5 text-lg"
          value={valueText}
          onChange={onChangeValue}
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
      {renderElementBuku()}
      <FooterComponent />
    </div>
  );
}
