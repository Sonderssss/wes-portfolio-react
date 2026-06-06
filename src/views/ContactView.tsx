import React, { useReducer } from "react";
import { m } from "motion/react";
import { Mail, Phone, MapPin } from "lucide-react";
import "./ContactView.css";
//@ts-ignore
import { sendEmail } from "../api/email.api.js";


interface ContactState {
  name: string;
  phone: string;
  email: string;
  message: string;
  loading: boolean;
  success: string;
  error: string;
}

type ContactAction =
  | { type: "SET_FIELD"; field: "name" | "phone" | "email" | "message"; value: string }
  | { type: "SUBMIT_START" }
  | { type: "SUBMIT_SUCCESS"; message: string }
  | { type: "SUBMIT_ERROR"; error: string };

const initialState: ContactState = {
  name: "",
  phone: "",
  email: "",
  message: "",
  loading: false,
  success: "",
  error: "",
};

function contactReducer(state: ContactState, action: ContactAction): ContactState {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "SUBMIT_START":
      return { ...state, loading: true, success: "", error: "" };
    case "SUBMIT_SUCCESS":
      return {
        ...initialState,
        success: action.message,
      };
    case "SUBMIT_ERROR":
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
}

const ContactView: React.FC = () => {
  const [state, dispatch] = useReducer(contactReducer, initialState);
  const { name, phone, email, message, loading, success, error } = state;

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    
    dispatch({ type: "SUBMIT_START" });

    try {
      const payload = {
        name,
        phone,
        email,
        message,
      };

      const response = await sendEmail(payload);

      dispatch({ type: "SUBMIT_SUCCESS", message: response.message || "Message sent successfully!" });
    } catch (err: any) {
      dispatch({ type: "SUBMIT_ERROR", error: err.response?.data?.message || "Failed to send message" });
    }
  };


  return (
    <m.div
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
                onChange={(e) => dispatch({ type: "SET_FIELD", field: "name", value: e.target.value })}
                required
                aria-label="Your name"
              />
            </div>

            <div className="input-group">
              <input
                type="tel"
                placeholder="Your phone"
                value={phone}
                onChange={(e) => dispatch({ type: "SET_FIELD", field: "phone", value: e.target.value })}
                aria-label="Your phone number"
              />
            </div>

            <div className="input-group">
              <input
                type="email"
                placeholder="Your e-mail"
                value={email}
                onChange={(e) => dispatch({ type: "SET_FIELD", field: "email", value: e.target.value })}
                required
                aria-label="Your e-mail"
              />
            </div>

            <div className="input-group">
              <textarea
                placeholder="Message"
                value={message}
                onChange={(e) => dispatch({ type: "SET_FIELD", field: "message", value: e.target.value })}
                required
                rows={1}
                aria-label="Message"
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
    </m.div>
  );
};

export default ContactView;
