import { FaWhatsapp } from "react-icons/fa";
import { Button } from "../ui/button";

export default function ButtonWhatsappComponent() {
  return (
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
  );
}
