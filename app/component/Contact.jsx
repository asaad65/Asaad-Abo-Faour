"use client";

import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = () => {
    const fullMessage = ` Hello Asaad My Name is ${name}. ${message}`;
    const encoded = encodeURIComponent(fullMessage);
    const url = `https://wa.me/0988596054?text=${encoded}`;
    window.open(url, "_blank");
  };

  return (
       <div className=" mt-10 text-white grid grid-cols-1 max-w-7xl mx-auto border-t-2 px-5  border-green-400 sm:grid-cols-1 lg:grid-cols-2">
    <div className=" mt-5">
    <div>
        <h2 className=" text-5xl font-bold mb-2 lg:text-6xl sm:text-6xl md:text-6xl">Contact Me </h2>
        <h3 className=" text-green-500 text-3xl mb-2">Lets work together</h3>
        <span className="text-gray-500 text-sm mb-2 md:text-2xl sm:text-2xl lg:text-lg">Let’s turn your vision into reality — message me!</span>
    </div>
    <div className=" text-2xl text-gray-500 mt-8">
      <h1 className="hover:ml-2 duration-150 transition-all cursor-pointer hover:border-b-2 border-gray-500 inline-block hover:text-green-500 hover:border-green-500">Asaad Abo Faour</h1><br/>
      <Link href="mailto:asaad_abo_faour@outlook.com">
      <h1 className=" text-xl md:text-2xl hover:ml-2 duration-150 transition-all cursor-pointer hover:border-b-2 border-gray-500 inline-block my-5 hover:text-green-500  hover:border-green-500">asaad_abo_faour@outlook.com</h1><br/>
      </Link>
      <Link href={"tel:+963 988 596 054"}>
      <h1 className="hover:ml-2 duration-150 transition-all cursor-pointer hover:border-b-2 border-gray-500 inline-block hover:text-green-500 hover:border-green-500"  >+963 988 596 054</h1>
         
      </Link>
    </div>
    </div>
    <div className="mt-5">
      <input type="text" placeholder="Enter Your Name" value={name} onChange={(target)=>{setName(target.target.value)}}  className=" w-full bg-[#12141c] border-2 border-green-500 outline-0 rounded-xl p-5"></input>
      <textarea placeholder=" Enter Your Message" value={message} onChange={(target)=>{setMessage(target.target.value)}}  className=" p-5 w-full bg-[#12141c] border-2 border-green-500 outline-0 rounded-xl mt-4 h-60" ></textarea>

        <button  className=" cursor-pointer btn flex gap-1 my-3 items-center relative group " onClick={handleSend}>Submit <img className="w-10 absolute right-0 opacity-0 group-hover:opacity-100 transition-all duration-700  group-hover:-right-10" src="..\imegs\whatsapp.svg"></img></button>
    </div>
  </div>
  );
}