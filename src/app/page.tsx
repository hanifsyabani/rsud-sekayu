"use client";

import Image from "next/image";
import rsudimg from "@/assets/rsud.png";
import { FaUserDoctor, FaUserNurse } from "react-icons/fa6";
import { FaAmbulance, FaMobileAlt } from "react-icons/fa";
import { InfoEmployee } from "@/utils/Homepage/Employee";
import { MisiRs } from "@/utils/Homepage/Misi";
import banners from "@/assets/bannerrs.jpeg";

import Pelayanan from "@/components/Pelayanan/Pelayanan";
import HeaderHomepage from "@/components/Header/HeaderHomepage";
import CardBerita from "@/components/Berita/CardBerita";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/service/firebase";

export default function Home() {
  const [news, setNews] = useState<any[]>([]);

  const renderIcon = (id: number) => {
    switch (id) {
      case 1:
        return (
          <FaUserDoctor
            size={50}
            className="text-white bg-primary p-3 rounded-full mx-auto"
          />
        );
      case 2:
        return (
          <FaUserNurse
            size={50}
            className="text-white bg-primary p-3 rounded-full mx-auto"
          />
        );
      case 3:
        return (
          <FaAmbulance
            size={50}
            className="text-white bg-primary p-3 rounded-full mx-auto"
          />
        );
      case 4:
        return (
          <FaMobileAlt
            size={50}
            className="text-white bg-primary p-3 rounded-full mx-auto"
          />
        );
    }
  };

  useEffect(() => {
    async function getData() {
      const getNews = collection(db, "berita");

      try {
        const newsSnapshop = await getDocs(getNews);

        const newslist= newsSnapshop.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setNews(newslist);
      } catch (error) {
        console.error(error);
      }
    }

    getData()
  }, []);

  return (
    <>
      <section
        className=" relative bg-center w-full h-[500px] bg-cover bg-no-repeat flex flex-col justify-center  items-center"
        style={{ backgroundImage: `url(${rsudimg.src})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="text-center relative">
          <p className="text-accent">Peduli terhadap kehidupan</p>
          <h1 className="text-7xl text-white font-extrabold max-w-3xl py-10">
            Rumah Sakit Umum Daerah Sekayu
          </h1>
          <button className="bg-accent text-primary px-6 py-2 rounded-full hover:scale-105 transition-all">
            Layanan kami
          </button>
        </div>
      </section>

      <section className="-mt-4 relative">
        <div className="flex justify-center items-center gap-12">
          {InfoEmployee.map((employee) => (
            <div
              className="p-4 w-60 bg-white text-center rounded-xl shadow-2xl cursor-pointer hover:scale-105 transition-all"
              key={employee.id}
            >
              {renderIcon(employee.id)}
              <h1 className="font-semibold text-primary text-3xl my-2">
                {employee.count}+
              </h1>
              <p className="text-secondary">{employee.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-32 px-[5%]">
        <h1 className="text-xl font-bold text-center text-secondary">
          Visi Misi RSUD Sekayu
        </h1>
        <div>
          <div>
            <h1 className="text-lg font-bold">Visi</h1>
            <p className="pt-2">
              Visi RSUD Sekayu, Yaitu mewujudkan Rumah Sakit Umum Daerah Sekayu
              Musi Banyuasin Sebagai Rumah Sakit Kelas Dunia, Dalam rangka
              mendukung perwujudan MUBA Maju Berjaya 2022.
            </p>
          </div>
          <div className="mt-6">
            <h1 className="text-lg font-bold">Misi</h1>
            <ul className="pt-2">
              {MisiRs.map((misi) => (
                <li key={misi.id} className="list-disc list-inside pt-2">
                  {misi.misi}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <Image
            src={banners}
            width={300}
            height={300}
            alt="banners"
            className="w-full h-52 object-cover"
          />
        </div>
      </section>

      <section className="mt-20 px-[3%]">
        <Pelayanan />
      </section>

      <section className="mt-20 px-[3%]">
        <HeaderHomepage
          subhead="Pusat Informasi terbaru RSUD Sekayu"
          header="Berita"
        />

        <div className="mt-10 grid grid-cols-2 gap-10">
          {news.map((berita) => (
            <CardBerita key={berita.id} title={berita.title} desc= {berita.desc} body={berita.body} />
          ))}
        </div>
      </section>

      <section className="mt-20">
        <HeaderHomepage subhead="Get in Touch" header="Kontak Kami" />
      </section>
    </>
  );
}
