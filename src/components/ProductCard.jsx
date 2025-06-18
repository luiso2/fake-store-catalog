import React from 'react'
import { motion } from 'framer-motion'
import { FiPlus, FiStar } from 'react-icons/fi'
import useStore from '../store/useStore'
import './ProductCard.css'

const ProductCard = ({ product }) => {
  const { addToCart } = useStore()

  const handleAddToCart = () => {
    addToCart(product)
    // Efecto visual de agregado
    const button = document.querySelector(`#add-btn-${product.id}`)
    if (button) {
      button.classList.add('added')
      setTimeout(() => button.classList.remove('added'), 600)
    }
  }

  return (
    <motion.div 
      className="product-card"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {product.popular && (
        <div className="popular-badge">
          <FiStar /> Popular
        </div>
      )}
      
      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={product.name} 
          className="product-image"
          loading="lazy"
        />
        <div className="product-overlay">
          <button 
            id={`add-btn-${product.id}`}
            className="quick-add-button"
            onClick={handleAddToCart}
          >
            <FiPlus />
          </button>
        </div>
      </div>
      
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        {product.size && <span className="product-size">{product.size}</span>}
        
        <div className="product-footer">
          <span className="product-price">R$ {product.price.toFixed(2)}</span>
          <motion.button 
            className="add-to-cart-btn"
            onClick={handleAddToCart}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Adicionar
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default ProductCard
