import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const API_BASE = "https://the-forge2-server.vercel.app";

export default function Packages({ isOpen, selectedPackage, onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [plan, setPlan] = useState("Standard");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isOpen) return;
    if (selectedPackage) setPlan(selectedPackage);
    setLoading(false);
    setSuccess(false);
    setError("");
  }, [isOpen, selectedPackage]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");
    try {
      const res = await fetch(`${API_BASE}/api/package`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, plan }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.message || "Request failed");
      }
      setLoading(false);
      setSuccess(true);
      setName("");
      setEmail("");
      setPlan(selectedPackage || "Standard");
    } catch (err) {
      setLoading(false);
      setError(err.message || "Request failed. Please try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 z-50 flex justify-center items-center bg-black/70 p-3">
      {loading && (
        <div className="absolute inset-0 z-[70] bg-black/50 backdrop-blur-[4px] flex justify-center items-center p-3">
          <div className="w-full max-w-[320px] rounded-[12px] bg-white text-red-500 font-bold text-center py-6 px-4">
            Sending request...
          </div>
        </div>
      )}
      {success && (
        <div className="absolute inset-0 z-[70] bg-black/50 backdrop-blur-[4px] flex justify-center items-center p-3">
          <div className="w-full max-w-[340px] rounded-[12px] bg-white text-center py-6 px-4 flex flex-col gap-4">
            <p className="text-green-600 font-bold text-[18px]">Request submitted successfully.</p>
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
        <div className="absolute inset-0 z-[70] bg-black/50 backdrop-blur-[4px] flex justify-center items-center p-3">
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

      <motion.form
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        onSubmit={handleSubmit}
        className="w-full max-w-[520px] rounded-tl-[24px] rounded-br-[24px] border border-red-500 bg-[linear-gradient(155deg,#0a0a0a_0%,#1a1a1a_55%,#2a0d0d_100%)] p-5 md:p-7 flex flex-col gap-4 shadow-[0_0_30px_rgba(239,68,68,0.35)]"
      >
        <div className="w-full flex justify-between items-start gap-4">
          <div>
            <h3 className="text-[24px] md:text-[30px] text-white font-extrabold">Join The Forge</h3>
            <p className="text-[13px] md:text-[14px] text-red-200">Select your package and reserve your slot.</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="h-[36px] w-[36px] rounded-[8px] bg-red-500 text-white font-bold hover:bg-white hover:text-red-500 duration-200 cursor-pointer"
          >
            X
          </button>
        </div>

        <label className="text-[14px] text-red-200 font-semibold">Name</label>
        <input
          required
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="h-[44px] w-full rounded-[10px] border border-red-400 bg-black/40 px-3 text-white focus:outline-none focus:border-white"
        />

        <label className="text-[14px] text-red-200 font-semibold">Email</label>
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="h-[44px] w-full rounded-[10px] border border-red-400 bg-black/40 px-3 text-white focus:outline-none focus:border-white"
        />

        <label className="text-[14px] text-red-200 font-semibold">Package</label>
        <select
          value={plan}
          onChange={(e) => setPlan(e.target.value)}
          className="h-[44px] w-full rounded-[10px] border border-red-400 bg-black/40 px-3 text-white focus:outline-none focus:border-white"
        >
          <option value="Standard">Standard - $39</option>
          <option value="Ultimate">Ultimate - $59</option>
          <option value="Premium">Premium - $89</option>
          <option value="Demo">Demo Session - $0</option>
        </select>

        <motion.button
          whileHover={{ y: -6, opacity: 0.95 }}
          type="submit"
          className="mt-2 h-[46px] w-full text-[17px] md:text-[19px] font-bold text-white rounded-[10px] bg-red-500 hover:bg-white hover:text-red-500 duration-200 cursor-pointer"
        >
          Submit Request
        </motion.button>
      </motion.form>
    </div>
  );
}
