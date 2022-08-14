import Image from "next/image";
import Contact from "../img/Contact";

function ContactPage() {
  return (
    <div className="bg-gray-50">
      <div className="overflow-x-hidden mx-auto sm:w-5/6 flex flex-col text-lg sm:grid sm:grid-cols-2 items-center sm:gap-10  lg:h-[calc(100vh-4rem)]">
        <div className="">
          <Contact />
        </div>
        <div className="w-full py-5 shadow-lg card">
          <form className="w-full m-auto sm:h-full" id="contactForm">
            <label className="relative flex flex-col items-center" htmlFor="">
              <h2 className="text-3xl font-bold text-primary">Bize Ulaşın</h2>
              <div className="w-full max-w-xs form-control">
                <label className="label">
                  <span className="label-text text-slate-500">Adınız?</span>
                </label>
                <input
                  type="text"
                  placeholder="Ahmet"
                  className="w-full max-w-xs bg-gray-100 input input-bordered focus:outline-primary"
                />
                <label className="label ">
                  <span className="label-text text-slate-500">Mesajınız?</span>
                </label>
                <textarea
                  className="bg-gray-100 textarea textarea-bordered focus:outline-primary"
                  placeholder="Merhaba!"
                ></textarea>
                <label className="label">
                  <span className="label-text text-slate-500">
                    Email Adresiniz?
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="someone@123@mail.com"
                  className="w-full max-w-xs bg-gray-100 input input-bordered focus:outline-primary"
                />
              </div>
              <button className="px-8 py-3 mt-5 btn bg-primary hover:bg-primary-focus">
                GÖNDER
              </button>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
