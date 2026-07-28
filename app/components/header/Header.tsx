"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import { auth } from "../../../lib/firebase";
import { onAuthStateChanged, signOut, User } from "firebase/auth";

export default function Header() {
  const [value, setvalue] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <section className="navbar w-full bg-white flex flex-row justify-between items-center h-16 px-6 ">
        {/* menu and close button */}
        <div className="md:hidden">
          {!value ? (
            <button
              className="text-black border border-black/50  h-8 w-8 rounded"
              onClick={() => setvalue(true)}
            >
              <MenuIcon />
            </button>
          ) : (
            <button
              className="text-black border border-black/50  h-8 w-8 rounded"
              onClick={() => setvalue(false)}
            >
              <CloseIcon />
            </button>
          )}
        </div>

        {/* logo */}
        <div className="logo font-bold md:font-bold text-blue-800">MZN.</div>

        {/* links */}
        <div className="linkes flex flex-row gap-8">
          <Link
            href="#apartments"
            className="hidden md:block font-bold text-orange-600"
          >
            Apparments
          </Link>
          <Link href={""} className="hidden md:block font-bold text-orange-600">
            Offers
          </Link>
          <Link href={""} className="hidden md:block font-bold text-orange-600">
            Contact
          </Link>
        </div>

        {/* buttons */}
        <div className="buttons flex flex-row gap-3 items-center">
          {user ? (
            <div className="flex items-center gap-3">
              {user.photoURL ? (
                <Image
                  src={user.photoURL!}
                  alt="avatar"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white/50"
                />
              ) : (
                // Email user — show first letter of email
                <div className="w-10 h-10 rounded-full bg-slate-700 text-white flex items-center justify-center font-bold text-lg">
                  {user.email?.[0].toUpperCase()}
                </div>
              )}
              <button
                onClick={() => signOut(auth)}
                className="bg-red-600 hover:bg-red-800 text-white p-2 rounded-md"
              >
                Sign out
              </button>
            </div>
          ) : (
            // user is not signed in — show signin button
            <Link
              href={"/signin"}
              className="btn1 bg-green-500 border border-green-600 text-white p-2 rounded-md shadow-[0_0_15px_rgba(39,245,55,0.8)]"
            >
              Sign in
            </Link>
          )}
        </div>
      </section>

      {/* sidebar for small screens */}
      <div className="md:hidden">
        {value && (
          <div className="absolute top-16 one w-52 bg-gray-200 flex flex-col text-center rounded-ee-lg z-20">
            <Link
              className="link border-b-2 border-gray-300 p-3 duration-300"
              href="#apartments"
            >
              Apparments
            </Link>
            <Link
              className="link border-b-2 border-gray-300 p-3 duration-300"
              href={""}
            >
              Offers
            </Link>
            <Link className="link p-3 duration-300" href={""}>
              Contact
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
