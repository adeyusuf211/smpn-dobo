import CardWithImageComponent from "@/components/share/card-with-image";
import FooterComponent from "@/components/share/footer";
import ListCardComponent from "@/components/share/list-card";

import ExampleImage6 from "@/public/assets/images/example-6.svg";

export default function BeritaSekolahPage() {
  return (
    <div className="w-full h-full min-h-screen">
      <h1 className="2xl:text-6xl lg:text-4xl text-2xl uppercase text-center font-semibold text-white mt-48">
        Berita Sekolah
      </h1>
      <div className="flex lg:flex-row flex-col gap-5">
        <div className="my-20 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 justify-center">
          <CardWithImageComponent
            imageSource={ExampleImage6}
            badge="1 Mei 2024"
            title="Your Info Title Here"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, dolore?"
          />
          <CardWithImageComponent
            imageSource={ExampleImage6}
            badge="2 Mei 2024"
            title="Your Info Title Here"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, dolore?"
          />
          <CardWithImageComponent
            imageSource={ExampleImage6}
            badge="3 Mei 2024"
            title="Your Info Title Here"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, dolore?"
          />
          <CardWithImageComponent
            imageSource={ExampleImage6}
            badge="4 Mei 2024"
            title="Your Info Title Here"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, dolore?"
          />
          <CardWithImageComponent
            imageSource={ExampleImage6}
            badge="1 Mei 2024"
            title="Your Info Title Here"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, dolore?"
          />
          <CardWithImageComponent
            imageSource={ExampleImage6}
            badge="2 Mei 2024"
            title="Your Info Title Here"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, dolore?"
          />
        </div>
        <div className="flex flex-col gap-3 lg:w-[60%] w-full h-full bg-white my-20 lg:p-10 py-10 px-4">
          <h3 className="font-bold text-2xl mb-2">Berita Populer</h3>
          <hr className="border-2 border-gray-300 mb-5" />
          <div className="flex flex-col gap-5">
            <ListCardComponent
              title="Pengumuman Libur Lebaran"
              description="lorem ipsum dolor sit amet"
              imageSource={ExampleImage6}
            />
            <ListCardComponent
              title="Pengumuman Juara Lomba"
              description="lorem ipsum dolor sit amet"
              imageSource={ExampleImage6}
            />
            <ListCardComponent
              title="Pengumuman Libur Semester"
              description="lorem ipsum dolor sit amet"
              imageSource={ExampleImage6}
            />
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}
