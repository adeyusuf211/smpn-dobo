import RedaksiPendidikComponent from "@/components/share/pages/redaksi-pendidik";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SMP NEGERI 1 DOBO | Redaksi Pendidik",
  description: "Halaman Redaksi Pendidik SMP Negeri 1 DOBO",
};

export default function RedaksiPendidikPage() {
  return <RedaksiPendidikComponent />;
}
