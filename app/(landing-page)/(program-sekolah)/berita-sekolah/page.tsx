import BeritaSekolahComponent from "@/components/share/pages/berita-sekolah";

import { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "SMP NEGERI 1 DOBO | Berita Sekolah",
  description: "Halaman Berita Sekolah SMP Negeri 1 DOBO",
};

export default function BeritaSekolahPage() {
  return <BeritaSekolahComponent />;
}
