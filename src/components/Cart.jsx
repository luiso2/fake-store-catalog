import React from 'react'
import { motion } from 'framer-motion'
import { FiX, FiMinus, FiPlus, FiShoppingBag } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import useStore from '../store/useStore'
import './Cart.css'

const Cart = ({ onClose }) => {
  const { cart, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useStore()
  const total = getTotalPrice()

  const handleWhatsAppOrder = () => {
    if (cart.length === 0) return

    // Construir mensaje para WhatsApp
    let message = '🍕 *Pedido de Pizzería Bella Italia*\n\n'
    
    cart.forEach(item => {
      message += `• ${item.name} x${item.quantity}\n`
      message += `  R$ ${(item.price * item.quantity).toFixed(2)}\n\n`
    })
    
    message += `*Total: R$ ${total.toFixed(2)}*\n\n`
    message += 'Por favor, confirme mi pedido y el tiempo de entrega.'

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message)
    const phoneNumber = '5541998908495'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

    // Abrir WhatsApp
    window.open(whatsappUrl, '_blank')
  }

  return (
    <motion.div 
      className="cart-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div 
        className="cart-container"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="cart-header">
          <h2>Tu Pedido</h2>
          <button className="close-button" onClick={onClose}>
            <FiX />
          </button>
        </div>

        <div className="cart-content">
          {cart.length === 0 ? (
            <div className="empty-cart">
              <FiShoppingBag size={64} />
              <p>Tu carrito está vacío</p>
              <button className="continue-shopping" onClick={onClose}>
                Continuar comprando
              </button>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {cart.map((item) => (
                  <motion.div 
                    key={item.id} 
                    className="cart-item"
                    layout
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <img src={item.image} alt={item.name} className="cart-item-image" />
                    <div className="cart-item-info">
                      <h4>{item.name}</h4>
                      <p className="cart-item-price">R$ {item.price.toFixed(2)}</p>
                    </div>
                    <div className="quantity-controls">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                        <FiMinus />
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                        <FiPlus />
                      </button>
                    </div>
                    <button 
                      className="remove-button"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <FiX />
                    </button>
                  </motion.div>
                ))}
              </div>

              <div className="cart-summary">
                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>R$ {total.toFixed(2)}</span>
                </div>
                <div className="summary-row">
                  <span>Entrega</span>
                  <span>R$ 5.00</span>
                </div>
                <div className="summary-row total">
                  <span>Total</span>
                  <span>R$ {(total + 5).toFixed(2)}</span>
                </div>
              </div>

              <div className="cart-actions">
                <motion.button 
                  className="whatsapp-order-button"
                  onClick={handleWhatsAppOrder}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaWhatsapp />
                  Finalizar pedido por WhatsApp
                </motion.button>
                <button className="clear-cart" onClick={clearCart}>
                  Limpiar carrito
                </button>
              </div>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Cart
