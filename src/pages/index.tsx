import Slider from "../components/Slider";
import Cards from "../components/Cards";
import About from "../components/About";
import WhatWeDo from "../components/WhatWeDo";
import Stats2 from "../components/Stats2";
import ClientTestimonial from "../components/ClientTestimonial";
import SmallContact from "../components/SmallContact";
import Pricing2 from "../components/Pricing2";
export default function Home() {
  return (
    <div className="w-full h-full overflow-x-hidden bg-gray-50">
      <Slider />
      <Pricing2 />
      <About />
      <WhatWeDo />
      <Stats2 />
      <ClientTestimonial />
      <SmallContact />
    </div>
  );
}
