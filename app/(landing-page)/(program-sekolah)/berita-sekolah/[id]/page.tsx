import DetailPageComponent from "@/components/share/pages/detail-page";
import { getDataPosts } from "@/helpers/api";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SMP NEGERI 1 DOBO | Berita Sekolah",
  description: "Halaman Berita Sekolah SMP Negeri 1 DOBO",
};

export async function generateStaticParams() {
  const data = await getDataPosts();

  const result = data?.map((data: any) => ({
    id: data?.id.toString(),
  }));

  return result;
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
