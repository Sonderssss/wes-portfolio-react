import React, { useState } from 'react'
import { motion } from 'motion/react'
import { Mail, Phone, MapPin } from 'lucide-react'
import './ContactView.css'

const ContactView: React.FC = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Name:", name)
    console.log("Phone:", phone)
    console.log("Email:", email)
    console.log("Message:", message)
    setName("")
    setPhone("")
    setEmail("")
    setMessage("")
  }

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
            I’m always open to connecting, whether you have a question, a project in mind, or just want to start a conversation. Feel free to share a bit about what you’re looking for, and I’ll do my best to respond as promptly as possible.
            <br /><br />
            I appreciate your interest and look forward to hearing from you!
          </p>

          <div className="contact-details">
            <div className="contact-detail-item">
              <div className="contact-detail-icon"><MapPin size={20} /></div>
              <div className="contact-detail-text">
                <h3>Address</h3>
                <p>Nairobi</p>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="contact-detail-icon"><Phone size={20} /></div>
              <div className="contact-detail-text">
                <h3>Phone</h3>
                <p>+254 757317812</p>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="contact-detail-icon"><Mail size={20} /></div>
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
              <input type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>

            <div className="input-group">
              <input type="tel" placeholder="Your phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>

            <div className="input-group">
              <input type="email" placeholder="Your e-mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>

            <div className="input-group">
              <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} required rows={1}></textarea>
            </div>

            <button type="submit" className="send-btn">
              SEND MESSAGE <span>&rarr;</span>
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  )
}

export default ContactView
