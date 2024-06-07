"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import LoginTab from "./Tabs/LoginTab";
import RegisterTab from "./Tabs/RegisterTab";

enum Tab {
  Login = "Login",
  Register = "Register",
}

const tabVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const contentVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.Login);
  const router = useRouter();

  const handleTabSwitch = (tab: Tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full min-h-screen bg-[#1E1E1E] flex flex-col items-center justify-center">
      <motion.div
        className="bg-[#C9C9C9] rounded-[30px] shadow-lg w-[350px] md:w-[740px] h-[585px] mt-[30px]"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={tabVariants}
        transition={{ duration: 1.0 }}
      >
        <div className="flex justify-center h-[60px]">
          <button
            className={`w-1/2 bg-[#DD300B]  ${
              activeTab === Tab.Login ? "opacity-100" : "opacity-50"
            } rounded-tl-[30px] transition-opacity duration-500`}
            onClick={() => handleTabSwitch(Tab.Login)}
          >
            Sign In
          </button>
          <button
            className={`w-1/2 bg-[#DD300B] ${
              activeTab === Tab.Register ? "opacity-100" : "opacity-50"
            } rounded-tr-[30px] transition-opacity duration-500`}
            onClick={() => handleTabSwitch(Tab.Register)}
          >
            Sign Up
          </button>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={contentVariants}
            transition={{ duration: 0.2 }}
          >
            {activeTab === Tab.Login ? <LoginTab /> : <RegisterTab />}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
