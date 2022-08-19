import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <div className="grid gap-3 p-5 text-center bg-white sm:px-48 sm:py-20 text-slate-900">
      <h3 className="font-semibold">HATIRLATMA SERVİSİ</h3>
      <h2 className="font-sans text-3xl font-semibold">
        BEKLENMEDİK CEZALARDAN KURTARIR
      </h2>
      <div className="w-20 h-[1.5px] bg-slate-700 mx-auto mb-3"></div>
      <p className="text-gray-500">
        Randevusu olmayan araç ile trafikte yakalanmanın cezaları
        ağırlaştırıldı. Araç muayenesi yaptırmama cezası, 427 TL’ye çıkmış
        bulunuyor. 427 TL TL’nin 7 iş günü içerisinde yatırılmaması halinde ise,
        bu miktar katlanarak artıyor ve araç muayenesi yaptırmama cezası ödenene
        dek de araç trafikten men cezasına kadar gidebilir. Ayrıca araç muayene
        istasyonlarında geciken her ay için ekstra %5 ceza uygulanmaktadır.
      </p>
      <div className="flex justify-center gap-5">
        <Link href="/hakkimizda">
          <button className="text-white rounded-none btn btn-primary">
            HAKKIMIZDA
          </button>
        </Link>
        <Link href="/hizmetlerimiz">
          <button className="text-white rounded-none btn btn-primary">
            RANDEVU AL
          </button>
        </Link>
      </div>
    </div>
  );
}
