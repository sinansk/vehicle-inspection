import Link from "next/link";
import Image from "next/image";
import beetle from "../../public/beetle.png";

export default function Pricing2() {
  return (
    <div className="grid items-center p-5 font-sans font-thin text-slate-600 justify-evenly lg:flex gap-7 ">
      <div className="z-10 flex flex-col items-center transition-all duration-500 bg-white rounded-none shadow-xl hover:text-white hover:bg-sky-900">
        <div className="relative items-center text-center w-96 h-96 card-body ">
          <div className="absolute top-0 flex items-center justify-center w-20 h-20 transform -translate-y-1/2 bg-white rounded-full "></div>
          <div className="absolute top-0 flex items-center justify-center w-16 h-16 transform -translate-y-1/2 rounded-full hover:bg-sky-900 bg-gray-50 "></div>
          <h2 className="mt-10 text-4xl font-bold hover:text-white">149 TL</h2>
          <div className="flex w-full my-5 border-t-[1px] border-slate-300 border-dashed "></div>
          <div className="flex flex-col items-center gap-2">
            <p>Yearly car inspection</p>
            <p>Outside car wash</p>
            <p>Speed drive and test</p>
            <p>Full polishing</p>
            <button className="h-8 text-white rounded-none w-28 btn btn-primary">
              TIKLA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
