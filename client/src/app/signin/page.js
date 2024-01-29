"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useState } from "react";

const signIn = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault(); // cancel the browser refresh

    setLoading(true);
    const res = await fetch("http://localhost:9000/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();

    if (res.status == 200) {
      router.push("/");
    }

    toast(data.msg);
    setLoading(false);
  };
  return (
    <div className=" p-3 max-w-xl mx-auto">
      <h1 className=" text-3xl text-center font-semibold my-7">Sign In</h1>
      <form onSubmit={handleSubmit} className=" flex flex-col gap-3 ">
        <input
          type="email"
          placeholder="email"
          id="email"
          className=" bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          className=" bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className=" bg-slate-600 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Loading...." : "Sign In "}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link href="/signup">
          <span className=" text-blue-500">Sign up</span>
        </Link>
      </div>
    </div>
  );
};

export default signIn;
