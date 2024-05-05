import FooterComponent from "@/components/share/footer/footer";
import VideoPlayerComponent from "@/components/share/video/video-player";
import ModelSekolahImage from "@/public/assets/images/model-sekolah.png";

import ModelSekolah from "@/public/assets/images/Foto Siswa/model.png";
import FotoGuru1 from "@/public/assets/images/Foto Guru/1.avif";
import FotoGuru2 from "@/public/assets/images/Foto Guru/2.avif";
import FotoGuru3 from "@/public/assets/images/Foto Guru/3.avif";
import FotoGuru4 from "@/public/assets/images/Foto Guru/4.avif";
import FotoGuru5 from "@/public/assets/images/Foto Guru/5.avif";
import FotoGuru6 from "@/public/assets/images/Foto Guru/6.avif";
import FotoGuru7 from "@/public/assets/images/Foto Guru/7.avif";
import FotoGuru8 from "@/public/assets/images/Foto Guru/8.avif";

import Image from "next/image";

const URL_YOUTUBE = "https://www.youtube.com/embed/xDlaALV5j04";

export default function MplsPage() {
  const imagesLists = [
    FotoGuru1,
    FotoGuru2,
    FotoGuru3,
    FotoGuru4,
    FotoGuru5,
    FotoGuru6,
    FotoGuru7,
    FotoGuru8,
  ];

  return (
    <div className="w-full min-h-screen h-full flex flex-col gap-5 items-center">
      <div className="grid lg:grid-cols-2 grid-cols-1 h-full min-h-screen mt-20">
        <div className="relative bottom-0 mt-32 lg:p-4 p-0">
          <Image
            src={ModelSekolah}
            style={{ objectFit: "cover" }}
            alt="model"
            className="w-full h-[500px]"
          />
        </div>
        <div className="w-full h-full flex items-center">
          <div className="bg-white p-10">
            <h1 className="lg:text-4xl font-semibold text-2xl uppercase mb-5">
              Tentang SMP Negeri 1 DOBO
            </h1>
            <p className="text-lg font-regular">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              pariatur voluptas unde molestias veniam quas ducimus suscipit,
              possimus nulla. Minima enim quidem quos dignissimos voluptatem!
            </p>
            <br />
            <p className="text-lg font-regular">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
              ullam maiores sequi, asperiores numquam fugit, odit doloremque
              vitae voluptatem quibusdam architecto porro pariatur tempora
              repellat repellendus nostrum, maxime consequatur hic? Ratione fuga
              ipsum vel provident nobis error commodi consectetur id nihil
              inventore incidunt eius, sint laudantium earum facere praesentium
              impedit fugit reprehenderit qui.
            </p>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col gap-10 w-full h-full">
        <h1 className="text-white font-bold mt-10 text-center uppercase 2xl:text-6xl lg:text-4xl text-xl">
          Guru Tutor Pengajar
        </h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
          {imagesLists.map((src, index) => (
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
      <div className="relative flex flex-col gap-10 w-full h-full my-10">
        <h1 className="text-white font-bold 2xl:text-6xl lg:text-4xl text-xl text-center uppercase">
          Kumpulan video MPLS
        </h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 justify-center">
          <VideoPlayerComponent title="Video 1" sourceVideo={URL_YOUTUBE} />
          <VideoPlayerComponent title="Video 1" sourceVideo={URL_YOUTUBE} />
          <VideoPlayerComponent title="Video 1" sourceVideo={URL_YOUTUBE} />
          <VideoPlayerComponent title="Video 1" sourceVideo={URL_YOUTUBE} />
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}
