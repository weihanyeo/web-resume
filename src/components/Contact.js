import React, { useState, useRef } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"

const scaleVariants = {
  whileInView: {
      scale: [0.8, 1],
      opacity: [0, 1],
      transition: {
          duration: 0.5, 
          ease: 'easeInOut'
      }
  }
}

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      process.env.REACT_APP_SERVICE_LINK,
      process.env.REACT_APP_TEMPLATE_LINK,
      {
        from_name: form.name,
        to_name: 'Wei Han',
        from_email: form.email,
        to_email: 'yeoweihan@u.nus.edu',
        message: form.message,
      },
      process.env.REACT_APP_EMAILJS_API_KEY 
      )
      .then(() => {
        setLoading(false);
        alert('Thank you. I will get back to you as soon as possible.');

        setForm({
          name: '',
          email: '',
          message: '',
        })
      }, (error) => {
        setLoading(false)
        console.log(error);
        alert('Something went wrong. Please try again!')
      })
  }


  return (
    <>
    <motion.div variant={scaleVariants}
                whileInView={scaleVariants.whileInView}
                transition={{ duration: 0.5, type: 'tween' }}
                        > 
    <div id="Contact" className="email-container" >
      <div className="input-box">
        <p className="sectionSubText">Get in touch</p>
        <h3 className="sectionHeadText">Contact.</h3>
        <form ref={formRef} onSubmit={handleSubmit} className="forms-container">
          <label className="flex-column">
            <span className="inner-text">
              Your Name
            </span>
            <input type="text" 
            name="name" 
            value={form.name}
            onChange={handleChange} 
            placeholder="What's your name?" 
            className="custom-input"/>
          </label>
          
          <label className="flex-column">
            <span className="inner-text">
              Your email
            </span>
            <input type="email" 
            name="email" 
            value={form.email}
            onChange={handleChange} 
            placeholder="What's your email?" 
            className="custom-input"/>
          </label>

          <label className="flex-column">
            <span className="inner-text">
              Your message
            </span>
            <textarea
            rows="7"
            name="message" 
            value={form.message}
            onChange={handleChange} 
            placeholder="What do you want to say?" 
            className="custom-input"/>
          </label>

          <button type="submit"
          className="submit-button">
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>
    </div>
    </motion.div>
    </>
  )
}

export default Contact;