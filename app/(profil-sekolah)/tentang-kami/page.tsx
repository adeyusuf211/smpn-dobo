import TentangKamiComponent from "@/components/share/pages/tentang-kami";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SMP NEGERI 1 DOBO | Tentang Kami",
  description: "Halaman Tentang Kami SMP Negeri 1 DOBO",
};

export default function TentangKamiPage() {
  return <TentangKamiComponent />;
}
