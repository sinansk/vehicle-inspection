import Link from "next/link";
import Image from "next/image";
import beetle from "../../public/beetle.png";
import { useState } from "react";
export default function Pricing2() {
  return (
    <div className="grid items-center gap-10 p-5 mt-8 font-sans font-thin text-slate-600 justify-evenly lg:mt-0 lg:grid-cols-3 lg:gap-7 bg-gray-50 xl:px-32 sm:p-20">
      <div className="z-10 flex flex-col items-center h-full transition-all duration-500 bg-white rounded-none shadow-xl hover:scale-105 group hover:text-white hover:bg-sky-900">
        <div className="relative items-center text-center card-body ">
          <div className="absolute top-0 flex items-center justify-center w-20 h-20 transform -translate-y-1/2 bg-white rounded-full "></div>
          <div className="absolute top-0 flex items-center justify-start w-16 h-16 transition-all duration-500 transform -translate-y-1/2 rounded-full group-hover:bg-sky-900 bg-gray-50 group ">
            <h3 className="mx-auto font-semibold text-gray-400 transition-all duration-500 group-hover:text-slate-300">
              Ücretsiz
            </h3>
          </div>

          <h2 className="mt-10 text-3xl font-bold hover:text-white">
            Sadece Randevu
          </h2>
          <h4 className="text-sm">(Sınırlı bir süre için)</h4>
          <div className=" flex w-full mt-auto border-t-[1px] border-slate-300 border-dashed "></div>
          <div className="flex flex-col items-center gap-2 mt-auto">
            <p>✓ Araç muayene randevusu</p>
            <p>✕ Sonraki muayeneler için hatırlatıcı</p>
            <p>✕ SMS ile hatırlatma</p>
            <p>✕ Email ile hatırlatma</p>
            <button className="h-8 text-white rounded-none w-28 btn btn-primary">
              TIKLA
            </button>
          </div>
        </div>
      </div>
      <div className="z-10 flex flex-col items-center h-full transition-all duration-500 bg-white rounded-none shadow-xl hover:scale-105 group hover:text-white hover:bg-sky-900">
        <div className="relative items-center text-center card-body ">
          <div className="absolute top-0 flex items-center justify-center w-20 h-20 transform -translate-y-1/2 bg-white rounded-full "></div>
          <div className="absolute top-0 flex items-center justify-start w-16 h-16 transition-all duration-500 transform -translate-y-1/2 rounded-full group-hover:bg-sky-900 bg-gray-50 group ">
            <h3 className="mx-auto font-semibold transition-all duration-500 text-slate-700 group-hover:text-white">
              149 TL
            </h3>
          </div>

          <h2 className="mt-10 text-3xl font-bold hover:text-white">
            Randevu Ve Hatırlatma
          </h2>
          <h4 className="text-sm">(Yıllık)</h4>
          <div className="flex w-full my-5 border-t-[1px] border-slate-300 border-dashed "></div>
          <div className="flex flex-col items-center gap-2 mt-auto">
            <p>✓ Araç muayene randevusu</p>
            <p>✓ Sonraki muayeneler için hatırlatıcı</p>
            <p>✓ SMS ile hatırlatma</p>
            <p>✓ Email ile hatırlatma</p>
            <button className="h-8 text-white rounded-none w-28 btn btn-primary">
              TIKLA
            </button>
          </div>
        </div>
      </div>
      <div className="z-10 flex flex-col items-center h-full transition-all duration-500 bg-white rounded-none shadow-xl hover:scale-105 group hover:text-white hover:bg-sky-900">
        <div className="relative items-center text-center card-body ">
          <div className="absolute top-0 flex items-center justify-center w-20 h-20 transform -translate-y-1/2 bg-white rounded-full "></div>
          <div className="absolute top-0 flex items-center justify-start w-16 h-16 transition-all duration-500 transform -translate-y-1/2 rounded-full group-hover:bg-sky-900 bg-gray-50 group ">
            <h3 className="mx-auto font-semibold transition-all duration-500 text-slate-700 group-hover:text-white">
              149 TL
            </h3>
          </div>

          <h2 className="mt-10 text-3xl font-bold hover:text-white">
            Sadece Hatırlat
          </h2>
          <h4 className="text-sm">(Yakında)</h4>
          <div className="flex w-full  mt-auto border-t-[1px] border-slate-300 border-dashed "></div>
          <div className="flex flex-col items-center gap-2 mt-auto">
            <p>✕ Araç muayene randevusu</p>
            <p>✓ Sonraki muayeneler için hatırlatıcı</p>
            <p>? SMS ile hatırlatma</p>
            <p>? Email ile hatırlatma</p>
            <button className="h-8 text-white rounded-none w-28 btn btn-primary">
              TIKLA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
