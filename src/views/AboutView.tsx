import React from 'react'
import { motion } from 'motion/react'
import './AboutView.css'

const AboutView: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="about"
    >
      <h1>This is an about page</h1>
    </motion.div>
  )
}

export default AboutView
