import Image from "next/image";
import carMechanic from "../img/carMechanic.jpg";

const CarMechanic = () => {
  return (
    <div className="">
      <Image
        src={carMechanic}
        alt="Alt text for the picture"
        objectFit="cover"
        quality={100}
      />
    </div>
  );
};
export default CarMechanic;
