import Image from "next/image";
import carMechanic from "../../public/carMechanic.jpg";
import carMechanic2 from "../../public/carMechanic2.jpg";
import carEngine from "../../public/carEngine.jpg";
import carReparing from "../../public/carReparing.jpg";

export default function WhatWeDo() {
  return (
    <div className="grid gap-3 p-5 text-center text-white sm:p-20 xl:px-32 bg-slate-900">
      <p>WHAT WE DO</p>
      <h2 className="text-3xl font-bold ">POPULAR CAR REPAIR SERVICES</h2>
      <div className="w-20 h-1 mx-auto my-2 bg-primary"></div>
      <div className="grid items-center gap-3 lg:flex justify-evenly ">
        <div className="rounded-none shadow-xl card bg-sky-900">
          <figure className="relative">
            <Image src={carMechanic} />
            <div className="absolute top-0 right-0 h-16 font-bold opacity-75 w-14 bg-sky-900">
              <p className="text-xl">$</p>
              <p className="text-2xl">120</p>
            </div>
          </figure>
          <div className=" card-body">
            <div className="justify-end ">
              <h3>Car cleaning & washing</h3>
              <p>duo eirmod eos erat, et nonumy sed tempor</p>
            </div>
          </div>
        </div>
        <div className="rounded-none shadow-xl card bg-sky-900">
          <figure className="relative">
            <Image src={carEngine} />
            <div className="absolute top-0 right-0 h-16 font-bold opacity-75 w-14 bg-sky-900">
              <p className="text-xl">$</p>
              <p className="text-2xl">120</p>
            </div>
          </figure>
          <div className=" card-body">
            <div className="justify-end ">
              <h3>Car cleaning & washing</h3>
              <p>duo eirmod eos erat, et nonumy sed tempor</p>
            </div>
          </div>
        </div>
        <div className="rounded-none shadow-xl card bg-sky-900">
          <figure className="relative">
            <Image src={carMechanic2} />
            <div className="absolute top-0 right-0 h-16 font-bold opacity-75 w-14 bg-sky-900">
              <p className="text-xl">$</p>
              <p className="text-2xl">120</p>
            </div>
          </figure>
          <div className=" card-body">
            <div className="justify-end ">
              <h3>Car cleaning & washing</h3>
              <p>duo eirmod eos erat, et nonumy sed tempor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
