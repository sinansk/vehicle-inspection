import Image from "next/image";
import Link from "next/link";
import aboutUs from "../../public/aboutUs.jpg";
import breadcrumb from "../../public/breadcrumb.jpg";
export default function PageHeading({ pageName }) {
  return (
    <div>
      <div className="w-full h-24 overflow-hidden bg-black sm:h-64">
        <div className="flex w-full h-full object-fit opacity-30">
          <Image src={breadcrumb} />
        </div>
      </div>
      <div className="flex items-center justify-center w-full h-8 bg-gray-400 sm:h-16">
        <div className="flex items-center justify-center w-full text-sm font-semibold text-center breadcrumbs text-slate-900">
          <ul className="">
            <li>
              <Link href="/">ana sayfa</Link>
            </li>
            <li>
              <Link href={pageName}>{pageName}</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
