import FooterComponent from "@/components/share/footer/footer";
import VideoPlayerComponent from "@/components/share/video/video-player";

const URL_YOUTUBE = "https://www.youtube.com/embed/xDlaALV5j04";

export default function GaleriVidio() {
  return (
    <div className="w-full h-full min-h-screen">
      <h1 className="2xl:text-6xl lg:text-4xl text-2xl uppercase text-center font-semibold text-white mt-48">
        Arsip Vidio
      </h1>
      <div className="my-20 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 justify-center">
        <VideoPlayerComponent title="Video 1" sourceVideo={URL_YOUTUBE} />
        <VideoPlayerComponent title="Video 1" sourceVideo={URL_YOUTUBE} />
        <VideoPlayerComponent title="Video 1" sourceVideo={URL_YOUTUBE} />
        <VideoPlayerComponent title="Video 1" sourceVideo={URL_YOUTUBE} />
        <VideoPlayerComponent title="Video 1" sourceVideo={URL_YOUTUBE} />
        <VideoPlayerComponent title="Video 1" sourceVideo={URL_YOUTUBE} />
        <VideoPlayerComponent title="Video 1" sourceVideo={URL_YOUTUBE} />
        <VideoPlayerComponent title="Video 1" sourceVideo={URL_YOUTUBE} />
        <VideoPlayerComponent title="Video 1" sourceVideo={URL_YOUTUBE} />
        <VideoPlayerComponent title="Video 1" sourceVideo={URL_YOUTUBE} />
        <VideoPlayerComponent title="Video 1" sourceVideo={URL_YOUTUBE} />
        <VideoPlayerComponent title="Video 1" sourceVideo={URL_YOUTUBE} />
      </div>
      <FooterComponent />
    </div>
  );
}
