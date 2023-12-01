import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { blackLogo, whiteLogo } from "../../../public/assets";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { useState } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className="w-full dark:shadow-navbarShadow shadow-lg h-20 lg:h-[12vh] sticky top-0 z-50 dark:bg-darkColor bg-lightColor px-4">
      <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between">
        <div>
          <Image
            src={!darkMode ? whiteLogo : blackLogo}
            alt="logo"
            className={`w-14 h-auto`}
          />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="hidden mdl:inline-flex items-center gap-7"
        >
          <ul className="flex gap-7">
            <Link href="#home">
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1 }}
                className="dark:text-white text-darkColor font-bold hover:text-[#0096FB] dark:hover:text-[#deb992] cursor-pointer duration-300 nav-link"
              >
                Home
              </motion.li>
            </Link>
            <Link href="#home">
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.2 }}
                className="dark:font-bold dark:text-text-white dark:hover:text-[#deb992] font-bold hover:text-[#0096FB] cursor-pointer duration-300 nav-link"
              >
                About
              </motion.li>
            </Link>
            <Link href="#home">
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.3 }}
                className="dark:font-bold dark:text-text-white dark:hover:text-[#deb992] font-bold hover:text-[#0096FB] cursor-pointer duration-300 nav-link"
              >
                Skills
              </motion.li>
            </Link>
            <Link href="#home">
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.4 }}
                className="dark:font-bold dark:text-text-white dark:hover:text-[#deb992] font-bold hover:text-[#0096FB] cursor-pointer duration-300 nav-link"
              >
                Projects
              </motion.li>
            </Link>
            <Link href="#home">
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.5 }}
                className="dark:font-bold dark:text-text-white dark:hover:text-[#deb992] font-bold hover:text-[#0096FB] cursor-pointer duration-300 nav-link"
              >
                Contact
              </motion.li>
            </Link>
            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </ul>
        </motion.div>
        {/* icon section */}
        <div className="w-6 h-5 flex flex-col justify-between items-center text-4xl text-white cursor-pointer overflow-hidden mdl:hidden group">
          <span className="w-full h-[2px] bg-white inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-white inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-white inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
        </div>
      </div>
    </div>
  );
}
