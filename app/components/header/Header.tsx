'use client'
import Link from "next/link"
import { useState } from "react" 
import MenuIcon from '@mui/icons-material/Menu'; 
import CloseIcon from '@mui/icons-material/Close';
export default  function Header() { 
  const [value,setvalue]=useState(false);
  return (
    <> 



      <section className="navbar w-full bg-gray-200 flex flex-row justify-between items-center h-16 px-6 ">  
      {/*this is the menu and close button*/}   
      {/* //----------------------------------------------------------------------------------------------------------- */}
      <div className="md:hidden">
        {
        (!value) ? 
        (<button className=" bg-gray-400 h-8 w-8 rounded-lg" onClick ={() => setvalue(true)}><MenuIcon /></button>) 
        : 
        (
        <button className=" bg-gray-400 h-8 w-8 rounded-lg" onClick ={() => setvalue(false)}><CloseIcon /></button>  
        )
        }
      </div> 
      {/* //----------------------------------------------------------------------------------------------------------- */}

      {/* //----------------------------------------------------------------------------------------------------------- */}
      {/*this the logo*/}
      <div className="logo font-bold  md:font-bold text-blue-800 ">MZN.</div>    
      {/* //----------------------------------------------------------------------------------------------------------- */} 


      {/*this the linkes that appaer in the laptop size*/}
      <div className="linkes flex flex-row gap-8"> 
      <Link href={'#apartments'}  className="hidden md:block">Apparments</Link> 
      <Link href={''}  className="hidden md:block">Offers</Link> 
      <Link href={''}  className="hidden md:block">Contact</Link>
      </div>   
      {/* //----------------------------------------------------------------------------------------------------------- */} 

      {/*this is the buttons login and sign*/}
      <div className="buttons flex flex-row gap-3">
        <Link href={''} className="btn1 bg-blue-700 hover:bg-blue-800 text-white p-2  rounded-md">Sign in</Link> 
        <Link href={''} className="btn2 bg-red-600 hover:bg-red-800 text-white p-2  rounded-md">Login</Link>
      </div> 
      
    </section>  

    {/*this is the sidebar that appear in the small width*/} 
    {/* //----------------------------------------------------------------------------------------------------------- */}
    <div className=" md:hidden"> {
        value && 
        ( <div className="absolute top-16 one w-1/4 bg-gray-200  flex flex-col text-center rounded-ee-lg"> 
        <Link className="link border-b-2 border-gray-300  p-3 duration-300" href={'#apartments'} >Apparments</Link> 
        <Link className="link border-b-2 border-gray-300  p-3 duration-300" href={''} >Offers</Link> 
        <Link className="link p-3 duration-300" href={''} >Contact</Link>
        </div>) 

      }</div> 
    {/* //----------------------------------------------------------------------------------------------------------- */}
    </>
  )
}

