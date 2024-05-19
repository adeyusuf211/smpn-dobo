import { Button } from "@/components/ui/button";
import FooterComponent from "../footer/footer";
import { SimpleFormComponent } from "../form/simple-form";
import CardWithImageComponent from "../card/card-with-image";

import ExampleImageBackground from "@/public/assets/images/example-documents.svg";

const dummyData = ["Lihat", "Download PDF"];

const dummyDataBuku = [
  {
    image: ExampleImageBackground,
    title: "Student Name",
  },
  {
    image: ExampleImageBackground,
    title: "Student Name",
  },
  {
    image: ExampleImageBackground,
    title: "Student Name",
  },
  {
    image: ExampleImageBackground,
    title: "Student Name",
  },
];

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
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 justify-center">
        {dummyDataBuku?.map((data) => (
          <div key={data.title}>
            <CardWithImageComponent
              imageSource={data.image}
              title={data.title}
              buttons={dummyData}
            />
          </div>
        ))}
      </div>
      <FooterComponent />
    </div>
  );
}
