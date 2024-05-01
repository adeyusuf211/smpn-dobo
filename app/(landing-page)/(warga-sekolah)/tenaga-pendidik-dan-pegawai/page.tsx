import FooterComponent from "@/components/share/footer";
import SimpleCardComponent from "@/components/share/simple-card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SMP NEGERI 1 DOBO | Tenaga Pendidik dan Pegawai",
  description: "Halaman Tenaga Pendidik dan Pegawai SMP Negeri 1 DOBO",
};
export default function TenagaPendidikDanPegawaiPage() {
  return (
    <div className="flex flex-col gap-10 w-full min-h-screen h-full">
      <h1 className="text-center text-white 2xl:text-6xl lg:text-4xl font-semibold lg:mt-44 mt-20 mb-8 uppercase">
        Tenaga Pendidik dan Pegawai
      </h1>
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
        <SimpleCardComponent name="Your Name" buttons={["Manajemen"]} />
        <SimpleCardComponent
          name="Your Name"
          buttons={["Guru Vokasi", "Wali Kelas X"]}
        />
        <SimpleCardComponent
          name="Your Name"
          buttons={["Guru Sarjana", "Wali Kelas X"]}
        />
        <SimpleCardComponent name="Your Name" buttons={["Manajemen"]} />
        <SimpleCardComponent
          name="Your Name"
          buttons={["Guru Vokasi", "Wali Kelas X"]}
        />
        <SimpleCardComponent name="Your Name" buttons={["Manajemen"]} />
        <SimpleCardComponent
          name="Your Name"
          buttons={["Guru Vokasi", "Wali Kelas X"]}
        />
        <SimpleCardComponent name="Your Name" buttons={["Manajemen"]} />
        <SimpleCardComponent
          name="Your Name"
          buttons={["Guru Vokasi", "Wali Kelas X"]}
        />
        <SimpleCardComponent
          name="Your Name"
          buttons={["Guru Vokasi", "Wali Kelas X"]}
        />
      </div>
      <FooterComponent />
    </div>
  );
}
