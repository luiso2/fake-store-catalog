import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiShoppingCart, FiPhone, FiClock, FiMapPin } from 'react-icons/fi'
import { FaWhatsapp, FaPizzaSlice } from 'react-icons/fa'
import useStore from './store/useStore'
import Header from './components/Header'
import CategoryFilter from './components/CategoryFilter'
import ProductCard from './components/ProductCard'
import Cart from './components/Cart'
import BottomNav from './components/BottomNav'
import pizzaData from './data/pizzaData'
import './App.css'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const { cart, getTotalItems } = useStore()

  const categories = ['all', 'pizzas', 'bebidas', 'postres', 'entradas']

  const filteredProducts = selectedCategory === 'all' 
    ? pizzaData.products 
    : pizzaData.products.filter(product => product.category === selectedCategory)

  useEffect(() => {
    // Animación de entrada
    document.body.classList.add('loaded')
  }, [])

  const handleNavigation = (category) => {
    if (category === 'cart') {
      setIsCartOpen(true)
    } else if (category === 'menu') {
      setShowMobileMenu(true)
      setSelectedCategory('all')
    } else if (category === 'profile') {
      // Por ahora solo muestra un alert, puedes implementar la página de perfil
      alert('Sección de perfil en desarrollo')
    } else if (category === 'home') {
      setSelectedCategory('all')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      setSelectedCategory(category)
      setShowMobileMenu(false)
    }
  }

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
            src="/pizza-hero.svg" 
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

      <footer className="footer desktop-only">
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

      {/* Floating cart button for desktop */}
      {getTotalItems() > 0 && !isCartOpen && (
        <motion.button 
          className="floating-cart-button desktop-only"
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

      {/* Bottom Navigation for mobile */}
      <BottomNav 
        activeCategory={selectedCategory}
        onCategoryChange={handleNavigation}
        cartItemsCount={getTotalItems()}
      />

      {/* Mobile menu modal */}
      <AnimatePresence>
        {showMobileMenu && (
          <motion.div 
            className="mobile-menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowMobileMenu(false)}
          >
            <motion.div 
              className="mobile-menu"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3>Categorías</h3>
              <div className="mobile-menu-categories">
                {categories.slice(1).map(category => (
                  <button
                    key={category}
                    className="mobile-menu-item"
                    onClick={() => {
                      setSelectedCategory(category)
                      setShowMobileMenu(false)
                    }}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
