import Image from "next/image";

import { Info } from "@/utils/Navbar/Info";
import InfoEmergency from "./InfoEmergency";
import { NavItem } from "@/utils/Navbar/NavItem";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="">
      <div className="flex bg-white justify-between items-center px-[5%] py-3">
        <Image
          src={"/logo.png"}
          alt="logo"
          width={200}
          height={200}
          className="w-10"
        />
        <div className="flex items-center gap-6">
          {Info.map((info) => (
            <InfoEmergency
              key={info.id}
              infoHead={info.infoHead}
              infoSubHead={info.infoSubHead}
              id={info.id}
            />
          ))}
        </div>
      </div>
      <div className="bg-primary flex justify-between items-center px-[5%] py-4">
        <ul className="flex items-center gap-10 text-white">
          {NavItem.map((item) => (
            <Link key={item.id} href={item.link} className="hover:text-accent transition-all">
              <li>{item.name}</li>
            </Link>
          ))}
        </ul>
        <div>
          <button className="bg-accent px-7 py-1 rounded-full text-primary hover:bg-white hover:text-primary transition-all">Appointment</button>
        </div>
      </div>
    </nav>
  );
}
