function mapoffers(apt: Tapt) {
  return {
    id: apt.id,
    previousmoney: apt.previousmoney,
    aftermoney: apt.aftermoney,
    space: apt.space,
    location: apt.location,
    mapurl: apt.mapurl,
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
    region: apt.region,
    salername: apt.salername,
    salernumber: apt.salernumber,
    salerwhats: apt.salerwhats,
    saleremail: apt.saleremail,
    images:
      apt.apartments_images?.map(
        (img: { "image-url": string }) => img["image-url"],
      ) ?? [],
  };
}
export default mapoffers;
//we use this type to check apt a bove
export type Tapt = {
  id: number;
  previousmoney: number;
  aftermoney: number;
  location: string;
  mapurl: string;
  space: string;
  title: string;
  bathrooms: number;
  bedrooms: number;
  kitchens: number;
  livingrooms: number;
  floor: number;
  type: string;
  region: string;
  balcony: string;
  furnished: string;
  parking: string;
  salername: string;
  salernumber: number;
  salerwhats: number;
  saleremail: string;
  apartments_images?: { "image-url": string }[];
};

//we use this type to the data that get from supabase
export type mappedoffers = {
  previousmoney: number;
  aftermoney: number;
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
  salername: string;
  salernumber: number;
  salerwhats: number;
  saleremail: string;
  images: string[];
};
