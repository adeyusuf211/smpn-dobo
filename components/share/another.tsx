import TaglineComponent from "./tagline";

export default function AnotherComponent() {
  return (
    <div className="w-full h-full p-6 bg-blue-700 flex flex-col gap-5">
      <section id="seragam">
        <h1 className="lg:text-5xl text-3xl font-semibold uppercase text-center text-white mb-5">
          seragam sekolah
        </h1>
        <div className="flex gap-3">
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
          <div className="flex gap-3 w-full">
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
    </div>
  );
}
