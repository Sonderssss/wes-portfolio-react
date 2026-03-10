import './NotFoundView.css'

const NotFoundView: React.FC = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Page not found</p>
      <a href="/">Go back home</a>
    </div>
  )
}

export default NotFoundView
