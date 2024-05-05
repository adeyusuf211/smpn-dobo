import FotoGuru1 from ".../public/assets/images/Foto Guru/1.avif";
import FotoGuru2 from ".../public/assets/images/Foto Guru/2.avif";
import FotoGuru3 from ".../public/assets/images/Foto Guru/3.avif";
import FotoGuru4 from ".../public/assets/images/Foto Guru/4.avif";

import Image from "next/image";

export default function ExsmpleComponent() {
  const imagesPath = [FotoGuru1, FotoGuru2, FotoGuru3, FotoGuru4];

  return (
    <div className="w-full min-h-screen h-full flex flex-col gap-5 items-center">
      <div className="relative flex flex-col gap-10 w-full h-full">
        <h1 className="text-white font-bold text-3xl mt-10 text-center uppercase">
          Guru Tutor Pengajar
        </h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
          {imagesPath.map((src, index) => (
            <div
              className="p-2 bg-white flex justify-center items-center w-full min-h-[300px] h-full"
              key={index}
            >
              <Image
                src={src}
                style={{ objectFit: "cover" }}
                alt="model"
                loading="lazy"
                className="w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
