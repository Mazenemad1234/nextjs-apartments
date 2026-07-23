import Link from "next/link";
import React from "react";

const Sideadmin = () => {
  return (
    <div className="bg-slate-800 flex flex-col  items-center gap-5 p-14 h-screen">
      <Link
        className="text-white font-bold text-center py-3 "
        href={"/admin/addunit"}
      >
        Add Unit
      </Link>
      <Link
        className="text-white font-bold text-center py-3 "
        href={"/admin/updateunit"}
      >
        Update Unit
      </Link>
      <Link
        className="text-white font-bold text-center py-3 "
        href={"/admin/deleteunit"}
      >
        Delete Unit
      </Link> 
      <Link
        className="text-white font-bold text-center py-3 "
        href={"/admin/addoffer"}
      >
        Add Offer
      </Link>
    </div>
  );
};

export default Sideadmin;
