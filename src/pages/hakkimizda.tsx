import PageHeading from "../components/PageHeading";
import Image from "next/image";
import tools from "../../public/tools.png";
import tire from "../../public/tire.png";
import carBattery from "../../public/carBattery.png";
import carKey from "../../public/carKey.png";
import happyCoWorkers from "../../public/happyCoWorkers.jpg";
import Stats2 from "../components/Stats2";
import ClientTestimonial from "../components/ClientTestimonial";

export default function Hakkımızda() {
  return (
    <div className="w-full h-full overflow-x-hidden bg-white gap-7 ">
      <PageHeading pageName="hakkimizda" />
      <div className="p-5 text-gray-600 xl:px-32 sm:p-20">
        <div className="mb-7">
          <p>Hatırlatma Servisi olarak</p>
          <h2 className="text-3xl font-bold ">NELER YAPIYORUZ</h2>
        </div>
        <div className="flex flex-col grid-cols-2 gap-3 sm:grid">
          <div>
            <p className="text-gray-500">
              Kaçırılan randevular, yaşam zamanımızı boşa harcar ve gereksiz
              strese neden olur. Randevu Hatırlatıcısını kullanarak sizi bu
              stresten uzaklaştırıyoruz. Randevu Hatırlatıcı zamanınızı ve
              paranızı korumanıza yardımcı olur. Randevu Hatırlatıcı size 1
              hafta öncesinden muayene öncesi aracınızda bulunması gereken
              ekipmanlar ve yanınızda bulunması gereken dokümanların listesini
              <span className="font-semibold text-slate-600"> SMS</span> ve{" "}
              <span className="font-semibold text-slate-600">E-Mail</span>{" "}
              olarak size hatırlatır. Aracınızdaki eksiklikleri gidermek ve
              muayene istasyonunda tekrara düşmemek için zaman kazanmış
              olursunuz.
            </p>
            <div className="flex gap-3 my-5 text-xs text-center text-white">
              <div className="relative flex items-center justify-center w-24 h-24 border-[1px] border-slate-900">
                <div className="w-8 ">
                  <Image src={tools} />
                </div>
                <div className="absolute bottom-0 h-4 transform translate-y-full bg-sky-900 w-14 ">
                  DESTEK
                </div>
              </div>

              <div className="relative flex items-center justify-center w-24 h-24 border-[1px] border-slate-900">
                <div className="w-8 ">
                  <Image src={tire} />
                </div>
                <div className="absolute bottom-0 h-4 transform translate-y-full bg-sky-900 w-14 ">
                  HIZLI
                </div>
              </div>
              <div className="relative flex items-center justify-center w-24 h-24 border-[1px] border-slate-900">
                <div className="w-8 ">
                  <Image src={carBattery} />
                </div>
                <div className="absolute bottom-0 h-4 transform translate-y-full bg-sky-900 w-14 ">
                  KOLAY
                </div>
              </div>
              <div className="relative flex items-center justify-center w-24 h-24 border-[1px] border-slate-900">
                <div className="w-8 ">
                  <Image src={carKey} />
                </div>
                <div className="absolute bottom-0 h-4 transform translate-y-full bg-sky-900 w-14 ">
                  GÜVENLİ
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="grid w-full gap-2 lg:w-full text-slate-600">
              <div className="relative overflow-hidden">
                <input
                  type="checkbox"
                  className="absolute inset-x-0 top-0 z-10 w-full h-12 opacity-0 cursor-pointer peer"
                />
                <div className="flex items-center w-full h-12 pl-5 border-2 border-gray-300">
                  <h2 className="text-lg font-semibold">
                    Araç muayene ücreti ne kadardır?
                  </h2>
                </div>

                <div className="absolute transition-transform duration-500 rotate-0 top-3 right-3 peer-checked:rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>

                <div className="overflow-hidden transition-all duration-500 bg-white max-h-0 peer-checked:max-h-48">
                  <div className="p-4">
                    <div className="accordion-body">
                      <table
                        className="marginBottom"
                        width="100%"
                        cellSpacing="0"
                        cellPadding="0"
                      >
                        <tbody>
                          <tr className="even">
                            <td>
                              Traktör (Römorklu, Römorksuz), Motosiklet ve
                              Motorlu Bisiklet
                            </td>
                            <td>258,42</td>
                          </tr>
                          <tr className="odd">
                            <td>
                              Otomobil, Minibüs, Kamyonet, Özel Amaçlı Taşıt,
                              Arazi Taşıtı, Römork ve Yarı Römork
                            </td>
                            <td>507,40</td>
                          </tr>
                          <tr className="even">
                            <td width="72%">
                              Otobüs, Kamyon, Çekici ve Tanker
                            </td>
                            <td>685,58</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden">
                <input
                  type="checkbox"
                  className="absolute inset-x-0 top-0 z-10 w-full h-16 opacity-0 cursor-pointer peer"
                />
                <div className="flex items-center w-full h-16 pl-5 border-2 border-gray-300 ">
                  <h2 className="text-lg font-semibold">
                    Aracımın muayene tarihi gelmeden muayenesini yaptırabilir
                    miyim?
                  </h2>
                </div>

                <div className="absolute transition-transform duration-500 rotate-0 top-3 right-3 peer-checked:rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>

                <div className="overflow-hidden transition-all duration-500 bg-white max-h-0 peer-checked:max-h-96">
                  <div className="p-4">
                    <p>
                      Aracınızın son muayene geçerlilik tarihi gelmeden de
                      istasyonlarımıza gelerek araç muayene işlemlerinizi
                      gerçekleştirebilirsiniz. Aracınızın bir sonraki muayene
                      tarihi, muayeneye gelmiş olduğunuz tarih üzerinden
                      hesaplanır ve ruhsatınıza işlenir. Örnek olarak, 28 Şubata
                      kadar araç muayene süreniz olduğu halde 18 Ocak tarihinde
                      aracınızı muayeneye getirecek olursanız ve aracınız
                      muayeneden geçer ise, bir sonraki muayene süreniz aracınız
                      periyodu çerçevesinde 18 Ocak olarak değerlendirilir.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden">
                <input
                  type="checkbox"
                  className="absolute inset-x-0 top-0 z-10 w-full h-12 opacity-0 cursor-pointer peer"
                />
                <div className="flex items-center w-full h-12 pl-5 border-2 border-gray-300 ">
                  <h2 className="text-lg font-semibold">
                    Cam filmi muayeneden geçer mi?
                  </h2>
                </div>

                <div className="absolute transition-transform duration-500 rotate-0 top-3 right-3 peer-checked:rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>

                <div className="overflow-hidden transition-all duration-500 bg-white max-h-0 peer-checked:max-h-48">
                  <div className="p-4">
                    <p>
                      Periyodik muayenelerde cam filmi, Camlar: sonradan
                      boyanmış ve Camlar: film yapıştırılmış kusur teksti ile
                      “Hafif Kusur” olarak değerlendirilmektedir. Hafif kusurlu
                      araçların başka bir ağır kusuru bulunmadığı sürece
                      muayeneleri onaylanmaktadır. Cam filmi muayenenin
                      yapılmasına engel değildir.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden">
                <input
                  type="checkbox"
                  className="absolute inset-x-0 top-0 z-10 w-full h-16 opacity-0 cursor-pointer peer"
                />
                <div className="flex items-center w-full h-16 pl-5 border-2 border-gray-300 ">
                  <h2 className="text-lg font-semibold">
                    Muayenede kontrol edilenler noktalar nelerdir?
                  </h2>
                </div>

                <div className="absolute transition-transform duration-500 rotate-0 top-3 right-3 peer-checked:rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>

                <div className="overflow-hidden transition-all duration-500 bg-white max-h-0 peer-checked:max-h-56">
                  <div className="p-4">
                    <p>
                      Aracınızın periyodik muayenesi esnasında, araç tanımları,
                      ruhsat bilgileri, direksiyon sistemi, fren tertibatı,
                      görüş şartları, aydınlatma sistemi, aks, jant, lastik ve
                      süspansiyon sistemi, şasi ve şasi bağlantı parçaları,
                      gürültü kirliliği için gerekli kontroller ve aracın diğer
                      donanımları kontrol edilmekte ve araç güvenliği için uygun
                      olup olmadığı tespit edilmektedir.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden">
                <input
                  type="checkbox"
                  className="absolute inset-x-0 top-0 z-10 w-full h-16 opacity-0 cursor-pointer peer"
                />
                <div className="flex items-center w-full h-16 pl-5 border-2 border-gray-300 ">
                  <h2 className="text-lg font-semibold">
                    Plakama ait OGS/HGS borcu muayeneye engel midir?
                  </h2>
                </div>

                <div className="absolute transition-transform duration-500 rotate-0 top-3 right-3 peer-checked:rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>

                <div className="overflow-hidden transition-all duration-500 bg-white max-h-0 peer-checked:max-h-96">
                  <div className="flex flex-col gap-4 p-4">
                    <p>
                      Muayene hizmeti öncesi aşağıdaki sorgulamalar yapılır.
                      Sorgulama sonucu borç çıktığı takdirde veya sistemsel bir
                      sorun görüldüğü takdirde muayene işlemleri yapılamaz.
                    </p>
                    <p>Vergi Borcu</p>
                    <p>Trafik Para Cezası</p>
                    <p>OGS/HGS Geçiş Ücreti Cezası</p>
                    <p>Trafik Sigortası</p>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden">
                <input
                  type="checkbox"
                  className="absolute inset-x-0 top-0 z-10 w-full h-16 opacity-0 cursor-pointer peer"
                />
                <div className="flex items-center w-full h-16 pl-5 border-2 border-gray-300 ">
                  <h2 className="text-lg font-semibold">
                    Vergi borçlarımı taksitlendirdim araç muayenesini
                    yaptırabilir miyim?
                  </h2>
                </div>

                <div className="absolute transition-transform duration-500 rotate-0 top-3 right-3 peer-checked:rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>

                <div className="overflow-hidden transition-all duration-500 bg-white max-h-0 peer-checked:max-h-96">
                  <p className="p-4">
                    Taksitlendirilmiş ve ödemesi yapılmış vergiler sistemde borç
                    olarak gözükmeyecektir. Buna rağmen borç gözükmesi halinde
                    fenni muayene izin belgesi istenmektedir.
                  </p>
                </div>
              </div>

              <div className="relative overflow-hidden">
                <input
                  type="checkbox"
                  className="absolute inset-x-0 top-0 z-10 w-full h-16 opacity-0 cursor-pointer peer"
                />
                <div className="flex items-center w-full h-16 pl-5 border-2 border-gray-300 ">
                  <h2 className="text-lg font-semibold">
                    Muayene tekrarı için aynı istasyona mı gidilmesi gerekir?
                  </h2>
                </div>

                <div className="absolute transition-transform duration-500 rotate-0 top-3 right-3 peer-checked:rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>

                <div className="overflow-hidden transition-all duration-500 bg-white max-h-0 peer-checked:max-h-96">
                  <div className="flex flex-col gap-4 p-4 accordion-body">
                    <p>
                      Muayenesi yapılan araçlar, muayeneden geçemedikleri
                      takdirde ücretsiz muayene tekrarı hakkı için muayenenin
                      yapıldığı aynı istasyona veya aynı ildeki diğer tüm sabit
                      muayene istasyonlarına gitmek zorundadırlar.
                    </p>
                    <p>
                      Gezici (mobil) istasyonlarda yapılan muayenelerin muayene
                      tekrarları, aynı gezici istasyonda yapılabildiği gibi,
                      gezici istasyonun bağlı bulunduğu ilin sabit
                      istasyonlarında da yapılabilmektedir.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 text-gray-600 bg-gray-100 xl:px-32 sm:p-20">
        <div className="mb-7">
          <h2 className="text-3xl font-bold text-center">
            Muayene Tarihini Düşünmeye Son!
          </h2>
        </div>
        <div className="flex flex-col grid-cols-2 gap-3 sm:grid">
          <div>
            <ul className="text-gray-500 list-disc">
              <li>
                Bize plaka ve iletişim bilgilerinizi yazın araç muayene
                tarihinizi öğrenip o tarihe hatırlatma oluşturalım.
              </li>
              <li>
                Randevu tarihinden 1 hafta önce hatırlatalım ve muayene giderken
                yanınızda olması gerekenlerin listesini gönderelim.
              </li>
              <li>
                Randevu günü tekrar hatırlatalım ve eksiksiz bir şekilde
                muayeneden geçmenize destek olalım.
              </li>
            </ul>
            <p className="text-gray-500"></p>
            <br></br>
            <h3 className="font-semibold text-slate-700">
              Belirtilen Tarihe Sorunsuz & Hızlı Hatırlatma
            </h3>
            <br></br>
            <p>
              Randevu Hatırlatıcı size 1 hafta öncesinden muayene öncesi
              Aracınızda Bulunması gereken ekipmanlar ve yanınızda bulunması
              gereken dokümanların listesini SMS ve E-Mail olarak size
              hatırlatır. Aracınızdaki eksiklikleri gidermek ve muayene
              istasyonunda tekrara düşmemek için zaman kazanmış olursunuz.
            </p>
          </div>
          <div>
            <div className="grid w-full gap-2 lg:w-full text-slate-600">
              <div>
                <Image src={happyCoWorkers} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Stats2 />
      <ClientTestimonial />
    </div>
  );
}
