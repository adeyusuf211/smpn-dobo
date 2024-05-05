import TenagaPendidikDanPegawaiComponent from "@/components/share/pages/tenaga-pendidik-dan-pegawai";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SMP NEGERI 1 DOBO | Tenaga Pendidik dan Pegawai",
  description: "Halaman Tenaga Pendidik dan Pegawai SMP Negeri 1 DOBO",
};

export default function TenagaPendidikDanPegawaiPage() {
  return <TenagaPendidikDanPegawaiComponent />;
}
