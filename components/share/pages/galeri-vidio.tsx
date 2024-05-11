import { URL_YOUTUBE } from "@/helpers/all-static-videos";
import FooterComponent from "../footer/footer";
import VideoPlayerComponent from "../video/video-player";

export default function GaleriVidioComponent() {
  return (
    <div className="w-full h-full min-h-screen">
      <h1 className="2xl:text-6xl lg:text-4xl text-2xl uppercase text-center font-semibold text-white mt-48">
        Arsip Vidio
      </h1>
      <div className="my-20 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 justify-center">
        {URL_YOUTUBE?.map((url) => (
          <VideoPlayerComponent title="Video 1" sourceVideo={url} key={url} />
        ))}
      </div>
      <FooterComponent />
    </div>
  );
}
