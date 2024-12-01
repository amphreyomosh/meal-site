import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Contact.css'; // Import the CSS file

function Contact() {
  const [state, handleSubmit] = useForm("mwpkwdqg");
  if (state.succeeded) {
    return <p className="success-message">Thank you, we will get back to you! </p>;
  }
  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <label htmlFor="email" className="form-label">
        Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
        className="form-input"
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
        className="validation-error"
      />
      <label htmlFor="message" className="form-label">
        Your Message
      </label>
      <textarea
        id="message"
        name="message"
        className="form-textarea"
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
        className="validation-error"
      />
      <button
        type="submit"
        disabled={state.submitting}
        className="form-button"
      >
        Submit
      </button>
    </form>
  );
}
export default Contact;
