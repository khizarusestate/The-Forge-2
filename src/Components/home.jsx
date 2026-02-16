import {motion} from 'framer-motion';
import Packages from "./Packages";

export default function Home({ isPackageFormOpen, selectedPackage, onOpenPackageForm, onClosePackageForm }){
   const facilities=[{title:"Free Fitness Assessment",disc:"A complete body and fitness evaluation to set clear goals and track real progress."},{title:"Free Trial Training",disc:"Train once with our expert coach and experience our gym, equipment, and energy."},{title:"Free Workout Plan",disc:"A customized workout routine designed to match your body type and fitness goals."}];

    return(
        <main className="min-h-screen w-full flex flex-col justify-center bg-[url('/assets/HomeBG.png')] bg-cover bg-center relative px-3 py-30 md:h-screen md:min-h-0 md:px-8">
          <Packages isOpen={isPackageFormOpen} selectedPackage={selectedPackage} onClose={onClosePackageForm} />

          <section className="w-full flex flex-col gap-4 justify-center items-center relative z-10 md:gap-[30px] md:min-h-[65vh]" >
              <motion.header initial={{clipPath:"inset(0 100% 0 0)",y:20,opacity:0}} whileInView={{clipPath:"inset(0 0 0 0)",y:0,opacity:1}} viewport={{ once: true }} transition={{duration:1}} className="text-center text-white">
                 <h1 className="text-[34px] leading-[1.1] font-extrabold md:text-[50px]">Build Strength. Shape Confidence.</h1>
                 <h2 className="mt-2 text-[14px] font-bold md:text-[18px]">Train smarter. Get stronger. Become your best self with world-class equipment and expert coaching.</h2>
              </motion.header>
              <motion.article initial={{y:20,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{ once: true }} transition={{duration:1}} className="flex flex-col w-full max-w-[280px] justify-center items-center gap-3 z-10 md:max-w-none md:flex-row md:gap-[20px]">
                      <button onClick={() => onOpenPackageForm("Standard")} className="h-[44px] w-full md:h-[50px] md:w-[200px] text-[15px] md:text-[20px] text-white font-bold rounded-[10px] bg-red-500 duration-300 hover:bg-white hover:text-red-500 cursor-pointer">Join Now</button>
                      <button onClick={() => onOpenPackageForm("Demo")} className="h-[44px] w-full md:h-[50px] md:w-[200px] text-[15px] md:text-[20px] text-red-500 font-bold rounded-[10px] bg-white duration-300 hover:bg-red-500 hover:text-white cursor-pointer">Book a Free Trial</button>
              </motion.article>
          </section>
          <motion.section initial={{x:-60,y:20,opacity:0}} whileInView={{x:0,y:0,opacity:1}} viewport={{ once: true }} transition={{duration:1}} className="w-full mt-8 grid grid-cols-1 gap-3 z-10 md:mt-8 md:grid-cols-3 md:gap-8">
            {
                facilities.map((items)=>(
                    <article key={items.title} className="min-h-[115px] w-full flex flex-col justify-center items-center text-center text-white gap-2 rounded-[10px] bg-black/30 backdrop-blur-[2px] p-3 md:min-h-[150px]">
                        <h1 className="text-[16px] font-bold md:text-[20px]">{items.title}</h1>
                        <p className="text-[12px] md:text-[13px]">{items.disc}</p>
                    </article>
                ))
            }
          </motion.section>
          <div className="h-full w-full absolute inset-0 bg-[rgba(0,0,0,0.6)] z-0"></div>
        </main>
    )
}
