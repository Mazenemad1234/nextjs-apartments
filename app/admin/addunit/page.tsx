"use client";
import { TApartment, gover } from "@/app/components/data/apartments";
import React, { useState } from "react";
import type { FormEvent } from "react";

const Addunit = () => {
  const [formdata, setformdata] = useState<TApartment>({
    price: "",
    location: "",
    mapurl: "",
    space: "",
    title: "",
    bathrooms: "",
    bedrooms: "",
    kitchens: "",
    livingrooms: "",
    floor: "",
    type: "",
    region: "",
    balcony: "false",
    furnished: "false",
    parking: "false",
  });
  const [images, setimages] = useState<File[]>([]);
  {
    /*------------------------------------------------------------------------------*/
  }
  const handlechange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setformdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  {
    /*------------------------------------------------------------------------------*/
  }
  {
    /*------------------------------------------------------------------------------*/
  }
  const handleimageschange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const imagesarray = Array.from(files);
    setimages(imagesarray);
  };
  {
    /*------------------------------------------------------------------------------*/
  }
  {
    /*------------------------------------------------------------------------------*/
  }
  const handlesumbit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formdata).forEach(([key, value]) => {
      data.append(key, value);
    });
    images.forEach((image) => {
      data.append("images", image);
    });
    const response = await fetch("/api/apartments", {
      method: "POST",
      body: data,
    });
    const result = await response.json();
    if (result.success) {
      console.log("the data is added correctly");
      alert("apartment added successfully");
      setformdata({
        price: "",
        location: "",
        mapurl: "",
        space: "",
        title: "",
        bathrooms: "",
        bedrooms: "",
        kitchens: "",
        livingrooms: "",
        floor: "",
        type: "",
        region: "",
        balcony: "false",
        furnished: "false",
        parking: "false",
      });
      setimages([]);
    } else {
      console.log("the data is not added correctly");
    }
  };
  {
    /*------------------------------------------------------------------------------*/
  }
  return (
    <form
      className="add flex flex-col py-4 h-full overflow-y-auto gap-6"
      onSubmit={handlesumbit}
    >
      {/*-----------------------------------------------------------------------------  className="rounded-3xl border-4 focus:border-white outline-none bg-slate-700 text-red-600 w-[80%] p-4 mx-auto z-10"*/}
      <select
        name="title"
        value={formdata.title}
        onChange={handlechange}
        className="rounded-3xl border-4 focus:border-slate-500 outline-none bg-slate-300 text-red-900 w-[80%] p-4 mx-auto duration-700"
      >
        <option value="">Enter the governate name</option>
        {gover.map((x) => (
          <option key={x} value={x}>
            {x}
          </option>
        ))}
      </select>
      {/*-----------------------------------------------------------------------------*/}
      <div className="flex flex-row items-center justify-between w-[80%] mx-auto gap-4">
        <input
          type="text"
          name="mapurl"
          value={formdata.mapurl}
          onChange={handlechange}
          placeholder="Enter the mapurl of the unit as URl"
          className="rounded-3xl border-4 focus:border-green-500 outline-none bg-slate-200 text-red-900 w-1/3 p-4 mx-auto z-10 duration-[800ms] focus:scale-105 focus:shadow-[0_0_20px_rgba(28,169,35,1)]"
        ></input>
        <input
          type="text"
          name="location"
          value={formdata.location}
          onChange={handlechange}
          placeholder="Enter the location of the unit"
          className="rounded-3xl border-4 focus:border-green-500 outline-none bg-slate-200 text-red-900 w-1/3 p-4 mx-auto z-10 duration-[800ms] focus:scale-105 focus:shadow-[0_0_20px_rgba(28,169,35,1)]"
        ></input>
        <input
          type="text"
          name="space"
          value={formdata.space}
          onChange={handlechange}
          placeholder="Enter the Space of the unit"
          className="rounded-3xl border-4 focus:border-green-500  outline-none bg-slate-200 text-red-900 w-1/3 p-4 mx-auto z-10 duration-[800ms] focus:scale-105 focus:shadow-[0_0_20px_rgba(28,169,35,1)]"
        ></input>
      </div>
      {/*-----------------------------------------------------------------------------*/}
      {/*-----------------------------------------------------------------------------*/}
      <div className="flex flex-row items-center justify-between w-[80%] mx-auto gap-4">
        <input
          type="text"
          name="price"
          value={formdata.price}
          onChange={handlechange}
          placeholder="Enter the Price of the unit"
          className="rounded-3xl border-4 focus:border-green-500  outline-none bg-slate-200 text-red-900 w-1/2 p-4 mx-auto z-10 duration-[800ms] focus:scale-105 focus:shadow-[0_0_20px_rgba(28,169,35,1)]"
        ></input>
        <input
          type="text"
          name="region"
          value={formdata.region}
          onChange={handlechange}
          placeholder="Enter the Region of the unit"
          className="rounded-3xl border-4 focus:border-green-500 outline-none bg-slate-200 text-red-900 w-1/2 p-4 mx-auto z-10 duration-[800ms] focus:scale-105 focus:shadow-[0_0_20px_rgba(28,169,35,1)]"
        ></input>
      </div>
      {/*-----------------------------------------------------------------------------*/}
      {/*-----------------------------------------------------------------------------*/}
      <div className="w-[80%] mx-auto flex flex-col items-center justify-center gap-6">
        <select
          className="rounded-3xl border-4 w-full  focus:border-slate-500  bg-slate-300 text-red-900  p-4 outline-none duration-700"
          name="type"
          value={formdata.type}
          onChange={handlechange}
        >
          <option value="">select the type of the unit</option>
          <option value="studio">Studio</option>
          <option value="apartment">Apartment</option>
          <option value="duplex">Duplex</option>
        </select>
        <div className="flex flex-row items-center justify-center gap-4 w-full">
          <select
            className="rounded-3xl bg-slate-300 border-4 focus:border-slate-500 text-red-900 w-1/2 p-4 outline-none duration-700"
            name="bathrooms"
            value={formdata.bathrooms}
            onChange={handlechange}
          >
            <option value="">Enter num of bathrooms</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <select
            className="rounded-3xl bg-slate-300 border-4 focus:border-slate-500 text-red-900 w-1/2 p-4 outline-none duration-700"
            name="kitchens"
            value={formdata.kitchens}
            onChange={handlechange}
          >
            <option value="">Enter num of kitchens</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="flex flex-row items-center justify-center gap-4 w-full">
          <select
            className="rounded-3xl bg-slate-300 border-4 focus:border-slate-500 text-red-900 w-1/2 p-4 outline-none duration-700"
            name="bedrooms"
            value={formdata.bedrooms}
            onChange={handlechange}
          >
            <option value="">Enter num of bedrooms</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <select
            className="rounded-3xl bg-slate-300 border-4 focus:border-slate-500 text-red-900 w-1/2 p-4 outline-none duration-700"
            name="livingrooms"
            value={formdata.livingrooms}
            onChange={handlechange}
          >
            <option value="">Enter num of livingRooms</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </div>
      {/*-----------------------------------------------------------------------------*/}
      {/*-----------------------------------------------------------------------------*/}
      <div className="flex flex-row items-center justify-center gap-4 w-[80%] mx-auto">
        <select
          className="rounded-3xl bg-slate-300 border-4 focus:border-slate-500 text-red-900 w-1/3 p-4 outline-none duration-700"
          name="furnished"
          value={formdata.furnished}
          onChange={handlechange}
        >
          <option value="">Enter value of furnished</option>
          <option value="true">true</option>
          <option value="false">false</option>
        </select>
        <select
          className="rounded-3xl bg-slate-300 border-4 focus:border-slate-500 text-red-900 w-1/3 p-4 outline-none duration-700"
          name="balcony"
          value={formdata.balcony}
          onChange={handlechange}
        >
          <option value="">Enter value of parking</option>
          <option value="true">true</option>
          <option value="false">false</option>
        </select>
        <select
          className="rounded-3xl bg-slate-300 border-4 focus:border-slate-500 text-red-900 w-1/3 p-4 outline-none duration-700"
          name="parking"
          value={formdata.parking}
          onChange={handlechange}
        >
          <option value="">Enter value of balcony</option>
          <option value="true">true</option>
          <option value="false">false</option>
        </select>
      </div>
      {/*-----------------------------------------------------------------------------*/}
      {/*-----------------------------------------------------------------------------*/}
      <input
        type="number"
        min={1}
        name="floor"
        value={formdata.floor}
        onChange={handlechange}
        placeholder="Enter the number of floor"
        className="rounded-3xl border-4 focus:border-green-500 outline-none bg-slate-700 text-red-600 w-[80%]  p-4 mx-auto  duration-[800ms] focus:scale-105 focus:shadow-[0_0_20px_rgba(28,169,35,1)]"
      ></input>
      {/*-----------------------------------------------------------------------------*/}
      {/*-----------------------------------------------------------------------------*/}
      <label className="rounded-3xl border-4  bg-slate-700 text-green-600 w-[80%] p-4 mx-auto text-center">
        <span>click here to Upload your images </span>
        <input
          onChange={handleimageschange}
          type="file"
          accept="image/*"
          multiple
          className="hidden"
        />
      </label>
      {/*-----------------------------------------------------------------------------*/}
      {/*-----------------------------------------------------------------------------*/}
      <button
        className="mx-auto bg-green-400 w-[80%] p-3 rounded-xl text-white focus:scale-95"
        type="submit"
      >
        Add New Unit
      </button>
      {/*-----------------------------------------------------------------------------*/}
    </form>
  );
};

export default Addunit;
