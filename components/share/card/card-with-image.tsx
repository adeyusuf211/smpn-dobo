import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";
import ExampleImage6 from "@/public/assets/images/example-6.svg";

interface CardWithImageComponentProps {
  readonly key: any;
  readonly badge?: string;
  readonly imageSource: StaticImageData;
  readonly title?: string;
  readonly description?: string;
  readonly buttons?: string[];
}

export default function CardWithImageComponent({
  key,
  badge,
  imageSource,
  title,
  description,
  buttons,
}: CardWithImageComponentProps) {
  console.log(imageSource);
  return (
    <div className="flex h-[500px] flex-col gap-10 bg-white p-3" key={key}>
      <div className="flex justify-center items-center w-full min-h-[200px] h-full overflow-hidden">
        <Image
          src={ExampleImage6}
          alt="model"
          loading="lazy"
          className="w-full object-cover flex"
          width={300}
          height={300}
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
            <h3 className="font-semibold text-2xl text-gray-700 uppercase">
              {title}
            </h3>
          </div>
        ) : null}
        {description ? (
          <div className="flex justify-start">
            <h1
              className="font-semibold text-base text-gray-700"
              dangerouslySetInnerHTML={{ __html: description }}
            />
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
