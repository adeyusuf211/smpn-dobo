import DataPesertaDidikComponent from "@/components/share/pages/data-peserta-didik";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SMP NEGERI 1 DOBO | Data Peserta Didik",
  description: "Halaman Data Peserta Didik SMP Negeri 1 DOBO",
};
export default function DataPesertaDidikPage() {
  return <DataPesertaDidikComponent />;
}
