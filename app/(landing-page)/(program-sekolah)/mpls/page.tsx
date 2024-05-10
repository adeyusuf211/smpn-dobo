import MPLSComponent from "@/components/share/pages/mpls";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SMP NEGERI 1 DOBO | MPLS",
  description: "Halaman MPLS SMP Negeri 1 DOBO",
};

export default function MplsPage() {
  return <MPLSComponent />;
}
