import Image from "next/image";
import carTire from "../img/carTire.jpg";

const CarTire = () => {
  return (
    <div className="">
      <Image
        src={carTire}
        alt="Alt text for the picture"
        objectFit="cover"
        quality={100}
      />
    </div>
  );
};
export default CarTire;
