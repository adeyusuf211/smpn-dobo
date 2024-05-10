import AgendaSekolahComponent from "@/components/share/pages/agenda-sekolah";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SMP NEGERI 1 DOBO | Agenda Sekolah",
  description: "Halaman Agenda Sekolah SMP Negeri 1 DOBO",
};

export default function AgendaSekolahPage() {
  return <AgendaSekolahComponent />;
}
