import Image from "next/image";
import carServiceHood from "../img/carServiceHood.jpg";

const CarServiceHood = () => {
  return (
    <div className="">
      <Image
        src={carServiceHood}
        alt="Alt text for the picture"
        objectFit="cover"
        quality={100}
      />
    </div>
  );
};
export default CarServiceHood;
