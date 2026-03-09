import React, { useState } from 'react'
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
    <div className="contact-view">
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
    </div>
  )
}

export default ContactView
