import React from 'react';
import HeroSEction from './Home/HeroSEction';
import AboutMe from './Home/AboutMe';
import MySkills from './Home/MySkills';
import MyPortfolio from './Home/MyPortfolio';
import Contact from './Home/Contact';
import MyFooter from './Home/Footer';

 function Home(){
    return (
    <>

        <HeroSEction/>
      
       <MySkills/>
       <AboutMe/>
       <MyPortfolio/>
       <Contact/>
       <MyFooter/>
       
   
    
    
       
    </>
    )
   
 }
 export default Home;