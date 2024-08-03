"use client";

import { useRouter } from "next/navigation";
import { Button } from "../../ui/button";

export default function ButtonWhatsappComponent() {
  const router = useRouter();

  const urlGoogleForm =
    "https://docs.google.com/forms/d/e/1FAIpQLScD7WekI3khzfLxAMF9Br9Z9_bwmA0wq8XmUUxRc5NZV4DRiw/viewform?usp=sf_link";

  return (
    <Button
      onClick={() => router.push(urlGoogleForm)}
      variant="outline"
      className="uppercase lg:text-4xl text-md border-4 border-green-500 lg:py-5 py-2 lg:px-5 px-2 rounded-full font-bold h-full text-start flex lg:gap-3 gap-0 items-center w-full"
    >
      <span className="py-3 px-7">langsung daftar sekarang</span>
    </Button>
  );
}
