import Image from "next/image";
import ListBackgroundCard from "@/public/assets/images/background-card.svg";

const LIST_SERAGAM: string[] = [
  "biru dan putih",
  "batik",
  "batik",
  "kostum",
  "pramuka",
] as const;

export default function SeragamSekolahComponent() {
  return (
    <section id="seragam">
      <h1 className="lg:text-5xl text-2xl font-semibold uppercase text-center text-white p-6">
        seragam sekolah
      </h1>
      <div className="flex flex-col gap-10">
        <div className="flex justify-end w-full -mt-[300px]">
          <div className="relative w-full">
            <div className=" w-full h-[650px] flex justify-end p-5">
              <Image
                src={ListBackgroundCard}
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  marginLeft: "150px",
                }}
                fill
                alt="custom-card-background"
              />
            </div>
          </div>
        </div>
        <div className="w-full h-full bg-blue-secondary p-4 flex justify-between pr-32">
          {LIST_SERAGAM.map((seragam) => (
            <h3 className="font-bold text-xl text-white uppercase">
              {seragam}
            </h3>
          ))}
        </div>
      </div>
    </section>
  );
}
