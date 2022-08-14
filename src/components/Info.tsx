import Image from "next/image";
import policeCarBro from "../../public/policeCarBro.png";

export default function Info() {
  return (
    <div className="min-h-screen sm:h-[100vh-80px] text-gray-400 hero bg-gray-100 ">
      <div className="flex-col hero-content lg:flex-row-reverse ">
        <div className="flex items-center justify-center w-4/5 rounded-lg shadow-lg sm:shadow-2xl sm:min-w-2/4 sm:max-h-max">
          <Image src={policeCarBro} className="border rounded-lg" />
        </div>
        <div>
          <h1 className="text-3xl font-bold sm:text-5xl text-neutral">
            Cezalardan Kurtulun
          </h1>
          <p className="py-6">
            Randevusu olmayan araç ile trafikte yakalanmanın cezaları
            ağırlaştırıldı. Araç muayenesi yaptırmama cezası, 427 TL’ye çıkmış
            bulunuyor. 427 TL TL’nin 7 iş günü içerisinde yatırılmaması halinde
            ise, bu miktar katlanarak artıyor ve araç muayenesi yaptırmama
            cezası ödenene dek de araç trafikten men cezasına kadar gidebilir.
            Ayrıca araç muayene istasyonlarında geciken her ay için ekstra %5
            ceza uygulanmaktadır.
          </p>
        </div>
      </div>
    </div>
  );
}
