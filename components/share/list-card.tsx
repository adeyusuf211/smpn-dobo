import Image from "next/image";

interface ListCardComponentProps {
  readonly imageSource: string;
  readonly title: string;
  readonly description: string;
}

export default function ListCardComponent({
  imageSource,
  title,
  description,
}: ListCardComponentProps) {
  return (
    <div className="flex lg:flex-row flex-col gap-5 w-full cursor-pointer hover:bg-gray-200 hover:animate-out p-2">
      <div className="w-[70px] h-[70px] flex object-cover">
        <Image src={imageSource} alt="example" />
      </div>
      <div className="flex flex-col">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-gray-700">{description}</p>
      </div>
    </div>
  );
}
