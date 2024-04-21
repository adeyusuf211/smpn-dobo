import Image from "next/image";
import UnderConstructionImage from "@/public/assets/images/under-construction.svg";
import { Button } from "../ui/button";
import Link from "next/link";

export default function UnderConstructionComponent() {
  return (
    <div className="w-full min-h-screen md:mt-0 mt-48 h-full bg-transparent flex justify-center items-center">
      <div className="2xl:p-[200] p-6 bg-white w-full grid lg:grid-cols-2 grid-cols-1">
        <div className="lg:p-10 p-4 flex flex-col gap-5 justify-center">
          <h1 className="2xl:text-5xl xl:text-4xl text-xl uppercase font-bold">
            Halaman ini sedang dalam tahap pengerjaan, silahkan kembali lagi
            nanti
          </h1>
          <Link href="/">
            <Button
              variant="destructive"
              className="uppercase lg:text-2xl text-md lg:py-5 py-2 lg:px-5 px-2 font-bold h-[80px] w-full text-start flex tems-center"
            >
              <span className="py-3 px-7">BACK TO HOME</span>
            </Button>
          </Link>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src={UnderConstructionImage}
            width={400}
            height={400}
            alt="under-construction"
          />
        </div>
      </div>
    </div>
  );
}
