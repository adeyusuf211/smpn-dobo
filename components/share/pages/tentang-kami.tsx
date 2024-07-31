"use client";

import Image from "next/image";
import { useAOS } from "@/hooks/useAOS";
import LogoSekolah from "@/public/assets/images/logo1.png";
import FooterComponent from "@/components/share/footer/footer";

import FotoBanneTentangKami from "@/public/assets/images/Foto Sarana Sekolah/aula-1.webp";

export default function TentangKamiComponent() {
  useAOS();
  return (
    <div
      className="flex flex-col gap-10 w-full min-h-screen h-full"
      data-aos="fade-up"
    >
      <h1 className="text-center text-white 2xl:text-6xl lg:text-4xl text-xl font-semibold lg:mt-44 mt-20 mb-8 uppercase">
        Tentang Kami
      </h1>
      <div className="my-10 flex md:flex-row flex-col md:gap-10 gap-0">
        <div className="flex flex-col gap-5 w-full">
          <div className="bg-white w-full rounded-2xl h-[350px] flex">
            <Image
              src={FotoBanneTentangKami}
              alt="banner sambutan kepala sekolah"
              style={{ objectFit: "cover", objectPosition: "center" }}
              className="w-full h-full"
            />
          </div>
          <div className="relative">
            <h3 className="text-white font-regular text-xl">
              KILASAN SEJARAH Pendidikan adalah suatu rencana untuk membentuk
              generasi penerus bangsa dalam suasana pembelajaran dengan
              memberikan ilmu pengetahuan agar tercapai kemampuan,spiritual
              keagamaan ,kecerdasaan ,kepribadian akhlak mulia serta
              pengendalian diri. Pendidikan nasional merupakan pendidikan
              berproses pada undang undang dasar 1945 dan pancasila dengan
              nilai-nilai agama serta keanekaragaman budaya yang ada di
              Indonesia kususnya dikepulauan aru. Pendidikan bertujuan untuk
              membentuk karakter bangsa seperti menambah ilmu
              pengetahuan,kreatifitas kretampilan ,kepercayaan diiri ,motivasi
              serta ketekunaan kepada Tuhan yang maha esa. Dengan demikian sejak
              abad 16 ,masuknya agama-agama di Indonesia dan khususnya
              dikepulauan aru pendidikan sekolah rakyat sudah ada sejak saat itu
              di wokam ,sampai Negara Indonesia menyatakan kemerdekaannya .
              pendidikan terus berkembang dan maju hingga berdirinya SMP N1 DOBO
              01 agustus 1953 pertama dikepulauan aru , yang dikenal dengan nama
              SMP MUTIARA yang berstatus swasta dengan memiliki 7 orang guru dan
              1 orang pegawai tatausaha . lembaga pendidikan ini melaksanakan
              tanggung jawabnya dengan kepala sekolah pertama yaitu almah bapak
              BERHITU dan kemudian beberapa tahun dilanjutkan dengan almah bapak
              SOPEHELAWAKAN sebagai kepalah sekolah walaupun beraptapkan daun
              rumbia dan berdinding papan berlokasih di DOK ,namun mereka tetap
              memiliki semangat belajar dengan tekun .seiring bergantinya tahun
              maka jabatan kepala sekolah diserahkan kepada almah bapak GAITE.
              Kepemimpinan kepala sekola selanjutnya dijalankan oleh almah bapak
              BINTO 1. Melalui kesepakatan pemerintah didalam memajukan
              pendidikan dinegri ini , maka lembaga ini pun mengalami
              perpindahan tempat di lokasi baru yaitu di ROMBENGAN yang saat ini
              beralamat pada JL ALI MOERTOPO. Waktu bergulir dan kemudian kepala
              sekola secara resmi dipercayakan kepada alm bapak H.TABELA dengan
              jumlah guru 10 orang dan 2 orang pegawai tatausaha , beliau dalam
              tugas dan pengapdiannya menatalayani dan membimbing anak- anak
              bangsa di bumi JARGARIA walaupun minimnya tenaga pendidik namun
              mereka tetap sabar dan terus bersemangat meskipun kondisi sekolah
              sangat sederhana karena berdinding papan , beratap lumbia dan
              berlantai tanah.
            </h3>
            <br />
            <br />
            <h3 className="text-white font-regular text-xl">
              Seiring dengan bergantinnya waktu ,atas musyawarah bersama maka
              SMA MUTIARA yang saat itu berlokasi didepan SMP N1 DOBO berpindah
              tempat pada lokasi yang sekarang menjadi SMA N1 PULAU-PULAU ARU
              beralamat JL CENDRAWASI PUNCAK DOBO. Hal ini membuat lokasi SMP N1
              DOBO menjadi cukup luas lahan nya yaitu kurang lebih 13.000 m2 dan
              berada pada poros jalan utamayang dapat memperindah tata kota dobo
              apa bila adanya perhatian . Pemda kepulauan Aru untuk pengembangan
              fisik SMP NEGERI 1 DOBO kedepan . selanjutnya jabatan kepala
              Sekolah berganti dari Alm.Bapak H Tabela karena beliau pindah dan
              bertugas didaerah lainnya, dan jabatan Kepala Sekolah dipimpin
              oleh Almah Nyonya M Ralahallo, dengan masa kerja dari tahun 1978
              sampai 1999. Lembaga Pendidikan ini terus mengalami perubahan
              pembangunan fisik dan dengan semangat kerja keras para guru dan
              peserta didik pada zaman itu, dilakukan penimbunan ditempat-tempat
              rawa atau berair dan diawali dengan penambahan ruang belajar dan
              Lab IPA melalui program pemerintah lembaga Pendidikan ini berubah
              menjadi gedung yang permanen dengan jumlah guru 10 orang dan 2
              orang pegawai TATA USAHA, mengalami peningkatan menjadi 18 orang
              guru dan 6 orang pegawai. Almrhm Ny. M Ralahallo menjalankan
              tugasnya hingga pada tahun 1999 memasuki masa pensiun dan
              dilanjutkan dengan kepala sekolah yang baru yaitu Alm Bpk J Kauy
              dengan masa jabatan dari tahun 2000-2006, dengan mengalami
              peningkatan jumlah guru sebanyak 43 orang dan pegawai tata Usaha 4
              orang. Saat itu Alm Bpk J Kauy dalam masa kepemimpinannya hanya 5
              tahun karena menerima tugas dan tanggung jawab yang baru sebagai
              pengawas pendidikan dengan demikian maka jabatan kepala Sekolah
              dilanjutkan Bpk H DAHOKLORY,S.Sos, Tepatnya tgl 12 April 2007
              dilantik dengan SK bupati No.71 tahun 2006. Massa jabatan beliau
              dari tahun 2007-2012, pada masa kepemimpinan beliau melalui
              perkembangan da kemajuan IPTEK mengalami perubahan nama SMP N !
              Pulau Pulau Aru mengalami perubahan perkembangan dan kemajuan yang
              signifikan dalambidang olahraga, dan kepramukaan hingga membawah
              nama harum ketingkat Nasional dan dunia. Jumlah tenaga pendidik
              tetap 42 orang, penambahan tenaga pendidik honorer 7 orang,
              pegawai tata usaha tetap 5 orang, dan pegawai honorer 3 orang.
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
            {/* <h3 className="font-bold text-xl text-gray-700">
              Dibaca 2000 Kali
            </h3> */}
          </div>
          {/* <div className="w-full flex flex-col mt-7">
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
          </div> */}
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}
