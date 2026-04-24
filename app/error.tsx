"use client"
import Link from "next/link"

interface Typeerror 
{
    error:Error, 
    reset: () => void
}
function error({error,reset}:Typeerror) {
  return (
    <div className="w-full h-screen bg-red-300 flex justify-center items-center"> 
    <div className="bg-gray-900 w-3/5 h-80  text-red-600 flex flex-col justify-center items-center gap-4">
    <h1>{error.message}</h1> 
    <button className="p-4 border-2 border-white text-white text-2xl rounded-3xl" onClick={() => reset()}>reset</button>
    <Link className="p-4 border-2 border-red-600 rounded-3xl" href={"#productes"}>Go to Home page</Link>
    </div>
    </div>
  )
}

export default error