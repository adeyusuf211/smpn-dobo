import TaglineComponent from "./tagline";

export default function AnotherComponent() {
  return (
    <div className="w-full h-full p-6 bg-blue-700 flex flex-col gap-5">
      <section id="seragam">
        <h1 className="lg:text-5xl text-2xl font-semibold uppercase text-center text-white mb-5">
          seragam sekolah
        </h1>
        <div className="flex lg:flex-row flex-col gap-3">
          <div className="flex flex-col gap-3">
            <div className="p-4 bg-yellow-400 w-full">
              <h1 className="text-center text-gray-600 font-semibold">
                Place your image here
              </h1>
            </div>
            <h3 className="font-semibold text-lg text-center uppercase text-white">
              biru dan putih
            </h3>
          </div>
          <div className="flex flex-col gap-3">
            <div className="p-4 bg-yellow-400 w-full">
              <h1 className="text-center text-gray-600 font-semibold">
                Place your image here
              </h1>
            </div>
            <h3 className="font-semibold text-lg text-center uppercase text-white">
              batik
            </h3>
          </div>
          <div className="flex flex-col gap-3">
            <div className="p-4 bg-yellow-400 w-full">
              <h1 className="text-center text-gray-600 font-semibold">
                Place your image here
              </h1>
            </div>
            <h3 className="font-semibold text-lg text-center uppercase text-white">
              batik
            </h3>
          </div>
          <div className="flex flex-col gap-3">
            <div className="p-4 bg-yellow-400 w-full">
              <h1 className="text-center text-gray-600 font-semibold">
                Place your image here
              </h1>
            </div>
            <h3 className="font-semibold text-lg text-center uppercase text-white">
              kostum
            </h3>
          </div>
          <div className="flex flex-col gap-3">
            <div className="p-4 bg-yellow-400 w-full">
              <h1 className="text-center text-gray-600 font-semibold">
                Place your image here
              </h1>
            </div>
            <h3 className="font-semibold text-lg text-center uppercase text-white">
              pramuka
            </h3>
          </div>
        </div>
      </section>
      <section id="deskripsi" className="mt-10">
        <div className="flex flex-col my-5">
          <div className="flex lg:flex-row flex-col gap-3 w-full">
            <div className="p-5 bg-blue-200 w-full h-full min-h-[200px]">
              <h3 className="text-3xl">Your content here</h3>
            </div>
            <div className="p-5 bg-blue-200 w-full h-full min-h-[200px]">
              <h3 className="text-3xl">Your content here</h3>
            </div>
          </div>
          <TaglineComponent />
        </div>
      </section>
      <section id="sarana-sekolah">
        <div className="w-full flex flex-col lg:p-4 px-0 py-4 my-5">
          <h1 className="text-center font-semibold text-white uppercase lg:text-5xl text-2xl mb-3">
            sarana dan fasilitas sekolah
          </h1>
          <div className="flex flex-col gap-5">
            <ul className="text-white text-2xl mt-5 flex flex-col gap-3">
              <li className="flex gap-3 items-center">
                <span>{">>>"}</span> Sarana Utama
              </li>
              <li className="flex gap-3 items-center">
                <span>{">>>"}</span> Laboratorium Praktek
              </li>
              <li className="flex gap-3 items-center">
                <span>{">>>"}</span> Ruang Belajar dan Pendukung
              </li>
            </ul>
            <div className="grid lg:grid-cols-6 grid-cols-1 gap-3">
              <div className="w-full min-w-10 h-full min-h-10 flex items-center justify-center bg-blue-300 p-3">
                <h3 className="text-lg text-center">Your image here</h3>
              </div>
              <div className="w-full min-w-10 h-full min-h-10 flex items-center justify-center bg-blue-300 p-3">
                <h3 className="text-lg text-center">Your image here</h3>
              </div>
              <div className="w-full min-w-10 h-full min-h-10 flex items-center justify-center bg-blue-300 p-3">
                <h3 className="text-lg text-center">Your image here</h3>
              </div>
              <div className="w-full min-w-10 h-full min-h-10 flex items-center justify-center bg-blue-300 p-3">
                <h3 className="text-lg text-center">Your image here</h3>
              </div>
              <div className="w-full min-w-10 h-full min-h-10 flex items-center justify-center bg-blue-300 p-3">
                <h3 className="text-lg text-center">Your image here</h3>
              </div>
              <div className="w-full min-w-10 h-full min-h-10 flex items-center justify-center bg-blue-300 p-3">
                <h3 className="text-lg text-center">Your image here</h3>
              </div>
              <div className="w-full min-w-10 h-full min-h-10 flex items-center justify-center bg-blue-300 p-3">
                <h3 className="text-lg text-center">Your image here</h3>
              </div>
              <div className="w-full min-w-10 h-full min-h-10 flex items-center justify-center bg-blue-300 p-3">
                <h3 className="text-lg text-center">Your image here</h3>
              </div>
              <div className="w-full min-w-10 h-full min-h-10 flex items-center justify-center bg-blue-300 p-3">
                <h3 className="text-lg text-center">Your image here</h3>
              </div>
              <div className="w-full min-w-10 h-full min-h-10 flex items-center justify-center bg-blue-300 p-3">
                <h3 className="text-lg text-center">Your image here</h3>
              </div>
              <div className="w-full min-w-10 h-full min-h-10 flex items-center justify-center bg-blue-300 p-3">
                <h3 className="text-lg text-center">Your image here</h3>
              </div>
              <div className="w-full min-w-10 h-full min-h-10 flex items-center justify-center bg-blue-300 p-3">
                <h3 className="text-lg text-center">Your image here</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="ekstrakulikuler">
        <div className="w-full flex flex-col lg:p-4 px-0 py-4 my-5">
          <h1 className="text-center font-semibold text-white uppercase lg:text-5xl text-2xl mb-3">
            program ekstra kulikuler
          </h1>
          <div className="flex flex-col gap-5">
            <ul className="text-white text-2xl mt-5 flex flex-col gap-3">
              <li className="flex gap-3 items-center">
                <span>{">>>"}</span> Olahraga
              </li>
              <li className="flex gap-3 items-center">
                <span>{">>>"}</span> Seni dan Kreativitas
              </li>
              <li className="flex gap-3 items-center">
                <span>{">>>"}</span> Formasi dan Aktivitas
              </li>
            </ul>
            <div className="grid lg:grid-cols-6 grid-cols-1 gap-3">
              <div className="w-full min-w-10 h-full min-h-10 flex items-center justify-center bg-blue-300 p-3">
                <h3 className="text-lg text-center">Your image here</h3>
              </div>
              <div className="w-full min-w-10 h-full min-h-10 flex items-center justify-center bg-blue-300 p-3">
                <h3 className="text-lg text-center">Your image here</h3>
              </div>
              <div className="w-full min-w-10 h-full min-h-10 flex items-center justify-center bg-blue-300 p-3">
                <h3 className="text-lg text-center">Your image here</h3>
              </div>
              <div className="w-full min-w-10 h-full min-h-10 flex items-center justify-center bg-blue-300 p-3">
                <h3 className="text-lg text-center">Your image here</h3>
              </div>
              <div className="w-full min-w-10 h-full min-h-10 flex items-center justify-center bg-blue-300 p-3">
                <h3 className="text-lg text-center">Your image here</h3>
              </div>
              <div className="w-full min-w-10 h-full min-h-10 flex items-center justify-center bg-blue-300 p-3">
                <h3 className="text-lg text-center">Your image here</h3>
              </div>
              <div className="w-full min-w-10 h-full min-h-10 flex items-center justify-center bg-blue-300 p-3">
                <h3 className="text-lg text-center">Your image here</h3>
              </div>
              <div className="w-full min-w-10 h-full min-h-10 flex items-center justify-center bg-blue-300 p-3">
                <h3 className="text-lg text-center">Your image here</h3>
              </div>
              <div className="w-full min-w-10 h-full min-h-10 flex items-center justify-center bg-blue-300 p-3">
                <h3 className="text-lg text-center">Your image here</h3>
              </div>
              <div className="w-full min-w-10 h-full min-h-10 flex items-center justify-center bg-blue-300 p-3">
                <h3 className="text-lg text-center">Your image here</h3>
              </div>
              <div className="w-full min-w-10 h-full min-h-10 flex items-center justify-center bg-blue-300 p-3">
                <h3 className="text-lg text-center">Your image here</h3>
              </div>
              <div className="w-full min-w-10 h-full min-h-10 flex items-center justify-center bg-blue-300 p-3">
                <h3 className="text-lg text-center">Your image here</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
