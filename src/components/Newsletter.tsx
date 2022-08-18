import React from "react";

export default function Newsletter() {
  return (
    <div className="flex-wrap items-center justify-center px-20 py-10 bg-sky-900 xl:px-32 sm:justify-between sm:flex">
      <div className="text-center">
        <h2 className="text-xl sm:text-3xl ">Bültenimize Abone Olun!</h2>
      </div>
      <div className="flex items-center justify-center">
        <input
          className="border-2 border-r-0 rounded-l-full w-72 text-slate-800 focus:outline-none outline-white h-14"
          placeholder="Email Adresiniz"
        ></input>
        <button className="rounded-none btn btn-primary h-14">ABONE OL</button>
      </div>
    </div>
  );
}
