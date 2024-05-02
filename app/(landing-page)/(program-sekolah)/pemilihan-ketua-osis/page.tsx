import ChartBarComponent from "@/components/share/chart/chart-bar";
import ChartPieComponent from "@/components/share/chart/chart-pie";
import FooterComponent from "@/components/share/footer/footer";
import VideoPlayerComponent from "@/components/share/video/video-player";

const URL_YOUTUBE = "https://www.youtube.com/embed/xDlaALV5j04";

export default function PemilihanKetuaOSISPage() {
  return (
    <div className="w-full h-full min-h-screen">
      <h1 className="2xl:text-6xl lg:text-4xl text-2xl uppercase text-center font-semibold text-white mt-48">
        Pemilihan Ketua OSIS{" "}
        <span className="text-blue-300 font-bold">Periode</span> 2024-2025
      </h1>
      <div className="flex flex-col gap-5 mt-14">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 justify-center">
          <VideoPlayerComponent title="Video 1" sourceVideo={URL_YOUTUBE} />
          <VideoPlayerComponent title="Video 1" sourceVideo={URL_YOUTUBE} />
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-5 justify-center">
          <VideoPlayerComponent title="Video 1" sourceVideo={URL_YOUTUBE} />
          <VideoPlayerComponent title="Video 1" sourceVideo={URL_YOUTUBE} />
          <VideoPlayerComponent title="Video 1" sourceVideo={URL_YOUTUBE} />
        </div>
      </div>
      <div className="w-full p-10 bg-white my-10 h-full flex flex-col gap-10">
        <h3 className="text-center font-bold uppercase lg:text-4xl text-xl text-blue-500">
          Perolehan Suara Sementara
        </h3>
        <div className="flex lg:flex-row flex-col gap-10">
          <ChartBarComponent />
          <ChartPieComponent />
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
              <h4 className="text-gray-400 text-lg">VII - A :</h4>
              <h4 className="text-gray-700 text-lg">Person one</h4>
            </div>
            <div className="flex gap-5 font-semibold">
              <h4 className="text-gray-400 text-lg">VII - B :</h4>
              <h4 className="text-gray-700 text-lg">Person one</h4>
            </div>
            <div className="flex gap-5 font-semibold">
              <h4 className="text-gray-400 text-lg">VII - C :</h4>
              <h4 className="text-gray-700 text-lg">Person one</h4>
            </div>
            <div className="flex gap-5 font-semibold">
              <h4 className="text-gray-400 text-lg">VII - D :</h4>
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
              <h4 className="text-gray-400 text-lg">VIII - A :</h4>
              <h4 className="text-gray-700 text-lg">Person two</h4>
            </div>
            <div className="flex gap-5 font-semibold">
              <h4 className="text-gray-400 text-lg">VIII - B :</h4>
              <h4 className="text-gray-700 text-lg">Person two</h4>
            </div>
            <div className="flex gap-5 font-semibold">
              <h4 className="text-gray-400 text-lg">VIII - C :</h4>
              <h4 className="text-gray-700 text-lg">Person one</h4>
            </div>
            <div className="flex gap-5 font-semibold">
              <h4 className="text-gray-400 text-lg">VIII - D :</h4>
              <h4 className="text-gray-700 text-lg">Person two</h4>
            </div>
            <div className="flex gap-5 font-semibold">
              <h4 className="text-gray-400 text-lg">VIII - E :</h4>
              <h4 className="text-gray-700 text-lg">Person two</h4>
            </div>
            <div className="flex gap-5 font-semibold">
              <h4 className="text-gray-400 text-lg">VIII - F :</h4>
              <h4 className="text-gray-700 text-lg">Person one</h4>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-5">
              <h3 className="font-semibold text-2xl text-blue-500 ml-20">
                Regional Suara
              </h3>
            </div>
            <div className="flex gap-5 font-semibold">
              <h4 className="text-gray-400 text-lg">IX - A :</h4>
              <h4 className="text-gray-700 text-lg">Person two</h4>
            </div>
            <div className="flex gap-5 font-semibold">
              <h4 className="text-gray-400 text-lg">IX - B :</h4>
              <h4 className="text-gray-700 text-lg">Person two</h4>
            </div>
            <div className="flex gap-5 font-semibold">
              <h4 className="text-gray-400 text-lg">IX - C :</h4>
              <h4 className="text-gray-700 text-lg">Person one</h4>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}
