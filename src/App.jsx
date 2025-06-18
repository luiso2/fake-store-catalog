import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiShoppingCart, FiPhone, FiClock, FiMapPin } from 'react-icons/fi'
import { FaWhatsapp, FaPizzaSlice } from 'react-icons/fa'
import useStore from './store/useStore'
import Header from './components/Header'
import CategoryFilter from './components/CategoryFilter'
import ProductCard from './components/ProductCard'
import Cart from './components/Cart'
import pizzaData from './data/pizzaData'
import './App.css'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { cart, getTotalItems } = useStore()

  const categories = ['all', 'pizzas', 'bebidas', 'postres', 'entradas']

  const filteredProducts = selectedCategory === 'all' 
    ? pizzaData.products 
    : pizzaData.products.filter(product => product.category === selectedCategory)

  useEffect(() => {
    // Animación de entrada
    document.body.classList.add('loaded')
  }, [])

  return (
    <div className="app">
      <Header onCartClick={() => setIsCartOpen(true)} />
      
      <section className="hero-section">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title">
            <FaPizzaSlice className="pizza-icon" />
            Pizzería Bella Italia
          </h1>
          <p className="hero-subtitle">La auténtica pizza italiana en tu mesa</p>
          
          <div className="info-badges">
            <div className="info-badge">
              <FiClock />
              <span>30-45 min</span>
            </div>
            <div className="info-badge">
              <FiMapPin />
              <span>Envío a domicilio</span>
            </div>
            <div className="info-badge">
              <FiPhone />
              <span>Pedidos: +55 41 99890-8495</span>
            </div>
          </div>
        </motion.div>
        
        <div className="hero-image">
          <motion.img 
            src="/pizza-hero.jpg" 
            alt="Pizza deliciosa"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </div>
      </section>

      <section className="menu-section">
        <div className="container">
          <h2 className="section-title">Nuestro Menú</h2>
          
          <CategoryFilter 
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          <motion.div 
            className="products-grid"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h3>¿Listo para ordenar?</h3>
          <p>Realiza tu pedido por WhatsApp y recíbelo en la puerta de tu casa</p>
          <a 
            href="https://wa.me/5541998908495?text=Hola!%20Quiero%20hacer%20un%20pedido" 
            className="whatsapp-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
            Ordenar por WhatsApp
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Pizzería Bella Italia</h4>
            <p>La mejor pizza italiana de la ciudad</p>
          </div>
          <div className="footer-section">
            <h4>Horario</h4>
            <p>Lun - Dom: 18:00 - 23:00</p>
          </div>
          <div className="footer-section">
            <h4>Contacto</h4>
            <p>+55 41 99890-8495</p>
            <p>pedidos@bellaitalia.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Pizzería Bella Italia. Todos los derechos reservados.</p>
        </div>
      </footer>

      <AnimatePresence>
        {isCartOpen && <Cart onClose={() => setIsCartOpen(false)} />}
      </AnimatePresence>

      {getTotalItems() > 0 && !isCartOpen && (
        <motion.button 
          className="floating-cart-button"
          onClick={() => setIsCartOpen(true)}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FiShoppingCart />
          <span className="cart-badge">{getTotalItems()}</span>
        </motion.button>
      )}
    </div>
  )
}

export default App
