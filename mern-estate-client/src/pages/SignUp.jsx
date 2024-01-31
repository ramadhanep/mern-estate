import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success == false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate("/sign-in")
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className="container mx-auto py-6 flex flex-col justify-center items-center text-center gap-2">
      <h1 className="text-2xl font-bold">Sign Up</h1>
      <div className="w-full mt-10 grid grid-cols-6 gap-1 text-left">
        <div className="col-span-2"></div>
        <form onSubmit={handleSubmit} className="col-span-2">
          <div>
            <label htmlFor="username" className="text-sm">
              Username
            </label>
            <div className="mt-2">
              <input
                type="text"
                id="username"
                className="w-full rounded-md border-0 px-3 py-2 ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-black"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <div className="mt-2">
              <input
                type="email"
                id="email"
                className="w-full rounded-md border-0 px-3 py-2 ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-black"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="password" className="text-sm">
              Password
            </label>
            <div className="mt-2">
              <input
                type="password"
                id="password"
                className="w-full rounded-md border-0 px-3 py-2 ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-black"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mt-4 flex flex-col justify-end text-center gap-2">
            <button
              type="submit"
              className="px-4 py-2 bg-black text-white rounded-md"
            >
              {loading ? "Loading..." : "Sign Up"}
            </button>
            <p>
              Have an account?{" "}
              <Link to="/sign-in" className="text-blue-500">
                Sign In
              </Link>
            </p>
            <p>{error && <span className="text-red-500">{error}</span>}</p>
          </div>
        </form>
        <div className="col-span-2"></div>
      </div>
    </div>
  );
}
