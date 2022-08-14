import Image from "next/image";
import carInsurance from "../../public/carInsurance.png";

export default function Header() {
  return (
    <div className="sticky top-0 left-0 z-50 navbar bg-base-100 backdrop-blur-2xl bg-base-100/90 lg:px-5">
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
            <li>
              <a className="justify-between">Hizmetlerimiz</a>
            </li>
            <li>
              <a className="justify-between">
                Hakkımızda
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-base-100">
                <li>
                  <a>Hakkımızda</a>
                </li>
                <li>
                  <a>Sık Sorulan Sorular</a>
                </li>
              </ul>
            </li>

            <li>
              <a>İletişim</a>
            </li>
          </ul>
        </div>
        <a className="w-16 scale-90 sm:ml-28" href="/">
          <Image src={carInsurance} />
        </a>
      </div>
      <div className="hidden navbar-center lg:flex">
        <ul className="p-0 menu menu-horizontal">
          <li>
            <a>Hizmetlerimiz</a>
          </li>
          <li>
            <a>
              Hakkımızda
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2 bg-base-100">
              <li className="hover-bordered">
                <a>Hakkımızda</a>
              </li>
              <li className="hover-bordered">
                <a>Sık Sorulan Sorular</a>
              </li>
            </ul>
          </li>

          <li>
            <a>İletişim</a>
          </li>
        </ul>
      </div>
      <div className="gap-2 navbar-end">
        <label htmlFor="registerModal">
          <button className="btn btn-accent">Randevu Al</button>
        </label>
      </div>
    </div>
  );
}
