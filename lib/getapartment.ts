import mapapartment from "./mapapartment";

export async function getapartment() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/apartments`, {
    cache: "no-store",
    method: "GET",
  }); 
  const result = await res.json();
  if (!result.success) {
    throw new Error(result.error?.message ?? "failed to fetch data");
  }
  return result.data.map(mapapartment);
} 
