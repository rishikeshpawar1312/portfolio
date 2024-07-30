import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import './Contact.css'
import insta from '../../assests/insta.png'
import  yt from '../../assests/yt.png'
import  glogo from '../../assests/glogo.png'
 

function Contact() {
  const form =  useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_98zpbjs', 'template_4ws0pnc', form.current, 'xPfXFvWfR0IQJVIu7')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email sent !" );
           
      }, (error) => {
          console.log(error.text);
      });
  };

  const validateForm = () => {
    const nameInput = form.current.querySelector('.name');
    const emailInput = form.current.querySelector('.email');
    const messageInput = form.current.querySelector('.msg');

    if (!nameInput.value || !emailInput.value || !messageInput.value) {
      alert('Please fill in all fields.');
      
      return false;
    }

    return true;
  };
  return (
    <section id="contact"> 
    <h1 className='contactpagetitle'>Contact</h1>
    <span className='contactdesc'>Fill out the form</span>
     <form action="" className="contactform" ref={form} onSubmit={(e) => validateForm() && sendEmail(e)}>
         <input type="text" className="name" name='your_name' placeholder='your name' />
         <input type="email" className="email" name='your_email' placeholder='your email'/>
         <textarea  className='msg' name="message" id="" cols="30" rows="10"  placeholder='your message'></textarea>
        <button className="submitbtn" type='submit' value='Send'>Submit</button>
        <div className="links">
          <img src={insta} alt="instagram" className='link'/>
          <img src={glogo} alt="github"  className='link'/>
          <img src={yt} alt="youtube"  className='link'/>
         
        </div>
     </form>
  </section>
  )
}

export default Contact