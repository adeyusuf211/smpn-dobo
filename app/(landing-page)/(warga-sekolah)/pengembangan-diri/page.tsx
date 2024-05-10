import PengembanganDiriComponent from "@/components/share/pages/pengembangan-diri";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SMP NEGERI 1 DOBO | Pengembangan Diri",
  description: "Halaman Pengembangan Diri SMP Negeri 1 DOBO",
};

export default function PengembanganDiriPage() {
  return <PengembanganDiriComponent />;
}
