"use client";

import { Button } from "@/components/ui/button";
import FooterComponent from "../footer/footer";

import ExampleBrosur1 from "@/public/assets/images/brosur-1.svg";
import ExampleBrosur2 from "@/public/assets/images/brosur-2.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function PPDBComponent() {
  const router = useRouter();
  return (
    <div className="w-full h-full min-h-screen overflow-hidden">
      <h1 className="2xl:text-6xl lg:text-4xl text-2xl uppercase text-center font-semibold text-white mt-48">
        Penerimaan Peserta Didik Baru
        <br />
        (PPDB)
      </h1>
      <div className="flex flex-col justify-center gap-5">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-20">
          <div className="w-full lg:h-[700px] h-[400px] bg-white flex object-cover overflow-hidden p-4">
            <Image src={ExampleBrosur1} alt="example-brosur" />
          </div>
          <div className="w-full lg:h-[700px] h-[400px] bg-white flex object-cover overflow-hidden p-4">
            <Image src={ExampleBrosur2} alt="example-brosur" />
          </div>
        </div>
        <Button
          onClick={() => router.push("https://wa.me/6282311436428")}
          variant="destructive"
          size="lg"
          className="uppercase text-xl font-semibold py-10 lg:px-20 px-10 text-center lg:mx-auto mx-0 mt-5"
        >
          Daftar Sekarang
        </Button>
      </div>
      <FooterComponent />
    </div>
  );
}
