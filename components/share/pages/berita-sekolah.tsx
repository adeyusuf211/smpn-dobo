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
        `https://admin.smpnegeri1dobo.sch.id/api/get-posts?search=test&limit=10&page=1`
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

  const renderElementBeritaSekolah = () => {
    if (!isLoading) {
      if (result?.length === 0 || result === undefined) {
        return (
          <h3 className="text-center font-bold text-white text-4xl">
            Tidak Ada Data / Berita Kosong
          </h3>
        );
      } else {
        return (
          <div className="my-20 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 justify-center">
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
      <div className="flex lg:flex-row flex-col gap-5">
        {renderElementBeritaSekolah()}
        <div className="flex flex-col gap-3 lg:w-[60%] w-full h-full bg-white my-20 lg:p-10 py-10 px-4">
          <h3 className="font-bold text-2xl mb-2">Berita Populer</h3>
          <hr className="border-2 border-gray-300 mb-5" />
          <div className="flex flex-col gap-5">
            <ListCardComponent
              title="Pengumuman Libur Lebaran"
              description="lorem ipsum dolor sit amet"
              imageSource={""}
            />
            <ListCardComponent
              title="Pengumuman Juara Lomba"
              description="lorem ipsum dolor sit amet"
              imageSource={""}
            />
            <ListCardComponent
              title="Pengumuman Libur Semester"
              description="lorem ipsum dolor sit amet"
              imageSource={""}
            />
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}
