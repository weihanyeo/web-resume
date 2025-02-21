import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const scaleVariants = {
  whileInView: {
    scale: [0.8, 1],
    opacity: [0, 1],
    transition: {
      duration: 0.5,
      ease: 'easeInOut'
    }
  }
};

const Contact = () => {
  useEffect(() => {
    emailjs.init("REACT_APP_EMAILJS_API_KEY");
  }, []);
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    console.log("Submitting form...");
    console.log("Form data:", form);

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
      to_name: "Wei Han",
      to_email: "yeoweihan@u.nus.edu"
    };

    console.log("Template params:", templateParams);
    console.log("Sending email with EmailJS...");

    emailjs.send(
      process.env.REACT_APP_SERVICE_LINK,
      process.env.REACT_APP_TEMPLATE_LINK,
      templateParams,
      "Ot57nFvV3a4tLJFzZ"
    )
      .then((result) => {
        console.log("EmailJS Success Response:", result);
        setLoading(false);
        alert('Thank you. I will get back to you as soon as possible.');
        setForm({
          name: '',
          email: '',
          message: '',
        });
      })
      .catch((error) => {
        console.log("EmailJS Error:", error);
        setLoading(false);
        alert('Something went wrong. Please try again!');
      });
  };

  return (
    <div id="Contact">
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        transition={{ duration: 0.5, type: 'tween' }}
      >
        <div className="email-container">
          <div className="input-box">
            <p className="sectionSubText">Get in touch</p>
            <h3 className="sectionHeadText">Contact.</h3>
            <form ref={formRef} onSubmit={handleSubmit} className="forms-container">
              <label className="flex-column">
                <span className="inner-text">Your Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your name?"
                  className="custom-input"
                  required
                />
              </label>

              <label className="flex-column">
                <span className="inner-text">Your email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your email?"
                  className="custom-input"
                  required
                />
              </label>

              <label className="flex-column">
                <span className="inner-text">Your message</span>
                <textarea
                  rows="7"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What do you want to say?"
                  className="custom-input"
                  required
                />
              </label>

              <button
                type="submit"
                className="submit-button"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send'}
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;