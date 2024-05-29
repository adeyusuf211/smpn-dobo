import SambutanKepalaSekolahComponent from "@/components/share/pages/sambutan-kepala-sekolah";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SMP NEGERI 1 DOBO | E-Perpus",
  description: "Halaman Sambutan Kepala Sekolah SMP Negeri 1 DOBO",
};

export default function SambutanKepalaSekolahPage() {
  return <SambutanKepalaSekolahComponent />;
}
