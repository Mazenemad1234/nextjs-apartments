"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

function Filter() {
  const [unit, setunit] = useState("");
  const [kitchens, setkitchens] = useState("");
  const [bedrooms, setbedrooms] = useState("");
  const [bathrooms, setbathrooms] = useState("");
  const [minprice, setminprice] = useState("");
  const [maxprice, setmaxprice] = useState("");
  const router = useRouter(); 
  const reset = () => {
    setunit("");
    setkitchens("");
    setbedrooms("");
    setbathrooms("");
    setminprice("");
    setmaxprice("");
  };
  const applyChanges = () => {
    const params = new URLSearchParams();
    if (unit) {
      params.set("type", unit);
    }
    if (kitchens) {
      params.set("kitchens", kitchens);
    }
    if (bedrooms) {
      params.set("bedrooms", bedrooms);
    }
    if (bathrooms) {
      params.set("bathrooms", bathrooms);
    }
    if (minprice) {
      params.set("minprice", minprice);
    }
    if (maxprice) {
      params.set("maxprice", maxprice);
    }
    router.push(`/?${params.toString()}`);
  };
  return (
    //this is the bg of the page
    <div className="flex justify-center h-screen items-center overflow-hidden bg-gradient-to-tr from-pink-400  via-sky-400  to-green-200">
      <section className="bg-slate-300 min-w-[500px] flex flex-col rounded-2xl ">
        {/*----------------------------------------------------------------------*/}
        {/* this is the header of the filter card */}
        <div className="px-6 py-5 border-b border-gray-100">
          <h2 className="text-base font-semibold text-green-400">
            Filter apartments
          </h2>
          <p className="text-sm text-gray-400 mt-0.5">
            Filter by type, rooms, space, and budget
          </p>
        </div>
        {/*----------------------------------------------------------------------*/}
        {/*----------------------------------------------------------------------*/}
        {/* this is the type of the unit */}
        <div className="flex flex-col w-[90%] mx-auto mt-3 gap-2 pb-7 border-b border-green-500/50">
          <label className="pl-3 text-black/60">Unit Type</label>
          <select
            className="py-2 pl-4 rounded-xl border border-gray-600 bg-gray-50   focus:border-blue-700 outline-none"
            onChange={(e) => setunit(e.target.value)}
            value={unit}
          >
            <option value="">Any type</option>
            <option value="studio">Studio</option>
            <option value="apartment">Apartment</option>
            <option value="duplex">Duplex</option>
          </select>
        </div>
        {/*----------------------------------------------------------------------*/}
        {/*----------------------------------------------------------------------*/}
        {/* this is the content of the bedrooms & kitchens & bathrooms of the unit */}
        <div className="w-[90%] mx-auto my-2 flex flex-row  gap-1 pb-7 border-b border-green-500/50">
          {/*----------------------------------------------------------------------*/}
          {/* this is the number of the kitchens of the unit */}
          <div className="flex flex-col w-[150px] gap-2">
            <label className="pl-3 text-black/60">Kitchens</label>
            <select
              className="py-2 pl-3 rounded-xl border border-gray-600 bg-gray-50   focus:border-blue-700 outline-none"
              onChange={(e) => setkitchens(e.target.value)}
              value={kitchens}
            >
              <option value="">All</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          {/*----------------------------------------------------------------------*/}
          {/*----------------------------------------------------------------------*/}
          {/* this is the number of the bedrooms of the unit */}
          <div className="flex flex-col w-[150px] gap-2">
            <label className="pl-3 text-black/60">Bedrooms</label>
            <select
              className="py-2 pl-3 rounded-xl border border-gray-600 bg-gray-50   focus:border-blue-700 outline-none"
              onChange={(e) => setbedrooms(e.target.value)}
              value={bedrooms}
            >
              <option value="">All</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          {/*----------------------------------------------------------------------*/}
          {/*----------------------------------------------------------------------*/}
          {/* this is the number of the bathrooms of the unit */}
          <div className="flex flex-col w-[150px] gap-2">
            <label className="pl-3 text-black/60">Bathrooms</label>
            <select
              className="py-2 pl-3 rounded-xl border border-gray-600 bg-gray-50   focus:border-blue-700 outline-none"
              onChange={(e) => setbathrooms(e.target.value)}
              value={bathrooms}
            >
              <option value="">All</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          {/*----------------------------------------------------------------------*/}
        </div>
        {/*----------------------------------------------------------------------*/}
        {/*----------------------------------------------------------------------*/}
        {/* this is the min / max price div*/}
        <div className="w-[90%] flex flex-row justify-between mx-auto  pb-7 border-b border-green-500/50">
          <div className="flex flex-col items-center gap-2">
            <label className="text-black/60">MinPrice</label>
            <input
              className="py-2 pl-4 rounded-xl border border-gray-600 bg-gray-50   focus:border-blue-700 outline-none"
              type="number"
              placeholder="minprice"
              min={0}
              onChange={(e) => setminprice(e.target.value)}
              value={minprice}
            ></input>
          </div>
          <div className="flex flex-col items-center gap-2 ">
            <label className="text-black/60">MaxPrice</label>
            <input
              className="py-2 pl-4 rounded-xl border border-gray-600 bg-gray-50   focus:border-blue-700 outline-none"
              type="number"
              placeholder="maxprice"
              min={0}
              onChange={(e) => setmaxprice(e.target.value)}
              value={maxprice}
            ></input>
          </div>
        </div>
        {/*----------------------------------------------------------------------*/}
        {/*----------------------------------------------------------------------*/}
        {/* this is the button to apply changes */}
        <div className="flex flex-row items-center  ">
          <button
            className="w-fit text-white py-2 px-3 rounded-2xl mx-auto my-3 bg-blue-700 shadow-[0_0_20px_rgba(22,96,251,0.8)]"
            onClick={applyChanges}
          >
            apply
          </button>
          <Link
            className="w-fit text-white py-2 px-3 rounded-2xl mx-auto my-3 bg-red-700 shadow-[0_0_20px_rgba(233,13,52,0.96)]"
            href={"/"}
          >
            {" "}
            Return Home Page{" "}
          </Link>
          <button
            onClick={reset}
            className="w-fit text-white py-2 px-3 rounded-2xl mx-auto my-3 bg-green-700 shadow-[0_0_20px_rgba(28,169,35,1)]"
          >
            Reset
          </button>
        </div>
        {/*----------------------------------------------------------------------*/}
      </section>
    </div>
  );
}

export default Filter;
