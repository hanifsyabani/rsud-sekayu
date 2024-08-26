"use client";

import rsudimg from "@/assets/rsud.png";
import aboutimg from "@/assets/about.png";
import Image from "next/image";
import { Keunggulan } from "@/utils/About/HeroAbout";
import img from "@/assets/rjalan1.jpeg";
import { FaQuoteRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";
import { Quote } from "@/utils/About/Quote";
import { ListDocter } from "@/utils/About/ListDocter";

export default function About() {
  return (
    <main className="pt-32">
      <section
        className=" relative bg-center w-full h-[200px] bg-cover bg-no-repeat "
        style={{ backgroundImage: `url(${rsudimg.src})` }}
      >
        <div className="absolute inset-0 bg-white opacity-40"></div>
        <div className="pl-6 relative">
          <h1 className="text-4xl text-primary font-extrabold max-w-3xl pt-24">
            Tentang Kami
          </h1>
        </div>
      </section>

      <section className="mt-20 flex justify-center items-center gap-10">
        <div className="">
          <Image
            src={aboutimg}
            alt="about"
            width={300}
            height={300}
            className=""
          />
        </div>
        <div className="w-1/2">
          <h3 className="text-secondary text-xl font-bold">
            Selamat Datang di RSUD Sekayu
          </h3>
          <h1 className="text-primary text-3xl font-bold max-w-md">
            Perawatan Terbaik Untuk Kesehatan Yang Lebih Baik
          </h1>
          <div className="grid grid-cols-2 mt-6 gap-3">
            {Keunggulan.map((fitur) => (
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-secondary rounded-full"></div>
                <h1 className="">{fitur.name}</h1>
              </div>
            ))}
          </div>
          <p className="my-4">
            RSUD Sekayu dibangun pada zaman Belanda yaitu tepatnya pada tahun
            1937 yang berlokasi di Jalan dr. Slamet Imam Santoso Sekayu.
            Kegiatan pelayanan kesehatan di rumah sakit pada waktu itu terfokus
            pada rawat jalan dan rawat inap dengan kapasitas 10 tempat tidur.
          </p>

          <p>
            Pada tanggal 6 Mei 1997 dilakukan pembanguan fisik tahap I dan II.
            Pembangunan gedung secara resmi ditandai dengan peletakan batu
            pertama pembangunan gedung RSUD Sekayu dilakukan oleh Dirjen
            Pelayanan Medik Departemen Kesehatan RI yang pada saat itu dijabat
            oleh dr. Suyoga,MPH,. Pada tanggal 10 Februari 2000 ditetapkan
            menjadi kelas Type C dengan Surat Keputusan Bupati MUBA
            Nomor:058/SK/IV/2000, dengan 60 TT, 4 dokter spesialis (Anak,
            Kebidanan dan Kandungan, Penyakit Dalam dan Bedah).
          </p>
        </div>
      </section>

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        className="mySwiper relative"
        slidesPerView={1}
      >
        {Quote.map((quote) => (
          <SwiperSlide key={quote.id}>
            <section
              style={{ backgroundImage: `url(${img.src})` }}
              className=" relative bg-center w-full h-[400px] bg-cover bg-no-repeat mt-20 "
            >
              <div className="absolute inset-0 bg-primary opacity-60"></div>
              <div className="flex justify-center items-center z-20">
                <div className="text-center pt-10 relative z-50 ">
                  <FaQuoteRight
                    size={40}
                    className="text-accent font-extrabold mx-auto"
                  />

                  <h1 className="text-xl max-w-xl mx-auto text-white mt-2">
                    {quote.quote}
                  </h1>
                  <hr className="border border-white w-24 mx-auto mt-4 mb-7" />
                  <h1 className="text-2xl text-white font-bold">{quote.dr}</h1>
                </div>
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>

      <section className="mt-20 px-[5%]">
        <div className="text-center">
          <h2 className="text-secondary text-lg font-semibold">
            Perawatan Terpercaya
          </h2>
          <h1 className="text-3xl text-primary font-bold ">Daftar Dokter</h1>
        </div>
        <div className="flex justify-center items-center gap-10 mt-10 ">
          <Swiper
            className="mySwiper"
            slidesPerView={3}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ dynamicBullets: true }}
          >
            {ListDocter.map((docter) => (
              <SwiperSlide>
                <div
                  key={docter.id}
                  className="w-80 mb-10 bg-accent rounded-lg cursor-pointer"
                >
                  <Image
                    src={docter.image}
                    alt="docter"
                    width={300}
                    height={300}
                    className="w-full h-["
                  />
                  <div className="text-center pt-4 pb-6">
                    <p className="text-primary mt-3">{docter.name}</p>
                    <h1 className="text-primary font-bold text-lg">
                      {docter.spesialis}
                    </h1>
                    <p className="text-sm text-primary">{docter.jadwal}</p>
                  </div>

                  <div className="my-2 flex justify-center items-center gap-4">
                    <FaLinkedin size={25} className="bg-primary rounded-md text-white" />
                    <FaInstagram size={25} className="bg-primary rounded-md text-white" />
                    <FaFacebook size={25} className="bg-primary rounded-md text-white" />
                  </div>
                  <button className="bg-primary w-full py-2 hover:scale-105 transition-all flex justify-center text-white text-sm">
                    Lihat Profil
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </main>
  );
}
