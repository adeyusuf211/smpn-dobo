import Image from "next/image";

interface ImageCardProps {
  readonly imageSource: string;
  readonly alt: string;
  readonly width?: number;
  readonly height?: number;
}

export default function ImageCardComponent({
  imageSource,
  alt,
  width,
  height,
}: ImageCardProps) {
  return (
    <div className="w-full h-[250px] bg-white overflow-hidden flex rounded-2xl">
      <Image
        src={imageSource}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        className="w-full h-full flex object-cover"
      />
    </div>
  );
}
