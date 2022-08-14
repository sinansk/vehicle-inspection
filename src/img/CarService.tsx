import Image from "next/image";
import carService from "../img/carService.jpg";

const CarService = () => {
  return (
    <div className="">
      <Image
        src={carService}
        alt="Alt text for the picture"
        objectFit="cover"
        quality={100}
      />
    </div>
  );
};
export default CarService;
