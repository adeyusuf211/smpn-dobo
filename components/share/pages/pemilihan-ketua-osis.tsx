import { Button } from "@/components/ui/button";
import ChartBarComponent from "../chart/chart-bar";
import FooterComponent from "../footer/footer";
import { SimpleModalDialog } from "../modal-dialog/simple-modal";

const contentList = [
  {
    value: "Joni - Asep",
    label: "Joni - Asep",
  },
  {
    value: "Sumiati - Markonah",
    label: "Sumiati - Markonah",
  },
];

export default function PemilihanKetuaOSISComponent() {
  return (
    <div className="w-full h-full min-h-screen">
      <h1 className="2xl:text-6xl lg:text-4xl text-2xl uppercase text-center font-semibold text-white mt-48">
        Pemilihan Ketua OSIS{" "}
        <span className="text-blue-300 font-bold">Periode</span> 2024-2025
      </h1>
      <div className="w-full p-10 bg-white my-10 h-full flex flex-col gap-10">
        <h3 className="text-center font-bold uppercase lg:text-4xl text-xl text-blue-500">
          Perolehan Suara Sementara
        </h3>
        <div className="flex w-full">
          <ChartBarComponent />
          {/* <ChartPieComponent /> */}
        </div>
      </div>
      <div className="w-full h-full my-10 bg-white p-10">
        <div className="flex lg:flex-row flex-col justify-evenly">
          <div className="flex flex-col gap-2">
            <div className="flex gap-5">
              <h3 className="font-semibold text-2xl text-blue-500 ml-20">
                Regional Suara
              </h3>
            </div>
            <div className="flex gap-5 font-semibold">
              <h4 className="text-gray-400 text-lg">VII - 1 :</h4>
              <h4 className="text-gray-700 text-lg">Person one</h4>
            </div>
            <div className="flex gap-5 font-semibold">
              <h4 className="text-gray-400 text-lg">VII - 2 :</h4>
              <h4 className="text-gray-700 text-lg">Person one</h4>
            </div>
            <div className="flex gap-5 font-semibold">
              <h4 className="text-gray-400 text-lg">VII - 3 :</h4>
              <h4 className="text-gray-700 text-lg">Person one</h4>
            </div>
            <div className="flex gap-5 font-semibold">
              <h4 className="text-gray-400 text-lg">VII - 4 :</h4>
              <h4 className="text-gray-700 text-lg">Person two</h4>
            </div>
            <div className="flex gap-5 font-semibold">
              <h4 className="text-gray-400 text-lg">VII - 5 :</h4>
              <h4 className="text-gray-700 text-lg">Person two</h4>
            </div>
            <div className="flex gap-5 font-semibold">
              <h4 className="text-gray-400 text-lg">VII - 6 :</h4>
              <h4 className="text-gray-700 text-lg">Person two</h4>
            </div>
            <div className="flex gap-5 font-semibold">
              <h4 className="text-gray-400 text-lg">VII - 7 :</h4>
              <h4 className="text-gray-700 text-lg">Person two</h4>
            </div>
            <div className="flex gap-5 font-semibold">
              <h4 className="text-gray-400 text-lg">VII - 8 :</h4>
              <h4 className="text-gray-700 text-lg">Person two</h4>
            </div>
            <div className="flex gap-5 font-semibold">
              <h4 className="text-gray-400 text-lg">VII - 9 :</h4>
              <h4 className="text-gray-700 text-lg">Person two</h4>
            </div>
            <div className="flex gap-5 font-semibold">
              <h4 className="text-gray-400 text-lg">VII - 10 :</h4>
              <h4 className="text-gray-700 text-lg">Person two</h4>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-5">
              <h3 className="font-semibold text-2xl text-blue-500 ml-20">
                Regional Suara
              </h3>
            </div>
            <div className="flex gap-5 font-semibold">
              <h4 className="text-gray-400 text-lg">VIII - 1 :</h4>
              <h4 className="text-gray-700 text-lg">Person one</h4>
            </div>
            <div className="flex gap-5 font-semibold">
              <h4 className="text-gray-400 text-lg">VIII - 2 :</h4>
              <h4 className="text-gray-700 text-lg">Person one</h4>
            </div>
            <div className="flex gap-5 font-semibold">
              <h4 className="text-gray-400 text-lg">VIII - 3 :</h4>
              <h4 className="text-gray-700 text-lg">Person one</h4>
            </div>
            <div className="flex gap-5 font-semibold">
              <h4 className="text-gray-400 text-lg">VIII - 4 :</h4>
              <h4 className="text-gray-700 text-lg">Person two</h4>
            </div>
            <div className="flex gap-5 font-semibold">
              <h4 className="text-gray-400 text-lg">VIII - 5 :</h4>
              <h4 className="text-gray-700 text-lg">Person two</h4>
            </div>
            <div className="flex gap-5 font-semibold">
              <h4 className="text-gray-400 text-lg">VIII - 6 :</h4>
              <h4 className="text-gray-700 text-lg">Person two</h4>
            </div>
            <div className="flex gap-5 font-semibold">
              <h4 className="text-gray-400 text-lg">VIII - 7 :</h4>
              <h4 className="text-gray-700 text-lg">Person two</h4>
            </div>
            <div className="flex gap-5 font-semibold">
              <h4 className="text-gray-400 text-lg">VIII - 8 :</h4>
              <h4 className="text-gray-700 text-lg">Person two</h4>
            </div>
            <div className="flex gap-5 font-semibold">
              <h4 className="text-gray-400 text-lg">VIII - 9 :</h4>
              <h4 className="text-gray-700 text-lg">Person two</h4>
            </div>
            <div className="flex gap-5 font-semibold">
              <h4 className="text-gray-400 text-lg">VIII - 10 :</h4>
              <h4 className="text-gray-700 text-lg">Person two</h4>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-5">
              <h3 className="font-semibold text-2xl text-blue-500 ml-20">
                Regional Suara
              </h3>
            </div>
            <div className="flex gap-5 font-semibold">
              <h4 className="text-gray-400 text-lg">IX - 1 :</h4>
              <h4 className="text-gray-700 text-lg">Person one</h4>
            </div>
            <div className="flex gap-5 font-semibold">
              <h4 className="text-gray-400 text-lg">IX - 2 :</h4>
              <h4 className="text-gray-700 text-lg">Person one</h4>
            </div>
            <div className="flex gap-5 font-semibold">
              <h4 className="text-gray-400 text-lg">IX - 3 :</h4>
              <h4 className="text-gray-700 text-lg">Person one</h4>
            </div>
            <div className="flex gap-5 font-semibold">
              <h4 className="text-gray-400 text-lg">IX - 4 :</h4>
              <h4 className="text-gray-700 text-lg">Person two</h4>
            </div>
            <div className="flex gap-5 font-semibold">
              <h4 className="text-gray-400 text-lg">IX - 5 :</h4>
              <h4 className="text-gray-700 text-lg">Person two</h4>
            </div>
            <div className="flex gap-5 font-semibold">
              <h4 className="text-gray-400 text-lg">IX - 6 :</h4>
              <h4 className="text-gray-700 text-lg">Person two</h4>
            </div>
            <div className="flex gap-5 font-semibold">
              <h4 className="text-gray-400 text-lg">IX - 7 :</h4>
              <h4 className="text-gray-700 text-lg">Person two</h4>
            </div>
            <div className="flex gap-5 font-semibold">
              <h4 className="text-gray-400 text-lg">IX - 8 :</h4>
              <h4 className="text-gray-700 text-lg">Person two</h4>
            </div>
            <div className="flex gap-5 font-semibold">
              <h4 className="text-gray-400 text-lg">IX - 9 :</h4>
              <h4 className="text-gray-700 text-lg">Person two</h4>
            </div>
            <div className="flex gap-5 font-semibold">
              <h4 className="text-gray-400 text-lg">IX - 10 :</h4>
              <h4 className="text-gray-700 text-lg">Person two</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full h-full">
        <SimpleModalDialog
          titleDialog="Pilih Sekarang"
          modalHeaderTitle="Pilih Ketua OSIS"
          contentType="Form"
          dialogWidth="min-w-[800px]"
          titleButtonAdd="Submit"
          contentList={contentList}
        />
      </div>
      <FooterComponent />
    </div>
  );
}
