"use client";

import Image from "next/image";
import { useAOS } from "@/hooks/useAOS";
import FooterComponent from "@/components/share/footer/footer";
import LogoSekolah from "@/public/assets/images/logo1.png";

import FotoBannerVisiMisi from "@/public/assets/images/Foto MPLS/2.webp";
import { useEffect, useState } from "react";

export default function VisiMisiComponent() {
  useAOS();

  const [result, setResult] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchingData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/informasi-sekolah");
      const result = await response.json();

      if (response) {
        setResult(result.response.data);
      }

      setIsLoading(false);
    } catch (error) {
      console.log("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  const renderElementVisiMisi = () => {
    if (isLoading) {
      return (
        <div className="flex justify-center items-center w-full">
          <h3 className="text-white font-semibold text-2xl">Loading...</h3>
        </div>
      );
    } else {
      return (
        <div className="relative mt-3">
          <h1 className="font-bold text-6xl text-white">Visi</h1>
          <br />
          <h3 className="text-white font-regular text-xl">{result.vision}</h3>
          <br />
          <h1 className="font-bold text-6xl text-white">Misi</h1>
          <br />
          <h3
            className="text-white font-regular text-xl"
            dangerouslySetInnerHTML={{ __html: result.mission }}
          />
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
      <h1 className="text-center text-white 2xl:text-6xl lg:text-4xl text-xl font-semibold lg:mt-44 mt-20 mb-8 uppercase">
        Visi Misi
      </h1>
      <div className="my-10 flex md:flex-row flex-col md:gap-10 gap-0">
        <div className="flex flex-col gap-5 w-full">
          <div className="bg-white w-full rounded-2xl h-[350px] flex">
            <Image
              src={FotoBannerVisiMisi}
              alt="banner sambutan kepala sekolah"
              style={{ objectFit: "cover", objectPosition: "bottom center" }}
              className="w-full h-full"
            />
          </div>
          {renderElementVisiMisi()}
        </div>
        <div className="h-full w-full max-w-[35%] bg-white p-10 rounded-xl">
          <div className="flex justify-center items-center py-5">
            <Image
              src={LogoSekolah}
              alt="logo sekolah"
              width={200}
              height={200}
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex justify-between mt-5">
              <h3 className="font-bold text-xl text-gray-700">Publish</h3>
              <h3 className="font-semibold text-xl text-gray-700">
                02 Juni 2024
              </h3>
            </div>
            <h3 className="font-bold text-xl text-gray-700">
              Dibaca 2000 Kali
            </h3>
          </div>
          <div className="w-full flex flex-col mt-7">
            <h3 className="text-3xl font-bold text-gray-700 mb-5">
              Tulisan Lainnya
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex gap-3 cursor-pointer hover:bg-gray-200 p-3">
                <div className=" w-32 h-32">
                  <Image
                    src={LogoSekolah}
                    alt="gambar"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="flex flex-col gap-1 w-full ">
                  <h4 className="text-gray-700 text-lg font-semibold">
                    Oleh: SMP Negeri 1 Dobo
                  </h4>
                  <h2 className="font-bold text-xl text-blue-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </h2>
                </div>
              </div>
              <div className="flex gap-3 cursor-pointer hover:bg-gray-200 p-3">
                <div className=" w-32 h-32">
                  <Image
                    src={LogoSekolah}
                    alt="gambar"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="flex flex-col gap-1 w-full ">
                  <h4 className="text-gray-700 text-lg font-semibold">
                    Oleh: SMP Negeri 1 Dobo
                  </h4>
                  <h2 className="font-bold text-xl text-blue-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </h2>
                </div>
              </div>
              <div className="flex gap-3 cursor-pointer hover:bg-gray-200 p-3">
                <div className=" w-32 h-32">
                  <Image
                    src={LogoSekolah}
                    alt="gambar"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="flex flex-col gap-1 w-full ">
                  <h4 className="text-gray-700 text-lg font-semibold">
                    Oleh: SMP Negeri 1 Dobo
                  </h4>
                  <h2 className="font-bold text-xl text-blue-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}
