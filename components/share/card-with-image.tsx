import Image from "next/image";

interface CardWithImageComponentProps {
  readonly imageSource: string;
  readonly title?: string;
}

export default function CardWithImageComponent({
  imageSource,
  title,
}: CardWithImageComponentProps) {
  return (
    <div className="flex flex-col gap-10 bg-white p-5">
      <div className="flex justify-center items-center w-full min-h-[200px] h-full">
        <Image src={imageSource} alt="model" loading="lazy" />
      </div>
      {title ? (
        <div className="flex justify-start">
          <h1 className="font-semibold text-2xl text-gray-700 uppercase">
            {title}
          </h1>
        </div>
      ) : null}
    </div>
  );
}
