import ERaportComponent from "@/components/share/pages/e-raport";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SMP NEGERI 1 DOBO | E-Raport",
  description: "Halaman E-Raport SMP Negeri 1 DOBO",
};

export default function ERaportPage() {
  return <ERaportComponent />;
}
