import Image from "next/image";
import img from "@/assets/rinap2.jpeg";

export default function CardBerita({
  title,
  desc,
  body,
}: {
  title: string;
  desc: string;
  body: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <Image
        src={img}
        width={300}
        height={300}
        alt="banners"
        className="w-32"
      />
      <div>
        <p className="text-secondary text-sm">
          Minggu, 12 Agustus 2004 | Pemerintah Kab. Musi Banyuasin
        </p>
        <h1 className="font-semibold mb-3">
          {title}
        </h1>

        <p className="text-sm">
          {desc}  
        </p>
      </div>
    </div>
  );
}
