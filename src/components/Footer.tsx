import Image from "next/image";
import carInsurance from "../../public/carInsurance.png";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="flex flex-wrap p-10 sm:grid footer bg-base-200 text-base-content">
      <div className="hidden text-center sm:inline-block">
        <div className="w-16 m-auto">
          <Image src={carInsurance} />
        </div>
        <p className="">
          Randevu Hatırlatma Servisi Ltd.
          <br />
          Copyright © {new Date().getFullYear()} - Tüm hakları saklıdır.
        </p>
      </div>
      <div>
        <span className="footer-title">HİZMETLERİMİZ</span>
        <a className="link link-hover">Muayene Öncesi</a>
        <a className="link link-hover">Muayene Sırasında</a>
        <a className="link link-hover">Muayene Sonrasında</a>
      </div>
      <div>
        <span className="footer-title">ŞİRKET PROFİLİ</span>
        <span className="link link-hover">
          <Link href="/hakkimizda">Hakkımızda</Link>
        </span>
        <span className="link link-hover">
          <Link href="iletisim">İletişim</Link>
        </span>
      </div>
      <div className="">
        <span className="footer-title">ŞARTLAR</span>
        <a className="link link-hover">Kullanım Koşulları</a>
        <a className="link link-hover">Gizlilik Sözleşmesi</a>
        {/* <a className="link link-hover">Cookie policy</a> */}
      </div>
    </footer>
  );
}
