import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
const Login = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${import.meta.env.VITE_API_URL}/login`, { email, password })
      .then((result) => {
        console.log(result);
         localStorage.setItem("token", result.data.token);
        navigate("/dashboard");
      })
      .catch((error) => console.log(error.response.data));
  };
  return (
    <div className="h-screen bg-[#f5f5ff] flex items-center justify-center p-4 overflow-hidden">
      <div className="w-full max-w-8xl h-[calc(100vh-32px)] flex gap-5">
        {/* ================= LEFT SIDE ================= */}

        <div className="w-full lg:w-1/2 bg-white shadow-xl p-8 md:p-10 flex items-center justify-center overflow-y-auto">
          <div className="w-full max-w-[420px]">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-6 ">
              <div className="w-9 h-9 rounded-lg bg-[#4F39F6] flex items-center justify-center text-white font-bold">
                $
              </div>
              <Link to={"/"}>
                <h1 className="text-xl font-bold text-gray-800">
                  Expense<span className="text-[#4F39F6]">Tracker</span>
                </h1>
              </Link>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              Login into your account
            </h2>

            <p className="text-gray-500 mb-6">
              Join ExpenseTracker and take control of your finances today.
            </p>

            {/* ================= FORM ================= */}

            <form onSubmit={handleSubmit}>
              {/* Email */}
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 mb-3 outline-none focus:border-[#4F39F6] focus:ring-2 focus:ring-indigo-100 transition"
                required
                onChange={(e) => setEmail(e.target.value)}
              />

              {/* Password */}
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 mb-5 outline-none focus:border-[#4F39F6] focus:ring-2 focus:ring-indigo-100 transition"
                required
                onChange={(e) => setPassword(e.target.value)}
              />

              {/* Button */}

              <button
                type="submit"
                className="w-full bg-[#4F39F6] hover:bg-[#3e2fcc] active:scale-[0.98] transition-all py-3 rounded-lg text-white font-semibold cursor-pointer"
              >
                Login
              </button>
            </form>
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}

        <div className="hidden lg:block w-1/2  overflow-hidden shadow-xl bg-[#eeeeff]">
          <img
            src="/expense-dashboard.png"
            alt="Expense Tracker Dashboard"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
