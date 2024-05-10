import PPDBComponent from "@/components/share/pages/ppdb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SMP NEGERI 1 DOBO | PPDB",
  description: "Halaman Penerimaan Peserta Didik Baru (PPDB) SMP Negeri 1 DOBO",
};

export default function PPDBPage() {
  return <PPDBComponent />;
}
