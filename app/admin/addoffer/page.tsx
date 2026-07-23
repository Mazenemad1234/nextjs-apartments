"use client";
import { TApartment, gover } from "@/app/components/data/apartments";
import React, { useState } from "react";
import type { FormEvent } from "react";
const Addoffer = () => {
  const [formdata, setformdata] = useState<TApartment>({
    aftermoney: "",
    previousmoney: "",
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
    salername: "",
    salernumber: "",
    salerwhats: "",
    saleremail: "",
  });

  const [images, setimages] = useState<File[]>([]);
  const handlechange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setformdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleimageschange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const imagesarray = Array.from(files);
    setimages(imagesarray);
  };

  const handlesumbit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formdata).forEach(([key, value]) => {
      data.append(key, value);
    });
    images.forEach((image) => {
      data.append("images", image);
    });
    const response = await fetch("/api/offers", {
      method: "POST",
      body: data,
    });
    const result = await response.json();
    if (result.success) {
      alert("you added the offer correctly");
      setformdata({
        aftermoney: "",
        previousmoney: "",
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
        salername: "",
        salernumber: "",
        salerwhats: "",
        saleremail: "",
      });
      setimages([]);
    } else {
      console.log("you failed");
    }
  };

  {
    /*------------------------------------------------------------------------------*/
  }
  return (
    <form
      className="bg-gray-600 w-full flex flex-col py-4 h-full overflow-y-auto gap-6"
      onSubmit={handlesumbit}
    >
      {/*-----------------------------------------------------------------------------  className="rounded-3xl border-4 focus:border-white outline-none bg-slate-700 text-red-600 w-[80%] p-4 mx-auto z-10"*/}
      <select
        name="title"
        value={formdata.title}
        onChange={handlechange}
        className="rounded-3xl border-4 focus:border-slate-500 outline-none bg-slate-300 text-red-900 w-[80%] p-4 mx-auto duration-700"
      >
        <option value="">governate name</option>
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
          placeholder="mapurl URl"
          className="rounded-3xl border-4 focus:border-green-500 outline-none bg-slate-200 text-red-900 w-1/3 p-4 mx-auto z-10 duration-[800ms] focus:scale-105 focus:shadow-[0_0_20px_rgba(28,169,35,1)]"
        ></input>
        <input
          type="text"
          name="location"
          value={formdata.location}
          onChange={handlechange}
          placeholder="location "
          className="rounded-3xl border-4 focus:border-green-500 outline-none bg-slate-200 text-red-900 w-1/3 p-4 mx-auto z-10 duration-[800ms] focus:scale-105 focus:shadow-[0_0_20px_rgba(28,169,35,1)]"
        ></input>
        <input
          type="text"
          name="space"
          value={formdata.space}
          onChange={handlechange}
          placeholder="Space"
          className="rounded-3xl border-4 focus:border-green-500  outline-none bg-slate-200 text-red-900 w-1/3 p-4 mx-auto z-10 duration-[800ms] focus:scale-105 focus:shadow-[0_0_20px_rgba(28,169,35,1)]"
        ></input>
      </div>
      {/*-----------------------------------------------------------------------------*/}
      {/*-----------------------------------------------------------------------------*/}

      <input
        type="text"
        name="region"
        value={formdata.region}
        onChange={handlechange}
        placeholder=" Region "
        className="rounded-3xl border-4 focus:border-green-500 outline-none w-[80%] bg-slate-200 text-red-900  p-4 mx-auto  duration-[800ms] focus:scale-105 focus:shadow-[0_0_20px_rgba(28,169,35,1)]"
      ></input>

      {/*-----------------------------------------------------------------------------*/}
      {/*-----------------------------------------------------------------------------*/}
      <div className="w-[80%] mx-auto flex flex-col items-center justify-center gap-6">
        <select
          className="rounded-3xl border-4 w-full  focus:border-slate-500  bg-slate-300 text-red-900  p-4 outline-none duration-700"
          name="type"
          value={formdata.type}
          onChange={handlechange}
        >
          <option value=""> type of the unit</option>
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
            <option value=""> num of bathrooms</option>
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
            <option value=""> num of kitchens</option>
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
            <option value=""> num of bedrooms</option>
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
            <option value=""> num of livingRooms</option>
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
      <div className="flex md:flex-row items-center justify-center gap-4 md:w-[80%] mx-auto w-[100%] flex-col">
        <select
          className="rounded-3xl bg-slate-300 border-4 focus:border-slate-500 text-red-900 md:w-1/3 w-[80%] p-4 outline-none duration-700"
          name="furnished"
          value={formdata.furnished}
          onChange={handlechange}
        >
          <option value=""> value of furnished</option>
          <option value="true">true</option>
          <option value="false">false</option>
        </select>
        <select
          className="rounded-3xl bg-slate-300 border-4 focus:border-slate-500 text-red-900 md:w-1/3 w-[80%] p-4 outline-none duration-700"
          name="balcony"
          value={formdata.balcony}
          onChange={handlechange}
        >
          <option value=""> value of parking</option>
          <option value="true">true</option>
          <option value="false">false</option>
        </select>
        <select
          className="rounded-3xl bg-slate-300 border-4 focus:border-slate-500 text-red-900 md:w-1/3 w-[80%] p-4 outline-none duration-700"
          name="parking"
          value={formdata.parking}
          onChange={handlechange}
        >
          <option value=""> value of balcony</option>
          <option value="true">true</option>
          <option value="false">false</option>
        </select>
      </div>
      {/*-----------------------------------------------------------------------------*/}
      {/*-----------------------------------------------------------------------------*/}
      <div className="flex md:flex-row md:w-[80%] items-center justify-around mx-auto gap-2 flex-col w-[100%]">
        <input
          type="number"
          min={1}
          name="floor"
          value={formdata.floor}
          onChange={handlechange}
          placeholder=" the number of floor"
          className="rounded-3xl border-4 focus:border-green-500 outline-none bg-slate-700 text-red-600 w-[80%]  p-4 mx-auto  duration-[800ms] focus:scale-105 focus:shadow-[0_0_20px_rgba(28,169,35,1)]"
        ></input>
        <input
          type="number"
          name="previousmoney"
          value={formdata.previousmoney}
          onChange={handlechange}
          placeholder="Enter the previousmoney"
          className="rounded-3xl border-4 focus:border-green-500 outline-none bg-slate-700 text-red-600 w-[80%]  p-4 mx-auto  duration-[800ms] focus:scale-105 focus:shadow-[0_0_20px_rgba(28,169,35,1)]"
        ></input>
        <input
          type="number"
          name="aftermoney"
          value={formdata.aftermoney}
          onChange={handlechange}
          placeholder="Enter the aftermoney"
          className="rounded-3xl border-4 focus:border-green-500 outline-none bg-slate-700 text-red-600 w-[80%]  p-4 mx-auto  duration-[800ms] focus:scale-105 focus:shadow-[0_0_20px_rgba(28,169,35,1)]"
        ></input>
      </div>
      {/*-----------------------------------------------------------------------------*/}
      {/*-----------------------------------------------------------------------------*/}
      <div className="flex md:flex-row items-center gap-3 py-2 md:w-[80%] mx-auto flex-col w-[100%]">
        <input
          type="text"
          name="salername"
          value={formdata.salername}
          onChange={handlechange}
          placeholder="salername"
          className="rounded-3xl border-4 focus:border-green-500 outline-none bg-slate-700 text-red-600 w-[80%]  p-4 mx-auto  duration-[800ms] focus:scale-105 focus:shadow-[0_0_20px_rgba(28,169,35,1)]"
        ></input>
        <input
          type="number"
          name="salernumber"
          value={formdata.salernumber}
          onChange={handlechange}
          placeholder="salernumber"
          className="rounded-3xl border-4 focus:border-green-500 outline-none bg-slate-700 text-red-600 w-[80%]  p-4 mx-auto  duration-[800ms] focus:scale-105 focus:shadow-[0_0_20px_rgba(28,169,35,1)]"
        ></input>
        <input
          type="number"
          name="salerwhats"
          value={formdata.salerwhats}
          onChange={handlechange}
          placeholder="salerwhats"
          className="rounded-3xl border-4 focus:border-green-500 outline-none bg-slate-700 text-red-600 w-[80%]  p-4 mx-auto  duration-[800ms] focus:scale-105 focus:shadow-[0_0_20px_rgba(28,169,35,1)]"
        ></input>
        <input
          type="text"
          name="saleremail"
          value={formdata.saleremail}
          onChange={handlechange}
          placeholder="saleremail"
          className="rounded-3xl border-4 focus:border-green-500 outline-none bg-slate-700 text-red-600 w-[80%]  p-4 mx-auto  duration-[800ms] focus:scale-105 focus:shadow-[0_0_20px_rgba(28,169,35,1)]"
        ></input>
      </div>
      {/*-----------------------------------------------------------------------------*/}
      {/*-----------------------------------------------------------------------------*/}
      <label className="rounded-3xl border-4  bg-slate-700 text-green-600 w-[80%] p-4 mx-auto text-center">
        <span>click here to Upload images </span>
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

export default Addoffer;
