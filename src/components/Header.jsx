import React from 'react'
import { motion } from 'framer-motion'
import { FiShoppingCart } from 'react-icons/fi'
import { FaPizzaSlice } from 'react-icons/fa'
import useStore from '../store/useStore'
import './Header.css'

const Header = ({ onCartClick }) => {
  const { getTotalItems } = useStore()
  const totalItems = getTotalItems()

  return (
    <motion.header 
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="header-container">
        <div className="logo">
          <FaPizzaSlice className="logo-icon" />
          <span className="logo-text">Bella Italia</span>
        </div>

        <nav className="nav-menu">
          <a href="#menu" className="nav-link">Menú</a>
          <a href="#about" className="nav-link">Nosotros</a>
          <a href="#contact" className="nav-link">Contacto</a>
        </nav>

        <button 
          className="cart-button"
          onClick={onCartClick}
        >
          <FiShoppingCart />
          {totalItems > 0 && (
            <span className="cart-count">{totalItems}</span>
          )}
        </button>
      </div>
    </motion.header>
  )
}

export default Header
