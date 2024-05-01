import CardWithImageComponent from "@/components/share/card-with-image";
import FooterComponent from "@/components/share/footer";

import ExampleImage6 from "@/public/assets/images/example-6.svg";

export default function RedaksiPendidikPage() {
  return (
    <div className="w-full h-full min-h-screen">
      <h1 className="2xl:text-6xl lg:text-4xl text-2xl uppercase text-center font-semibold text-white mt-48">
        Redaksi Pendidik
      </h1>
      <div className="my-20 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 justify-center">
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
      </div>
      <FooterComponent />
    </div>
  );
}
