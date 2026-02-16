import { motion } from "framer-motion";

export default function About(){
   const achievements=["10,000+ Members Transformed","Certified Expert Trainers","State-of-the-Art Equipment"];
    return(
       <main className="min-h-screen w-full flex flex-col justify-center items-center bg-black px-3 py-14 md:px-8">
          <motion.header initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="w-full flex justify-center items-center text-white gap-2 md:gap-[15px]">
             <h1 className="text-[20px] font-bold text-red-500 md:text-[25px]">Learn more</h1>
             <h2 className="text-[30px] font-extrabold md:text-[40px]">ABOUT US</h2>
          </motion.header> 
          <motion.section initial={{ x: -60, y: 20, opacity: 0 }} whileInView={{ x: 0, y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="w-full mt-10 flex flex-col-reverse justify-center gap-8 items-center md:mt-12 md:flex-row md:gap-[80px]">
             <motion.p whileHover={{ y: -6, opacity: 0.95 }} className="w-full md:w-[55%] text-center text-[15px] md:text-[18px] text-white p-4 md:p-[20px] rounded-tl-[30px] rounded-br-[30px] border border-t-red-500 border-r-red-500 cursor-pointer">At THE FORGE, we believe fitness is more than just working out it's a lifestyle. Our mission is to empower you to achieve your goals with personalized training, modern equipment, and a supportive environment. Whether you're a beginner or an experienced athlete, we provide the guidance, motivation, and tools you need to transform your body and elevate your confidence. Join us and start your fitness journey today!</motion.p>
             <motion.img whileHover={{ x: 6, y: -6, opacity: 0.95 }} src="./assets/AboutBg.png" className="w-full max-w-[300px] h-[190px] object-cover rounded-tl-[30px] rounded-br-[30px] border border-t-red-500 border-l-red-500 border-b-white border-r-white md:h-[260px] md:max-w-[430px] cursor-pointer"/>
          </motion.section>
          <motion.section initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="w-full mt-10 grid grid-cols-1 gap-4 md:mt-12 md:grid-cols-3 md:gap-6">
             {
             achievements.map((items)=>(
                <motion.article whileHover={{ x: 6, y: -6, opacity: 0.95 }} key={items} className="h-[56px] w-full max-w-[290px] md:h-[62px] md:max-w-none md:w-[330px] mx-auto flex justify-center items-center bg-white rounded-tl-[20px] rounded-br-[20px] px-3 cursor-pointer">
                    <p className="text-[16px] md:text-[20px] text-red-500 font-bold text-center">{items}</p>
                </motion.article>
             ))
             }
          </motion.section>
          <motion.button whileHover={{ y: -6, opacity: 0.95 }} className="mt-10 h-[46px] w-full max-w-[220px] md:h-[50px] md:w-[200px] text-[18px] md:text-[20px] font-bold text-white rounded-[20px] bg-red-500 duration-200 cursor-pointer hover:bg-[rgb(220,220,220)] hover:text-red-500">Join us Today!</motion.button>
       </main>
    )
}
