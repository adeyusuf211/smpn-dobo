"use clinet";

import SimpleCardComponent from "@/components/share/card/simple-card";
import FooterComponent from "@/components/share/footer/footer";
import { fotoUtamaSiswa as ImageList } from "@/helpers/all-static-images";

export default function DataPesertaDidikComponent() {
  return (
    <div className="flex flex-col gap-10 w-full min-h-screen h-full lg:mt-0 mt-20">
      <h1 className="text-center text-white 2xl:text-6xl lg:text-4xl text-xl font-semibold lg:mt-44 mt-20 mb-8 uppercase">
        Data Peserta Didik
      </h1>
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
        {ImageList.map((image) => (
          <div key={image?.id}>
            <SimpleCardComponent image={image?.images} name={image?.name} />
          </div>
        ))}
      </div>
      <FooterComponent />
    </div>
  );
}
