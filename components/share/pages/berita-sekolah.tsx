"use client";

import { useEffect, useState } from "react";
import CardWithImageComponent from "../card/card-with-image";
import ListCardComponent from "../card/list-card";
import FooterComponent from "../footer/footer";

import { formatDateIndonesian } from "@/utils/format-date";
import { sliceText } from "@/utils/slice-text";

export default function BeritaSekolahComponent() {
  const [result, setResult] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchingData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://admin.smpnegeri1dobo.sch.id/api/get-posts?limit=10&page=1`
      );
      const result = await response?.json();

      const filterData = result?.data.filter(
        (data: any) => data.category === "Berita Sekolah" || data.category === "Pengumuman"
      );

      if (result) {
        setResult(filterData);
      }

      setIsLoading(false);
    } catch (error) {
      console.log("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  const renderElement = () => {
    if (!isLoading) {
      if (result?.length === 0 || result === undefined) {
        return (
          <h3 className="text-center font-bold text-white text-4xl">
            Tidak Ada Data / Berita Kosong
          </h3>
        );
      } else {
        return (
          <div className="my-20 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 justify-center">
            {result?.map((data) => (
              <CardWithImageComponent
                imageSource={data?.meta_og_image}
                badge={`${formatDateIndonesian(data?.published_at)} | By : ${
                  data?.created_by_alias
                }`}
                title={sliceText(data?.name, 35)}
                description={sliceText(data?.content, 50)}
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
    fetchingData();
  }, []);

  return (
    <div className="w-full h-full min-h-screen">
      <h1 className="2xl:text-6xl lg:text-4xl text-2xl uppercase text-center font-semibold text-white mt-48">
        Berita Sekolah
      </h1>
      <div className="flex lg:flex-row flex-col gap-5">{renderElement()}</div>
      <FooterComponent />
    </div>
  );
}
