import React from 'react'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <div className="footer">
      <footer class="py-4 navbar-dark bg-secondary">
        <div class="container">
          <p class="m-0 text-center text-white">Copyright &copy; Chris Otto {year}</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
