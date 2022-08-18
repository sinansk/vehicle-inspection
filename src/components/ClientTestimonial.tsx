import Image from "next/image";
import carMechanic from "../../public/carMechanic.jpg";
import beetle from "../../public/beetle.png";
import Link from "next/link";
export default function ClientTestimonial() {
  return (
    <div className="grid gap-3 p-5 text-center bg-black sm:p-20 xl:px-32">
      <p className="text-white">WHO WE ARE</p>
      <h2 className="text-3xl font-bold text-white">CLIENT TESTIMONIALS</h2>

      <div className="w-full carousel">
        <div id="item1" className="w-full carousel-item">
          <div className="flex items-center gap-5 justify-evenly ">
            <div className="min-h-full gap-5 mx-3 bg-white shadow-xl sm:mx-0 sm:w-1/2 text-slate-400 card">
              <div className="items-center text-center card-body h-3/5">
                <h2 className="card-title">Shoes!</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
                  culpa ipsam, repellat reiciendis voluptatem error voluptatibus
                  itaque facilis alias quod ullam enim dolore tempore minima
                  quam animi amet recusandae corporis?
                </p>
              </div>

              <div className="relative items-center text-center text-white border-2 bg-black card-body h-2/5 hover:border-sky-600 border-white b-rounded-[10px] border-t-0">
                <div className="absolute top-0 flex items-center justify-center w-20 h-20 transform -translate-y-1/2 border-2 rounded-full border-zinc-200">
                  <div className="flex items-center justify-center w-16 h-16 border-2 rounded-full border-zinc-200">
                    <div className="w-8 m-auto ">
                      <Image src={beetle} />
                    </div>
                  </div>
                </div>
                <h2 className="mt-3 card-title">SHANE MICHEAL</h2>
                <p>Ceo tata Group</p>
              </div>
            </div>
            <div className="hidden w-1/2 min-h-full gap-5 bg-white shadow-xl sm:flex text-slate-400 card">
              <div className="items-center text-center card-body h-3/5">
                <h2 className="card-title">Shoes!</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus enim velit corporis molestiae dolores hic, deserunt
                  odio iste! Sequi modi inventore labore beatae alias ab est
                  quisquam adipisci. Velit, aut?
                </p>
              </div>

              <div className="relative items-center text-center text-white bg-black border-2 border-t-0 border-white card-body h-2/5 hover:border-sky-600 b-rounded-md">
                <div className="absolute top-0 flex items-center justify-center w-20 h-20 transform -translate-y-1/2 border-2 rounded-full border-zinc-200">
                  <div className="flex items-center justify-center w-16 h-16 border-2 rounded-full border-zinc-200">
                    <div className="w-8 m-auto ">
                      <Image src={beetle} />
                    </div>
                  </div>
                </div>
                <h2 className="mt-3 card-title">SHANE MICHEAL</h2>
                <p>Ceo tata Group</p>
              </div>
            </div>
          </div>
        </div>
        <div id="item2" className="w-full carousel-item">
          <div className="flex justify-between gap-8">
            <div className="min-h-full gap-5 mx-3 bg-white shadow-xl sm:mx-0 sm:w-1/2 text-slate-400 card">
              <div className="items-center text-center card-body h-3/5">
                <h2 className="card-title">Shoes!</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolores nemo explicabo quibusdam architecto minima? Eligendi
                  quas, porro placeat sequi eveniet nisi cupiditate ea officia
                  delectus magni quod fuga? Temporibus, adipisci?
                </p>
              </div>

              <div className="relative items-center text-center text-white border-2 bg-black card-body h-2/5 hover:border-sky-600 border-white b-rounded-[10px] border-t-0">
                <div className="absolute top-0 flex items-center justify-center w-20 h-20 transform -translate-y-1/2 border-2 rounded-full border-zinc-200">
                  <div className="flex items-center justify-center w-16 h-16 border-2 rounded-full border-zinc-200">
                    <div className="w-8 m-auto ">
                      <Image src={beetle} />
                    </div>
                  </div>
                </div>
                <h2 className="mt-3 card-title">SHANE MICHEAL</h2>
                <p>Ceo tata Group</p>
              </div>
            </div>
            <div className="hidden w-1/2 min-h-full gap-5 bg-white shadow-xl sm:flex text-slate-400 card">
              <div className="items-center text-center card-body h-3/5">
                <h2 className="card-title">Shoes!</h2>
                <p>
                  They were upfront and honest about everything and let me know
                  what needed to done with out up selling me anything which was
                  appreciated. Explain to you how all this mistaken ideas of
                  denouncing and praising pain was born will give you a
                  complete.
                </p>
              </div>

              <div className="relative items-center text-center text-white border-2 bg-black card-body h-2/5 hover:border-sky-600 border-white b-rounded-[10px] border-t-0">
                <div className="absolute top-0 flex items-center justify-center w-20 h-20 transform -translate-y-1/2 border-2 rounded-full border-zinc-200">
                  <div className="flex items-center justify-center w-16 h-16 border-2 rounded-full border-zinc-200">
                    <div className="w-8 m-auto ">
                      <Image src={beetle} />
                    </div>
                  </div>
                </div>
                <h2 className="mt-3 card-title">SHANE MICHEAL</h2>
                <p>Ceo tata Group</p>
              </div>
            </div>
          </div>
        </div>
        <div id="item3" className="w-full carousel-item">
          <div className="flex justify-between gap-8">
            <div className="min-h-full gap-5 mx-3 bg-white shadow-xl sm:mx-0 sm:w-1/2 text-slate-400 card">
              <div className="items-center text-center card-body h-3/5">
                <h2 className="card-title">Shoes!</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dolore fugiat ullam quibusdam voluptates sit, vitae, ipsa
                  odit, nulla velit incidunt repudiandae consectetur quas ab
                  dolor. Architecto temporibus debitis dolore dolorum!
                </p>
              </div>

              <div className="relative items-center text-center text-white border-2 bg-black card-body h-2/5 hover:border-sky-600 border-white b-rounded-[10px] border-t-0">
                <div className="absolute top-0 flex items-center justify-center w-20 h-20 transform -translate-y-1/2 border-2 rounded-full border-zinc-200">
                  <div className="flex items-center justify-center w-16 h-16 border-2 rounded-full border-zinc-200">
                    <div className="w-8 m-auto ">
                      <Image src={beetle} />
                    </div>
                  </div>
                </div>
                <h2 className="mt-3 card-title">SHANE MICHEAL</h2>
                <p>Ceo tata Group</p>
              </div>
            </div>
            <div className="hidden w-1/2 min-h-full gap-5 bg-white shadow-xl sm:flex text-slate-400 card">
              <div className="items-center text-center card-body h-3/5">
                <h2 className="card-title">Shoes!</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Vitae unde odit consectetur! Maxime commodi ad fugiat odio
                  earum. Nam suscipit similique dicta mollitia quas earum
                  nostrum aperiam excepturi facere distinctio!
                </p>
              </div>

              <div className="relative items-center text-center text-white border-2 bg-black card-body h-2/5 hover:border-sky-600 border-white b-rounded-[10px] border-t-0">
                <div className="absolute top-0 flex items-center justify-center w-20 h-20 transform -translate-y-1/2 border-2 rounded-full border-zinc-200">
                  <div className="flex items-center justify-center w-16 h-16 border-2 rounded-full border-zinc-200">
                    <div className="w-8 m-auto ">
                      <Image src={beetle} />
                    </div>
                  </div>
                </div>
                <h2 className="mt-3 card-title">SHANE MICHEAL</h2>
                <p>Ceo tata Group</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full gap-2 py-2">
        <Link href="#item1">
          <div className="w-6 h-2 cursor-pointer bg-slate-200 hover:bg-primary"></div>
        </Link>
        <Link href="#item2">
          <div className="w-6 h-2 cursor-pointer bg-slate-200 hover:bg-primary"></div>
        </Link>
        <Link href="#item3">
          <div className="w-6 h-2 cursor-pointer bg-slate-200 hover:bg-primary"></div>
        </Link>
      </div>
    </div>
  );
}
