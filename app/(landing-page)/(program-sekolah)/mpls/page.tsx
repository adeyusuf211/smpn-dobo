import FooterComponent from "@/components/share/footer/footer";
import VideoPlayerComponent from "@/components/share/video/video-player";
import ModelSekolahImage from "@/public/assets/images/model-sekolah.png";
import FotoGuru1 from "@/public/assets/images/Foto Guru/foto-1.jpg";
import FotoGuru2 from "@/public/assets/images/Foto Guru/foto-2.jpg";
import FotoGuru3 from "@/public/assets/images/Foto Guru/foto-3.jpg";
import FotoGuru4 from "@/public/assets/images/Foto Guru/foto-4.jpg";
import FotoGuru5 from "@/public/assets/images/Foto Guru/foto-5.jpg";
import FotoGuru6 from "@/public/assets/images/Foto Guru/foto-6.jpg";
import FotoGuru7 from "@/public/assets/images/Foto Guru/foto-7.jpg";
import FotoGuru8 from "@/public/assets/images/Foto Guru/foto-8.jpg";
import FotoGuru9 from "@/public/assets/images/Foto Guru/foto-9.jpg";
import FotoGuru10 from "@/public/assets/images/Foto Guru/foto-10.jpg";
import FotoGuru11 from "@/public/assets/images/Foto Guru/foto-11.jpg";
import FotoGuru12 from "@/public/assets/images/Foto Guru/foto-12.jpg";
import { Metadata } from "next";
import Image from "next/image";

const URL_YOUTUBE = "https://www.youtube.com/embed/xDlaALV5j04";

export const metadata: Metadata = {
  title: "SMP NEGERI 1 DOBO | MPLS",
  description:
    "Halaman untum masa pengenalan lingkungan sekolah SMP Negeri 1 DOBO",
};

export default function MplsPage() {
  return (
    <div className="w-full min-h-screen h-full flex flex-col gap-5 items-center">
      <div className="grid lg:grid-cols-2 grid-cols-1 h-full min-h-screen mt-20">
        <div className="relative bottom-0 lg:p-4 p-0 mb-5">
          <Image
            src={ModelSekolahImage}
            style={{ objectFit: "cover" }}
            alt="model"
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
        <h1 className="text-white font-bold text-3xl mt-10 text-center uppercase">
          Guru Tutor Pengajar
        </h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
          <div className="p-6 bg-white flex justify-center items-center w-full min-h-[300px] h-full">
            <Image src={FotoGuru1} style={{ objectFit: "cover" }} alt="model" />
          </div>
          <div className="p-6 bg-white flex justify-center items-center w-full min-h-[300px] h-full">
            <Image src={FotoGuru2} style={{ objectFit: "cover" }} alt="model" />
          </div>
          <div className="p-6 bg-white flex justify-center items-center w-full min-h-[300px] h-full">
            <Image src={FotoGuru3} style={{ objectFit: "cover" }} alt="model" />
          </div>
          <div className="p-6 bg-white flex justify-center items-center w-full min-h-[300px] h-full">
            <Image src={FotoGuru4} style={{ objectFit: "cover" }} alt="model" />
          </div>
          <div className="p-6 bg-white flex justify-center items-center w-full min-h-[300px] h-full">
            <Image src={FotoGuru5} style={{ objectFit: "cover" }} alt="model" />
          </div>
          <div className="p-6 bg-white flex justify-center items-center w-full min-h-[300px] h-full">
            <Image src={FotoGuru6} style={{ objectFit: "cover" }} alt="model" />
          </div>
          <div className="p-6 bg-white flex justify-center items-center w-full min-h-[300px] h-full">
            <Image src={FotoGuru7} style={{ objectFit: "cover" }} alt="model" />
          </div>
          <div className="p-6 bg-white flex justify-center items-center w-full min-h-[300px] h-full">
            <Image src={FotoGuru8} style={{ objectFit: "cover" }} alt="model" />
          </div>
          <div className="p-6 bg-white flex justify-center items-center w-full min-h-[300px] h-full">
            <Image src={FotoGuru9} style={{ objectFit: "cover" }} alt="model" />
          </div>
          <div className="p-6 bg-white flex justify-center items-center w-full min-h-[300px] h-full">
            <Image
              src={FotoGuru10}
              style={{ objectFit: "cover" }}
              alt="model"
            />
          </div>
          <div className="p-6 bg-white flex justify-center items-center w-full min-h-[300px] h-full">
            <Image
              src={FotoGuru11}
              style={{ objectFit: "cover" }}
              alt="model"
            />
          </div>
          <div className="p-6 bg-white flex justify-center items-center w-full min-h-[300px] h-full">
            <Image
              src={FotoGuru12}
              style={{ objectFit: "cover" }}
              alt="model"
            />
          </div>
        </div>
      </div>
      <div className="relative flex flex-col gap-10 w-full h-full my-10">
        <h1 className="text-white font-bold text-3xl text-center uppercase">
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
