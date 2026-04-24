"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  images: string[];
  alt: string;
};

export function ImageSlider({ images, alt }: Props) {
  const [current, setCurrent] = useState(0);

  return (
    <div className="relative w-full h-96 rounded-2xl overflow-hidden">
      {images.map((image, index) => (
        <div key={index} className={`absolute inset-0 transition-opacity duration-300 ${index === current ? "opacity-100" : "opacity-0"}`} >
            <Image src={image} alt={alt} fill priority={
              index === current ||
              index === current + 1 ||
              index === current - 1
            }
            className="object-cover "
          />
        </div>
      ))}

      {/* LEFT button */}
      {current > 0 && (
        <button
          onClick={() => setCurrent(current - 1)}
          className="absolute bg-black/50 -translate-y-1/2 hover:bg-black/70 text-white top-1/2 left-3 text-2xl rounded-full h-14 w-14"
        >
          {"<"}
        </button>
      )}

      {/* RIGHT button */}
      {current < images.length - 1 && (
        <button
          onClick={() => setCurrent(current + 1)}
          className="absolute bg-black/50 -translate-y-1/2 hover:bg-black/70 text-white top-1/2 right-3 text-2xl rounded-full h-14 w-14"
        >
          {">"}
        </button>
      )}

      {/* counter */}
      <div className="absolute bottom-3 right-3 bg-black/60 text-white text-sm px-3 py-1 rounded-full">
        {current + 1} / {images.length}
      </div>
    </div>
  );
}
