import React from "react";

const Contact = () => {
  return (
    <div className="page contact-page">
      <h1>Contact Us</h1>
      <p>Reach out for custom orders, collaborations, or inquiries.</p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
