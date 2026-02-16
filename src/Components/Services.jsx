import React from "react";
import { motion } from "framer-motion";

const services = [
  { title: "Weight & Strength Training", disc: "Build muscle, increase strength, and boost metabolism with structured workouts." },
  { title: "Cardio & Conditioning", disc: "Improve stamina, burn fat, and stay fit with treadmill, HIIT, and functional training." },
  { title: "Personal Training", disc: "One-on-one coaching with certified trainers for personalized results." },
  { title: "Functional & Cross Training", disc: "Full-body workouts to improve balance, mobility, and athletic performance." },
  { title: "Fat Loss & Body Recomposition", disc: "Targeted programs for fat loss, toning, and healthy transformation." },
  { title: "Group Classes / Bootcamps", disc: "Motivating group sessions with fun, energy, and expert guidance." }
];

const plans = [
  {
    name: "Standard",
    price: 39,
    details: "Perfect for beginners starting their fitness journey.",
    includes: ["Gym floor access", "2 group classes/week", "Basic progress tracking"],
  },
  {
    name: "Ultimate",
    price: 59,
    details: "Best value plan with complete training access.",
    includes: ["All Standard features", "Unlimited group classes", "1 personal coaching session/week"],
  },
  {
    name: "Premium",
    price: 89,
    details: "Elite package with priority coaching and support.",
    includes: ["All Ultimate features", "Custom meal guidance", "Priority trainer support"],
  },
];

export default function Services({ onOpenPackageForm }) {
  return (
    <main className="w-full min-h-[110vh] md:min-h-[120vh] flex flex-col items-center justify-center bg-black px-3 py-14 md:py-20 md:px-8">
      <motion.h1 initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="text-[28px] md:text-5xl font-bold mb-10 md:mb-12 text-center text-white">Services We Provide</motion.h1>
      <motion.section initial={{ x: -60, y: 20, opacity: 0 }} whileInView={{ x: 0, y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-[20px] max-w-6xl w-full place-items-center">
        {services.map((service, index) => (
          <motion.div whileHover={{ x: 6, y: -6, opacity: 0.95 }} key={index} className="min-h-[140px] md:min-h-[160px] w-full max-w-[300px] md:max-w-[370px] flex flex-col justify-center items-center gap-2 md:gap-[10px] rounded-tl-[20px] rounded-br-[20px] bg-white p-4 cursor-pointer">
            <h2 className="text-[16px] md:text-[20px] font-bold text-red-500 text-center">{service.title}</h2>
            <p className="text-center text-red-900 text-[14px] md:text-[16px]">{service.disc}</p>
          </motion.div>
        ))}
      </motion.section>

      <motion.section
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-full max-w-6xl mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 place-items-center"
      >
        {plans.map((plan, index) => (
          <motion.article
            key={plan.name}
            whileHover={{ y: -8, opacity: 0.96 }}
            className={`group w-full max-w-[300px] md:max-w-[360px] min-h-[300px] rounded-tl-[24px] rounded-br-[24px] border p-5 flex flex-col justify-between cursor-pointer ${
              index === 1
                ? "bg-red-500 border-white text-white shadow-[0_0_25px_rgba(239,68,68,0.45)]"
                : "bg-white/5 border-red-400 text-white"
            }`}
          >
            <div className="flex justify-between items-center">
              <h3 className={`text-[22px] font-extrabold ${index === 1 ? "text-white" : "text-red-400"}`}>{plan.name}</h3>
              {index === 1 && <span className="text-[12px] font-bold bg-white text-red-500 px-2 py-1 rounded-[8px]">Top Pick</span>}
            </div>
            <p className={`text-[32px] font-black ${index === 1 ? "text-white" : "text-red-500"}`}>${plan.price}</p>
            <p className={`text-[14px] ${index === 1 ? "text-white/90" : "text-gray-300"}`}>{plan.details}</p>
            <ul className={`mt-2 max-h-0 opacity-0 overflow-hidden transition-all duration-300 group-hover:max-h-[180px] group-hover:opacity-100 ${index === 1 ? "text-white/95" : "text-red-100"}`}>
              {plan.includes.map((item) => (
                <li key={item} className="text-[13px] md:text-[14px] py-1 border-b border-white/20 last:border-b-0 flex items-center gap-2">
                  <span className="text-[18px] font-black leading-none">&bull;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </motion.section>

      <motion.button
        onClick={() => onOpenPackageForm("Ultimate")}
        whileHover={{ y: -6, opacity: 0.95 }}
        className="mt-10 h-[46px] w-full max-w-[220px] md:h-[50px] md:w-[220px] text-[18px] md:text-[20px] font-bold text-white rounded-[12px] bg-red-500 duration-200 cursor-pointer hover:bg-white hover:text-red-500"
      >
        Choose Plan
      </motion.button>
    </main>
  );
};

