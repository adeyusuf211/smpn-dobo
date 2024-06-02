import VisiMisiComponent from "@/components/share/pages/visi-misi";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SMP NEGERI 1 DOBO | Visi Misi",
  description: "Halaman Visi Misi SMP Negeri 1 DOBO",
};

export default function VisiMisi() {
  return <VisiMisiComponent />;
}
