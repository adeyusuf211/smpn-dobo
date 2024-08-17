import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
import PlaceHolderImage from "@/public/assets/images/placeholder-1.svg";

interface SimpleCardCompoenntProps {
  readonly image: StaticImageData;
  readonly name: string;
  readonly buttons?: string[];
  readonly key?: any;
  onClickDetail?: () => void;
}

export default function SimpleCardComponent({
  image,
  name,
  buttons,
  key,
  onClickDetail,
}: SimpleCardCompoenntProps) {
  return (
    <div className="flex flex-col gap-2 bg-white" key={key}>
      <div className="p-6 flex bg-blue-300 justify-center items-center w-full min-h-[300px] h-full relative">
        <Image
          src={image ?? PlaceHolderImage}
          alt="model"
          width={300}
          height={300}
          className="absolute bottom-0 w-full h-full flex"
          loading="lazy"
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
            onClick={onClickDetail}
          >
            {button}
          </Button>
        ))}
      </div>
    </div>
  );
}
