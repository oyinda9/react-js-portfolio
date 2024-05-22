function Contactme(){
return(
 <section id="Contact" className="contact--section">
    <div>
    <p className="sub--title">Get In Touch</p>
    <h2>Contact Me</h2>
    <p className="text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, voluptatum beatae. Optio deserunt assumenda nulla illo quam perspiciatis nihil velit veritati
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
            <span className="text-md">Choose a topic</span>
            <select name="" id="choose-topic" className="contact--input text-md">
                <option value="">Select one</option>
                <option value="">Item 1</option>
                <option value="">Item 2</option>
                <option value="">Item 3</option>
            </select>


            <label htmlFor="message" className="contact--label">
            <span className="text-md">Message</span>
            <textarea
             className="contact--input text-md" 
             name="message"
              id="mesaage"
              rows="8"

              
              placeholder="type your message "
        
            />
        </label>
        <label htmlFor="checkbox">
            <input type="checkbox"id="checkbox" className="checkbox--label"/>
            <span className="text-sm"> I accept your terms</span>
        </label>
        <div><button className="btn btn-primary contact--form--btn">Submit</button></div>
           
        </label>


    </div>

   </form>

 </section>
 )


}

export default Contactme;