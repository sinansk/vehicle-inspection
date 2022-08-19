import Image from "next/image";
import smile from "../../public/smile.png";
import checkMark from "../../public/checkMark.png";
import medal from "../../public/medal.png";
import world from "../../public/world.png";
import { useEffect, useState } from "react";
export default function Stats2() {
  const [stats, setStats] = useState({
    customer: 6000,
    successRate: 0,
    leading: 0,
    city: 0,
  });

  return (
    <div className="grid flex-wrap items-center gap-3 p-5 xl:px-32 lg:flex sm:p-20 justify-evenly bg-gray-50">
      <div className="flex flex-col items-center w-64 h-56 font-semibold text-center text-black bg-white xl:w-72 xl:h-68 justify-evenly">
        <div className="w-10">
          <Image src={smile} />
        </div>
        <h2 className="text-3xl">6,328+</h2>
        <p className="text-sky-900">MUTLU MÜŞTERİ</p>
      </div>
      <div className="flex flex-col items-center w-64 h-56 font-semibold text-center text-black bg-white justify-evenly">
        <div className="w-10">
          <Image src={checkMark} />
        </div>
        <h2 className="text-3xl">100 %</h2>
        <p className="text-sky-900">BAŞARILI İŞLEM</p>
      </div>
      <div className="flex flex-col items-center w-64 h-56 font-semibold text-center text-black bg-white justify-evenly">
        <div className="w-10">
          <Image src={medal} />
        </div>
        <h2 className="text-3xl">1</h2>
        <p className="text-sky-900">SEKTÖR ÖNCÜSÜ</p>
      </div>
      <div className="flex flex-col items-center w-64 h-56 font-semibold text-center text-black bg-white justify-evenly">
        <div className="w-10">
          <Image src={world} />
        </div>
        <h2 className="text-3xl">81 İL</h2>
        <p className="text-sky-900">TÜM TÜRKİYE</p>
      </div>
    </div>
  );
}
