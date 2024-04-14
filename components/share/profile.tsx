import { Button } from "@/components/ui/button";

export default function ProfileComponent() {
  return (
    <div className="w-full h-full bg-blue-700 py-8 flex flex-col gap-5 items-center">
      <h1 className="text-center font-semibold lg:text-5xl text-3xl uppercase text-gray-100">
        Profil Sekolah
      </h1>
      <div className="flex gap-5 mt-5">
        <div className="flex p-6 min-w-[200px] w-full min-h-[400px] h-full relative">
          <div className="w-full h-full flex flex-col gap-3">
            <div className="w-full h-full min-h-[300px] p-6 bg-yellow-400"></div>
            <h1 className="text-2xl font-semibold text-white uppercase">
              Sambutan Kepala Sekolah
            </h1>
            <Button
              variant="destructive"
              size="lg"
              className="rounded-full uppercase"
            >
              more info
            </Button>
          </div>
        </div>
        <div className="flex p-6 min-w-[200px] w-full min-h-[400px] h-full relative">
          <div className="w-full h-full flex flex-col gap-3">
            <div className="w-full h-full min-h-[300px] p-6 bg-yellow-400"></div>
            <h1 className="text-2xl font-semibold text-white uppercase">
              Visi Misi
            </h1>
            <Button
              variant="destructive"
              size="lg"
              className="rounded-full uppercase"
            >
              more info
            </Button>
          </div>
        </div>
        <div className="flex p-6 min-w-[200px] w-full min-h-[400px] h-full relative">
          <div className="w-full h-full flex flex-col gap-3">
            <div className="w-full h-full min-h-[300px] p-6 bg-yellow-400"></div>
            <h1 className="text-2xl font-semibold text-white uppercase">
              Tentang Kami
            </h1>
            <Button
              variant="destructive"
              size="lg"
              className="rounded-full uppercase"
            >
              more info
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
