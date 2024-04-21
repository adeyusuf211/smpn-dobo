import ExtrakulikulerComponent from "@/components/share/ekstrakulikuler";
import SaranaSekolahComponent from "@/components/share/sarana-sekolah";
import SeragamSekolahComponent from "@/components/share/seragam-sekolah";
import TentangKamiComponent from "@/components/share/tentang-kami";

export default function AnotherComponent() {
  return (
    <div className="w-full h-full flex flex-col gap-5">
      <SeragamSekolahComponent />
      <TentangKamiComponent />
      <SaranaSekolahComponent />
      <ExtrakulikulerComponent />
    </div>
  );
}
