import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Github } from "lucide-react";
import "./ContactView.css";
//@ts-ignore
import { sendEmail } from "../api/email.api.js";

const PinterestIcon = ({
  size = 24,
  color = "currentColor",
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    stroke="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.08 3.16 9.42 7.63 11.16-.1-.95-.2-2.41.04-3.45.22-.93 1.4-5.96 1.4-5.96s-.36-.72-.36-1.78c0-1.67.97-2.92 2.18-2.92 1.03 0 1.53.77 1.53 1.7 0 1.04-.66 2.59-1 4.03-.28 1.2.6 2.18 1.78 2.18 2.14 0 3.78-2.26 3.78-5.5 0-2.88-2.07-4.89-5.02-4.89-3.42 0-5.43 2.56-5.43 5.21 0 1.04.4 2.15.9 2.76.1.12.11.23.08.35-.09.38-.3 1.22-.34 1.4-.05.17-.18.21-.36.13-1.34-.62-2.18-2.58-2.18-4.16 0-3.38 2.46-6.49 7.08-6.49 3.72 0 6.62 2.65 6.62 6.18 0 3.7-2.33 6.68-5.56 6.68-1.09 0-2.11-.57-2.46-1.23l-.68 2.57c-.24.93-.89 2.1-1.33 2.82A12.04 12.04 0 0 0 12 24c6.63 0 12-5.37 12-12S18.63 0 12 0z" />
  </svg>
);

const ContactView: React.FC = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Phone:", phone);
    console.log("Email:", email);
    console.log("Message:", message);
    setName("");
    setPhone("");
    setEmail("");
    setMessage("");

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const payload = {
        name,
        phone,
        email,
        message,
      };

      const response = await sendEmail(payload);

      setSuccess(response.message || "Message sent successfully!");
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
    } catch (error: any) {
      setError(error.response?.data?.message || "Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="contact-container"
    >
      <div className="contact-watermark">CONTACT</div>

      <div className="contact-grid">
        {/* Left Side */}
        <div className="contact-info-side">
          <h2 className="contact-heading">REACH OUT</h2>
          <p className="contact-desc">
            I’m always open to connecting, whether you have a question, a
            project in mind, or just want to start a conversation. Feel free to
            share a bit about what you’re looking for, and I’ll do my best to
            respond as promptly as possible.
            <br />
            <br />I appreciate your interest and look forward to hearing from
            you!
          </p>

          <div className="contact-details">
            <div className="contact-detail-item">
              <div className="contact-detail-icon">
                <MapPin size={20} />
              </div>
              <div className="contact-detail-text">
                <h3>Address</h3>
                <p>Nairobi</p>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="contact-detail-icon">
                <Phone size={20} />
              </div>
              <div className="contact-detail-text">
                <h3>Phone</h3>
                <p>+254 757317812</p>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="contact-detail-icon">
                <Mail size={20} />
              </div>
              <div className="contact-detail-text">
                <h3>E-mail</h3>
                <p>weswaweru06@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="contact-form-side">
          <h2 className="contact-heading">CONTACT FORM</h2>
          <form onSubmit={submitForm} className="modern-form">
            <div className="input-group">
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <input
                type="tel"
                placeholder="Your phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="input-group">
              <input
                type="email"
                placeholder="Your e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <textarea
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={1}
              ></textarea>
            </div>

            <button type="submit" className="send-btn" disabled={loading}>
              {loading ? "Sending..." : "SEND MESSAGE"}
            </button>
            {success && <p className="success-message">{success}</p>}

            {error && <p className="error-message">{error}</p>}
          </form>
        </div>
      </div>

      <div className="contact-footer">
        <div className="social-links">
          <a
            href="https://github.com/Sonderssss"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://pin.it/179bbNvWn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pinterest"
          >
            <PinterestIcon size={24} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactView;
