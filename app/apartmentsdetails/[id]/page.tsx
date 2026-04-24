import { apartments } from "@/app/components/data/apartments";
import Iconsdetails from "@/app/components/iconsdetails/Iconsdetails";
import { ImageSlider } from "@/app/components/Imagesslider";
import {
  CookingPot,
  Sofa,
  Bath,
  BedDouble,
  Ruler,
  Tag,
  MapPin,
  Banknote,
} from "lucide-react";
import Link from "next/link";

type ParamsType = {
  params: { id: string };
};

async function ApartmentDetails({ params }: ParamsType) {
  const { id } = await params;
  const apartment = apartments.find((x) => x.id === Number(id));

  if (!apartment) throw new Error("Apartment not found");

  return (
    <div className="w-full  min-h-screen md:h-screen bg-gray-800 flex items-center justify-center">
      <div className="w-[90%] my-6 md:h-[90%] bg-gray-900 rounded-3xl  flex gap-3 flex-col md:flex-row">
        {/*this is the section that contains images */}
        <section className="section1 w-full md:w-3/5 p-2 flex flex-col gap-4">
          <ImageSlider images={apartment.images} alt={apartment.title} />

          <div className="flex flex-row gap-2">
            <p className="text-gray-300 bg-gray-800 w-1/4 text-center p-2 rounded-xl text-xs font-medium">
              Floor {apartment.floor}
            </p>
            <p className="text-emerald-300 bg-emerald-900/50 w-1/4 text-center p-2 rounded-xl text-xs font-medium">
              {apartment.furnished ? "Furnished " : "Not Furnished"}
            </p>
            <p className="text-emerald-300 bg-emerald-900/50 w-1/4 text-center p-2 rounded-xl text-xs font-medium">
              {apartment.parking ? "Parking " : "No Parking"}
            </p>
            <p className="text-emerald-300 bg-emerald-900/50 w-1/4 text-center p-2 rounded-xl text-xs font-medium">
              {apartment.balcony ? "Balcony " : "No Balcony"}
            </p>
          </div> 
          <div className="w-full hidden md:block md:flex-1 bg-white/50 rounded-xl p-2">

          </div>
        </section>

        <div className="w-px bg-gray-700/50 my-6" />

        <section className="section2 w-full p-6 flex flex-col gap-3 md:w-2/5 ">
          <p className="text-2xl font-bold text-white border-b border-gray-700 pb-4 mb-2">
            Apartment Details
          </p>
          <Iconsdetails  icon={MapPin} text1="Location" text2={apartment.location}/>
          <Iconsdetails icon={Tag} text1="Type" text2={apartment.type} /> 
          <Iconsdetails icon={Banknote} text1="Monthly Rent" text2={`${apartment.price.toLocaleString()} EGP`} color="green"/>  
          <Iconsdetails icon={Ruler} text1="Space" text2={apartment.space}/>  
          <Iconsdetails icon={BedDouble} text1="Bedrooms" text2={apartment.bedrooms}/>  
          <Iconsdetails icon={Bath} text1="Bathrooms" text2={apartment.bathrooms}/>  
          <Iconsdetails icon={CookingPot} text1="Kitchens" text2={apartment.kitchens}/>  
          <Iconsdetails icon={Sofa} text1="Livingrooms" text2={apartment.livingRooms}/>  
          <Link
            href={apartment.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-center py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors duration-300"
          >
            View on Google Maps →
          </Link> 
          <div className="block md:hidden h-96 bg-white/50 rounded-xl p-2">
             ffffff 
             <p>ghh</p>
             <p>ghh</p>
             <p>ghh</p>
             <p>ghh</p>
             <p>ghh</p>
             <p>ghh</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ApartmentDetails;
