import rsudimg from "@/assets/rsud.png";
import aboutimg from "@/assets/about.png";
import Image from "next/image";
import { Keunggulan } from "@/utils/About/HeroAbout";
import img from "@/assets/rjalan1.jpeg";
import { FaQuoteRight } from "react-icons/fa";

export default function About() {
  return (
    <div className="pt-32">
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

      <section
        style={{ backgroundImage: `url(${img.src})` }}
        className=" relative bg-center w-full h-[400px] bg-cover bg-no-repeat mt-20 "
      >
        <div className="absolute inset-0 bg-primary opacity-60"></div>
        <div className="relative text-center pt-10">
          <FaQuoteRight
            size={40}
            className="text-accent font-extrabold mx-auto"
          />
          <h1 className="text-xl max-w-xl mx-auto text-white mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quos
            suscipit aperiam quasi doloremque fugit, aut cum dolorem ratione
            eaque, nam quo quam veniam pariatur labore cupiditate fuga, totam
            omnis ea? Dolorem dolores saepe, minus eaque sit rem distinctio
            officiis
          </h1>
          <hr className="border border-white w-24 mx-auto mt-4 mb-7"/>
          <h1 className="text-2xl text-white font-bold">Dr. H Stomo S.H</h1>
        </div>
      </section>
    </div>
  );
}
