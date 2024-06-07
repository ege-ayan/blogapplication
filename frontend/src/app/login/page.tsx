"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();

  const performLogin = () => {
    router.push("/dashboard");
  };

  const navigateToRegister = () => {
    router.push("/register");
  };

  return (
    <div className="w-full min-h-screen bg-[#1E1E1E] flex flex-col items-center justify-center">
      <Image src="/img/cat.png" alt="Email Icon" width={82} height={72} />
      <div className="bg-[#C9C9C9] rounded-[30px] shadow-lg w-[740px] h-[400px] mt-[30px]">
        <div className="flex flex-col mt-[66px] items-center ">
          <p className="text-black font-poppins text-2xl font-semibold leading-normal">
            Welcome Back
          </p>

          <p className="text-[#595959] font-poppins text-xs font-normal leading-normal">
            Input your login details to continue
          </p>
        </div>
        <form>
          <div className="flex flex-col gap-[32px] mt-[32px] justify-center">
            <div className="flex flex-row justify-center w-full">
              <div className="relative w-[360px] border border-[#595959] rounded-[20px]">
                <Image
                  src="/img/mail.png"
                  alt="Email Icon"
                  width={25}
                  height={25}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2"
                />
                <input
                  className="w-full h-[50px] pl-14 rounded-[20px] bg-inherit text-black font-poppins text-xs font-normal leading-normal placeholder-[#595959]"
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="flex flex-row justify-center w-full">
              <div className="relative w-[360px] border border-[#595959] rounded-[20px]">
                <Image
                  src="/img/lock.png"
                  alt="Password Icon"
                  width={25}
                  height={25}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2"
                />
                <input
                  className="w-full h-[50px] pl-14 rounded-[20px] bg-inherit text-black font-poppins text-xs font-normal leading-normal placeholder-[#595959]"
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-4">
              <button
                className="w-[360px] h-[50px] rounded-[20px] bg-[#C62807]"
                type="button"
                onClick={performLogin}
              >
                Log in
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
