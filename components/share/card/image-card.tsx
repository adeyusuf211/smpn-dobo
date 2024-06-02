"use client";

import Image from "next/image";
import { useState } from "react";
import LightboxComponent from "@/components/share/viewer/lightbox";

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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        className="w-full h-[250px] bg-white overflow-hidden flex rounded-2xl cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <Image
          src={imageSource}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          className="w-full h-full flex object-cover"
        />
      </div>
      {/* {isOpen && <LightboxComponent images={imageSource} />} */}
    </div>
  );
}
