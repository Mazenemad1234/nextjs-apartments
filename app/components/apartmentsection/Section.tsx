import Link from "next/link";
import Image from "next/image";
import { Sofa, Bath, BedDouble } from "lucide-react"; 
import {gover  } from "@/app/components/data/apartments" 
import { MappedApartment } from "@/lib/mapapartment";


type Searchparams = {
  type?: string;
  kitchens?: string;
  bedrooms?: string;
  bathrooms?: string;
  minprice?: string;
  maxprice?: string;
};



function Section({
  searchparam,
  apartments,
}: {
  searchparam: Searchparams;
  apartments: MappedApartment[];
}) {
  
  const filterapartments = apartments.filter((apart) => {
    const kitchensnum = searchparam.kitchens
      ? apart.kitchens === Number(searchparam.kitchens)
      : true;
    const bedroomsnum = searchparam.bedrooms
      ? apart.bedrooms === Number(searchparam.bedrooms)
      : true;
    const bathroomsnum = searchparam.bathrooms
      ? apart.bathrooms === Number(searchparam.bathrooms)
      : true;
    const minpricevalue = searchparam.minprice
      ? apart.price >= Number(searchparam.minprice)
      : true;
    const maxpricevalue = searchparam.maxprice
      ? apart.price <= Number(searchparam.maxprice)
      : true;
    const unittype = searchparam.type
      ? apart.type.toLowerCase() === searchparam.type.toLowerCase()
      : true;

    return (
      kitchensnum &&
      bedroomsnum &&
      bathroomsnum &&
      unittype &&
      minpricevalue &&
      maxpricevalue
    );
  });

  if (!gover.length) {
    return <div className="text-center py-20">No apartments found</div>;
  }

  return (
    <div className="min-h-screen py-16 bg-red-200">
      <div className="text-center pb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Find Your Perfect Home
        </h1>
        <p className="text-gray-500">
          Explore the best apartments across Egypt
        </p>
      </div>

      {gover.map((title) => (
        <section key={title} id="apartments" className="mb-16">
          <div className="flex items-center gap-4 p-6">
            <h2 className="text-xl font-bold text-slate-800">{title}</h2>
            <div className="flex-1 h-px bg-slate-800" />
          </div>

          <div className="flex gap-5 overflow-x-auto [scrollbar-width:none] pb-4">
            {filterapartments
              .filter((apt) => apt.title === title)
              .map((apartment) => (
                <Link
                  key={apartment.id}
                  href={`/apartmentsdetails/${apartment.id}`}
                  className="group flex-shrink-0 no-underline py-3 pl-3"
                >
                  <div className="w-[340px] rounded-2xl overflow-hidden bg-white border hover:scale-105 transition-all duration-700">
                    <div className="relative h-44 overflow-hidden">
                      <Image
                        src={apartment.images[0]}
                        alt={title}
                        fill
                        sizes="256px"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <span className="absolute bottom-3 left-3 bg-gradient-to-br from-red-600 to-blue-600 text-white text-xs font-bold px-3 py-2 rounded-lg">
                        {Number(apartment.price).toLocaleString()} EGP/mo
                      </span>
                      <span className="absolute top-3 right-3 bg-green-600 text-white text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-lg">
                        {apartment.type}
                      </span>
                    </div>

                    <div className="p-4">
                      <div>
                        <h3 className="text-sm font-bold text-gray-900 mb-1">
                          {title}
                        </h3>
                        <p className="text-xs text-gray-500 mb-4">
                          <span>📍</span>
                          {apartment.location}
                        </p>
                      </div>

                      <div className="flex flex-row justify-around items-center pb-4">
                        <span className="flex flex-row gap-1">
                          <Sofa className="text-green-400" />
                          {apartment.livingrooms}
                        </span>
                        <span className="flex flex-row gap-2">
                          <BedDouble className="text-green-400" />
                          {apartment.bedrooms}
                        </span>
                        <span className="flex flex-row gap-2">
                          <Bath className="text-green-400" />
                          {apartment.bathrooms}
                        </span>
                      </div>

                      <div className="flex justify-between mb-4 bg-gray-400 rounded-xl px-3 py-2.5">
                        <div className="flex flex-col gap-0.5 items-center">
                          <span className="text-[18px] text-white uppercase tracking-wide">
                            Type
                          </span>
                          <span className="text-[14px] font-bold text-gray-700">
                            {apartment.type}
                          </span>
                        </div>
                        <div className="w-px bg-gray-200" />
                        <div className="flex flex-col gap-0.5 items-center">
                          <span className="text-[18px] text-white uppercase tracking-wide">
                            Space
                          </span>
                          <span className="text-[14px] font-bold text-gray-700">
                            {apartment.space}
                          </span>
                        </div>
                      </div>

                      <div className="w-full text-center bg-gray-900 group-hover:bg-blue-600 text-white font-semibold tracking-wide py-2.5 rounded-xl transition-colors duration-200">
                        View Details
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default Section;

