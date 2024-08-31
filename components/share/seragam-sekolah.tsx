"use client";

import Image from "next/image";

import { useAOS } from "@/hooks/useAOS";
import { useFetchData } from "@/hooks/useFetchData";

export default function SeragamSekolahComponent() {
  useAOS();

  const { data, error, loading } = useFetchData(
    "uniforms",
    `https://admin.smpnegeri1dobo.sch.id/api/get-uniforms`,
    {
      staleTime: 5 * 60 * 1000, // Override default staleTime
      cacheTime: 5 * 60 * 1000, // Override default cacheTime
      method: "GET", // Default method
    }
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!Array.isArray(data)) return <p>Data is not available</p>;

  return (
    <section id="seragam">
      <h1
        className="lg:text-5xl text-2xl font-semibold uppercase text-center text-white p-6"
        data-aos="fade-up"
      >
        seragam sekolah
      </h1>
      <div className="flex flex-col mt-10">
        <div className="flex justify-end w-full">
          <div className="relative w-full">
            <div className="flex lg:flex-row flex-col justify-evenly">
              <div className="rounded-rectangle" />
              <div className="rounded-rectangle" />
              <div className="rounded-rectangle" />
              <div className="rounded-rectangle" />
              <div className="rounded-rectangle" />
            </div>
            <div className="flex lg:flex-row flex-col lg:gap-10 gap-20 w-full absolute top-0">
              {data?.map((result: any) => (
                <div className="flex justify-between z-10" key={result.id}>
                  <Image
                    src={result.image}
                    width={250}
                    height={250}
                    alt={result?.name}
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full h-full bg-blue-secondary p-4 flex lg:flex-row flex-col justify-between pr-32">
          {data.map((result) => (
            <h3
              className="font-bold text-xl text-white uppercase"
              key={result.id}
            >
              {result.name}
            </h3>
          ))}
        </div>
      </div>
    </section>
  );
}
