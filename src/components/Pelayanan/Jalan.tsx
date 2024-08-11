import Image from "next/image";
import pcr1 from "@/assets/rjalan1.jpeg";
import pcr2 from "@/assets/rjalan2.jpeg";

export default function Jalan() {
  const keunggulan = [
    {
      id: 1,
      name: "Dapatkan Resep atau Saran Tindak Lanjut.",
    },
    {
      id: 2,
      name: "Datang 10 Menit Sebelum Waktu yang Dijadwalkan.",
    },
    {
      id: 3,
      name: "Ikuti Pemeriksaan dan Konsultasi dengan Dokter.",
    },
  ];
  return (
    <div className="flex gap-4">
      <div className="w-full">
        <h1 className="text-2xl font-semibold">
          Pelayanan Rawat Jalan dengan Mudah
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
                    <li>{keunggulan.name}</li>
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
                    <li>{keunggulan.name}</li>
                  </div>
                </>
              ))}
          </ul>
        </div>
        <p>
          RSUD Sekayu menerima kunjungan pasien dengan syarat harus memiliki
          data diri lengkap serta rujukan jika menggunakan BPJS atau Pelayanan
          kesehatan.
          Pelayanan rawat jalan kami memudahkan pasien untuk mendapatkan perawatan tanpa harus menginap. Kami menyediakan berbagai layanan konsultasi, pemeriksaan rutin, dan prosedur medis yang dilakukan oleh dokter spesialis dan tim medis berpengalaman. Anda bisa mendapatkan perawatan dengan cepat dan efisien sesuai kebutuhan kesehatan Anda.  
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
