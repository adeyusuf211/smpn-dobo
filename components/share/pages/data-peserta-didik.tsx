"use clinet";

import ModelSekolah from "@/public/assets/images/Foto Siswa/model.png";

import SimpleCardComponent from "../card/simple-card";

export default function DataPesertaDidikComponent() {
  return (
    <div className="flex flex-col gap-10 w-full min-h-screen h-full">
      <h1 className="text-center text-white 2xl:text-6xl lg:text-4xl font-semibold lg:mt-44 mt-20 mb-8 uppercase">
        Data Peserta Didik
      </h1>
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
        <SimpleCardComponent
          image={ModelSekolah}
          name="Your Name"
          buttons={["Manajemen"]}
        />
        <SimpleCardComponent
          image={ModelSekolah}
          name="Your Name"
          buttons={["Guru Vokasi", "Wali Kelas X"]}
        />
        <SimpleCardComponent
          image={ModelSekolah}
          name="Your Name"
          buttons={["Guru Sarjana", "Wali Kelas X"]}
        />
        <SimpleCardComponent
          image={ModelSekolah}
          name="Your Name"
          buttons={["Manajemen"]}
        />
        <SimpleCardComponent
          image={ModelSekolah}
          name="Your Name"
          buttons={["Guru Vokasi", "Wali Kelas X"]}
        />
        <SimpleCardComponent
          image={ModelSekolah}
          name="Your Name"
          buttons={["Manajemen"]}
        />
        <SimpleCardComponent
          image={ModelSekolah}
          name="Your Name"
          buttons={["Guru Vokasi", "Wali Kelas X"]}
        />
        <SimpleCardComponent
          image={ModelSekolah}
          name="Your Name"
          buttons={["Manajemen"]}
        />
        <SimpleCardComponent
          image={ModelSekolah}
          name="Your Name"
          buttons={["Guru Vokasi", "Wali Kelas X"]}
        />
        <SimpleCardComponent
          image={ModelSekolah}
          name="Your Name"
          buttons={["Guru Vokasi", "Wali Kelas X"]}
        />
      </div>
      <FooterComponent />
    </div>
  );
}
