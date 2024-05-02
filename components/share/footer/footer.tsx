import { FaInfo, FaMapMarkerAlt } from "react-icons/fa";
import { PiPhoneCallFill } from "react-icons/pi";

export default function FooterComponent() {
  return (
    <div className="mt-20 bg-white flex flex-col lg:gap-10 gap-5 lg:p-10 p-3">
      <div className="flex lg:flex-row flex-col gap-5">
        <div className="flex">
          <iframe
            title="peta smp negeri 1 dobo"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126899.40438285223!2d106.71173326225117!3d-6.315324544154597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sMonumen%20Nasional!5e0!3m2!1sid!2sid!4v1714526588190!5m2!1sid!2sid"
            className="lg:w-[600px] w-full"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col gap-8 w-full">
          <h3 className="font-semibold text-xl text-gray-700">
            Informasi Sekolah
          </h3>
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold lg:text-lg text-sm text-gray-600">
              SMP Negeri 1 DOBO
            </h3>
            <div className="flex items-start gap-3">
              <div className="flex justify-center items-center">
                <FaInfo className="text-xl" />
              </div>
              <h3 className="font-semibold lg:text-base text-sm">
                NSPN: <span>11223344</span>
              </h3>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex justify-center items-center">
                <FaMapMarkerAlt className="text-xl" />
              </div>
              <h3 className="font-semibold lg:text-base text-sm">
                Jl. ABCD, Kecamatan EFGH. Kota Bogor. Jawa Barat. Indonesia.
                12345
              </h3>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex justify-center items-center">
                <PiPhoneCallFill className="text-xl" />
              </div>
              <h3 className="font-semibold lg:text-base text-sm text-blue-600">
                (0251) - 112 3344 556
              </h3>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h3 className="font-semibold text-xl text-gray-700 mb-5">
            Agenda Sekolah
          </h3>
          <div className="flex flex-col">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 w-[80px] h-[80px] flex flex-col gap-2 justify-center items-center">
                <h1 className="flex justify-center items-center font-bold text-2xl text-white">
                  01
                </h1>
                <p className="text-[12px] text-white">Mei 2024</p>
              </div>
              <div className="flex flex-col">
                <h3 className="font-semibold lg:text-base text-sm">
                  Hari Buruh Internasional
                </h3>
                <p className="font-semibold lg:text-sm text-[12px]  text-red-600">
                  Libur Sekolah
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 w-[80px] h-[80px] flex flex-col gap-2 justify-center items-center">
                <h1 className="flex justify-center items-center font-bold text-2xl text-white">
                  17
                </h1>
                <p className="text-[12px] text-white">Agu 2024</p>
              </div>
              <div className="flex flex-col">
                <h3 className="font-semibold lg:text-base text-sm">
                  Kemerdekaan Indonesia
                </h3>
                <p className="font-semibold lg:text-sm text-[12px]  text-red-600">
                  Libur Sekolah
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 w-[80px] h-[80px] flex flex-col gap-2 justify-center items-center">
                <h1 className="flex justify-center items-center font-bold text-2xl text-white">
                  18
                </h1>
                <p className="text-[12px] text-white">Agu 2024</p>
              </div>
              <div className="flex flex-col">
                <h3 className="font-semibold lg:text-base text-sm">
                  Perlombaan 17 Agustus
                </h3>
                <p className="font-semibold lg:text-sm text-[12px]  text-blue-600">
                  Waktu: 07.00 - 15.00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center lg:text-lg text-sm">
        <h3>
          SMP Negeri 1 DOBO - Interchange 2.1 | {new Date().getFullYear()}
        </h3>
      </div>
    </div>
  );
}
