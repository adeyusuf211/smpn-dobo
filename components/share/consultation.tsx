import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";

export default function ConsultationComponent() {
  return (
    <div className="w-full h-full bg-white mt-10">
      <Button
        variant="outline"
        className="uppercase lg:text-4xl text-md border-4 border-green-500 lg:py-5 py-2 lg:px-5 px-2 rounded-full font-bold h-full text-start flex lg:gap-3 gap-0 items-center"
      >
        <div className="lg:w-32 w-20 lg:h-32 h-20 flex justify-center rounded-full items-center bg-green-500">
          <FaWhatsapp className="text-white lg:text-7xl text-5xl" />
        </div>
        <span className="py-3 px-7">
          langsung <br /> daftar sekarang
        </span>
      </Button>
      <div className="flex flex-col mt-10 mb-5">
        <h1 className="font-semibold text-3xl text-center">
          Konsultasi Gratis
        </h1>
        <div className="flex gap-5 w-full lg:flex-nowrap flex-wrap mt-10 justify-between">
          <div className="flex gap-3 w-full">
            <div className="flex gap-5 bg-amber-600 w-full rounded-tl-full rounded-bl-full">
              <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center">
                <h3 className="text-lg">Image</h3>
              </div>
              <div className="my-auto">
                <h3 className="font-semibold text-lg text-white mr-5">
                  Your name here
                </h3>
              </div>
            </div>
          </div>
          <div className="flex gap-3 w-full">
            <div className="flex gap-5 bg-amber-600 w-full rounded-tl-full rounded-bl-full">
              <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center">
                <h3 className="text-lg">Image</h3>
              </div>
              <div className="my-auto">
                <h3 className="font-semibold text-lg text-white mr-5">
                  Your name here
                </h3>
              </div>
            </div>
          </div>
          <div className="flex gap-3 w-full">
            <div className="flex gap-5 bg-amber-600 w-full rounded-tl-full rounded-bl-full">
              <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center">
                <h3 className="text-lg">Image</h3>
              </div>
              <div className="my-auto">
                <h3 className="font-semibold text-lg text-white mr-5">
                  Your name here
                </h3>
              </div>
            </div>
          </div>
          <div className="flex gap-3 w-full">
            <div className="flex gap-5 bg-amber-600 w-full rounded-tl-full rounded-bl-full">
              <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center">
                <h3 className="text-lg">Image</h3>
              </div>
              <div className="my-auto">
                <h3 className="font-semibold text-lg text-white mr-5">
                  Your name here
                </h3>
              </div>
            </div>
          </div>
          <div className="flex gap-3 w-full">
            <div className="flex gap-5 bg-amber-600 w-full rounded-tl-full rounded-bl-full">
              <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center">
                <h3 className="text-lg">Image</h3>
              </div>
              <div className="my-auto">
                <h3 className="font-semibold text-lg text-white mr-5">
                  Your name here
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
