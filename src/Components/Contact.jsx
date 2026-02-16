import React, { useState } from "react";
import { motion } from "framer-motion";

const API_BASE = "https://the-forge2-server.vercel.app";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const contactInfo = [
    { title: "Location", value: "Gujranwala, Punjab, Pakistan" },
    { title: "Phone", value: "+923277522098" },
    { title: "Email", value: "khizarusestate@gmail.com" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");
    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setLoading(false);
        setSuccess(true);
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setLoading(false);
        setError(data.message || "Request failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setLoading(false);
      setError("Server not reachable. Please try again.");
    }
  };

  return (
    <main className="min-h-screen w-full flex flex-col justify-center items-center bg-black px-3 py-14 md:px-6 relative">
      {loading && (
        <div className="absolute inset-0 z-[60] bg-black/50 backdrop-blur-[4px] flex justify-center items-center p-3">
          <div className="w-full max-w-[320px] rounded-[12px] bg-white text-red-500 font-bold text-center py-6 px-4">
            Please wait...
          </div>
        </div>
      )}
      {success && (
        <div className="absolute inset-0 z-[60] bg-black/50 backdrop-blur-[4px] flex justify-center items-center p-3">
          <div className="w-full max-w-[340px] rounded-[12px] bg-white text-center py-6 px-4 flex flex-col gap-4">
            <p className="text-green-600 font-bold text-[18px]">Your request was sent.</p>
            <button
              onClick={() => setSuccess(false)}
              className="h-[42px] rounded-[10px] bg-red-500 text-white font-bold hover:bg-red-600 cursor-pointer"
            >
              OK
            </button>
          </div>
        </div>
      )}
      {error && (
        <div className="absolute inset-0 z-[60] bg-black/50 backdrop-blur-[4px] flex justify-center items-center p-3">
          <div className="w-full max-w-[340px] rounded-[12px] bg-white text-center py-6 px-4 flex flex-col gap-4">
            <p className="text-red-500 font-bold text-[18px]">{error}</p>
            <button
              onClick={() => setError("")}
              className="h-[42px] rounded-[10px] bg-red-500 text-white font-bold hover:bg-red-600 cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <motion.header initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="w-full flex justify-center items-center gap-2 md:gap-[15px]">
        <h1 className="text-[20px] md:text-[25px] text-red-500 font-bold">Get in Touch</h1>
        <h2 className="text-[30px] md:text-[40px] text-white font-extrabold">WITH US</h2>
      </motion.header>

      <motion.form initial={{ x: -60, y: 20, opacity: 0 }} whileInView={{ x: 0, y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="w-full flex flex-col justify-center items-center gap-4 md:gap-[20px] mt-8" onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          className="h-[45px] w-full max-w-[280px] md:max-w-[360px] text-center border-b border-b-red-500 text-white focus:outline-none"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          className="h-[45px] w-full max-w-[280px] md:max-w-[360px] text-center border-b border-b-red-500 text-white focus:outline-none"
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your Message"
          className="h-[180px] md:h-[200px] w-full md:w-[60%] text-center rounded-[15px] border border-white text-white p-3"
        />

        <motion.button
          whileHover={{ y: -6, opacity: 0.95 }}
          type="submit"
          className="h-[46px] w-full max-w-[210px] md:max-w-[240px] md:h-[50px] md:w-[200px] text-[18px] md:text-[20px] font-bold text-white rounded-[10px] bg-red-500 duration-200 cursor-pointer hover:bg-white hover:text-red-500"
        >
          Send Message
        </motion.button>
      </motion.form>

      <motion.section initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="w-full mt-8 grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-8">
        {contactInfo.map((item, index) => (
          <motion.article
            whileHover={{ x: 6, y: -6, opacity: 0.95 }}
            key={index}
            className="h-[64px] md:h-[72px] w-full max-w-[280px] md:max-w-[360px] mx-auto flex flex-col justify-center items-center bg-white rounded-tl-[20px] rounded-br-[20px] cursor-pointer"
          >
            <p className="font-bold text-[17px] md:text-[18px] text-red-500">{item.title}</p>
            <p className="text-[14px] md:text-[16px] text-red-900">{item.value}</p>
          </motion.article>
        ))}
      </motion.section>
    </main>
  );
}
