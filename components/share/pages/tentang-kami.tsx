"use client";

import Image from "next/image";
import { useAOS } from "@/hooks/useAOS";
import LogoSekolah from "@/public/assets/images/logo1.png";
import FooterComponent from "@/components/share/footer/footer";

export default function TentangKamiComponent() {
  useAOS();
  return (
    <div
      className="flex flex-col gap-10 w-full min-h-screen h-full"
      data-aos="fade-up"
    >
      <h1 className="text-center text-white 2xl:text-6xl lg:text-4xl text-xl font-semibold lg:mt-44 mt-20 mb-8 uppercase">
        Tentang Kami
      </h1>
      <div className="my-10 flex md:flex-row flex-col md:gap-10 gap-0">
        <div className="flex flex-col gap-5 w-full">
          <div className="bg-white w-full rounded-2xl h-[350px] flex">
            <Image src="" alt="banner sambutan kepala sekolah" fill />
          </div>
          <div className="relative">
            <h3 className="font-bold text-xl text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              ipsa.
            </h3>
            <br />
            <br />
            <h3 className="text-white font-regular text-xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
              omnis officiis minima. Corporis facilis, possimus, tempore ab
              molestiae doloremque optio sint autem ex laudantium voluptates,
              inventore veritatis voluptate eligendi in reiciendis et
              temporibus. Esse, quasi. Praesentium nisi animi ipsa quis
              blanditiis, non debitis. Eaque nostrum, officia error nihil
              assumenda sint?
            </h3>
            <br />
            <h3 className="text-white font-regular text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              dolorem mollitia perspiciatis, dolores reprehenderit excepturi
              cumque possimus? Expedita, laudantium aut quis accusamus magnam
              nobis veritatis!
            </h3>
          </div>
        </div>
        <div className="h-full w-full max-w-[35%] bg-white p-10 rounded-xl">
          <div className="flex justify-center items-center py-5">
            <Image
              src={LogoSekolah}
              alt="logo sekolah"
              width={200}
              height={200}
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex justify-between mt-5">
              <h3 className="font-bold text-xl text-gray-700">Publish</h3>
              <h3 className="font-semibold text-xl text-gray-700">
                02 Juni 2024
              </h3>
            </div>
            <h3 className="font-bold text-xl text-gray-700">
              Dibaca 2000 Kali
            </h3>
          </div>
          <div className="w-full flex flex-col mt-7">
            <h3 className="text-3xl font-bold text-gray-700 mb-5">
              Tulisan Lainnya
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex gap-3 cursor-pointer hover:bg-gray-200 p-3">
                <div className=" w-32 h-32">
                  <Image
                    src={LogoSekolah}
                    alt="gambar"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="flex flex-col gap-1 w-full ">
                  <h4 className="text-gray-700 text-lg font-semibold">
                    Oleh: SMP Negeri 1 Dobo
                  </h4>
                  <h2 className="font-bold text-xl text-blue-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </h2>
                </div>
              </div>
              <div className="flex gap-3 cursor-pointer hover:bg-gray-200 p-3">
                <div className=" w-32 h-32">
                  <Image
                    src={LogoSekolah}
                    alt="gambar"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="flex flex-col gap-1 w-full ">
                  <h4 className="text-gray-700 text-lg font-semibold">
                    Oleh: SMP Negeri 1 Dobo
                  </h4>
                  <h2 className="font-bold text-xl text-blue-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </h2>
                </div>
              </div>
              <div className="flex gap-3 cursor-pointer hover:bg-gray-200 p-3">
                <div className=" w-32 h-32">
                  <Image
                    src={LogoSekolah}
                    alt="gambar"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="flex flex-col gap-1 w-full ">
                  <h4 className="text-gray-700 text-lg font-semibold">
                    Oleh: SMP Negeri 1 Dobo
                  </h4>
                  <h2 className="font-bold text-xl text-blue-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}
