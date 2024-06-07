"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const performLogin = () => {
    router.push("/dashboard");
  };

  const navigateToRegister = () => {
    router.push("/register");
  };

  return (
    <div className="w-full min-h-screen bg-slate-900 flex flex-col items-center justify-center">
      <motion.h1
        className="text-4xl font-bold text-white text-center mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.75 }}
      >
        Welcome to Blog Application
      </motion.h1>

      <div className="bg-white p-8 rounded-lg shadow-lg w-72 sm:w-96">
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-y-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-48"
              type="button"
              onClick={performLogin}
            >
              Login
            </button>
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-48"
              type="button"
              onClick={navigateToRegister}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
