import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";

interface CardWithImageComponentProps {
  readonly keyData?: any;
  readonly badge?: string;
  readonly imageSource: StaticImageData;
  readonly title?: string;
  readonly description?: string;
  readonly buttons?: string[];
}

export default function CardWithImageComponent({
  keyData,
  badge,
  imageSource,
  title,
  description,
  buttons,
}: CardWithImageComponentProps) {
  return (
    <div className="flex h-[500px] flex-col gap-10 bg-white p-3" key={keyData}>
      <div className="flex justify-center items-center w-full min-h-[200px] h-full overflow-hidden">
        <Image
          src={imageSource}
          alt="model"
          loading="lazy"
          className="w-full object-cover flex"
        />
      </div>
      <div className="flex flex-col gap-2">
        {badge ? (
          <small className="w-full">
            <span className="font-semibold">Terbit : </span> {badge}
          </small>
        ) : null}
        {title ? (
          <div className="flex justify-start">
            <h1 className="font-semibold text-2xl text-gray-700 uppercase">
              {title}
            </h1>
          </div>
        ) : null}
        {description ? (
          <div className="flex justify-start">
            <h1 className="font-semibold text-base text-gray-700">
              {description}
            </h1>
          </div>
        ) : null}
        <div className={`${buttons ? "flex gap-2 w-full mt-5 mb-2" : ""}`}>
          {buttons?.map((button) => (
            <Button
              size="lg"
              variant="destructive"
              className="w-full"
              key={button}
            >
              {button}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
