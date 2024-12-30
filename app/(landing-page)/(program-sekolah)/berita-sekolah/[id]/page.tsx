import DetailPageComponent from "@/components/share/pages/detail-page";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SMP NEGERI 1 DOBO | Berita Sekolah",
  description: "Halaman Berita Sekolah SMP Negeri 1 DOBO",
};

async function fetchAllData() {
  let allData: any = [];
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    const response = await fetch(
      `https://admin.smpnegeri1dobo.sch.id/api/get-posts?page=${page}`
    );
    const result = await response.json();
    allData = [...allData, ...result.data];
    hasMore = result.hasMore; // Pastikan ini sesuai dengan API Anda
    page++;
  }

  return allData;
}

export async function generateStaticParams() {
  const allData = await fetchAllData();

  const paramsId = allData.map((data: any) => ({
    id: data?.id.toString(),
  }));

  return paramsId;
}

export default async function DetailBeritaSekolahPage({ params }: any) {
  const { id } = params;

  const keyData = ["name", "image", "intro", "content"];

  return (
    <DetailPageComponent
      parameter={id}
      url="get-posts"
      keyData={keyData}
      category="Berita Sekolah"
      redirect="berita-sekolah"
    />
  );
}
