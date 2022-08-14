import Image from "next/image";
import carLift from "../img/carLift.jpg";

const CarLift = () => {
  return (
    <div className="w-16 h-16 m-auto">
      <Image
        src={carLift}
        alt="Alt text for the picture"
        objectFit="cover"
        quality={100}
      />
    </div>
  );
};
export default CarLift;
