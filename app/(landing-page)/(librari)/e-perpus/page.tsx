import EPerpusComponent from "@/components/share/pages/e-perpus";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SMP NEGERI 1 DOBO | E-Perpus",
  description: "Halaman E-Perpus SMP Negeri 1 DOBO",
};

export default function EPerpusPage() {
  return <EPerpusComponent />;
}
