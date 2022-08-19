import React from "react";
import PageHeading from "../components/PageHeading";
import Pricing2 from "../components/Pricing2";

export default function hizmetlerimiz() {
  return (
    <div>
      <PageHeading pageName="hizmetlerimiz" />
      <div className="p-5 text-gray-600 bg-gray-50 xl:px-32 sm:p-20">
        <Pricing2 />
      </div>
    </div>
  );
}
