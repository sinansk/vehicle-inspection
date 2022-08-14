import AboutUs from "../img/AboutUs";
import QuestionAnswer from "../img/QuestionAnswer";

export default function AboutUsPage() {
  return (
    <div className="flex flex-col ">
      <div className="p-5 text-gray-400 bg-gray-100 ">
        <div className="flex-col hero-content lg:flex-row-reverse ">
          <div className="flex items-center justify-center rounded-lg shadow-lg sm:shadow-2xl ">
            <div className="border rounded-lg w-72">
              <AboutUs />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold sm:text-5xl text-neutral">
              Hakkımızda
            </h1>
            <p className="py-6">
              Şirketimiz TUVTURK ve ortaklarından tamamen bağımsız olup online
              Randevu olarak Ülkemizde internet kullanımı ve online işlem
              yapmakta zorluk çeken nüfusa danışmanlık hizmeti vermektedir . Bu
              internet sitesi TÜVTÜRK resmi internet sitesi ve TÜVTÜRK A.Ş. den
              bağımsız özel hizmet sunmaktadır. Sitemiz üzerinden yapılan
              muayene randevuları danışmanlarımız tarafından
              gerçekleştirilmektedir ve KDV dahil 149 TL hizmet bedeli tahsil
              edilmektedir. Bu hizmetler için tek sefer ödenen 149 TL
              DANIŞMANLIK HİZMET BEDELİ karşılığında 5 yıl süre ile araç
              takipleriniz yapılıp, araç cinsinize göre bir sonraki muayene
              tarihinizden 30 gün öncesinden sizi bilgilendiririz ve tekrar bir
              ücret almaksızın araç muayene randevusu alma işlemlerinizi
              gerçekleştiririz. Ayrıca muayene tekrarı randevularınızı da 5 yıl
              süre boyunca sistemimiz üzerinden ücretsiz olarak alabilirsiniz
              Hizmetleri Dijitalleşen dünyaya insanları adapte etmek için biz de
              bir basamak görevi görmek istedik . Danışmanlık hizmetine
              ihtiyacınız olduğunu düşünmüyorsanız TÜVTÜRK Resmi sitesinden
              ücretsiz randevu alabilirsiniz
            </p>
          </div>
        </div>
        <div className="divider "></div>

        <div className="min-h-screen p-5 sm:-mt-10 text-slate-400">
          <h2 className="text-3xl font-medium text-center">
            Sıkça <span className="font-semibold text-primary">Sorulan</span>{" "}
            Sorular
          </h2>
          <div className="flex-col gap-10 hero-content lg:flex-row">
            <div className="mb-auto border rounded-lg w-72 ">
              <QuestionAnswer />
            </div>
            <div className="w-full ml-auto lg:w-4/6 text-slate-300">
              <div className="relative overflow-hidden">
                <input
                  type="checkbox"
                  className="absolute inset-x-0 top-0 z-10 w-full h-12 opacity-0 cursor-pointer peer"
                />
                <div className="flex items-center w-full h-12 pl-5 bg-primary ">
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
                <div className="flex items-center w-full h-16 pl-5 bg-primary ">
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
                <div className="flex items-center w-full h-12 pl-5 bg-primary ">
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
                <div className="flex items-center w-full h-16 pl-5 bg-primary ">
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
                <div className="flex items-center w-full h-16 pl-5 bg-primary ">
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
                <div className="flex items-center w-full h-16 pl-5 bg-primary ">
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
                <div className="flex items-center w-full h-16 pl-5 bg-primary ">
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
    </div>
  );
}
