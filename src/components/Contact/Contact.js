import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import insta from '../../assests/insta.png';
import linkedin from '../../assests/linkedin.png';
import glogo from '../../assests/glogo.png';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_98zpbjs', 'template_4ws0pnc', form.current, 'xPfXFvWfR0IQJVIu7')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email sent!");
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
      <form className="contactform" ref={form} onSubmit={(e) => validateForm() && sendEmail(e)}>
        <input type="text" className="name" name='your_name' placeholder='Your Name' />
        <input type="email" className="email" name='your_email' placeholder='Your Email'/>
        <textarea className='msg' name="message" cols="30" rows="5" placeholder='Your Message'></textarea>
        <button className="submitbtn" type='submit'>Submit</button>
        <div className="links">
          <a href="https://www.instagram.com" target="_blank"><img src={insta} alt="Instagram" className='link'/></a>
          <a href="https://github.com/rishikeshpawar1312"  target="_blank"><img src={glogo}  alt="GitHub" className='link'/></a>
          <a href="https://www.linkedin.com/in/rishikesh-pawar-819596226/"  target="_blank"><img src={linkedin} alt="Linkedin" className='link'/></a>
        </div>
      </form>
    </section>
  );
}

export default Contact;
