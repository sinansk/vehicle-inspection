import React from "react";

export default function Steps() {
  return (
    <ul className="steps text-slate-500">
      <li className="step step-neutral hover:step-success">
        Bilgilerini Gönder
      </li>
      <li className="step step-neutral hover:step-success">Kayıt Oluştur</li>
      <li className="step step-neutral hover:step-success">Bildirim Seç</li>
      <li className="step step-neutral hover:step-success">Hatırlatma Al</li>
      <li className="step step-neutral hover:step-success">Eksiksiz Muayene</li>
    </ul>
  );
}
