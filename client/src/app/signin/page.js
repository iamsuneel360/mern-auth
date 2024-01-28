import React from "react";

const page = () => {
  return (
    <div className=" p-3 max-w-xl mx-auto">
      <h1 className=" text-3xl p-3 text-center">Sign In</h1>
      <form className="flex flex-col gap-3">
        <input
          className=" bg-slate-100 p-3 rounded-lg"
          type="text"
          placeholder="email"
        />
        <input
          className=" bg-slate-100 p-3 rounded-lg"
          type="password"
          placeholder="password"
        />
      </form>
    </div>
  );
};

export default page;
