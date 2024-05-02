import Image from "next/image";
import ModelSekolahImage from "@/public/assets/images/model-sekolah.png";
import { Button } from "@/components/ui/button";

interface SimpleCardCompoenntProps {
  name: string;
  buttons: string[];
}

export default function SimpleCardComponent({
  name,
  buttons,
}: SimpleCardCompoenntProps) {
  return (
    <div className="flex flex-col gap-2 bg-white">
      <div className="p-6 flex bg-blue-300 justify-center items-center w-full min-h-[300px] h-full relative">
        <Image
          src={ModelSekolahImage}
          style={{ objectFit: "cover" }}
          alt="model"
          className="absolute bottom-0"
        />
      </div>
      <h3 className="font-semibold text-xl text-gray-700 text-center">
        {name}
      </h3>
      <div className="flex justify-center gap-2 p-4">
        {buttons?.map((button) => (
          <Button
            size="sm"
            variant="destructive"
            key={button}
            className="w-full flex flex-1"
          >
            {button}
          </Button>
        ))}
      </div>
    </div>
  );
}
