import PemilihanKetuaOSISComponent from "@/components/share/pages/pemilihan-ketua-osis";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SMP NEGERI 1 DOBO | Pemilihan Ketua OSIS",
  description: "Halaman Pemilihan Ketua OSIS SMP Negeri 1 DOBO",
};

export default function PemilihanKetuaOSISPage() {
  return <PemilihanKetuaOSISComponent />;
}
