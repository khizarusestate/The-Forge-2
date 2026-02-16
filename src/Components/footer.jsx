import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

export default function Footer(){
  const quickLinks = [
    { label: "Home", to: "home" },
    { label: "About", to: "about" },
    { label: "Services", to: "services" },
    { label: "Contact", to: "contact" },
  ];

  return(
    <footer className="w-full min-h-[420px] md:min-h-[300px] flex flex-col justify-center items-center bg-black px-4 md:px-8">
      <motion.section initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="w-full flex flex-col md:flex-row justify-center items-center gap-10 md:gap-[100px] py-10">
        <motion.article whileHover={{ y: -6, opacity: 0.95 }} className="flex flex-col justify-center items-center gap-[15px] cursor-pointer">
          <h1 className="text-[28px] font-bold text-red-500">THE FORGE</h1>
          <p className="w-[260px] text-center text-[15px] text-gray-300">Building strength, discipline, and confidence through world-class training and modern fitness programs.</p>
        </motion.article>

        <motion.article whileHover={{ y: -6, opacity: 0.95 }} className="flex flex-col justify-center items-center gap-[10px] text-gray-300 cursor-pointer">
          <h2 className="text-[20px] font-bold text-white">Quick Links</h2>
          {quickLinks.map((item) => (
            <motion.div key={item.to} whileHover={{ x: 6, opacity: 0.95 }} className="cursor-pointer">
            <Link
              key={item.to}
              to={item.to}
              spy={true}
              smooth={true}
              duration={700}
              offset={0}
              activeClass="text-red-500"
              className="cursor-pointer hover:text-red-500 duration-200"
            >
              {item.label}
            </Link>
            </motion.div>
          ))}
        </motion.article>

        <motion.article whileHover={{ y: -6, opacity: 0.95 }} className="flex flex-col justify-center items-center gap-[10px] text-gray-300 cursor-pointer">
          <h2 className="text-[20px] font-bold text-white">Contact</h2>
          <p>Gujranwala, Punjab, Pakistan</p>
          <p>+923277522098</p>
          <p>khizarusestate@gmail.com</p>
        </motion.article>
      </motion.section>

      <motion.section initial={{ x: -40, y: 20, opacity: 0 }} whileInView={{ x: 0, y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="w-full flex justify-center items-center border-t border-gray-700 py-6">
        <p className="text-[14px] text-gray-400">Copyright 2026 THE FORGE. All Rights Reserved.</p>
      </motion.section>

    </footer>
  );
}
