import { Button } from "@/components/ui/button";
import FooterComponent from "../footer/footer";
import { SimpleFormComponent } from "../form/simple-form";
import { SimpleSelectBoxComponent } from "../input/simple-selectbox";
import CardWithImageComponent from "../card/card-with-image";

import ExampleImage6 from "@/public/assets/images/example-6.svg";

const dummyData = ["Terbaru", "Terpopuler"];

async function getDataBuku() {
  try {
    const response = await fetch(`${process.env.API_BASE_URL}/books/list`, {
      cache: "force-cache",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const result = await response?.json();

    return result?.data;
  } catch (error) {
    console.log("Error: \n", error);
  }
}

export default async function EPerpusComponent() {
  const result = await getDataBuku();

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
        {result?.map((data: any) => (
          <>
            {data?.length < 1 ? (
              <h3 className="text-center font-bold text-white text-4xl">
                Tidak Ada Data / Buku Kosong
              </h3>
            ) : (
              <CardWithImageComponent
                keyData={data?.id}
                imageSource={data?.images ?? ExampleImage6}
                title={data?.title}
                description={data?.description}
                buttons={["Lihat", "Download"]}
              />
            )}
          </>
        ))}
      </div>
      <FooterComponent />
    </div>
  );
}
