import LaporanDanaBosComponent from "@/components/share/pages/laporan-dana-bos";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SMP NEGERI 1 DOBO | Laporan Dana Bos",
  description: "Halaman Laporan Dana BOS SMP Negeri 1 DOBO",
};

export default function LaporanDanaBosPage() {
  return <LaporanDanaBosComponent />;
}
