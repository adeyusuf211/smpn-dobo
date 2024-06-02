"use client";

import Image from "next/image";
import FooterComponent from "../footer/footer";

import LogoSekolah from "@/public/assets/images/logo1.png";

export default function SambutanKepalaSekolahComponent() {
  return (
    <div
      className="flex flex-col gap-10 w-full min-h-screen h-full"
      data-aos="fade-up"
    >
      <h1 className="text-center text-white 2xl:text-6xl lg:text-4xl text-xl font-semibold lg:mt-44 mt-20 mb-8 uppercase">
        Sambutan Kepala Sekolah
      </h1>
      <div className="my-10 flex md:flex-row flex-col md:gap-10 gap-0">
        <div className="flex flex-col gap-5 w-full">
          <div className="bg-white w-full rounded-2xl h-[350px] flex">
            <Image src="" alt="banner sambutan kepala sekolah" fill />
          </div>
          <div className="relative">
            <h3 className="font-bold text-xl text-white">
              Assalamualaikum warahmatullahi wabarakatuh, Salam sejahtera untuk
              kita semua, shalom
            </h3>
            <br />
            <br />
            <h3 className="text-white font-regular text-xl">
              Pada kesempatan yang berbahagia ini, izinkan saya menyampaikan
              beberapa hal penting terkait dengan implementasi Sistem Informasi
              Manajemen (SIM) dan Kurikulum di SMP Negeri 1 Dobo
            </h3>
            <br />
            <h3 className="text-white font-regular text-xl">
              Sistem Informasi Manajemen (SIM) di SMP Negeri 1 Dobo merupakan
              suatu sistem yang dirancang untuk mengelola informasi secara
              efisien dan efektif. Dengan adanya SIM, kita dapat memperbaiki
              proses administrasi, meningkatkan transparansi, dan memudahkan
              akses informasi bagi semua pihak yang terlibat, baik itu guru,
              siswa, maupun orang tua. Implementasi SIM di sekolah kita
              bertujuan untuk:
            </h3>
            <h3 className="text-white font-regular text-xl ml-5">
              1.Mengembangkan Potensi Siswa Secara Maksimal: Memberikan ruang
              bagi siswa untuk mengeksplorasi minat dan bakat mereka serta
              mengembangkan keterampilan abad 21.
            </h3>
            <h3 className="text-white font-regular text-xl ml-5">
              2.Fleksibilitas dalam Pembelajaran: Guru diberikan kebebasan untuk
              menyesuaikan metode dan materi pembelajaran sesuai dengan
              kebutuhan dan karakteristik siswa.
            </h3>
            <h3 className="text-white font-regular text-xl ml-5">
              3.Pembelajaran yang Relevan dan Kontekstual: Mengintegrasikan
              pembelajaran dengan konteks kehidupan nyata, sehingga siswa dapat
              lebih mudah memahami dan mengaplikasikan pengetahuan yang mereka
              peroleh.
            </h3>
            <br />
            <h3 className="text-white font-regular text-xl">
              Dengan implementasi Kurikulum Merdeka, kita berharap dapat
              menciptakan lingkungan belajar yang lebih dinamis, kreatif, dan
              inovatif. Hal ini juga diharapkan dapat menumbuhkan semangat
              belajar yang tinggi di kalangan siswa serta mempersiapkan mereka
              untuk menghadapi tantangan masa depan dengan lebih baik.
            </h3>
            <h3 className="text-white font-regular text-xl">
              Akhir kata, saya mengajak seluruh warga sekolah untuk bersama-sama
              mendukung dan berpartisipasi aktif dalam penerapan Sistem
              Informasi Manajemen dan Kurikulum Merdeka ini. Semoga upaya kita
              ini dapat membawa kemajuan dan keberhasilan bagi sekolah kita
              tercinta SMP Negeri 1 Dobo.
            </h3>
            <br />
            <h3 className="text-white font-regular text-xl">
              Melalui Sistem Informasi Manajemen (SIM), SMP Negeri 1 Dobo semoga
              kami, sebagai pendidik dan tenaga pendidik dapat terus berkomitmen
              dan di mapukan untuk menjalankan Tugas yang mulia ini, dan salah
              satu usaha SMP Negeri 1 Dobo menyesuaikan diri dengan perkembangan
              ilmu dan teknologi guna memberikan layanan dan fasilitas
              pembelajaran yang memadai yang dapat membuat peserta didik nyaman
              dalam menerima pelajaran.
            </h3>
            <br />
            <h3 className="text-white font-regular text-xl">
              Sekali lagi, saya ingin mengucapkan selamat datang bergabung di
              Sistem Informasi Manajemen (SIM) SMP Negeri 1 Dobo.
            </h3>
            <br />
            <br />
            <h3 className="text-white font-bold text-xl">
              Wassalamualaikum warahmatullahi wabarakatuh. Salam sejahtera,
              shalom
            </h3>
          </div>
        </div>
        <div className="h-full w-full max-w-[35%] bg-white p-10 rounded-xl">
          <div className="flex justify-center items-center py-5">
            <Image
              src={LogoSekolah}
              alt="logo sekolah"
              width={200}
              height={200}
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex justify-between mt-5">
              <h3 className="font-bold text-xl text-gray-700">Publish</h3>
              <h3 className="font-semibold text-xl text-gray-700">
                02 Juni 2024
              </h3>
            </div>
            <h3 className="font-bold text-xl text-gray-700">
              Dibaca 2000 Kali
            </h3>
          </div>
          <div className="w-full flex flex-col mt-7">
            <h3 className="text-3xl font-bold text-gray-700 mb-5">
              Tulisan Lainnya
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex gap-3 cursor-pointer hover:bg-gray-200 p-3">
                <div className=" w-32 h-32">
                  <Image
                    src={LogoSekolah}
                    alt="gambar"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="flex flex-col gap-1 w-full ">
                  <h4 className="text-gray-700 text-lg font-semibold">
                    Oleh: SMP Negeri 1 Dobo
                  </h4>
                  <h2 className="font-bold text-xl text-blue-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </h2>
                </div>
              </div>
              <div className="flex gap-3 cursor-pointer hover:bg-gray-200 p-3">
                <div className=" w-32 h-32">
                  <Image
                    src={LogoSekolah}
                    alt="gambar"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="flex flex-col gap-1 w-full ">
                  <h4 className="text-gray-700 text-lg font-semibold">
                    Oleh: SMP Negeri 1 Dobo
                  </h4>
                  <h2 className="font-bold text-xl text-blue-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </h2>
                </div>
              </div>
              <div className="flex gap-3 cursor-pointer hover:bg-gray-200 p-3">
                <div className=" w-32 h-32">
                  <Image
                    src={LogoSekolah}
                    alt="gambar"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="flex flex-col gap-1 w-full ">
                  <h4 className="text-gray-700 text-lg font-semibold">
                    Oleh: SMP Negeri 1 Dobo
                  </h4>
                  <h2 className="font-bold text-xl text-blue-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}
