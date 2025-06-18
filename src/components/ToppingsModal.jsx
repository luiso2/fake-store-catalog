import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiCheck } from 'react-icons/fi'
import pizzaData from '../data/pizzaData'
import './ToppingsModal.css'

const ToppingsModal = ({ product, isOpen, onClose, onConfirm }) => {
  const [selectedToppings, setSelectedToppings] = useState([])

  if (!isOpen) return null

  const toggleTopping = (topping) => {
    setSelectedToppings(prev => {
      const exists = prev.find(t => t.id === topping.id)
      if (exists) {
        return prev.filter(t => t.id !== topping.id)
      }
      return [...prev, topping]
    })
  }

  const getTotalPrice = () => {
    const toppingsPrice = selectedToppings.reduce((sum, topping) => sum + topping.price, 0)
    return product.price + toppingsPrice
  }

  const handleConfirm = () => {
    onConfirm(product, selectedToppings)
    setSelectedToppings([])
    onClose()
  }

  const handleCancel = () => {
    setSelectedToppings([])
    onClose()
  }

  return (
    <AnimatePresence>
      <motion.div 
        className="toppings-modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleCancel}
      >
        <motion.div 
          className="toppings-modal"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: 'spring', damping: 25 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="modal-close" onClick={handleCancel}>
            <FiX />
          </button>

          <div className="modal-header">
            <img src={product.image} alt={product.name} className="modal-product-image" />
            <div className="modal-product-info">
              <h3>{product.name}</h3>
              <p className="modal-product-price">Precio base: R$ {product.price.toFixed(2)}</p>
            </div>
          </div>

          <div className="modal-content">
            <h4>Personaliza tu pizza</h4>
            <p className="toppings-subtitle">Selecciona los ingredientes adicionales</p>

            <div className="toppings-grid">
              {pizzaData.toppings.map(topping => {
                const isSelected = selectedToppings.find(t => t.id === topping.id)
                return (
                  <motion.button
                    key={topping.id}
                    className={`topping-item ${isSelected ? 'selected' : ''}`}
                    onClick={() => toggleTopping(topping)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="topping-info">
                      <span className="topping-name">{topping.name}</span>
                      <span className="topping-price">+R$ {topping.price.toFixed(2)}</span>
                    </div>
                    <div className="topping-check">
                      {isSelected && <FiCheck />}
                    </div>
                  </motion.button>
                )
              })}
            </div>
          </div>

          <div className="modal-footer">
            <div className="total-info">
              <span>Total:</span>
              <span className="total-price">R$ {getTotalPrice().toFixed(2)}</span>
            </div>
            <div className="modal-actions">
              <button className="btn-cancel" onClick={handleCancel}>
                Cancelar
              </button>
              <motion.button 
                className="btn-confirm"
                onClick={handleConfirm}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Agregar al carrito
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ToppingsModal
