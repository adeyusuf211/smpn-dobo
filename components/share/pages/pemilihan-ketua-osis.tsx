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
              <h4 className="text-gray-400 text-lg">7 - 1 :</h4>
              <h4 className="text-gray-700 text-lg">Person one</h4>
            </div>
            <div className="flex gap-5 font-semibold">
              <h4 className="text-gray-400 text-lg">7 - 2 :</h4>
              <h4 className="text-gray-700 text-lg">Person one</h4>
            </div>
            <div className="flex gap-5 font-semibold">
              <h4 className="text-gray-400 text-lg">7 - 3 :</h4>
              <h4 className="text-gray-700 text-lg">Person one</h4>
            </div>
            <div className="flex gap-5 font-semibold">
              <h4 className="text-gray-400 text-lg">7 - 4 :</h4>
              <h4 className="text-gray-700 text-lg">Person two</h4>
            </div>
            <div className="flex gap-5 font-semibold">
              <h4 className="text-gray-400 text-lg">7 - 5 :</h4>
              <h4 className="text-gray-700 text-lg">Person two</h4>
            </div>
            <div className="flex gap-5 font-semibold">
              <h4 className="text-gray-400 text-lg">7 - 6 :</h4>
              <h4 className="text-gray-700 text-lg">Person two</h4>
            </div>
            <div className="flex gap-5 font-semibold">
              <h4 className="text-gray-400 text-lg">7 - 7 :</h4>
              <h4 className="text-gray-700 text-lg">Person two</h4>
            </div>
            <div className="flex gap-5 font-semibold">
              <h4 className="text-gray-400 text-lg">7 - 8 :</h4>
              <h4 className="text-gray-700 text-lg">Person two</h4>
            </div>
            <div className="flex gap-5 font-semibold">
              <h4 className="text-gray-400 text-lg">7 - 9 :</h4>
              <h4 className="text-gray-700 text-lg">Person two</h4>
            </div>
            <div className="flex gap-5 font-semibold">
              <h4 className="text-gray-400 text-lg">7 - 10 :</h4>
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
              <h4 className="text-gray-400 text-lg">8 - 1 :</h4>
              <h4 className="text-gray-700 text-lg">Person one</h4>
            </div>
            <div className="flex gap-5 font-semibold">
              <h4 className="text-gray-400 text-lg">8 - 2 :</h4>
              <h4 className="text-gray-700 text-lg">Person one</h4>
            </div>
            <div className="flex gap-5 font-semibold">
              <h4 className="text-gray-400 text-lg">8 - 3 :</h4>
              <h4 className="text-gray-700 text-lg">Person one</h4>
            </div>
            <div className="flex gap-5 font-semibold">
              <h4 className="text-gray-400 text-lg">8 - 4 :</h4>
              <h4 className="text-gray-700 text-lg">Person two</h4>
            </div>
            <div className="flex gap-5 font-semibold">
              <h4 className="text-gray-400 text-lg">8 - 5 :</h4>
              <h4 className="text-gray-700 text-lg">Person two</h4>
            </div>
            <div className="flex gap-5 font-semibold">
              <h4 className="text-gray-400 text-lg">8 - 6 :</h4>
              <h4 className="text-gray-700 text-lg">Person two</h4>
            </div>
            <div className="flex gap-5 font-semibold">
              <h4 className="text-gray-400 text-lg">8 - 7 :</h4>
              <h4 className="text-gray-700 text-lg">Person two</h4>
            </div>
            <div className="flex gap-5 font-semibold">
              <h4 className="text-gray-400 text-lg">8 - 8 :</h4>
              <h4 className="text-gray-700 text-lg">Person two</h4>
            </div>
            <div className="flex gap-5 font-semibold">
              <h4 className="text-gray-400 text-lg">8 - 9 :</h4>
              <h4 className="text-gray-700 text-lg">Person two</h4>
            </div>
            <div className="flex gap-5 font-semibold">
              <h4 className="text-gray-400 text-lg">8 - 10 :</h4>
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
              <h4 className="text-gray-400 text-lg">9 - 1 :</h4>
              <h4 className="text-gray-700 text-lg">Person one</h4>
            </div>
            <div className="flex gap-5 font-semibold">
              <h4 className="text-gray-400 text-lg">9 - 2 :</h4>
              <h4 className="text-gray-700 text-lg">Person one</h4>
            </div>
            <div className="flex gap-5 font-semibold">
              <h4 className="text-gray-400 text-lg">9 - 3 :</h4>
              <h4 className="text-gray-700 text-lg">Person one</h4>
            </div>
            <div className="flex gap-5 font-semibold">
              <h4 className="text-gray-400 text-lg">9 - 4 :</h4>
              <h4 className="text-gray-700 text-lg">Person two</h4>
            </div>
            <div className="flex gap-5 font-semibold">
              <h4 className="text-gray-400 text-lg">9 - 5 :</h4>
              <h4 className="text-gray-700 text-lg">Person two</h4>
            </div>
            <div className="flex gap-5 font-semibold">
              <h4 className="text-gray-400 text-lg">9 - 6 :</h4>
              <h4 className="text-gray-700 text-lg">Person two</h4>
            </div>
            <div className="flex gap-5 font-semibold">
              <h4 className="text-gray-400 text-lg">9 - 7 :</h4>
              <h4 className="text-gray-700 text-lg">Person two</h4>
            </div>
            <div className="flex gap-5 font-semibold">
              <h4 className="text-gray-400 text-lg">9 - 8 :</h4>
              <h4 className="text-gray-700 text-lg">Person two</h4>
            </div>
            <div className="flex gap-5 font-semibold">
              <h4 className="text-gray-400 text-lg">9 - 9 :</h4>
              <h4 className="text-gray-700 text-lg">Person two</h4>
            </div>
            <div className="flex gap-5 font-semibold">
              <h4 className="text-gray-400 text-lg">9 - 10 :</h4>
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
