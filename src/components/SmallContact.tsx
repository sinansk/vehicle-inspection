import React from "react";

export default function SmallContact() {
  return (
    <div className="grid gap-5 px-5 py-16 bg-white sm:p-20 sm:grid-cols-3 xl:px-32">
      <div className="flex flex-col items-center col-span-1 gap-5 text-center justify-evenly text-slate-800">
        <div className="align-self-start">
          <h2 className="text-4xl font-semibold">BİZE ULAŞIN!</h2>
          <div className="w-20 h-1 mx-auto mt-5 bg-slate-800"></div>
        </div>
        <p className="text-gray-500">
          Soru, görüş ve önerileriniz için yanda bulunan iletişim formundan
          bizlere ulaşabilirsiniz.
        </p>
      </div>
      <div className="h-full col-span-2">
        <form className="grid gap-2 sm:gap-4 sm:grid-cols-2 h-72 ">
          <div className="flex flex-col gap-2 sm:gap-0 justify-evenly">
            <input
              className="h-12 bg-slate-50 outline-slate-600"
              type="text"
              placeholder="Adınız*"
              id="name"
            ></input>
            <input
              className="h-12 bg-slate-50 outline-slate-600"
              type="tel"
              placeholder="Telefon*"
              id="tel"
            ></input>
            <input
              className="h-12 bg-slate-50 outline-slate-600"
              type="text"
              placeholder="Konu*"
              id="subject"
            ></input>
          </div>
          <div className="flex flex-col gap-2 sm:gap-0 justify-evenly">
            <input
              className="h-12 bg-slate-50 outline-slate-600"
              type="text"
              placeholder="Soy Adınız*"
              id="surname"
            ></input>
            <input
              className="h-12 bg-slate-50 outline-slate-600"
              type="email"
              placeholder="Mail*"
              id="mail"
            ></input>
            <button className="rounded-none btn btn-primary">GÖNDER</button>
          </div>
        </form>
      </div>
    </div>
  );
}
