import Image from "next/image";
import pcr1 from "@/assets/rinap1.jpeg";
import pcr2 from "@/assets/rinap2.jpeg";

export default function Inap() {
  const keunggulan = [
    {
      id: 1,
      name: "Kamar yang Nyaman dengan Fasilitas Modern.",
    },
    {
      id: 2,
      name: "Kamar yang Nyaman dengan Fasilitas Modern.",
    },
    {
      id: 3,
      name: "Perawatan Intensif 24 Jam.",
    },
    {
      id: 4,
      name: "Menu Makanan Bergizi yang Disesuaikan dengan Kebutuhan Pasien.",
    },
    {
      id: 5,
      name: "Proses Pemulihan dengan Pendekatan Holistik.",
    },
  ];

  return (
    <div className="flex gap-4">
      <div className="w-full">
        <h1 className="text-2xl font-semibold">
          Rawat Inap Berkualitas untuk Pemulihan Optimal.
        </h1>
        <div className="flex my-7 gap-10 items-center">
          <ul>
            {keunggulan
              .filter((keunggulan) => keunggulan.id >= 1 && keunggulan.id <= 3)
              .map((keunggulan) => (
                <>
                  <div
                    className="flex items-center gap-4 mb-2"
                    key={keunggulan.id}
                  >
                    <div className="w-4 h-4 bg-secondary rounded-full"></div>
                    <li className="text-sm">{keunggulan.name}</li>
                  </div>
                </>
              ))}
          </ul>
          <ul>
            {keunggulan
              .filter((keunggulan) => keunggulan.id >= 4 && keunggulan.id <= 6)
              .map((keunggulan) => (
                <>
                  <div
                    className="flex items-center mb-2 gap-4"
                    key={keunggulan.id}
                  >
                    <div className="w-4 h-4 bg-secondary rounded-full"></div>
                    <li className="text-sm">{keunggulan.name}</li>
                  </div>
                </>
              ))}
          </ul>
        </div>
        <p>
          RSUD Sekayu menerima kunjungan pasien dengan rawat inap dan harus
          memiliki data diri lengkap serta rujukan jika menggunakan BPJS atau
          Pelayanan kesehatan, RSUD Sekayu juga menerima pasien pengunjung yang
          ingin berobat umum.
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
