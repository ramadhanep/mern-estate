import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signInStart, signInSuccess, signInFailure } from "../redux/user/userSlice";

export default function SignIn() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success == false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className="container mx-auto py-6 flex flex-col justify-center items-center text-center gap-2">
      <h1 className="text-2xl font-bold">Sign In</h1>
      <div className="w-full mt-10 grid grid-cols-6 gap-1 text-left">
        <div className="col-span-2"></div>
        <form onSubmit={handleSubmit} className="col-span-2">
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
              {loading ? "Loading..." : "Sign In"}
            </button>
            <p>
              Dont Have an account?{" "}
              <Link to="/sign-up" className="text-blue-500">
                Sign Up
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
