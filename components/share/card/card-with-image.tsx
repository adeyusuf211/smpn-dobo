import Image from "next/image";

interface CardWithImageComponentProps {
  readonly badge?: string;
  readonly imageSource: string;
  readonly title?: string;
  readonly description?: string;
}

export default function CardWithImageComponent({
  badge,
  imageSource,
  title,
  description,
}: CardWithImageComponentProps) {
  return (
    <div className="flex flex-col gap-10 bg-white p-5">
      <div className="flex justify-center items-center w-full min-h-[200px] h-full">
        <Image src={imageSource} alt="model" loading="lazy" />
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
      </div>
    </div>
  );
}