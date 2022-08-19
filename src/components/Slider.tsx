import Image from "next/image";
import Link from "next/link";
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
        <div className="absolute z-40 grid gap-3 mx-5 mt-6 transform -translate-y-full left-7 top-40 sm:left-40 sm:top-1/2">
          <h2 className="font-extrabold sm:text-3xl">
            BEKLENMEDİK CEZALARDAN KURTARIR.
          </h2>
          <p className="text-2xs sm:text-base">
            Randevusu olmayan araç ile trafikte yakalanmanın cezaları
            ağırlaştırıldı.{" "}
          </p>
          <div className="z-40 flex gap-4 ">
            <Link href="/hakkimizda">
              <button className="rounded-none hover:bg-white btn btn-outline btn-xs sm:btn-md">
                SIK SORULAN SORULAR
              </button>
            </Link>
            <Link href="/hizmetlerimiz">
              <button className="bg-gray-100 rounded-none border-primary hover:bg-primary hover:text-white hover:border-white text-primary btn btn-xs sm:btn-md">
                RANDEVU AL
              </button>
            </Link>
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
        <div className="absolute z-40 grid gap-3 mx-5 mt-6 transform -translate-y-full left-7 top-40 sm:left-40 sm:top-1/2">
          <h2 className="font-extrabold sm:text-3xl">
            Muayene Tarihini Düşünmeye Son!
          </h2>
          <p className="text-2xs sm:text-base">
            Randevu günü tekrar hatırlatalım ve eksiksiz bir şekilde muayeneden
            geçmenize destek olalım.{" "}
          </p>
          <div className="z-40 flex gap-4">
            <Link href="/hakkimizda">
              <button className="rounded-none hover:bg-white btn btn-outline btn-xs sm:btn-md">
                SIK SORULAN SORULAR
              </button>
            </Link>
            <Link href="/hizmetlerimiz">
              <button className="bg-gray-100 rounded-none hover:bg-primary hover:text-white hover:border-white text-primary btn btn-xs sm:btn-md">
                RANDEVU AL
              </button>
            </Link>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a
            href="#slide1"
            className="z-40 border-2 rounded-none hover:bg-black hover:border-none hover:text-white btn-xs sm:btn-md btn btn-outline btn-square"
          >
            ❮
          </a>
          <a
            href="#slide3"
            className="z-40 border-2 rounded-none hover:bg-black hover:border-none hover:text-white btn-xs sm:btn-md btn btn-outline btn-square"
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
        <div className="absolute z-40 grid gap-3 mt-6 transform -translate-y-full mx-7 left-6 top-40 sm:left-40 sm:top-1/2">
          <h2 className="font-extrabold sm:text-3xl">
            Hatırlatma Servisi Neler Sunar?
          </h2>
          <p className="text-2xs sm:text-base">
            Randevu Hatırlatma servisi müşterilerimize yaklaşan randevularını,
            otomatik olarak hatırlatmamıza olanak tanıyan akıllı bir iş
            çözümüdür.{" "}
          </p>
          <div className="z-40 flex gap-4">
            <Link href="/hakkimizda">
              <button className="rounded-none hover:bg-white btn btn-outline btn-xs sm:btn-md">
                SIK SORULAN SORULAR
              </button>
            </Link>
            <Link href="/hizmetlerimiz">
              <button className="bg-gray-100 rounded-none hover:bg-primary hover:text-white hover:border-white text-primary btn btn-xs sm:btn-md">
                RANDEVU AL
              </button>
            </Link>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a
            href="#slide2"
            className="z-50 border-2 rounded-none hover:bg-black hover:border-none hover:text-white z-25 btn-xs sm:btn-md btn btn-outline btn-square"
          >
            ❮
          </a>
          <a
            href="#slide1"
            className="z-50 border-2 rounded-none hover:bg-black hover:border-none hover:text-white z-25 btn btn-xs sm:btn-md btn-outline btn-square"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}
