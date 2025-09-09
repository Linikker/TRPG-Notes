//import { useState, useEffect, useRef } from "react";
import home from "../assets/home.jpg";
import Navbar from "../components/Navbar";

export default function Tittle() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Navbar */}
      <div className="sticky top-0 z-50 w-full">
        <Navbar />
      </div>

      {/* Content */}
      <section className="flex min-h-[calc(100vh-66px)] flex-row place-content-center items-center gap-10 bg-radial-[at_25%_10%] from-fuchsia-900 from-10% to-slate-900 to-60% pl-6">
        {/* Text */}
        <div className="w-3xl space-y-6 text-left">
          <h2 className="text-6xl font-bold text-rose-100">This is TRPG</h2>
          <p className="text-2xl text-rose-300">
            Take control of your{" "}
            <strong className="font-bold">D&D campaign</strong> by keeping
            everything easy and accessible on your screen.
          </p>
          <button className="rounded-md bg-black px-8 py-4 text-xl text-rose-100 hover:bg-gray-900">
            Play now
          </button>
        </div>

        {/* Image */}
        <div className="flex w-1/5 flex-1">
          <img
            src={home}
            alt=""
            className="h-[calc(100vh-66px)] w-full rounded-lg mask-l-from-85% object-cover object-top-left"
          />
        </div>
      </section>
    </div>
  );
}
