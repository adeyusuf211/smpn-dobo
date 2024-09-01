import ERaportComponent from "@/components/share/pages/e-raport";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SMP NEGERI 1 DOBO | E-Raport",
  description: "Halaman E-Raport SMP Negeri 1 DOBO",
};

export async function generateStaticParams() {
  const result = await fetch(
    "https://admin.smpnegeri1dobo.sch.id/api/get-students"
  ).then((res) => res.json());

  return result.data.map((data: any) => ({
    id: data.nisn.toString(),
  }));
}

export default async function ERaportPage({ params }: any) {
  const { id } = params;

  return <ERaportComponent id={id} />;
}
