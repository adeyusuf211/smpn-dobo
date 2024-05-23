"use client";

import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

interface CardWithImageComponentProps {
  readonly imageSource: StaticImageData;
  readonly filePath?: string;
}

export default function CardWithImageComponentAndDownloadFile({
  imageSource,
  filePath,
}: CardWithImageComponentProps) {
  const [isLoading, setIsLoading] = useState<Boolean>(false);

  const handleDownload = async () => {
    setIsLoading(true);
    if (!filePath) {
      console.error("PDF path is undefined.");
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
      a.download = "contoh-rapot.pdf"; // Nama file yang diunduh
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading PDF:", error);
      // Handle error (misalnya, tampilkan pesan error ke pengguna)
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex h-[500px] flex-col gap-10 bg-white p-3">
      <div className="flex justify-center items-center w-full min-h-[200px] h-full overflow-hidden p-5 mt-5">
        <Image
          src={imageSource}
          alt="model"
          loading="lazy"
          className="w-full object-cover flex"
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 w-full mt-5 mb-2">
          <Button
            size="lg"
            variant="destructive"
            className="w-full"
            onClick={() => window.open(filePath, "_blank")}
          >
            Lihat
          </Button>
          <Button
            size="lg"
            variant="blue"
            className="w-full"
            onClick={handleDownload}
          >
            {isLoading ? "Loading..." : "Download PDF"}
          </Button>
        </div>
      </div>
    </div>
  );
}
