import React from "react";
import { FiUserPlus, FiLogIn } from "react-icons/fi";
const LandingPage = () => {
  return (
    <div className="flex flex-col w-screen items-center justify-center h-screen bg-cover bg-center bg-gradient-to-r from-brand to-cta landing">
      <div className="z-50 flex flex-col justify-center">
        <header className="text-2xl md:text-4xl font-bold mb-8 text-center text-white">
          Welcome to{" "}
          <span className="appname capitalize text-4xl  ">Yourba</span>
        </header>
        <p className="text-lg md:text-xl text-gray-200 mb-12 text-center">
          Join the shadows and start your romantic journey.
        </p>
        <div className="gap-5 grid sm:grid-cols-2 w-full justify-center">
          <button
            href="/create-account"
            className="py-4 px-8 btn bg-brand outline-none border-none text-white rounded-lg shadow  flex items-center gap-5 font-semibold w-[300px] justify-center">
            <span>Create Account</span>
            <FiUserPlus />
          </button>
          <button
            href="/login"
            className="py-4 px-8 btn bg-gray-200 outline-none border-none text-gray-700 rounded-lg shadow hover:bg-gray-300 flex items-center gap-5 font-semibold  w-[300px] justify-center">
            <span>Login</span>
            <FiLogIn />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
