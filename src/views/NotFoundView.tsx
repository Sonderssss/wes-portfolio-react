import { m } from 'motion/react'
import './NotFoundView.css'

const NotFoundView: React.FC = () => {
  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="not-found"
    >
      <h1>404</h1>
      <p>Page not found</p>
      <a href="/">Go back home</a>
    </m.div>
  )
}

export default NotFoundView
