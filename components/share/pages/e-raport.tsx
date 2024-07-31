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
      <h1 className="text-center text-white 2xl:text-6xl lg:text-4xl text-2xl font-semibold mt-44 mb-8 uppercase">
        E-Raport
      </h1>
      <div className="flex lg:flex-row flex-col items-center justify-between gap-3 w-full lg:p-5 p-3 bg-white overflow-x-hidden">
        <SimpleFormComponent
          inputType="text"
          inputName="e-raport"
          placeholder="Ketik NISN atau nama siswa"
          customClassName="bg-gray-200 rounded-lg flex px-5 text-lg"
        />
        <Button
          size="lg"
          variant="destructive"
          className="text-lg lg:w-32 w-full"
        >
          Cari
        </Button>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 justify-center">
        {dummyDataBuku?.map((data) => (
          <div key={data.title} data-aos="fade-up">
            <CardWithImageComponentAndDownloadFile
              keyData={data.title}
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
