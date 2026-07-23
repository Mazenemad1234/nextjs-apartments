import { MappedApartment } from "@/lib/mapapartment";
import Section from "./components/apartmentsection/Section";
import Header from "./components/header/Header";
import Hero from "./components/Hero";
import { getapartment  } from "@/lib/getapartment";
import Offerssection from "./components/offerssection";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{
    type?: string;
    kitchens?: string;
    bedrooms?: string;
    bathrooms?: string;
    minprice?: string;
    maxprice?: string;
  }>;
}) {
  const resolvedParams = await searchParams;

  let apartments:MappedApartment[];
  try {
    apartments = await getapartment();
  } catch (err) {
    console.log(err);
    const message = err instanceof Error ? err.message : "Something went wrong";
    return <div>{message}</div>;
  } 
  const apartments_region : string[] = [...new Set(apartments.map( (apt) => apt.region))];

  return (
    <>
      <div className="w-full h-screen flex flex-col">
        <Header />
        <Hero apartments_region = {apartments_region}/>
      </div>
      <Section apartments={apartments} searchparam={resolvedParams} /> 
      <Offerssection />
    </>
  );
}
