import { apartments } from "../data/apartments" 
import Link from "next/link" 
import Image from "next/image";

function Section() {   

  const apartments_titles = [...new Set(apartments.map(x => x.title))];  
  {
    if(!apartments_titles.length) {
      throw new Error("")
    }
  }
  return (
    <div className="sectionapartments"> 
      {apartments_titles.map(title => (
        <section id="apartments" key={title}>
          <h2 className="font-thin text-3xl p-4 bg-black text-white w-80 text-center border-2 border-white rounded-xl mx-auto">{title}</h2>
          
          <div className="flex flex-row gap-8 overflow-x-scroll [scrollbar-width:none] my-6 py-8 px-2 ">
            {apartments.filter(apartment => apartment.title === title).map(apartment => ( 
              <Link href={`/apartmentsdetails/${apartment.id}`} key={apartment.id}>
                <div className="bg-white/80 w-80 h-96 overflow-hidden flex-shrink-0 rounded-xl ml-2 border border-white/30 flex flex-col hover:scale-105 hover:shadow-blue-600 hover:shadow-[0_-10px_20px] duration-700">
                  
                  <div className="relative w-full h-52 flex-shrink-0 object-cover">
                    <Image src={apartment.images[0]} alt={apartment.title} fill />
                  </div>

                  <div className="p-3 flex flex-col gap-1">
                    <p className="text-gray-700 text-sm pl-3">Price : {apartment.price} EGP Per Month</p>
                    <p className="text-gray-700 text-sm pl-3 line-clamp-1">The Location is : {apartment.location}</p> 
                    <p className="text-gray-700 text-sm pl-3">The Space is : {apartment.space}</p> 
                    <p className="text-gray-700 text-sm pl-3">The Type is : {apartment.type}</p> 
                    <p className="p-2 border-1 border-black rounded-xl w-4/5 mx-auto my-2 text-center bg-indigo-900 text-indigo-100 text-1xl">View More Details</p>
                  </div>

                </div> 
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

export default Section