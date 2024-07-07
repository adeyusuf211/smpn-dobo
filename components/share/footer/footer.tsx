"use client";

import { FaInfo, FaMapMarkerAlt } from "react-icons/fa";
import { PiPhoneCallFill } from "react-icons/pi";
import AgendaComponent from "../agenda";
import Link from "next/link";

import IconsFacebook from "@/public/assets/images/icons/icons-facebook.svg";
import IconsYoutube from "@/public/assets/images/icons/icons-youtube.svg";
import IconsTiktok from "@/public/assets/images/icons/icons-tiktok.svg";
import IconsInstagram from "@/public/assets/images/icons/icons-instagram.svg";

const LINK_FACEBOOK: string =
  "https://www.facebook.com/smpnegeri1dobo?mibextid=ZbWKwL";
const LINK_YOUTUBE: string =
  "https://youtube.com/@smpnegeri1dobo?si=JO8Nnx-7ih-v4SP4";
const LINK_TIKTOK: string =
  "https://www.tiktok.com/@spensa_dobo?_t=8mMPh0kaQVT&_r=1";
const LINK_INSTAGRAM: string =
  "https://www.instagram.com/smpnegeri1dobo?igsh=bTVyaWVvbnA3MHpt";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function FooterComponent() {
  const [result, setResult] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchingData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/informasi-sekolah");
      const result = await response.json();

      if (response) {
        setResult(result.response.data);
      }

      setIsLoading(false);
    } catch (error) {
      console.log("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  const renderElementInformasiSekolah = () => {
    if (isLoading) {
      return (
        <div className="flex justify-center items-center w-full">
          <h3 className="text-white font-semibold text-2xl">Loading...</h3>
        </div>
      );
    } else {
      return (
        <div className="flex flex-col gap-8 w-full" key={result?.npsn}>
          <h3 className="font-semibold text-xl text-gray-700">
            Informasi Sekolah
          </h3>
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold lg:text-lg text-sm text-gray-600">
              {result?.name}
            </h3>
            <div className="flex items-start gap-3">
              <div className="flex justify-center items-center">
                <FaInfo className="text-xl" />
              </div>
              <h3 className="font-semibold lg:text-base text-sm">
                NSPN: <span>{result?.nspn}</span>
              </h3>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex justify-center items-center">
                <FaMapMarkerAlt className="text-xl" />
              </div>
              <h3 className="font-semibold lg:text-base text-sm">
                {result?.address}
              </h3>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex justify-center items-center">
                <PiPhoneCallFill className="text-xl" />
              </div>
              <h3 className="font-semibold lg:text-base text-sm text-blue-600">
                {result?.phone}
              </h3>
            </div>
          </div>
        </div>
      );
    }
  };

  useEffect(() => {
    fetchingData();
  }, []);

  return (
    <div className="mt-20 bg-white flex flex-col lg:gap-10 gap-5 lg:p-10 p-3">
      <div className="flex lg:flex-row flex-col gap-5">
        <div className="flex">
          <iframe
            title="peta smp negeri 1 dobo"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.656485086666!2d134.22685327477757!3d-5.762476356900616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d2d9092d7c5e2ed%3A0xc50a6a748f9dee0d!2sSMPN%201%20DOBO%20PP%20Aru!5e0!3m2!1sid!2sid!4v1715844689532!5m2!1sid!2sid"
            className="lg:w-[600px] w-full"
            loading="lazy"
          />
        </div>
        {renderElementInformasiSekolah()}
        <div className="flex flex-col gap-2 w-full">
          <h3 className="font-semibold text-xl text-gray-700 mb-5">
            Agenda Sekolah
          </h3>
          <AgendaComponent
            date="01"
            monthAndYear="Mei 2024"
            title="Hari Buruh"
            description="Libur Sekolah"
            isHoliday={true}
          />
          <AgendaComponent
            date="17"
            monthAndYear="Agu 2024"
            title="Proklamasi Kemerdekaan"
            description="Libur Sekolah"
            isHoliday={true}
          />
          <AgendaComponent
            date="18"
            monthAndYear="Agu 2024"
            title="Perlombaan 17 Agustus"
            description="Waktu: 08.00 - 15.00 WIB"
            isHoliday={false}
          />
        </div>
      </div>
      <div className="flex lg:flex-row flex-col justify-between items-center lg:text-lg text-sm">
        <h3>
          SMP Negeri 1 DOBO - Interchange 2.1 | {new Date().getFullYear()}
        </h3>
        <div className="flex items-center justify-center">
          <Link href={LINK_FACEBOOK} passHref legacyBehavior>
            <a
              href={LINK_FACEBOOK}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white hover:bg-blue-200 transition-all"
            >
              <Image
                src={IconsFacebook}
                width={40}
                height={40}
                alt="icons-facebook"
              />
            </a>
          </Link>
          <Link href={LINK_YOUTUBE} passHref legacyBehavior>
            <a
              href={LINK_YOUTUBE}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white hover:bg-blue-200 transition-all"
            >
              <Image
                src={IconsYoutube}
                width={40}
                height={40}
                alt="icons-facebook"
              />
            </a>
          </Link>
          <Link href={LINK_TIKTOK} passHref legacyBehavior>
            <a
              href={LINK_TIKTOK}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white hover:bg-blue-200 transition-all"
            >
              <Image
                src={IconsTiktok}
                width={40}
                height={40}
                alt="icons-tiktok"
              />
            </a>
          </Link>
          <Link href={LINK_INSTAGRAM} passHref legacyBehavior>
            <a
              href={LINK_INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white hover:bg-blue-200 transition-all"
            >
              <Image
                src={IconsInstagram}
                width={40}
                height={40}
                alt="icons-instagram"
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
