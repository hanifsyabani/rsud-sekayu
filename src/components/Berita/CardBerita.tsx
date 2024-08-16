import Image from "next/image";
import img from "@/assets/rinap2.jpeg";

export default function CardBerita({
  title,
  desc,
  body,
  date,
}: {
  title: string;
  desc: string;
  body: string;
  date: string;
}) {
  return (
    <div className="flex items-center gap-4 mt-10 pb-10">
      <Image
        src={img}
        width={300}
        height={300}
        alt="banners"
        className="w-32"
      />
      <div>
        <p className="text-secondary text-sm">
          {date} | Pemerintah Kab. Musi Banyuasin
        </p>
        <h1 className="font-semibold mb-3">
          {title
            ? title.length > 60
              ? title.slice(0, 60) + "..."
              : title
            : "No Title"}
        </h1>

        <p className="text-sm">
          {desc
            ? desc.length > 100
              ? desc.slice(0, 100) + "..."
              : desc
            : "No Description"}
        </p>
      </div>
    </div>
  );
}
