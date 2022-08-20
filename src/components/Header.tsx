import Link from "next/link";
import Image from "next/image";
import carInsurance from "../../public/carInsurance.png";
import phoneCall from "../../public/phoneCall.png";
import email from "../../public/email.png";
import { useState } from "react";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNav = () => {
    setIsNavOpen((prev) => !prev);
  };
  return (
    <>
      <div className="flex flex-wrap items-center justify-between text-center text-gray-400 xl:px-32 min-h-12 lg:min-h-[5vh] sm:px-20 bg-slate-800">
        <div className="flex flex-wrap items-center mx-auto lg:mx-0 sm:gap-10">
          <div className="flex items-center gap-2 mx-auto lg:mx-0">
            <div className="w-4 m-auto ">
              <Image src={phoneCall} />
            </div>
            <p>Phone: (123) 0900 76546</p>
          </div>
          <div className="flex items-center gap-2 mx-auto lg:mx-0">
            <div className="w-5 m-auto -mb-1">
              <Image src={email} />
            </div>
            <p>Mailus@Carzone.com</p>
          </div>
        </div>
        <div className="flex items-center gap-3 mx-auto lg:m-0">
          <a>Quick Links</a>
          <a>Support</a>
          <a>Register</a>
        </div>
      </div>

      <div className="sticky top-0 left-0 z-50 text-sm font-semibold bg-white xl:px-32  font-sans-serif navbar text-slate-900 backdrop-blur-2xl  lg:px-20 sm:h-[14vh]">
        <div className=" navbar-start">
          <div className="">
            <label className="btn btn-ghost lg:hidden" onClick={handleNav}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <div
              className={`${
                isNavOpen
                  ? `flex  flex-col  justify-evenly items-center absolute top-0 left-0 bg-gray-100 p-30  z-10  w-screen h-screen `
                  : `hidden`
              } overflow-y-hidden`}
            >
              <div
                className="absolute top-0 left-0 px-4 py-4"
                onClick={() => setIsNavOpen(false)}
              >
                <svg
                  className="w-8 h-8 text-slate-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul
                className="flex flex-col items-center justify-between min-h-[250px]"
                onClick={() => setIsNavOpen(false)}
              >
                <Link href="/">
                  <li className="my-8 uppercase border-b border-gray-400">
                    ANA SAYFA
                  </li>
                </Link>
                <Link href="/hizmetlerimiz">
                  <li className="my-8 uppercase border-b border-gray-400">
                    HİZMETLERİMİZ
                  </li>
                </Link>
                <Link href="/hakkimizda">
                  <li className="my-8 uppercase border-b border-gray-400">
                    HAKKIMIZDA
                  </li>
                </Link>
                <Link href="/iletisim">
                  <li className="my-8 uppercase border-b border-gray-400">
                    İLETİŞİM
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <Link href="/">
            <div className="w-16 scale-90 cursor-pointer ">
              <Image src={carInsurance} />
            </div>
          </Link>
          <Link href="/">
            <p className="text-xl font-bold cursor-pointer">
              HATIRLATMA SERVİSİ
            </p>
          </Link>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="p-0 menu menu-horizontal">
            <li className="justify-between">
              <Link href="/">ANA SAYFA</Link>
            </li>
            <li className="h-24">
              <Link href="/hizmetlerimiz">HİZMETLERİMİZ</Link>
            </li>
            <li className="h-24">
              <Link href="/hakkimizda">HAKKIMIZDA</Link>
            </li>
            <li className="h-24">
              <Link href="/iletisim">İLETİŞİM</Link>
            </li>
          </ul>
        </div>
        <div className="gap-2 navbar-end">
          <label htmlFor="registerModal">
            <button className="h-10 text-white rounded-none btn btn-primary">
              Randevu Al
            </button>
          </label>
        </div>
      </div>
    </>
  );
}
