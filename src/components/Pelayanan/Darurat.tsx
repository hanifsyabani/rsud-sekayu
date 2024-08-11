import Image from "next/image";
import pcr1 from "@/assets/rdarurat1.jpeg";
import pcr2 from "@/assets/rdarurat2.jpeg";

export default function Darurat() {
  const keunggulan = [
    {
      id: 1,
      name: "08319313813",
    },
    {
      id: 2,
      name: "Hubungi IGD atau Nomor Darurat Kami dengan Segera.",
    },
    {
      id: 3,
      name: "Siapkan Informasi Medis Penting Riwayat Penyakit, Alergi, dll",
    },
    {
      id: 4,
      name: "Jangan Panik dan Ikuti Instruksi Tim Medis",
    },
  ];
  return (
    <div className="flex gap-4">
      <div className="w-full">
        <h1 className="text-2xl font-semibold">
          Respon Cepat, Penanganan Tepat
        </h1>
        <div className="flex my-7 gap-10 items-center">
          <ul>
            {keunggulan.map((keunggulan) => (
              <>
                <div
                  className="flex items-center gap-4 mb-2"
                  key={keunggulan.id}
                >
                  <div className="w-4 h-4 bg-secondary rounded-full"></div>
                  <li>{keunggulan.name}</li>
                </div>
              </>
            ))}
          </ul>
        </div>
        <p>
          RSUD Sekayu memberikan pelayanan Gawat Darurat Cepat dan Tanggap,
          Bidang Bedah, Bidang Medik non Bedah, Bidang Obsetri Ginekologie
          Selama 24 Jam.
        </p>
      </div>
      <div className="w-1/2">
        <Image
          src={pcr1}
          alt="pcrimg"
          width={300}
          height={300}
          className="w-full"
        />
        <Image
          src={pcr2}
          alt="pcrimg"
          width={300}
          height={300}
          className="w-full mt-6"
        />
      </div>
    </div>
  );
}
