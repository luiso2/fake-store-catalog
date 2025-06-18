import React from 'react'
import { motion } from 'framer-motion'
import { FiHome, FiGrid, FiShoppingBag, FiUser } from 'react-icons/fi'
import { FaPizzaSlice } from 'react-icons/fa'
import './BottomNav.css'

const BottomNav = ({ activeCategory, onCategoryChange, cartItemsCount }) => {
  const navItems = [
    { id: 'home', icon: FiHome, label: 'Inicio', category: 'all' },
    { id: 'pizzas', icon: FaPizzaSlice, label: 'Pizzas', category: 'pizzas' },
    { id: 'menu', icon: FiGrid, label: 'Menú', category: 'menu' },
    { id: 'cart', icon: FiShoppingBag, label: 'Carrito', category: 'cart', badge: cartItemsCount },
    { id: 'profile', icon: FiUser, label: 'Perfil', category: 'profile' }
  ]

  return (
    <nav className="bottom-nav">
      <div className="bottom-nav-container">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeCategory === item.category || 
                          (item.category === 'menu' && ['bebidas', 'postres', 'entradas'].includes(activeCategory))
          
          return (
            <motion.button
              key={item.id}
              className={`nav-item ${isActive ? 'active' : ''}`}
              onClick={() => onCategoryChange(item.category)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="nav-icon-wrapper">
                <Icon className="nav-icon" />
                {item.badge > 0 && (
                  <motion.span 
                    className="nav-badge"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    key={item.badge}
                  >
                    {item.badge}
                  </motion.span>
                )}
              </div>
              <span className="nav-label">{item.label}</span>
              {isActive && (
                <motion.div 
                  className="nav-indicator"
                  layoutId="bottomNavIndicator"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
          )
        })}
      </div>
    </nav>
  )
}

export default BottomNav
