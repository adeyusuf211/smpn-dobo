import CardWithImageComponent from "../card/card-with-image";
import FooterComponent from "../footer/footer";

import ExampleImage6 from "@/public/assets/images/example-6.svg";

export default function PengembanganDiriComponent() {
  return (
    <div className="w-full h-full min-h-screen">
      <h1 className="2xl:text-6xl lg:text-4xl text-2xl uppercase text-center font-semibold text-white mt-48">
        Pengembangan Diri (Eskul)
      </h1>
      <div className="my-20 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 justify-center">
        <CardWithImageComponent
          imageSource={ExampleImage6}
          title="Your Info Title Here"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, dolore?"
          key={1}
        />
        <CardWithImageComponent
          imageSource={ExampleImage6}
          title="Your Info Title Here"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, dolore?"
          key={2}
        />
        <CardWithImageComponent
          imageSource={ExampleImage6}
          title="Your Info Title Here"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, dolore?"
          key={3}
        />
        <CardWithImageComponent
          imageSource={ExampleImage6}
          title="Your Info Title Here"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, dolore?"
          key={4}
        />
        <CardWithImageComponent
          imageSource={ExampleImage6}
          title="Your Info Title Here"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, dolore?"
          key={5}
        />
        <CardWithImageComponent
          imageSource={ExampleImage6}
          title="Your Info Title Here"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, dolore?"
          key={6}
        />
        <CardWithImageComponent
          imageSource={ExampleImage6}
          title="Your Info Title Here"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, dolore?"
          key={7}
        />
        <CardWithImageComponent
          imageSource={ExampleImage6}
          title="Your Info Title Here"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, dolore?"
          key={8}
        />
      </div>
      <FooterComponent />
    </div>
  );
}
