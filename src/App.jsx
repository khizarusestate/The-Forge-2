import { useState } from "react";
import About from './Components/About'
import ContactUs from './Components/Contact'
import Footer from './Components/footer'
import Header from './Components/header'
import Home from './Components/home'
import Services from './Components/Services'
import { Element, scroller } from 'react-scroll'
export default function App(){
  const [isPackageFormOpen, setPackageFormOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("");

  const openPackageForm = (plan = "") => {
    setSelectedPackage(plan);
    setPackageFormOpen(true);
    scroller.scrollTo("home", { smooth: true, duration: 600, offset: 0 });
  };

  const closePackageForm = () => setPackageFormOpen(false);

  return(<>
    <Header/>
    <Element name="home">
      <Home
        isPackageFormOpen={isPackageFormOpen}
        selectedPackage={selectedPackage}
        onOpenPackageForm={openPackageForm}
        onClosePackageForm={closePackageForm}
      />
    </Element>
    <Element name="about">
      <About/>
    </Element>
    <Element name="services">
      <Services onOpenPackageForm={openPackageForm}/>
    </Element>
    <Element name="contact">
      <ContactUs/>
    </Element>
    <Footer/>
    </>
  )
}
