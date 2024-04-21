interface HeroProps {
  readonly showAddressLabel?: boolean;
}

import Image from "next/image";
import TaglineComponent from "./tagline";
import ModelSekolahImage from "@/public/assets/images/model-sekolah.png";

export default function HeroComponent({ showAddressLabel }: HeroProps) {
  return (
    <div className="w-full h-screen relative">
      <div className="flex md:flex-row flex-col justify-between">
        <div className="w-full h-full flex justify-center items-center">
          <div className="lg:w-[200px] w-[150px] lg:h-[200px] h-[150px] flex justify-center items-center bg-gray-300 absolute lg:top-0 top-10 right-0 lg:mt-[300px] mt-[80px] mr-[10%] rounded-full">
            <h3 className="font-semibold text-gray-700 text-lg text-center uppercase">
              Logo BAN SM <br /> Here
            </h3>
          </div>
        </div>
        <div className="w-[550px] h-[600px] lg:p-4 p-0 absolute bottom-0 lg:left-10 -left-10 mb-5">
          <Image
            src={ModelSekolahImage}
            fill
            style={{ objectFit: "cover" }}
            alt="model"
          />
        </div>
      </div>
      <div className="absolute bottom-0 left-0">
        <TaglineComponent showAddressLabel={showAddressLabel} />
      </div>
    </div>
  );
}
