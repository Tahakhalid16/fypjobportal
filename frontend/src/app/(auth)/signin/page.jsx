"use client";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../context/AuthContext";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();
  const { login, setUserType } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await loginUser(email, password);
    } catch (err) {
      console.error(err);
      setError("Invalid email or password");
    }
  };

  const loginUser = async (email, password) => {
    const response = await axios.post("http://localhost:1337/api/auth/local", {
      identifier: email,
      password,
    });

    localStorage.setItem("jwt_token", response.data.jwt);
    localStorage.setItem("userid", response.data.user.id);
    localStorage.setItem(
      "username",
      JSON.stringify(response.data.user.username)
    );
    localStorage.setItem(
      "user_type",
      JSON.stringify(response.data.user.user_type)
    );
    login();
    setUserType(response.data.user.user_type);
    if (response.data.user.user_type === "company") {
      router.push("/company");
    } else {
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        {/* Logo */}
        {/* <div className="text-center mb-6">
          <img
            className="w-12 mx-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
        </div> */}

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-700 text-center mb-2">
          Sign in to your account
        </h2>
        

        {/* Error Message */}
        {error && (
          <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email address
            </label>
            <input
              name="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-center">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
              >
                Password
              </label>
              <a href="#" className="text-sm text-blue-500 hover:underline">
                Forgot password?
              </a>
            </div>
            <input
              name="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded shadow hover:bg-blue-600 transition"
          >
            Sign in
          </button>
        </form>

        {/* Signup Link */}
        <p className="mt-6 text-center text-gray-500">
          Not a member?{" "}
          <a href="#" className="text-blue-500 hover:underline font-medium">
            Signup here!
          </a>
        </p>
      </div>
    </div>
  );
};

export default Page;

