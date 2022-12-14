import Image from "next/image";
import PageHeading from "../components/PageHeading";
import pinBlue from "../../public/pinBlue.png";
import phoneCallBlue from "../../public/phoneCallBlue.png";
import emailBlue from "../../public/emailBlue.png";

function ContactPage() {
  return (
    <div className="bg-white">
      <PageHeading pageName="iletisim" />
      <div className="p-5 text-gray-600 xl:px-32 sm:p-20">
        <div className="mb-7">
          <h2 className="text-3xl font-bold ">BİZE ULAŞIN</h2>
        </div>
        <div className="flex flex-col grid-cols-6 gap-3 sm:grid">
          <div className="col-span-4 gap-3 p-5 bg-gray-100 sm:p-10 ">
            <h2 className="flex mb-5 text-2xl">MESAJ GÖNDERİN</h2>
            <div className="flex flex-col grid-cols-2 gap-5 sm:grid">
              <input
                className="h-12 col-span-1 bg-white outline-slate-600"
                type="text"
                placeholder="Adınız*"
                id="name"
              ></input>
              <input
                className="h-12 col-span-1 bg-white outline-slate-600"
                type="email"
                placeholder="Mail*"
                id="mail"
              ></input>
              <input
                className="h-12 col-span-1 bg-white outline-slate-600"
                type="tel"
                placeholder="Telefon*"
                id="tel"
              ></input>
              <input
                className="h-12 col-span-1 bg-white outline-slate-600"
                type="text"
                placeholder="Konu*"
                id="subject"
              ></input>
              <textarea
                className="h-24 col-span-2 bg-white outline-slate-600"
                placeholder="Mesaj*"
                id="message"
              ></textarea>
              <button className="col-span-2 rounded-none btn btn-primary">
                GÖNDER
              </button>
            </div>
          </div>
          <div className="col-span-2 border-[1px] border-gray-300 text-gray-400  p-8 flex flex-col justify-between">
            <h3 className="text-2xl font-semibold text-slate-600">İletişim</h3>
            <p>Aşağıdaki iletişim adreslerinden de bizlere ulaşabilirsiniz.</p>

            <div className="flex items-center">
              <div className="w-4 mt-1 mr-1">
                <Image src={pinBlue} />
              </div>
              <p>
                <span className="font-semibold text-slate-600">Adres:</span>{" "}
                İstanbul, Türkiye
              </p>
            </div>
            <div className="w-full h-[1px] bg-gray-200"></div>
            <div className="flex items-center">
              <div className="w-4 mt-1 mr-1">
                <Image src={phoneCallBlue} />
              </div>
              <p>
                <span className="font-semibold text-slate-600">
                  Bize Ulaşın:
                </span>{" "}
                Mail@carzone.com
              </p>
            </div>
            <div className="w-full h-[1px] bg-gray-200"></div>
            <div className="flex items-center">
              <div className="w-4 mt-1 mr-1">
                <Image src={emailBlue} />
              </div>
              <p>
                <span className="font-semibold text-slate-600">Email:</span>{" "}
                Mailus@carzone.com
              </p>
            </div>
            <div className="w-full h-[1px] bg-gray-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
