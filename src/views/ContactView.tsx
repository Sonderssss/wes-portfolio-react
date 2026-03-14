import React, { useState } from 'react'
import { motion } from 'motion/react'
import './ContactView.css'

const ContactView: React.FC = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Email:", email)
    console.log("Message:", message)
    setEmail("")
    setMessage("")
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="contact-view"
    >
      <div>
        <h1>This is the contact page</h1>
        <form onSubmit={submitForm}>
          <label htmlFor="email">Email: </label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <p>{email}</p>
          <label htmlFor="message">Message:</label>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
          <p>{message}</p>
          <br />
          <div className="submit">
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </motion.div>
  )
}

export default ContactView
