import Link from "next/link";
import Image from "next/image";
import carInsurance from "../../public/carInsurance.png";
import phoneCall from "../../public/phoneCall.png";
import email from "../../public/email.png";

export default function Header() {
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
      <div className="sticky top-0 left-0 z-50 text-sm font-semibold bg-white border-b-2 xl:px-32 border-slate-800 font-sans-serif navbar text-slate-900 backdrop-blur-2xl  lg:px-20 sm:h-[14vh]">
        <div className="navbar-start">
          <div className="dropdown">
            <label className="btn btn-ghost lg:hidden">
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
            <ul className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
              <li className="justify-between">
                <Link href="/">ANA SAYFA</Link>
              </li>
              <li className="justify-between">
                <Link href="/hizmetlerimiz">HİZMETLERİMİZ</Link>
              </li>
              <li className="justify-between">
                <Link href="/hakkimizda">
                  HAKKIMIZDA
                  {/* <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg> */}
                </Link>
                {/* <ul className="p-2 bg-base-100">
                <li>
                  <a>Hakkımızda</a>
                </li>
                <li>
                  <a>Sık Sorulan Sorular</a>
                </li>
              </ul> */}
              </li>

              <li>
                <Link href="iletisim">İLETİŞİM</Link>
              </li>
            </ul>
          </div>
          <Link href="/">
            <div className="w-16 scale-90 cursor-pointer ">
              <Image src={carInsurance} />
            </div>
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
              <Link href="/hakkimizda">
                HAKKIMIZDA
                {/* <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg> */}
              </Link>
              {/* <ul className="p-2 bg-base-100">
              <li className="hover-bordered">
                <Link href="/hakkimizda">Hakkımızda</Link>
              </li>
              <li className="hover-bordered">
                <Link href="/faq">Sık Sorulan Sorular</Link>
              </li>
            </ul> */}
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
