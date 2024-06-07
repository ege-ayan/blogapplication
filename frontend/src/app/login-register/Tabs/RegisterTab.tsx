"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function RegisterTab() {
  const router = useRouter();
  const performRegister = () => {
    router.push("/dashboard");
  };

  return (
    <div>
      <div className="flex flex-col mt-[35px] items-center ">
        <p className="text-black font-poppins text-2xl font-semibold leading-normal">
          Welcome to Peach Cat
        </p>

        <p className="text-[#595959] font-poppins text-xs font-normal leading-normal">
          Create an account!
        </p>
      </div>
      <form>
        <div className="flex flex-col gap-[32px] mt-[32px] justify-center">
          <div className="flex flex-row justify-center w-full">
            <div className="relative w-[360px] border border-[#595959] rounded-[20px]">
              <img
                src="/img/user.png"
                alt="User Icon"
                width={25}
                height={25}
                className="absolute left-4 top-1/2 transform -translate-y-1/2"
              />
              <input
                className="w-full h-[50px] pl-14 rounded-[20px] bg-inherit text-black font-poppins text-xs font-normal leading-normal placeholder-[#595959]"
                id="username"
                type="username"
                placeholder="Enter your user name"
              />
            </div>
          </div>
          <div className="flex flex-row justify-center w-full">
            <div className="relative w-[360px] border border-[#595959] rounded-[20px]">
              <img
                src="/img/mail.png"
                alt="Mail Icon"
                width={25}
                height={25}
                className="absolute left-4 top-1/2 transform -translate-y-1/2"
              />
              <input
                className="w-full h-[50px] pl-14 rounded-[20px] bg-inherit text-black font-poppins text-xs font-normal leading-normal placeholder-[#595959]"
                id="email"
                type="email"
                placeholder="Enter your e-mail"
              />
            </div>
          </div>
          <div className="flex flex-row justify-center w-full">
            <div className="relative w-[360px] border border-[#595959] rounded-[20px]">
              <img
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
          <div className="flex flex-row justify-center w-full">
            <div className="relative w-[360px] border border-[#595959] rounded-[20px]">
              <img
                src="/img/verify.png"
                alt="Verify Icon"
                width={25}
                height={25}
                className="absolute left-4 top-1/2 transform -translate-y-1/2"
              />
              <input
                className="w-full h-[50px] pl-14 rounded-[20px] bg-inherit text-black font-poppins text-xs font-normal leading-normal placeholder-[#595959]"
                id="retypepassword"
                type="retypepassword"
                placeholder="Retype your password"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-4">
            <button
              className="w-[200px] md:w-[360px] h-[50px] rounded-[20px] bg-[#C62807]"
              type="button"
              onClick={performRegister}
            >
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
