import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faGithub,faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function MyFooter(){
    return(
        <footer>
            <div className="footer-content">
                <h3>SHOLANKE PRECIOUS</h3>
                <p>Once again i am  Sholanke Precious, a passionate software developer ready to bring your digital dreams to life!💡<br /> With a perfect blend of professionalism and approachability, I'm here to craft seamless, innovative solutions that elevate your project to new heights. <br />

Whether it's building sleek web applications, robust mobile apps, or optimizing your backend infrastructure, I thrive on turning complex challenges into elegant, user-friendly experiences.</p>
            </div>
          <div className="socials">
         <li><a href="https://api.whatsapp.com/send?phone=2348132828531
"> <FontAwesomeIcon icon={faWhatsapp} /></a></li>
         <li><a href="https://github.com/oyinda9"> <FontAwesomeIcon icon={faGithub} /></a></li>
         <li><a href="https://www.linkedin.com/in/precious-sholanke-5a6113232/"> <FontAwesomeIcon icon={faLinkedin} /></a></li>
         {/* <li><a href="mailto:sholankeprecious3@gmail.com"> <FontAwesomeIcon icon={faEnvelope} /></a></li> */}
        <li><a href="mailto:sholankeprecious3@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a></li> 
        
     
          </div>
          <div className="copyright"><p>sholankeprecious@2024</p></div>
         
        
        </footer>

       
    
    )
   

}

export default MyFooter;