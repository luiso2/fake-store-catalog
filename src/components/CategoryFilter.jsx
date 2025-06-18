import React from 'react'
import { motion } from 'framer-motion'
import './CategoryFilter.css'

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }) => {
  const categoryNames = {
    all: 'Todos',
    pizzas: 'Pizzas',
    bebidas: 'Bebidas',
    postres: 'Postres',
    entradas: 'Entradas'
  }

  const categoryIcons = {
    all: '🍽️',
    pizzas: '🍕',
    bebidas: '🥤',
    postres: '🍰',
    entradas: '🥗'
  }

  return (
    <div className="category-filter">
      {categories.map((category) => (
        <motion.button
          key={category}
          className={`category-button ${selectedCategory === category ? 'active' : ''}`}
          onClick={() => onCategoryChange(category)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="category-icon">{categoryIcons[category]}</span>
          <span className="category-name">{categoryNames[category]}</span>
        </motion.button>
      ))}
    </div>
  )
}

export default CategoryFilter
