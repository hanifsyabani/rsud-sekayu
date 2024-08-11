import { FaPhoneVolume } from "react-icons/fa6";
import { LuClock10 } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";

export default function InfoEmergency({
  infoHead,
  infoSubHead,
  id,
}: {
  infoHead: string;
  infoSubHead: string;
  id: number;
}) {
  const renderIcon = (id: number) => {
    switch (id) {
      case 1:
        return <FaPhoneVolume size={25} className="text-primary" />;
      case 2:
        return <LuClock10 size={25} className="text-primary" />;
      case 3:
        return <GrLocation size={25} className="text-primary" />;
    }
  };

  return (
    <div className="flex items-center gap-4">
      {renderIcon(id)}
      <div>
        <h1 className="font-semibold text-primary">{infoHead}</h1>
        <p className="text-sm text-secondary ">{infoSubHead}</p>
      </div>
    </div>
  );
}
