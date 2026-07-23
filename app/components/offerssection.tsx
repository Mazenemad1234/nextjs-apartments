import { getoffers } from "@/lib/getoffers";
import { mappedoffers } from "@/lib/mapoffers";

export default async function offerssection() {
  const offers : mappedoffers[] = await getoffers();

  return (
    <div className=" offer w-full  h-72 ">
      {offers.map((x) => (
        <section key={x.id}>{x.title}</section>
      ))}
    </div>
  );
}
