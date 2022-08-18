import Image from "next/image";
import carMechanic from "../../public/carMechanic.jpg";
import carEngine from "../../public/carEngine.jpg";
import carReparing from "../../public/carReparing.jpg";
///NOT USING///

export default function Slider() {
  return (
    <div className="w-full overflow-y-hidden h-48 sm:scale-100 sm:h-96 lg:h-[calc(100vh-10vh)] carousel">
      <div id="slide1" className="relative w-full bg-sky-900 carousel-item">
        <div className="h-full opacity-25 ">
          <Image src={carEngine} />
        </div>
        <div className="absolute z-40 grid gap-3 mt-6 transform -translate-y-full left-10 top-40 sm:left-40 sm:top-1/2">
          <h2 className="font-extrabold sm:text-3xl">
            lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          <div className="flex gap-4">
            <button className=" btn btn-outline btn-xs sm:btn-md">
              RANDEVU AL
            </button>
            <button className=" btn btn-outline btn-xs sm:btn-md">
              DEVAMINI OKU
            </button>
          </div>
        </div>
        <div className="absolute z-30 flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a
            href="#slide3"
            className="border-2 rounded-none hover:bg-black hover:border-none hover:text-white btn-xs sm:btn-md btn btn-outline btn-square"
          >
            ❮
          </a>
          <a
            href="#slide2"
            className="border-2 rounded-none hover:bg-black hover:border-none hover:text-white btn-xs sm:btn-md btn btn-outline btn-square"
          >
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide2"
        className="relative w-full h-full bg-sky-900 carousel-item"
      >
        <div className="object-cover h-full opacity-25">
          <Image src={carMechanic} />
        </div>
        <div className="absolute z-40 grid gap-3 mt-6 transform -translate-y-full left-10 top-40 sm:left-40 sm:top-1/2">
          <h2 className="font-extrabold sm:text-3xl">
            lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          <div className="flex gap-4">
            <button className=" btn btn-outline btn-xs sm:btn-md">
              RANDEVU AL
            </button>
            <button className=" btn btn-outline btn-xs sm:btn-md">
              DEVAMINI OKU
            </button>
          </div>
        </div>
        <div className="absolute z-30 flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a
            href="#slide1"
            className="z-20 border-2 rounded-none hover:bg-black hover:border-none hover:text-white btn-xs sm:btn-md btn btn-outline btn-square"
          >
            ❮
          </a>
          <a
            href="#slide3"
            className="z-20 border-2 rounded-none hover:bg-black hover:border-none hover:text-white btn-xs sm:btn-md btn btn-outline btn-square"
          >
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide3"
        className="relative w-full h-full bg-sky-900 carousel-item "
      >
        <div className="object-cover h-full opacity-25">
          <Image src={carReparing} />
        </div>
        <div className="absolute z-40 grid gap-3 mt-6 transform -translate-y-full left-10 top-40 sm:left-40 sm:top-1/2">
          <h2 className="font-extrabold sm:text-3xl">
            lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          <div className="flex gap-4">
            <button className=" btn btn-outline btn-xs sm:btn-md">
              RANDEVU AL
            </button>
            <button className=" btn btn-outline btn-xs sm:btn-md">
              DEVAMINI OKU
            </button>
          </div>
        </div>
        <div className="absolute z-30 flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a
            href="#slide2"
            className="border-2 rounded-none hover:bg-black hover:border-none hover:text-white z-25 btn-xs sm:btn-md btn btn-outline btn-square"
          >
            ❮
          </a>
          <a
            href="#slide1"
            className="border-2 rounded-none hover:bg-black hover:border-none hover:text-white z-25 btn btn-xs sm:btn-md btn-outline btn-square"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}
