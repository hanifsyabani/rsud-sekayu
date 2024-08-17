import { NavItem } from "@/utils/Navbar/NavItem";
import Image from "next/image";
import Link from "next/link";
import { FaTelegramPlane } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-primary py-10  flex justify-evenly mt-20 ">
      <div>
        <Image
          src={"/logo.png"}
          alt="logo"
          width={300}
          height={300}
          className="w-20"
        />
        <p className="text-white max-w-xs text-sm mt-4">
          Terdepan dalam bidang Medis Keunggulan, Perawatan Terpercaya.
        </p>
      </div>

      <div>
        <h1 className="font-bold text-white">Navigasi</h1>
        <ul className="mt-8">
          {NavItem.map((item) => (
            <Link href={item.link}>
              <li className="mb-3 text-white text-sm ">{item.name}</li>
            </Link>
          ))}
        </ul>
      </div>

      <div>
        <h1 className="font-bold text-white">Kontak Kami</h1>
        <ul className="text-white mt-8 text-sm">
          <li className="mb-3">
            <span className="font-semibold">Telepon</span> : +08117122118
          </li>
          <li className="mb-3">
            <span className="font-semibold">Email</span> :
            rsudsekayu@mubakab.go.id
          </li>
          <li className="mb-3 max-w-xs">
            <span className="font-semibold">Address</span>: Jln Bupati Oesman
            Bakar, Lk. 1 Kelurahan Kayuara Kab. Musi Banyuasin
          </li>
        </ul>
      </div>

      <div>
        <h1 className="font-bold text-white">Newsletter</h1>
        <div className="flex relative bg-white mt-6 ">
          <input
            type="email"
            className="pl-2 text-sm rounded-xl  py-2 w-72 outline-none"
            placeholder="Masukkan Alamat Email Anda"
          />
          <FaTelegramPlane
            size={27}
            className="absolute top-1 right-2 text-primary "
          />
        </div>
      </div>
    </footer>
  );
}
