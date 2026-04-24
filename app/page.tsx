import Section from "./components/apartmentsection/Section"
import Header from "./components/header/Header"
import Hero from "./components/hero/Hero" 



function page() {
  return (
    
    <> 
    <div className="w-full h-screen flex flex-col ">
      <Header /> 
      <Hero />
    </div> 
    <Section />
    
    </>
  )
}

export default page