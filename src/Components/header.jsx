import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-scroll";

export default function Header() {
  const navLinks = [
    { label: "HOME", to: "home" },
    { label: "ABOUT", to: "about" },
    { label: "SERVICES", to: "services" },
    { label: "CONTACT", to: "contact" },
  ];
  const [isMenu, setMenu] = useState(false);

  return (
    <>
      <motion.p
        whileHover={{ y: -4, opacity: 0.95 }}
        className="fixed top-3 left-3 text-white text-[34px] md:text-[40px] duration-200 cursor-pointer hover:text-red-500 hover:scale-120 active:scale-100 z-20"
        onClick={() => setMenu(true)}
      >
        {"\u2630"}
      </motion.p>
      <motion.header
        initial={{ x: -500 }}
        animate={isMenu ? { x: 0 } : { x: -500 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="h-screen w-[72vw] md:w-[30vw] min-w-[240px] flex flex-col items-center gap-8 md:gap-[50px] bg-white/95 backdrop-blur-[15px] fixed z-30 py-4"
      >
        <motion.p
          whileHover={{ x: -6, opacity: 0.95 }}
          className="text-[44px] md:text-[50px] text-red-500 duration-200 cursor-pointer hover:scale-120 active:scale-100"
          onClick={() => setMenu(false)}
        >
          {"\u2190"}
        </motion.p>
        <img src="/assets/TheForge.png" alt="The Forge" className="h-[95px] md:h-[150px]" />
        <nav>
          <ul className="flex flex-col items-center text-[20px] md:text-[25px] font-bold text-red-500 gap-4 md:gap-[25px]">
            {navLinks.map((item) => (
              <motion.li
                key={item.to}
                whileHover={{ color: "rgb(255,0,0)", x: 6, y: -3, opacity: 0.95 }}
                className="cursor-pointer"
              >
                <Link
                  to={item.to}
                  spy={true}
                  smooth={true}
                  duration={650}
                  offset={0}
                  activeClass="text-black"
                  onClick={() => setMenu(false)}
                  className="duration-200"
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.header>
    </>
  );
}
