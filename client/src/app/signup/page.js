import Link from "next/link";
import React from "react";

const signUp = () => {
  return (
    <div className=" p-3 max-w-xl mx-auto">
      <h1 className=" text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form className=" flex flex-col gap-3 ">
        <input
          type="text"
          placeholder="user name"
          id="username"
          className=" bg-slate-100 p-3 rounded-lg"
        />
        <input
          type="email"
          placeholder="email"
          id="email"
          className=" bg-slate-100 p-3 rounded-lg"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          className=" bg-slate-100 p-3 rounded-lg"
        />
        <button className=" bg-slate-600 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          Sign Up
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link href="/signin">
          <span className=" text-blue-500">Sign in</span>
        </Link>
      </div>
    </div>
  );
};

export default signUp;
