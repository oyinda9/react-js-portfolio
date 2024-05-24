import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function HeroSEction(){
    return(
        <section id="heroSection" className="herosection">
            <div className="HeroSectionConentbox">
                <div className="heroSectionContent"> 
                <p className="sectionTitle"> Hey i'm Precious </p>
                <h1 className="heroSectionTitle">
                    <span className="heroSectionTitleColour"> Full Stack </span>{""} <br />Developer
                </h1>
                <p className="heroSectionDescription">
                Hey there! I'm Sholanke Precious, a passionate software developer ready to bring your digital dreams to life! With a perfect blend of professionalism and approachability, I'm here to craft seamless, innovative solutions that elevate your project to new heights.

            Whether it's building sleek web applications, robust mobile apps, or optimizing your backend infrastructure, I thrive on turning complex challenges into elegant, user-friendly experiences.
                    <br />Feel free to reach out, and let's embark on an exciting journey of code and creativity.
                   
                </p>
                </div>
                <a href="mailto:sholankeprecious3@gmail.com">
                <button className="get-in-touch ">Get in touch  <FontAwesomeIcon icon={faArrowRight} /></button></a>
                
                 </div>
                 <div className="heroSectionImg">
                    <img src="./img/img6.jpg"  alt="herosection" />
                 </div>

        </section>
    ) ;

}

export default HeroSEction;