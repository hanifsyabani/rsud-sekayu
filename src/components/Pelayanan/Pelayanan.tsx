"use client";

import { SiScilab } from "react-icons/si";
import { FaHospitalUser } from "react-icons/fa6";
import { BsHospital } from "react-icons/bs";
import { TbUrgent } from "react-icons/tb";
import { InfoPelayanan } from "@/utils/Homepage/Pelayanan";
import Pcr from "@/components/Pelayanan/Pcr";
import { useState } from "react";
import Inap from "./Inap";
import Darurat from "./Darurat";
import Jalan from "./Jalan";

export default function Pelayanan() {
  const [pelayanan, setPelayanan] = useState("pcr");

  const renderPelayanan = (id: number) => {
    switch (id) {
      case 1:
        return <SiScilab size={30} className=" mx-auto" />;
      case 2:
        return <FaHospitalUser size={30} className=" mx-auto" />;
      case 3:
        return <BsHospital size={30} className=" mx-auto" />;
      case 4:
        return <TbUrgent size={30} className=" mx-auto" />;
    }
  };

  const renderContentPelayanan = (content: any) => {
    switch (content) {
      case "pcr":
        return <Pcr />;
      case "lab":
        return <Jalan />;
      case "inap":
        return <Inap />;
      case "darurat":
        return <Darurat />;
    }
  };
  return (
    <div>
      <div className="text-center">
        <p className="text-secondary">Kepedulian yang dapat Anda percayai</p>
        <h1 className="text-3xl font-bold text-primary">Pelayanan Kami</h1>
      </div>

      <div className="flex mt-20 gap-8 ">
        <div className="border border-gray-100 ">
          {InfoPelayanan.map((item) => (
            <div
              key={item.id}
              className={`p-4 w-48 py-6  text-center shadow-2xl cursor-pointer hover:scale-105 transition-all ${
                pelayanan === item.title
                  ? "bg-primary text-white"
                  : "bg-white text-primary"
              }`}
              onClick={() => setPelayanan(item.title)}
            >
              {renderPelayanan(item.id)}
              <p
                className={`${
                  pelayanan === item.title ? "text-white" : "text-secondary"
                } mt-2`}
              >
                {item.namaPelayanan}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10">{renderContentPelayanan(pelayanan)}</div>
      </div>
    </div>
  );
}
