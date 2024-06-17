"use client";

import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

interface CardWithImageComponentProps {
  readonly keyData: any;
  readonly imageSource: StaticImageData;
  readonly filePath?: string;
  readonly pathToView?: any;
  readonly title?: string;
  readonly description?: string;
  readonly author?: string;
  readonly publisherYear?: string;
}

export default function CardWithImageComponentAndDownloadFile({
  keyData,
  imageSource,
  filePath,
  pathToView,
  author,
  title,
  description,
  publisherYear,
}: CardWithImageComponentProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleDownload = async () => {
    setIsLoading(true);
    if (!filePath) {
      // Tambahkan penanganan error yang sesuai, misal: tampilkan pesan ke pengguna
      setIsLoading(false);
      return; // Menghentikan eksekusi fungsi jika pdfPath tidak valid
    }
    try {
      const response = await fetch(filePath);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${title}.pdf`; // Nama file yang diunduh
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      setIsLoading(false);
    } catch (error) {
      console.error("Error downloading PDF:", error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-[500px] flex-col gap-10 bg-white p-5">
      <div
        className="flex justify-center items-center w-full min-h-[200px] h-full overflow-hidden p-5 mt-5"
        key={keyData}
      >
        <Image
          src={imageSource}
          alt="model"
          loading="lazy"
          className="w-full object-cover flex"
        />
      </div>
      <div className="flex flex-col my-3 gap-1">
        <div className="flex gap-3">
          <p className="text-sm text-gray-500">
            Penulis: {author}, {publisherYear}
          </p>
        </div>
        <h3 className="font-bold text-3xl text-gray-700">
          {title?.toUpperCase()}
        </h3>
        <p className="font-reguler text-sm text-gray-500">
          {description ?? "No Description"}
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 w-full mb-2">
          <Button
            size="lg"
            variant="destructive"
            className="w-full"
            onClick={() => window.open(pathToView, "_blank")}
          >
            Lihat
          </Button>
          <Button
            size="lg"
            variant="blue"
            className="w-full"
            onClick={handleDownload}
          >
            {isLoading ? "Mendownload..." : "Download PDF"}
          </Button>
        </div>
      </div>
    </div>
  );
}
