import Image from "next/image";
import { FaCalendar, FaUser,FaEye,FaRegHeart } from "react-icons/fa";

export default function CardNews({
  title,
  desc,
  body,
  img,
}: {
  title: string;
  desc: string;
  body: string;
  img: string;
}) {
  return (
    <div className="mt-10 w-full">
      <Image src={img} width={300} height={300} alt="banners" className="w-full h-72  object-cover"/>
      <div className="flex items-center gap-4 pt-4 pb-2">
        <div className="flex items-center gap-2">
          <FaCalendar size={20} className="text-primary"  />
          <p>Senin, 5 Oktober 2024</p>
        </div>
        <div className="flex items-center gap-2">
          <FaUser size={20} className="text-secondary" />
          <p>By Author</p>
        </div>
        <div className="flex items-center gap-2">
          <FaEye size={20} className="text-blue-500" />
          <p>20</p>
        </div>
        <div className="flex items-center gap-2">
          <FaRegHeart size={20} className="text-red-500" />
          <p>12</p>
        </div>

      </div>
      <h1 className="text-2xl font-bold text-primary">{title}</h1>
      <small>{desc}</small>
    </div>
  );
}
