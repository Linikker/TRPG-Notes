import { React } from "react";
import Navbar from "../components/Navbar";
import login from "../assets/login.jpg";

export default function Login() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <section className="flex items-center bg-radial-[at_85%_90%] from-fuchsia-900 from-10% to-slate-900 to-60%">
        <img
          src={login}
          alt=""
          className="h-[calc(100vh-66px)] mask-r-from-95% mask-b-to-350% object-cover"
        />

        <div className="flex flex-1 items-center justify-center">
          <div className="items-center space-y-[68px] text-center">
            <h2 className="text-6xl font-bold text-rose-100">
              Start your Adventure!
            </h2>
            <div className="flex flex-col justify-between gap-2 space-y-[16px]">
              <input
                className="items-center rounded-lg border-1 border-rose-400 bg-rose-100 p-1.5 text-center text-3xl text-fuchsia-600 shadow-xl"
                type="user"
                placeholder="user"
              />
              <input
                className="items-center rounded-lg border-1 border-rose-400 bg-rose-100 p-1.5 text-center text-3xl text-fuchsia-600 shadow-xl"
                type="password"
                placeholder="password"
              />
            </div>

            <button className="rounded-md bg-black px-18 py-4 text-xl text-rose-100 hover:bg-gray-900">
              Login
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
