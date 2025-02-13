import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent!");
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>Name:</label>
        <input type="text" name="name" onChange={handleChange} required />
        
        <label>Email:</label>
        <input type="email" name="email" onChange={handleChange} required />
        
        <label>Message:</label>
        <textarea name="message" onChange={handleChange} required />

        <button type="submit">Send</button>
      </form>
    </section>
  );
}
