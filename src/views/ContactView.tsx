import React, { useState } from 'react'
import { motion } from 'motion/react'
import './ContactView.css'

const ContactView: React.FC = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [name, setName] = useState('')

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
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="contact-view"
    >
      <div>
        <h1>This is the contact page</h1>
        <form onSubmit={submitForm}>
          <div className="input-group">
            <label htmlFor="name">Your name : </label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email : </label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="input-group">
            <label htmlFor="message">Message : </label>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
          </div>

          <div className="submit">
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </motion.div>
  )
}

export default ContactView
