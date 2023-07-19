import styles from "../style";
import { Billing, Business, CardDeal, Clients, CTA, Stats, Testimonials, Hero } from "../Components";
import Loan from "./loan";
import Calculator from "../Calculator";
import '../indexxx.css';
import { Link } from "react-router-dom";

function Home () {
  const cars = [
    require("../images/tata.png"),
    // require("../images/homecred.png"),
    require("../images/faircent2.png"),
    require("../images/iifl1.png"),
    // require("../images/moneywide2.png"),
    // require("../images/l&t.jpg"),
    // require("../images/kred.jpeg"),
  
    
  ];
return(
  <div className="root">
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
      {/* <Header /> */}
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidthH}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Loan /> <br /><br />
        <br /><br />        <Calculator />
        <br /><br /> 
        <Billing />
        <CardDeal />
        <Business />
        <CTA />
        
        <Testimonials />
        <section className="part" >
     
     <div >
       <h1 className="partners">OUR PARTNERS <p className="font-poppins  text-[15px] leading-[32px] text-white">(Coming soon)</p></h1>
      
     </div>
    
     
     
     <div className=" flex items-center flex-col text-center">
     <div className="slider">
       <div className="slide-track">
         {cars.map((car, index) => {
           return (
             <div className="slide" key={index}>
             <Link className="car-image">  <img src={car} alt="imageforslider" /></Link>
             </div>
           );
         })}
         {cars.map((car, index) => {
           return (
             <div className="slide" key={index}>
               <Link className="car-image">
               <img src={car} alt="imageforslider"  /></Link>
             </div>
           );
         })}
       </div>
       
     </div>
    
   </div>
 
   </section>
        {/* <Footer /> */}
      </div>
    </div>
  </div>
  </div>)
};

export default Home;
