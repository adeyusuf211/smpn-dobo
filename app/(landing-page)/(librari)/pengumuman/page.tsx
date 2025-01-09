import PengumumanComponent from "@/components/share/pages/pengumuman";

import { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "SMP NEGERI 1 DOBO | Pengumuman",
  description: "Halaman Pengumuman SMP Negeri 1 DOBO",
};

export default function PengumumanPage() {
  return <PengumumanComponent />;
}
