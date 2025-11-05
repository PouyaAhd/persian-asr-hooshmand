"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "../ui";
import { NAV_ITEMS } from "@/constants";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header className="bg-white  sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center flex-row-reverse justify-between h-20">
          <div className="flex items-center gap-4">
            <Button
              className="border border-[#E3E3E3] rounded-[8px] p-2"
              variant="icon"
              aria-label="جستجو"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.3333 28C22.3289 28 28 22.3289 28 15.3333C28 8.33773 22.3289 2.66667 15.3333 2.66667C8.33773 2.66667 2.66667 8.33773 2.66667 15.3333C2.66667 22.3289 8.33773 28 15.3333 28Z"
                  stroke="#141414"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M29.3333 29.3333L26.6667 26.6667"
                  stroke="#141414"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>

            <Button
              className="border border-[#E3E3E3] rounded-[8px] p-2"
              variant="icon"
              aria-label="حساب کاربری"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.16 17.04C16.0667 17.0267 15.9467 17.0267 15.84 17.04C13.4933 16.96 11.6267 15.04 11.6267 12.68C11.6267 10.2667 13.5733 8.30667 16 8.30667C18.4133 8.30667 20.3733 10.2667 20.3733 12.68C20.36 15.04 18.5067 16.96 16.16 17.04Z"
                  stroke="#141414"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M24.9867 25.84C22.6133 28.0133 19.4667 29.3333 16 29.3333C12.5333 29.3333 9.38667 28.0133 7.01334 25.84C7.14667 24.5867 7.94667 23.36 9.37334 22.4C13.0267 19.9733 19 19.9733 22.6267 22.4C24.0533 23.36 24.8533 24.5867 24.9867 25.84Z"
                  stroke="#141414"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 29.3333C23.3638 29.3333 29.3333 23.3638 29.3333 16C29.3333 8.6362 23.3638 2.66667 16 2.66667C8.63621 2.66667 2.66667 8.6362 2.66667 16C2.66667 23.3638 8.63621 29.3333 16 29.3333Z"
                  stroke="#141414"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
          </div>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`${
                  item.label === "کمپین‌های بازاریابی و تبلیغاتی"
                    ? "text-black"
                    : ""
                } font-iran_bold  px-4 py-2 text-[14px] text-[#A0A0A0] hover:text-[#6B46C1] hover:bg-purple-50 rounded-lg transition-all font-medium whitespace-nowrap`}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

         

          <div className="flex items-center  flex-row-reverse">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <a
              href="#"
              className="bg-gray-200 px-8 py-2 rounded-lg text-gray-700 font-semibold hover:bg-gray-300 transition-colors"
            >
              logo
            </a>
          </motion.div>
          <Button
            variant="ghost"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden"
            aria-label="منو"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </Button>
          </div>
        </div>

        <motion.div
          initial={false}
          animate={{
            height: isMenuOpen ? "auto" : 0,
            opacity: isMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden"
        >
          <nav className="py-4 space-y-2">
            {NAV_ITEMS.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                initial={false}
                animate={{
                  x: isMenuOpen ? 0 : 50,
                  opacity: isMenuOpen ? 1 : 0,
                }}
                transition={{
                  duration: 0.3,
                  delay: isMenuOpen ? index * 0.05 : 0,
                }}
                className="block px-4 py-3 text-gray-700 hover:text-[#6B46C1] hover:bg-purple-50 rounded-lg transition-colors text-right"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>
        </motion.div>
      </div>
    </motion.header>
  );
}
