"use client";

import { Button } from "@/components/ui/button";
import FooterComponent from "@/components/share/footer/footer";
import { SimpleFormComponent } from "@/components/share/form/simple-form";
import CardWithImageComponentAndDownloadFile from "@/components/share/card/card-with-image-and-download-file";

import IconsPDF from "@/public/assets/images/icons/icons-pdf.svg";

const dummyDataBuku = [
  {
    image: IconsPDF,
    title: "Student Name",
  },
];

export default function ERaportComponent() {
  return (
    <div className="flex flex-col gap-10 w-full min-h-screen h-full">
      <h1 className="text-center text-white 2xl:text-6xl lg:text-4xl text-xl font-semibold lg:mt-44 mt-20 mb-8 uppercase">
        E-Raport
      </h1>
      <div className="flex items-center justify-between gap-3 w-full p-5 bg-white">
        <SimpleFormComponent
          inputType="text"
          inputName="e-raport"
          placeholder="Ketik NISN atau nama siswa"
          customClassName="bg-gray-200 rounded-lg flex px-5 text-lg"
        />
        <Button size="lg" variant="destructive" className="text-lg">
          Cari
        </Button>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 justify-center">
        {dummyDataBuku?.map((data) => (
          <div key={data.title} data-aos="fade-up">
            <CardWithImageComponentAndDownloadFile
              imageSource={data.image}
              filePath="/assets/pdf/example.pdf"
            />
          </div>
        ))}
      </div>
      <FooterComponent />
    </div>
  );
}