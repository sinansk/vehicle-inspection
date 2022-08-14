import Image from "next/image";
import offer1 from "../../public/offer1.jpg";
import offer2 from "../../public/offer2.jpg";
import offer3 from "../../public/offer3.jpg";
import offer4 from "../../public/offer4.jpg";
import offer5 from "../../public/offer5.jpg";
import offer6 from "../../public/offer6.jpg";

export default function OffersWigdets() {
  return (
    <div className="grid grid-cols-2 gap-4 mx-auto mt-5 text-center md:grid-cols-3">
      <div className="flex flex-col col-span-1 p-4 bg-white border-2 rounded-lg">
        <div className="">
          <Image className="" src={offer1} />
        </div>
        <h2 className="mb-2 text-2xl font-bold">Kolay</h2>
        <p className="">Kolay arayüzümüzle basit bir şekilde kullanın.</p>
      </div>
      <div className="flex flex-col col-span-1 p-4 bg-white border-2 rounded-lg">
        <div className="">
          <Image className="" src={offer2} />
        </div>
        <h2 className="mb-2 text-2xl font-bold">Hızlı</h2>
        <p className="">Çok hızlı bir şekilde servis aktif edilebilir.</p>
      </div>
      <div className="flex flex-col col-span-1 p-4 bg-white border-2 rounded-lg">
        <div className="">
          <Image className="" src={offer3} />
        </div>
        <h2 className="mb-2 text-2xl font-bold">Destek</h2>
        <p className="">7/24 Desteğimiz sayesinde sürekli yanınızdayız.</p>
      </div>
      <div className="flex flex-col col-span-1 p-4 bg-white border-2 rounded-lg">
        <div className="">
          <Image className="" src={offer4} />
        </div>
        <h2 className="mb-2 text-2xl font-bold">Bildirim</h2>
        <p className="">e-Mail yada SMS ile bildirim seçenekleri.</p>
      </div>
      <div className="flex flex-col col-span-1 p-4 bg-white border-2 rounded-lg">
        <div className="">
          <Image className="" src={offer5} />
        </div>
        <h2 className="mb-2 text-2xl font-bold">Güvenli</h2>
        <p className="">
          SSL sertifikasıyla güvenliğinizi korumanıza yardımcı olur.
        </p>
      </div>
      <div className="flex flex-col col-span-1 p-4 bg-white border-2 rounded-lg">
        <div className="">
          <Image className="" src={offer6} />
        </div>
        <h2 className="mb-2 text-2xl font-bold">Ödeme</h2>
        <p className="">Tüm banka kartlarıyla güvenli ödeme kolaylığı.</p>
      </div>
    </div>
  );
}
