import mapoffers from "./mapoffers";
export async function getoffers() { 
    const baseurl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://localhost:3000"; 
    const res = await fetch(`${baseurl}/api/offers` , { cache : "no-store" , method : "GET", }); 
    const result = await res.json();
    if(!result.success)
    {
        throw new Error(`failed to fetch data ${result.error}`)
    }
  return  result.data.map(mapoffers)
    
}

