function mapapartment(apt: Tapt) {
  return {
    id: apt.id,
    space: apt.space,
    location: apt.location,
    mapurl: apt.mapurl,
    price:apt.price,
    title: apt.title,
    bedrooms: apt.bedrooms,
    bathrooms: apt.bathrooms,
    livingrooms: apt.livingrooms,
    kitchens: apt.kitchens,
    floor: apt.floor,
    furnished: apt.furnished,
    parking: apt.parking,
    balcony: apt.balcony,
    type: apt.type, 
    region:apt.region,
    images:
      apt.apartments_images?.map(
        (img: { "image-url" : string }) => img["image-url"],
      ) ?? [],
  };
}
export default mapapartment;
//we use this type to check apt a bove
export type Tapt = { 
   id:number 
  price: number;
  location: string;
  mapurl: string;
  space: string;
  title: string;
  bathrooms: number;
  bedrooms: number;
  kitchens: number; 
  livingrooms:number;
  floor: number;
  type: string;
  region: string;
  balcony: string;
  furnished: string;
  parking: string;  
  apartments_images?: { "image-url" : string }[]
};
 
//we use this type to the data that get from supabase 
export type MappedApartment = {
  id: number;
  space: string;
  location: string;
  mapurl: string;
  price: number;
  region: string;
  title: string;
  bedrooms: number;
  bathrooms: number;
  livingrooms: number;
  kitchens: number;
  floor: number;
  furnished: boolean;
  parking: boolean;
  balcony: boolean;
  type: string;
  images: string[];
};
