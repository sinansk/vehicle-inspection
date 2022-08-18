import Image from "next/image";
import beetle from "../../public/beetle.png";
import tools from "../../public/tools.png";
import tirePressure from "../../public/tirePressure.png";
export default function Cards() {
  return (
    <div className="grid items-center flex-auto p-5 font-sans font-thin text-gray-400 bg-gray-100 justify-evenly lg:flex gap-7 sm:p-20 xl:px-32">
      <div className="z-10 flex flex-col items-center transition-all duration-500 bg-white rounded-none shadow-xl sm:-mt-32 hover:scale-110">
        <figure className="px-10 pt-10 ">
          <div className="flex items-center justify-center w-24 h-24 border-2 rounded-full border-zinc-200">
            <div className="flex items-center justify-center w-20 h-20 border-2 rounded-full border-zinc-200">
              <div className="w-8 m-auto ">
                <Image src={beetle} />
              </div>
            </div>
          </div>
        </figure>
        <div className="items-center text-center card-body">
          <h2 className="text-gray-700 card-title">SADECE RANDEVU AL</h2>
          <p>Sadece randevu istiyorsanız buradan ücretsiz alabilirsiniz.</p>
          <div className="card-actions">
            <button className="h-8 text-white btn btn-primary rounded-3xl">
              TIKLA
            </button>
          </div>
        </div>
      </div>
      <div className="z-10 flex flex-col items-center transition-all duration-500 bg-white rounded-none shadow-xl sm:-mt-32 hover:scale-110">
        <figure className="px-10 pt-10 ">
          <div className="flex items-center justify-center w-24 h-24 border-2 rounded-full border-zinc-200">
            <div className="flex items-center justify-center w-20 h-20 border-2 rounded-full border-zinc-200">
              <div className="w-8 m-auto">
                <Image src={tools} />
              </div>
            </div>
          </div>
        </figure>
        <div className="items-center text-center card-body">
          <h2 className="text-gray-700 card-title">RANDEVU VE HATIRLATMA</h2>
          <p>
            Randevunuzu bizimle alırsanız bir sonraki hatırlatma tarihi otomatik
            olarak oluşturulacaktır.
          </p>
          <div className="card-actions">
            <button className="h-8 text-white btn btn-primary rounded-3xl">
              TIKLA
            </button>
          </div>
        </div>
      </div>
      <div className="z-10 flex flex-col items-center transition-all duration-500 bg-white rounded-none shadow-xl sm:-mt-32 hover:scale-110">
        <figure className="px-10 pt-10 ">
          <div className="flex items-center justify-center w-24 h-24 border-2 rounded-full border-zinc-200">
            <div className="flex items-center justify-center w-20 h-20 border-2 rounded-full border-zinc-200">
              <div className="w-8 m-auto">
                <Image src={tirePressure} />
              </div>
            </div>
          </div>
        </figure>
        <div className="items-center text-center card-body">
          <h2 className="text-gray-700 card-title">SADECE HATIRLAT</h2>
          <p>Plakanızı girerek ileri tarihli hatırlatıcı oluşturabilirsiniz.</p>
          <div className="card-actions">
            <button className="h-8 text-white btn btn-primary rounded-3xl">
              TIKLA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
