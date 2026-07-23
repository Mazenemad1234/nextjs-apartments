import { getapartment } from "@/lib/getapartment";
import { MappedApartment } from "@/lib/mapapartment";

type Paramsregion = {
  params: Promise<{ region: string }>;
};
async function page({ params }: Paramsregion) {
  const { region } = await params;
  const apartments: MappedApartment[] = await getapartment();
  const regionlist = apartments.filter(
    (apt ) => apt.region === region,
  );
  return (
    <section>
      {regionlist.map((x) => (
        <div key={x.id}>{x.space} </div>
      ))}
    </section>
  );
}

export default page;
