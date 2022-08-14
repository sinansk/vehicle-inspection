import Image from "next/image";
import carInsurance from "../img/carInsurance.png";

const CarInsurance = () => {
  return (
    <div className="w-16 h-16 m-auto">
      <Image
        src={carInsurance}
        alt="Alt text for the picture"
        objectFit="cover"
        quality={100}
      />
    </div>
  );
};
export default CarInsurance;
