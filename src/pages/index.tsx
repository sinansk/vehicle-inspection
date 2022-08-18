import Image from "next/image";
import schedule from "../../public/schedule.png";
import Hero from "../components/Hero";
import Info from "../components/Info";
import Steps from "../components/Steps";
import Pricing from "../components/Pricing";
import OffersWidgets from "../components/OffersWidgets";
import Stats from "../components/Stats";
import Slider from "../components/Slider";
import Cards from "../components/Cards";
import About from "../components/About";
import WhatWeDo from "../components/WhatWeDo";
import Stats2 from "../components/Stats2";
import ClientTestimonial from "../components/ClientTestimonial";
import SmallContact from "../components/SmallContact";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import PageHeading from "../components/PageHeading";
export default function Home() {
  return (
    <div className="w-full h-full overflow-x-hidden bg-gray-50">
      <Slider />
      {/* <Info /> */}
      <Cards />
      <About />
      <WhatWeDo />
      <Stats2 />
      <ClientTestimonial />
      <SmallContact />

      {/* OFFERS SECTION */}
      {/* <div className="flex flex-col gap-5 sm:text-center items-center justify-center py-5 sm:p-16 sm:w-4/5 px-4 sm:mx-auto text-slate-400 h-[100vh-80px]">
        <h2 className="text-3xl font-semibold text-neutral">
          Hatırlatma Servisi Size Neler Sağlar?
        </h2>
        <p className="">
          Randevu Hatırlatıcı size 1 hafta öncesinden muayene öncesi aracınızda
          bulunması gereken ekipmanlar ve yanınızda bulunması gereken
          dokümanların listesini SMS ve E-Mail olarak size hatırlatır.
          Aracınızdaki eksiklikleri gidermek ve muayene istasyonunda tekrara
          düşmemek için zaman kazanmış olursunuz.
        </p>
        <OffersWidgets />
      </div>
      <section className="bg-gray-100 flex flex-col gap-5 sm:text-center items-center justify-center py-10 sm:p-16 sm:mx-auto text-slate-400 h-[100vh-80px]">
        <Steps />
        <Pricing />
      </section>
      <section className="flex flex-col gap-5 sm:text-center items-center justify-center py-10 sm:p-16 sm:mx-auto text-slate-400 h-[100vh-80px]">
        <div className="w-32 h-auto sm:w-40">
          <Image src={schedule} />
        </div>
        <h3 className="mb-3 text-2xl font-medium text-center sm:text-3xl">
          Belirtilen Tarihe{" "}
          <span className="font-semibold text-emerald-600">Sorunsuz</span> &
          Hızlı Hatırlatma
        </h3>
        <Stats />
      </section> */}

      {/* </div> */}
    </div>
  );
}
