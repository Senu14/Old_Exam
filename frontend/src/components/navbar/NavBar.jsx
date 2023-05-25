import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss'

function NavBar() {
  return (
    <div className="container">
      <div className="links">
        <Link to="/kontakt"><span>kontakt</span></Link>
        <Link to="/login"><span>Login</span></Link>
        <Link to="/products"><span>Products</span></Link>
        <Link to="/"><span>Home</span></Link>
      </div>
    </div>
  )
}

export default NavBar;
