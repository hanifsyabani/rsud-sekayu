import Image from "next/image";
import pcr1 from '@/assets/pcr1.jpeg'
import pcr2 from '@/assets/pcr2.jpeg'

export default function Pcr() {
  const keunggulan = [
    {
      id: 1,
      name: "Tes Darah Lengkap",
    },
    {
      id: 2,
      name: "Tes Urine dan Feses",
    },
    {
      id: 3,
      name: "Tes Fungsi Hati dan Ginjal",
    },
    {
      id: 4,
      name: "Pemeriksaan Hormon",
    },
    {
      id: 5,
      name: "Deteksi Penyakit Menular",
    },
    {
      id: 6,
      name: "Lakukan Pemeriksaan oleh Tim Ahli.",
    },
  ];
  return (
    <div className="flex gap-4">
      <div className="w-full">
        <h1 className="text-2xl font-semibold">
          Proses Pengambilan Sampel yang Cepat:
        </h1>
        <div className="flex my-7 gap-10 items-center">
          <ul>
            {keunggulan
              .filter((keunggulan) => keunggulan.id >= 1 && keunggulan.id <= 3)
              .map((keunggulan) => (
                <>
                  <div className="flex items-center gap-4 mb-2" key={keunggulan.id}>
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
                  <div className="flex items-center mb-2 gap-4" key={keunggulan.id}>
                    <div className="w-4 h-4 bg-secondary rounded-full"></div>
                    <li>{keunggulan.name}</li>
                  </div>
                </>
              ))}
          </ul>
        </div>
        <p>
          RSUD Sekayu menerima PCR atau polymerase chain reaction adalah
          pemeriksaan laboratorium untuk mendeteksi keberadaan material genetik
          dari sel, bakteri, atau virus. Saat ini, PCR juga digunakan untuk
          mendiagnosis penyakit COVID-19, yaitu dengan mendeteksi material
          genetik virus Corona.
        </p>
      </div>
      <div className="w-1/2">
        <Image src={pcr1} alt="pcrimg" width={300} height={300} className="w-full"/>
        <Image src={pcr2} alt="pcrimg" width={300} height={300} className="w-full mt-6"/>
      </div>
    </div>
  );
}
