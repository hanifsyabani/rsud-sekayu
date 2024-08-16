import { NavItem } from "@/utils/Navbar/NavItem";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary px-[3%] py-4 flex justify-evenly items-center mt-20 ">
      <div>
        <Image
          src={"/logo.png"}
          alt="logo"
          width={300}
          height={300}
          className="w-32"
        />
        <p className="text-white max-w-xs">
          Terdepan dalam bidang Medis Keunggulan, Perawatan Terpercaya.
        </p>
      </div>

      <div>
        <h1 className="font-bold text-white">Navigasi</h1>
        <ul className="mt-4">
          {NavItem.map((item) => (
            <Link href={item.link}>
              <li className="mb-3 text-white text-sm ">{item.name}</li>
            </Link>
          ))}
        </ul>
      </div>

      <div>
        <h1 className="font-bold text-white">Kontak Kami</h1>
        <ul className="text-white mt-4 text-sm">
          <li className="mb-3">
            <span className="font-semibold">Telepon</span> : +08117122118
          </li>
          <li className="mb-3">
            <span className="font-semibold">Email</span> :
            rsudsekayu@mubakab.go.id
          </li>
          <li className="mb-3">
            <span className="font-semibold">Address</span>: Jln Bupati Oesman
            Bakar, Lk. 1 Kelurahan Kayuara Kab. Musi Banyuasin
          </li>
        </ul>
      </div>
    </footer>
  );
}
