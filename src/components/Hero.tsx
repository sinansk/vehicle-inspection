export default function Hero() {
  return (
    <div className="min-h-screen hero sm:-mt-10 text-slate-400">
      <div className="flex-col hero-content lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold sm:mt-0 sm:text-5xl text-neutral">
            Hemen randevu al!
          </h1>
          <p className="py-6 ">
            Kaçırılan randevular yaşam zamanınızı boşa harcar ve gereksiz strese
            neden olur. Randevu hatırlatıcısını kullanarak sizi bu stresten
            uzaklaştırıyoruz.
          </p>
          <p>
            Bize plaka ve iletişim bilgilerinizi yazın, araç muayene tarihinizi
            öğrenip o tarihe hatırlatma oluşturalım.
          </p>
        </div>
        <div className="flex-shrink-0 w-full max-w-sm border-2 rounded-md shadow-2xl bg-gray-50 card">
          <div className="card-body">
            <div className="form-control ">
              <label className="label ">
                <span className="label-text text-slate-400">PLAKA</span>
              </label>
              <input
                type="text"
                placeholder="34TC06"
                className="bg-gray-100 input input-bordered focus:outline-neutral"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-slate-400">TELEFON</span>
              </label>
              <input
                type="tel"
                placeholder="05XXXXXXXXX"
                className="bg-gray-100 focus:outline-neutral input input-bordered"
              />
              <label className="label">
                <a
                  href="#"
                  className="text-slate-500 label-text-alt link link-hover"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="mt-6 form-control">
              <button className="btn btn-neutral">Kayıt ol</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
