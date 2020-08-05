import React from 'react'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <div className="footer">
      <footer className="py-4 navbar-dark bg-secondary">
        <div className="container">
          <p className="m-0 text-center text-white">Copyright &copy; Chris Otto {year}</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
