import { Button } from "@/components/ui/button";
import FooterComponent from "../footer/footer";
import { SimpleFormComponent } from "../form/simple-form";
import { SimpleSelectBoxComponent } from "../input/simple-selectbox";
import CardWithImageComponent from "../card/card-with-image";

import ExampleImage6 from "@/public/assets/images/example-6.svg";

const dummyData = ["Terbaru", "Terpopuler"];

const dummyDataBuku = [
  {
    image: ExampleImage6,
    title: "Title Book Here",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident earum mollitia magni rerum neque vero!",
  },
  {
    image: ExampleImage6,
    title: "Title Book Here",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident earum mollitia magni rerum neque vero!",
  },
  {
    image: ExampleImage6,
    title: "Title Book Here",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident earum mollitia magni rerum neque vero!",
  },
  {
    image: ExampleImage6,
    title: "Title Book Here",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident earum mollitia magni rerum neque vero!",
  },
];

export default function EPerpusComponent() {
  return (
    <div
      className="flex flex-col gap-10 w-full min-h-screen h-full"
      data-aos="fade-up"
    >
      <h1 className="text-center text-white 2xl:text-6xl lg:text-4xl text-xl font-semibold lg:mt-44 mt-20 mb-8 uppercase">
        E-Perpus
      </h1>
      <div className="flex items-center justify-between gap-3 w-full p-5 bg-white">
        <SimpleFormComponent
          inputType="text"
          inputName="e-raport"
          placeholder="Ketik Judul Buku"
          customClassName="bg-gray-100 rounded-lg flex px-5 text-lg"
        />
        <SimpleSelectBoxComponent placeholder="Filter" inputData={dummyData} />
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
              description={data.description}
              buttons={["Lihat", "Download"]}
            />
          </div>
        ))}
      </div>
      <FooterComponent />
    </div>
  );
}
