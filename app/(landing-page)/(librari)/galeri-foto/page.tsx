import CardWithImageComponent from "@/components/share/card-with-image";
import FooterComponent from "@/components/share/footer";

import ExampleImage1 from "@/public/assets/images/example-1.svg";
import ExampleImage2 from "@/public/assets/images/example-2.svg";
import ExampleImage3 from "@/public/assets/images/example-3.svg";
import ExampleImage4 from "@/public/assets/images/example-4.svg";
import ExampleImage5 from "@/public/assets/images/example-5.svg";

export default function GaleriFotoPage() {
  return (
    <div className="w-full h-full min-h-screen">
      <h1 className="2xl:text-6xl lg:text-4xl text-2xl uppercase text-center font-semibold text-white mt-48">
        Arsip Foto
      </h1>
      <div className="my-20 grid 2xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 justify-center">
        <CardWithImageComponent
          imageSource={ExampleImage1}
          title="Your title for image here"
        />
        <CardWithImageComponent
          imageSource={ExampleImage2}
          title="Your title for image here"
        />
        <CardWithImageComponent
          imageSource={ExampleImage3}
          title="Your title for image here"
        />
        <CardWithImageComponent
          imageSource={ExampleImage4}
          title="Your title for image here"
        />
        <CardWithImageComponent
          imageSource={ExampleImage5}
          title="Your title for image here"
        />
        <CardWithImageComponent
          imageSource={ExampleImage1}
          title="Your title for image here"
        />
        <CardWithImageComponent
          imageSource={ExampleImage2}
          title="Your title for image here"
        />
        <CardWithImageComponent
          imageSource={ExampleImage3}
          title="Your title for image here"
        />
        <CardWithImageComponent
          imageSource={ExampleImage4}
          title="Your title for image here"
        />
        <CardWithImageComponent
          imageSource={ExampleImage5}
          title="Your title for image here"
        />
        <CardWithImageComponent
          imageSource={ExampleImage1}
          title="Your title for image here"
        />
        <CardWithImageComponent
          imageSource={ExampleImage2}
          title="Your title for image here"
        />
        <CardWithImageComponent
          imageSource={ExampleImage3}
          title="Your title for image here"
        />
        <CardWithImageComponent
          imageSource={ExampleImage4}
          title="Your title for image here"
        />
        <CardWithImageComponent
          imageSource={ExampleImage5}
          title="Your title for image here"
        />
      </div>
      <FooterComponent />
    </div>
  );
}
