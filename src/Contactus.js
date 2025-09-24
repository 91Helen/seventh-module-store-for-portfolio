import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import logo from "./logo.png";

function Contactus() {
  const [state, handleSubmit] = useForm("xblobapj"); 

  if (state.succeeded) {
    return (
      <div className="contact-us">
        <h2>Thank you!</h2>
        <p>Your message has been sent successfully.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="contact-us">
        <h2>Contact Us</h2>
        <p>
          We’d love to hear from you! Whether you have a question about our products, 
          delivery, or partnership — feel free to reach out.
        </p>

        <div className="contact-info">
          <p><strong>Email:</strong> support@feelwear.com</p>
          <p><strong>Phone:</strong> +1 (555) 123-4567</p>
          <p><strong>Address:</strong> 123 Fashion Street, New York, NY, USA</p>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <ValidationError prefix="Name" field="name" errors={state.errors} />

          <input type="email" name="email" placeholder="Your Email" required />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <textarea name="message" placeholder="Your Message" rows="5" required />
          <ValidationError prefix="Message" field="message" errors={state.errors} />

          <button type="submit" className="change" disabled={state.submitting}>
            Send Message
          </button>
        </form>
      </div>

      <footer className="clothes-footer">
        <img src={logo} alt="Logo" className="clothes-logo" />
        <p>© 2025 FEEL & WEAR. Online Fashion Store. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Contactus;
