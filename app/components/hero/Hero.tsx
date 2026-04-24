// "use client"
// import { useState } from "react"  
// import { apartments } from "../data/apartments"  
// function Hero()
// { 
//   const [value,setvalue]=useState(""); 
//   const [open,setopen]=useState(false); 
//   const cities = [...new Set(apartments.map( x => x.title))]; 
//   const filtered = cities.filter( y => y.toLocaleLowerCase().includes(value.toLowerCase())) 
//   return (
//     <div className='hero flex flex-1'>  
//     <div className='flex w-full flex-col justify-center items-center gap-4'>
//       <p className='text-white text-2xl'>welcome to our website</p>
//       <div className="relative w-3/5">
//       <input type="text" placeholder="Search the Apartment" className="w-full text-center p-2 rounded-2xl"
//       value={value}
//       onChange={ e => {setopen(true);setvalue(e.target.value)}}
//       onFocus={() =>setopen(true)} 
//       onBlur={() => setopen(false)}
//       ></input> 

//       {(value) && 
//       (<button className="absolute right-3 w-6 top-1/2 -translate-y-1/2  rounded-full border-2  border-black hover:scale-90  hover:bg-gray-300 duration-300" 
//       onMouseDown={() => {setvalue("");setopen(false)}}>
//         X
//         </button>)
//       }
//       {
//         (open) && 
//         (<ul className="absolute z-10 w-full bg-white rounded-2xl max-h-60 overflow-y-auto mt-1 ">
//           {
//             filtered.map( z => (
//               <li className='p-2 cursor-pointer hover:bg-gray-100 text-gray-600 text-center' onMouseDown={() => {setvalue(z)}} key={z}>{z}</li>
//             ))
//           }  
//         </ul>)
//       }
//       </div>
//     </div>
//     </div> 
//   )

// }
// export default Hero

"use client"
import Link from "next/link"
import { apartments } from "../data/apartments"
import { useState } from "react"

function Hero() {
  const [value, setvalue] = useState("")
  const [list, setlist] = useState(false)

  const apartments_titles = [...new Set(apartments.map(x => x.title))]
  const filtered = apartments_titles.filter(y => y.toLowerCase().includes(value.toLowerCase()))

  return (
    <div className='hero flex flex-1'>  
          <div className='flex w-full flex-col justify-center items-center gap-4'>
          <p className='text-white text-2xl'>welcome to our website</p>
          <div className="relative w-3/5">
    <input
        type="text"
        placeholder="Search the Apartment"
        className="w-full text-center p-2 rounded-2xl"
        value={value}
        onFocus={() => setlist(true)}
        onBlur={() => setlist(false)}
        onChange={(e) => { setvalue(e.target.value); setlist(true) }}
      />

      {value && (
        <button
          className="absolute right-3 w-6 top-1/2 -translate-y-1/2 rounded-full border-2 border-black hover:scale-90 hover:bg-gray-300 duration-300"
          onMouseDown={() => { setvalue(""); setlist(false) }}
        >
          X
        </button>
      )}

      {list && (
        <ul className="absolute z-10 w-full bg-white rounded-2xl max-h-60 overflow-y-auto mt-1">
          {filtered.map(z => (
            <Link href={`#apartments/${z}`} key={z}>
              <li
                className="p-2 cursor-pointer hover:bg-gray-100 text-gray-600 text-center"
                onMouseDown={() => setvalue(z)}
              >
                {z}
              </li>
            </Link>
          ))}
        </ul>
      )}
        </div>
    </div>
    </div> 
  ) 
    
}

export default Hero