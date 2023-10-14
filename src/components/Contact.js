import { useState, useRef } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"

const slideIn = (direction, type, delay, duration) => {
  return {
      hidden: {
          x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
          y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
      },
      show: {
          x: 0,
          y: 0,
          transition: {
              type: type,
              delay: delay,
              duration: duration,
              ease: "easeOut",
          },
      },
  };
};

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
    
      // Sending email to recipient
      emailjs.send(
        process.env.REACT_APP_SERVICE_LINK,
        process.env.REACT_APP_TEMPLATE_LINK,
        {
          from_name: form.name,
          to_name: 'Wei Han',
          from_email: form.email,
          to_email: 'yeowh@hotmail.sg',
          message: form.message,
        },
        process.env.REACT_APP_EMAILJS_API_KEY
      )
      .then(() => {
        // Sending copy of email to the user
        emailjs.send(
          process.env.REACT_APP_SERVICE_LINK,
          process.env.REACT_APP_TEMPLATE_LINK, 
          {
            from_name: 'Yeo Wei Han', // Your name or your company's name
            to_name: form.name,
            from_email: 'form.email', // Your email address hmm
            to_email: form.email,
            message: 'Copy of the message you sent: ' + form.message,
          },
          process.env.REACT_APP_EMAILJS_API_KEY // Use the template key for the new template
        )
        .then(() => {
          setLoading(false);
          alert('Thank you. I will get back to you as soon as possible.');

          setForm({
            name: '',
            email: '',
            message: '',
          });
        }, (error) => {
          setLoading(false);
          console.log(error);
          alert('Something went wrong sending a copy to your email. Please try again!');
        });
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        alert('Something went wrong. Please try again!');
      });
  }

  return (
    <motion.div className="email-container">
      <motion.div variants={slideIn('left', "tween", 0.2, 1)}
      className="input-box">
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
            placeholder="What's do you want to say?" 
            className="custom-input"/>
          </label>

          <button type="submit"
          className="submit-button">
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

    </motion.div>
  )
}

export default Contact;