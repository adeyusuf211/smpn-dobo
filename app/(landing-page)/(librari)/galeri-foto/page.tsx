import GaleriFotoComponent from "@/components/share/pages/galeri-foto";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SMP NEGERI 1 DOBO | Galeri Foto",
  description: "Halaman Tenaga Galeri Foto SMP Negeri 1 DOBO",
};

export default function GaleriFotoPage() {
  return <GaleriFotoComponent />;
}
