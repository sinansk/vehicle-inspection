import React from "react";

export default function Stats() {
  return (
    <div className="text-white shadow stats-vertical lg:stats-horizontal bg-emerald-600 stats">
      <div className="stat">
        <div className="text-yellow-500 stat-figure hover:animate-pulse">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-8 h-8 stroke-current "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </div>
        <div className="stat-title">Mutlu Müşteri</div>
        <div className="stat-value ">6,328+</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-sky-400 hover:animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-8 h-8 stroke-current "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            ></path>
          </svg>
        </div>
        <div className="stat-title">Başarılı İşlem</div>
        <div className="stat-value text">100 %</div>
      </div>

      <div className="stat">
        <div className="text-rose-500 stat-figure hover:animate-pulse">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className=""
          >
            <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
          </svg>
        </div>
        <div className="stat-title">Tüm Türkiye</div>
        <div className="stat-value text">81 İL</div>
      </div>
    </div>
  );
}
