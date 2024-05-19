import { Button } from "@/components/ui/button";
import FooterComponent from "../footer/footer";
import { SimpleFormComponent } from "../form/simple-form";

export default function ERaportComponent() {
  return (
    <div
      className="flex flex-col gap-10 w-full min-h-screen h-full"
      data-aos="fade-up"
    >
      <h1 className="text-center text-white 2xl:text-6xl lg:text-4xl text-xl font-semibold lg:mt-44 mt-20 mb-8 uppercase">
        E-Raport
      </h1>
      <div className="flex items-center justify-between gap-3 w-full p-5 bg-white">
        <SimpleFormComponent
          inputType="text"
          inputName="e-raport"
          placeholder="Ketik NISN atau nama siswa"
          customClassName="bg-gray-200 rounded-lg flex px-5 text-lg"
        />
        <Button size="lg" variant="destructive" className="text-lg">
          Cari
        </Button>
      </div>
      <FooterComponent />
    </div>
  );
}
