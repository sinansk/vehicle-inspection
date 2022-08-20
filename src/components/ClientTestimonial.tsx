import Image from "next/image";
import carMechanic from "../../public/carMechanic.jpg";
import beetle from "../../public/beetle.png";
import man from "../../public/man.png";
import man2 from "../../public/man2.png";
import woman from "../../public/woman.png";
import woman2 from "../../public/woman2.png";
import Link from "next/link";
import { useRef } from "react";
export default function ClientTestimonial() {
  const clientsRef = useRef();

  return (
    <div
      className="grid gap-3 p-5 text-center bg-black sm:p-20 xl:px-32"
      ref={clientsRef}
      id="clientComments"
    >
      <p className="text-white">ÖNE ÇIKAN</p>
      <h2 className="text-3xl font-bold text-white">KULLANICI YORUMLARI</h2>

      <div className="w-full carousel">
        <div id="item1" className="w-full carousel-item">
          <div className="flex items-center gap-5 justify-evenly ">
            <div className="min-h-full gap-5 mx-3 text-gray-500 bg-white shadow-xl group sm:mx-0 sm:w-1/2 card">
              <div className="items-center text-center card-body h-3/5">
                <h2 className="card-title">Mükemmel Çözüm!</h2>
                <p>
                  İş güç yoğunluğundan aracımın muayene tarihini her zaman
                  unutuyordum. Çevirmede yediğim cezalardan ve muayene gecikme
                  bedelleri canımı sıkmaya başlamıştı. Burayı bulmamla hayatımda
                  büyük bir sorundan kurtulmuş oldum.
                </p>
              </div>

              <div className="relative items-center text-center text-white bg-black border-2 border-t-0 border-white card-body max-h-2/5 h-2/5 group-hover:border-sky-900 b-rounded-sm">
                <div className="absolute top-0 flex items-center justify-center w-20 h-20 transform -translate-y-1/2 border-2 rounded-full group-hover:border-sky-900 border-zinc-200">
                  <div className="flex items-center justify-center w-16 h-16 border-2 rounded-full border-zinc-200 group-hover:border-sky-900">
                    <div className="w-16 m-auto ">
                      <Image src={man} />
                    </div>
                  </div>
                </div>
                <h2 className="mt-3 card-title">HALUK YILMAZ</h2>
                <p>Esnaf</p>
              </div>
            </div>
            <div className="hidden min-h-full gap-5 mx-3 text-gray-500 bg-white shadow-xl sm:flex card group sm:mx-0 sm:w-1/2 ">
              <div className="items-center text-center card-body max-h-3/5 h-3/5">
                <h2 className="card-title">Tam Zamanında!</h2>
                <p>
                  Özellikle biz kadınlar araç muayene tarihlerini
                  unutabiliyoruz. Bu hizmet tam bana göre. Randevumu burdan
                  aldım ve aracımın muayene tarihini düşünmekten kurtuldum.
                  Kendileri sağolsun muayene tarihi yaklaştığında SMS ve Mail
                  ile hatırlatıyorlar!
                </p>
              </div>

              <div className="relative items-center text-center text-white bg-black border-2 border-t-0 border-white card-body h-2/5 max-h-2/5 group-hover:border-sky-900 b-rounded-sm">
                <div className="absolute top-0 flex items-center justify-center w-20 h-20 transform -translate-y-1/2 border-2 rounded-full group-hover:border-sky-900 border-zinc-200">
                  <div className="flex items-center justify-center w-16 h-16 border-2 rounded-full border-zinc-200 group-hover:border-sky-900">
                    <div className="w-16 m-auto ">
                      <Image src={woman} />
                    </div>
                  </div>
                </div>
                <h2 className="mt-3 card-title">HATİCE ÇİFTÇİ</h2>
                <p>Öğretmen</p>
              </div>
            </div>
          </div>
        </div>
        <div id="item2" className="w-full carousel-item">
          <div className="flex items-center gap-5 justify-evenly ">
            <div className="min-h-full gap-5 mx-3 text-gray-500 bg-white shadow-xl group sm:mx-0 sm:w-1/2 card">
              <div className="items-center text-center card-body max-h-3/5 h-3/5">
                <h2 className="card-title">Aradığım Hizmet</h2>
                <p>
                  Babam aracının muayene tarihini hep geciktiriyordu. İnternette
                  dolaşırken buraya denk geldim ve işte aradığım çözüm bu dedim.
                  Artık muayene tarihini düşünmek zorunda değiliz. Ayrıca
                  muayene randevusunu almak her zamankinden daha kolay ve hızlı.
                </p>
              </div>

              <div className="relative items-center text-center text-white bg-black border-2 border-t-0 border-white card-body h-2/5 max-h-2/5 group-hover:border-sky-900 b-rounded-sm">
                <div className="absolute top-0 flex items-center justify-center w-20 h-20 transform -translate-y-1/2 border-2 rounded-full group-hover:border-sky-900 border-zinc-200">
                  <div className="flex items-center justify-center w-16 h-16 border-2 rounded-full border-zinc-200 group-hover:border-sky-900">
                    <div className="w-16 m-auto ">
                      <Image src={woman2} />
                    </div>
                  </div>
                </div>
                <h2 className="mt-3 card-title">SELİN DURMUŞOĞLU</h2>
                <p>Hemşire</p>
              </div>
            </div>
            <div className="hidden min-h-full gap-5 mx-3 text-gray-500 bg-white shadow-xl sm:flex card group sm:mx-0 sm:w-1/2 ">
              <div className="items-center text-center card-body h-3/5 max-h-3/5">
                <h2 className="card-title">Tavsiye Ederim!</h2>
                <p>
                  Araç muayene işi benim için tam bir işkenceye dönüşmüştü.
                  Gecikme cezalarına ödediğim paralar bu hizmet sayesinde cebime
                  kaldı. Keşke daha önce keşfetseydim. Hizmetten son derece
                  memnun kaldım ve herkese tavsiye ederim.
                </p>
              </div>

              <div className="relative items-center text-center text-white bg-black border-2 border-t-0 border-white card-body max-h-2/5 h-2/5 group-hover:border-sky-900 b-rounded-sm">
                <div className="absolute top-0 flex items-center justify-center w-20 h-20 transform -translate-y-1/2 border-2 rounded-full group-hover:border-sky-900 border-zinc-200">
                  <div className="flex items-center justify-center w-16 h-16 border-2 rounded-full border-zinc-200 group-hover:border-sky-900">
                    <div className="w-16 m-auto ">
                      <Image src={man2} />
                    </div>
                  </div>
                </div>
                <h2 className="mt-3 card-title">CANER GÜLER</h2>
                <p>Turizmci</p>
              </div>
            </div>
          </div>
        </div>
        <div id="item3" className="w-full carousel-item">
          <div className="flex items-center gap-5 justify-evenly ">
            <div className="min-h-full gap-5 mx-3 text-gray-500 bg-white shadow-xl group sm:mx-0 sm:w-1/2 card">
              <div className="items-center text-center card-body h-3/5 max-h-3/5">
                <h2 className="card-title">Sonunda buldum!</h2>
                <p>
                  Hep düşünüyordum keşke araç muayene tarihini hatırlatan bir
                  hizmet olsa diye, sonunda buldum. Yoğunluktan dolayı aracımın
                  muayenesini hiç bir zaman hatırlayamadım ve gecikme cezalarına
                  mahkum kaldım. Randevumu burdan alarak büyük bir sorunumu
                  çözmüş oldum. Sağolsunlar hatırlatıyorlar ve ben de randevumu
                  buradan alıyorum.
                </p>
              </div>

              <div className="relative items-center text-center text-white bg-black border-2 border-t-0 border-white card-body max-h-2/5 h-2/5 group-hover:border-sky-900 b-rounded-sm">
                <div className="absolute top-0 flex items-center justify-center w-20 h-20 transform -translate-y-1/2 border-2 rounded-full group-hover:border-sky-900 border-zinc-200">
                  <div className="flex items-center justify-center w-16 h-16 border-2 rounded-full border-zinc-200 group-hover:border-sky-900">
                    <div className="w-16 m-auto ">
                      <Image src={man} />
                    </div>
                  </div>
                </div>
                <h2 className="mt-3 card-title">ERKUT BİLGİÇ</h2>
                <p>Esnaf</p>
              </div>
            </div>
            <div className="hidden min-h-full gap-5 mx-3 text-gray-500 bg-white shadow-xl sm:flex card group sm:mx-0 sm:w-1/2 ">
              <div className="items-center text-center card-body h-3/5 max-h-3/5">
                <h2 className="card-title">Teşekkür Ederim</h2>
                <p>
                  Araç muayene randevusu alırken hep zorlanıyordum. Gerek sistem
                  yoğunluğu gerek başka sebepler olsun canımı sıkıyordu.
                  İnternette ararken burasını keşfettim ve randevumu burdan
                  sorunsuz ve hızlıca alabildim. Üstelik bir sonraki randevu
                  tarihini de hatırlatıyorlarmış. Herşey için teşekkür ederim.
                </p>
              </div>

              <div className="relative items-center text-center text-white bg-black border-2 border-t-0 border-white card-body max-h-2/5 h-2/5 group-hover:border-sky-900 b-rounded-sm">
                <div className="absolute top-0 flex items-center justify-center w-20 h-20 transform -translate-y-1/2 border-2 rounded-full group-hover:border-sky-900 border-zinc-200">
                  <div className="flex items-center justify-center w-16 h-16 border-2 rounded-full border-zinc-200 group-hover:border-sky-900">
                    <div className="w-16 m-auto ">
                      <Image src={man2} />
                    </div>
                  </div>
                </div>
                <h2 className="mt-3 card-title">ZİYA DEMİR</h2>
                <p>Mühendis</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full gap-2 py-2">
        <Link href="#item1">
          <div className="w-6 h-2 cursor-pointer bg-slate-200 hover:bg-primary"></div>
        </Link>
        <Link href="#item2">
          <div className="w-6 h-2 cursor-pointer bg-slate-200 hover:bg-primary"></div>
        </Link>
        <Link href="#item3">
          <div className="w-6 h-2 cursor-pointer bg-slate-200 hover:bg-primary"></div>
        </Link>
      </div>
    </div>
  );
}
