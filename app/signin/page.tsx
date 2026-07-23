// "use client";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { auth, googleprovider } from "../lib/firebase";
// import {
//   signInWithPopup,
//   createUserWithEmailAndPassword,
//   onAuthStateChanged,
// } from "firebase/auth";

// function Sign() {
//   const router = useRouter();
//   const [name, setname] = useState("");
//   const [phone, setphonename] = useState("");
//   const [email, setemail] = useState("");
//   const [password, setpassword] = useState("");
//   const [error, seterror] = useState("");
//   useEffect(() => {
//     const usersignin = onAuthStateChanged(auth, (currentuser) => {
//       if (currentuser) {
//         router.push("/");
//       }
//     });
//     return usersignin();
//   }, []);

//   return( 
  
//   <div>


//   </div>);
// }
// export default Sign;

"use client";
import { useState, useEffect } from "react";
import { auth, googleprovider } from "../../lib/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { useRouter } from "next/navigation";

function Sign() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        router.push("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSubmit = async () => {
    setError("");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/");
    } catch (err) {
      setError((err as Error).message);
    }
  };

  const handleGoogle = async () => {
    try {
      await signInWithPopup(auth, googleprovider);
      router.push("/");
    } catch (err) {
      setError((err as Error).message);
    }
  };

 return (
  <div className="relative bg-[url('/apartment.jpg')] bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center w-screen h-screen">
    <div className="absolute inset-0 bg-black/40" />
    <section className="relative z-10 flex flex-col justify-center items-center gap-5 w-96 m-auto py-10 px-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl">

      <h1 className="text-white text-2xl font-bold tracking-widest uppercase mb-2">
        Create Account
      </h1>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border border-white/30 text-slate-700  placeholder-white/50 p-3 rounded-xl w-full outline-none focus:border-white bg-white/20 transition-all duration-200"
        placeholder="Full Name"
        spellCheck={false}
        autoComplete="off"
      />

      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="border border-white/30 text-slate-700  placeholder-white/50 p-3 rounded-xl w-full outline-none focus:border-white bg-white/20 transition-all duration-200"
        placeholder="Phone Number"
        spellCheck={false}
        autoComplete="off"
      />

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border border-white/30 text-slate-700  placeholder-white/50 p-3 rounded-xl w-full outline-none focus:border-white bg-white/20 transition-all duration-200"
        placeholder="Email Address"
        spellCheck={false}
        autoComplete="off"
      />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border border-white/30 text-slate-700  placeholder-white/50 p-3 rounded-xl w-full outline-none focus:border-white bg-white/20 transition-all duration-200"
        placeholder="Password"
        spellCheck={false}
        autoComplete="new-password"
      />

      {error && (
        <p className="text-red-300 text-sm text-center px-4 bg-red-500/10 border border-red-400/30 rounded-xl py-2 w-full">{error}</p>
      )}

      <button
        onClick={handleSubmit}
        className="bg-red-800 text-white font-bold px-6 py-3 rounded-xl w-full hover:bg-slate-800 hover:scale-105 transition-all duration-500 tracking-wide"
      >
        Sign Up
      </button>

      <div className="flex items-center gap-3 w-full">
        <div className="flex-1 h-px bg-white/20" />
        <span className="text-white/50 text-sm">OR</span>
        <div className="flex-1 h-px bg-white/20" />
      </div>

      <button
        onClick={handleGoogle}
        className="bg-blue-700 border border-white/30 hover:bg-white/20 hover:scale-105 active:scale-95 transition-all duration-500 rounded-xl text-white font-semibold px-6 py-3 w-full text-center flex items-center justify-center gap-2 shadow-md"
      >
        Continue with <img src={'/google.png'} alt="google" className="w-6 "/>
      </button>

    </section>
  </div>
);
}

export default Sign;
