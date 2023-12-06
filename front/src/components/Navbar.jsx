import React from 'react'
import logo from '../assets/logo.svg'
import './styles/navbarStyle.css'
import { Link } from 'react-router-dom'

export default function Navbar({
  onClickRandom, activarRandom, 
}) {

  console.log()
  return (
    <nav className="navbar">
    
      <div className='izqNav'>
        <Link to='/about'
          className={`${window.location.pathname === '/about' ? 'active' : 'link'}`}
        >Sobre Mi</Link>
        <a className='link'>Placeholder</a>

        <a className='link'>Placeholder</a>

      </div>

      <div className='logo'>
        <Link to='/'>
          <img src={logo} 
            alt="Logo Rick y Morty"
            title="Logo Rick y Morty"
          />
        </Link>

      </div>
      {
        activarRandom ? (
          <div className='derNav'>
          <button className='btn'
            onClick={onClickRandom}
          >Random</button>
        </div>
        ) : null
      }

    </nav>

  )
}
