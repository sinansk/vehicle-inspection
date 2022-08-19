import Image from "next/image";
import carMechanic from "../../public/carMechanic.jpg";
import carMechanic2 from "../../public/carMechanic2.jpg";
import carEngine from "../../public/carEngine.jpg";
import carReparing from "../../public/carReparing.jpg";

export default function WhatWeDo() {
  return (
    <div className="grid gap-3 p-5 text-center text-white sm:p-20 xl:px-32 bg-slate-900">
      <p>(HATIRLATMA ÜCRETİ HARİÇ)</p>
      <h2 className="text-3xl font-bold ">ARAÇ MUAYENE ÜCRETLERİ</h2>
      <div className="w-20 h-1 mx-auto my-2 bg-primary"></div>
      <div className="grid items-center gap-3 lg:grid-cols-3 ">
        <div className="min-h-full rounded-none shadow-xl card bg-sky-900">
          <figure className="relative">
            <Image src={carMechanic} />
            <div className="absolute top-0 right-0 w-20 h-16 font-bold opacity-75 bg-sky-900">
              <p className="text-2xl">258,42</p>
              <p className="text-xl">TL</p>
            </div>
          </figure>
          <div className=" card-body">
            <div className="justify-end ">
              <p>
                Traktör (Römorklu, Römorksuz), Motosiklet ve Motorlu Bisiklet
              </p>
            </div>
          </div>
        </div>
        <div className="min-h-full rounded-none shadow-xl card bg-sky-900">
          <figure className="relative">
            <Image src={carEngine} />
            <div className="absolute top-0 right-0 w-20 h-16 font-bold opacity-75 bg-sky-900">
              <p className="text-2xl">507,40</p>
              <p className="text-xl">TL</p>
            </div>
          </figure>
          <div className=" card-body">
            <div className="justify-end ">
              <p>
                Otomobil, Minibüs, Kamyonet, Özel Amaçlı Taşıt, Arazi Taşıtı,
                Römork ve Yarı Römork
              </p>
            </div>
          </div>
        </div>
        <div className="min-h-full rounded-none shadow-xl card bg-sky-900">
          <figure className="relative">
            <Image src={carMechanic2} />
            <div className="absolute top-0 right-0 w-20 h-16 font-bold opacity-75 bg-sky-900">
              <p className="text-2xl">685,58</p>
              <p className="text-xl">TL</p>
            </div>
          </figure>
          <div className=" card-body">
            <div className="justify-end ">
              <p>Otobüs, Kamyon, Çekici ve Tanker</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
