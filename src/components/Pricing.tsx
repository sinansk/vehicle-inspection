import Dot from "../img/Dot";

export default function Pricing() {
  return (
    <div className="flex flex-col-reverse gap-8 mt-4 sm:mx-5 md:flex-row place-content-between lg:place-content-center md:mx-10">
      <div className="w-full p-4 transition-all duration-300 bg-white border border-gray-200 shadow-md hover:shadow-lg rounded-2xl md:w-64 dark:bg-gray-800 hover:scale-105">
        <p className="text-3xl font-bold text-slate-600 dark:text-white">
          Sadece Randevu
        </p>
        <p className="mb-4 text-sm text-gray-500 dark:text-gray-300">
          Sadece sınırlı bir süre için
        </p>
        <p className="mb-4 text-3xl font-bold text-slate-600 dark:text-white">
          Ücretsiz
        </p>
        {/* <p className="mb-4 text-sm text-gray-500 dark:text-gray-300">
              Per agent per month
          </p> */}
        <button className="btn btn-accent">Kayıt ol</button>
        <ul className="w-full mt-6 mb-6 text-sm text-black dark:text-white">
          <li className="flex items-center gap-2 mb-3">
            <Dot />
            Denetiminiz için online rezervasyon yapın
          </li>
        </ul>
      </div>

      <div className="w-full p-4 transition-all duration-300 bg-white border-2 border-blue-500 shadow-md hover:scale-105 hover:shadow-lg rounded-2xl md:w-64 dark:bg-gray-800">
        <p className="w-16 mb-1 font-bold text-center text-blue-500 bg-white border-2 border-blue-500 rounded-md -mt-7 text-md">
          Popüler
        </p>
        <p className="text-3xl font-bold text-slate-600 dark:text-white">
          Randevu ve Hatırlatma
        </p>
        <p className="mb-4 text-sm text-gray-500 dark:text-gray-300">
          Tam Hizmet Planı
        </p>
        <p className="mb-4 text-3xl font-bold text-slate-600 dark:text-white">
          149 ₺ <span className="text-2xl font-normal">Yıllık</span>
        </p>
        {/* <p className="mb-4 text-sm text-gray-500 dark:text-gray-300">
              Per agent per month
          </p> */}
        <button className="btn btn-accent">Kayıt ol</button>
        <ul className="w-full mt-6 mb-6 text-sm text-black dark:text-white">
          <li className="flex items-center gap-2 mb-3">
            <Dot />
            otomatik hatırlatma
          </li>
        </ul>
      </div>
    </div>
  );
}
