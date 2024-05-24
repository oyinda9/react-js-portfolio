function Contactme(){
return(
 <section id="Contact" className="contact--section">
 
    <div>
    <p className="sub--title">Get In Touch</p>
    <h2 className="contact--me">Contact Me</h2>
    <p className="text">

            Got a project in mind, a bug that needs squashing, or just want to chat about the latest in tech? I'm here to help! Whether you need expert advice, a collaborative partner, or just want to share ideas, don't hesitate to reach out.

            Your projects and ideas are important to me. Let's build something amazing together!
    </p>
    </div>
   <form className="contact--form--container">
    <div className="container">
        <label htmlFor="first-name">
            <span className="text-md">First Name</span>
            <input type="text"
             className="contact--input text-md" 
             name="first-name"
              id="first-name"
               required/>
        </label>

        <label htmlFor="last-name">
            <span className="text-md">last Name</span>
            <input type="text"
             className="contact--input text-md" 
             name="last-name"
              id="last-name"
               required/>
        </label>

        <label htmlFor="phone-number">
            <span className="text-md">phone number</span>
            <input type="text"
             className="contact--input text-md" 
             name="phone-number"
              id="phone-number"
               required/>
        </label>

        <label htmlFor="email">
            <span className="text-md">email</span>
            <input type="text"
             className="contact--input text-md" 
             name="email"
              id="email"
               required/>
        </label>

        <label htmlFor="choosetopic" className="contact--label">

            <label htmlFor="message" className="contact--label">
            <span className="text-md">Message</span>
            <textarea
             className="contact--input--textarea text-md" 
             name="message"
              id="mesaage"
              placeholder="type your message "
        
            />
        </label>
    
        <div><button className="contact--form--btn">Submit</button></div>
           
        </label>


    </div>

   </form>

 </section>
 )


}

export default Contactme;