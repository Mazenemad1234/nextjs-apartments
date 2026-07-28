"use client";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Hero({ apartments_region }:{ apartments_region: string[] }) {
  const [value, setvalue] = useState("");
  const [list, setlist] = useState(false);
  const router = useRouter();

  const regions = apartments_region.filter((y) =>
    y.toLowerCase().includes(value.toLowerCase())
  );

  const handleSelect = (z: string) => {
    setvalue(z);
    setlist(false);
    router.push(`/searchlist/${z}`);
  };

  return (
    <div className="relative hero flex flex-1 flex-shrink-0 ">
      <div className="absolute bg-black/20 inset-0" />
      <div className="flex w-[80%] mx-auto flex-col justify-center items-center gap-6 z-10 ">
        <p className="herotitle mx-auto md:text-4xl text-2xl font-semibold ">
          Discover Your Next Home
        </p>
        <div className="flex flex-row gap-4 items-center justify-center mx-auto ">
          <div className="relative md:w-[300px] w-[200px]">
            <input
              type="text"
              placeholder="Search the Apartment"
              className="w-full text-center p-2 rounded-2xl outline-none border-2 hover:border-green-500 focus:border-green-500 duration-700"
              spellCheck={false}
              value={value}
              onFocus={() => setlist(true)}
              onBlur={() => setlist(false)}
              onChange={(e) => {
                setvalue(e.target.value);
                setlist(true);
              }}
            />

            {value && (
              <button
                className="absolute right-3 w-6 top-1/2 -translate-y-1/2 rounded-full border-2 border-gray-600 hover:scale-90 hover:bg-gray-300 duration-300"
                onMouseDown={() => {
                  setvalue("");
                  setlist(false);
                }}
              >
                X
              </button>
            )}

            {list && (
              <ul className="absolute z-10 w-full bg-white rounded-2xl max-h-60 overflow-y-auto mt-1">
                {regions.map((z) => (
                  <li
                    key={z}
                    className="p-2 cursor-pointer hover:bg-gray-100 text-gray-600 text-center"
                    onMouseDown={(e) => {
                      e.preventDefault();
                      handleSelect(z);
                    }}
                  >
                    {z}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="w-1/5">
            <Link
              href={"/filter"}
              className="bg-green-300 flex text-green-600 h-9 w-10 items-center justify-center rounded-2xl border-2 border-green-700"
            >
              <TuneRoundedIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;