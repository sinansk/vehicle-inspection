import Image from "next/image";
import carInsurance from "../../public/carInsurance.png";
import pin from "../../public/pin.png";
import smartphone from "../../public/smartphone.png";
import fax from "../../public/fax.png";
import stopwatch from "../../public/stopwatch.png";
import Link from "next/link";
export default function Footer() {
  return (
    <div>
      <footer className="flex relative flex-wrap p-10 sm:p-20 xl:px-32 text-lg 2xl:text-2xl lg:h-[calc(86vh-170px)] sm:grid sm:grid-cols-4 gap-10 footer bg-zinc-900 text-slate-200">
        <div className="hidden text-left sm:block">
          <div className="w-12 mr-auto">
            <Image src={carInsurance} />
          </div>
          <p>
            Randevu Hatırlatma servisi müşterilerimize yaklaşan randevularını,
            otomatik olarak hatırlatmamıza olanak tanıyan akıllı bir iş
            çözümüdür.
          </p>
        </div>
        <div className="sm:mx-auto">
          <span className="footer-title">HİZMETLERİMİZ</span>
          <a className="link link-hover">Muayene Öncesi</a>
          <a className="link link-hover">Muayene Sırasında</a>
          <a className="link link-hover">Muayene Sonrasında</a>
        </div>
        <div className="sm:mx-auto">
          <span className="footer-title">ŞİRKET PROFİLİ</span>
          <span className="link link-hover">
            <Link href="/hakkimizda">Hakkımızda</Link>
          </span>
          <span className="link link-hover">
            <Link href="iletisim">İletişim</Link>
          </span>
        </div>
        <div className="sm:mx-auto">
          <span className="footer-title">İLETİŞİM</span>
          <div className="flex">
            <div className="w-4 mr-1">
              <Image src={pin} />
            </div>
            <p>
              <span className="font-semibold">Adres:</span> İstanbul, Türkiye
            </p>
          </div>
          <div className="flex">
            <div className="w-4 mr-1">
              <Image src={smartphone} />
            </div>
            <p>
              <span className="font-semibold">Bize Ulaşın:</span>{" "}
              Mail@carzone.com
            </p>
          </div>
          <div className="flex">
            <div className="w-4 mr-1">
              <Image src={fax} />
            </div>
            <p>
              <span className="font-semibold">Fax:</span> +(322) 58 759 897
            </p>
          </div>
          <div className="flex">
            <div className="w-4 mr-1">
              <Image src={stopwatch} />
            </div>
            <div>
              <p className="font-semibold">Pazartesi-Cumartesi</p>
              <p>9.00-19.00</p>
            </div>
          </div>

          {/* <a className="link link-hover">Cookie policy</a> */}
        </div>
      </footer>
      <div className="flex flex-wrap items-center justify-between px-10 text-center min-h-8 bg-zinc-800 sm:px-20 xl:px-36 2xl:text-lg xl:h-12">
        <div className="flex gap-3">
          <p className="">
            Copyright © {new Date().getFullYear()} - Tüm hakları saklıdır.
            Randevu Hatırlatma Servisi Ltd.
          </p>
        </div>
        <div className="flex gap-5">
          <a className="link link-hover">Kullanım Koşulları</a>
          <a className="link link-hover">Gizlilik Sözleşmesi</a>
        </div>
      </div>
    </div>
  );
}
