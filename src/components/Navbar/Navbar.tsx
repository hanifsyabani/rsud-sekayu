"use client";

import Image from "next/image";

import { Info } from "@/utils/Navbar/Info";
import InfoEmergency from "./InfoEmergency";
import { NavItem } from "@/utils/Navbar/NavItem";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FaRegUser } from "react-icons/fa";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const path = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const height = window.innerHeight;

      if (scrollTop > height * 0.5) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-10 ${
        scrolled ? "-top-20" : "top-0"
      } transition-all`}
    >
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
            <Link
              key={item.id}
              href={item.link}
              className="hover:text-accent transition-all"
            >
              <li className={`${path === item.link ? "text-accent" : ""}`}>
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <button className="bg-accent px-7 py-1 rounded-full text-primary hover:bg-white hover:text-primary transition-all">
            Appointment
          </button>
          <Link href={'/login'} className="bg-secondary p-2 rounded-full cursor-pointer">
            <FaRegUser size={20} className="text-white" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
