import { useState, useEffect } from 'react'
import axios from 'axios'
import ProductCard from './components/ProductCard'
import './App.css'

function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')

  const API_URL = import.meta.env.VITE_API_URL || 'https://fakestoreapi.com'

  useEffect(() => {
    fetchCategories()
    fetchProducts()
  }, [])

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${API_URL}/products/categories`)
      setCategories(response.data)
    } catch (err) {
      console.error('Error fetching categories:', err)
    }
  }

  const fetchProducts = async () => {
    try {
      setLoading(true)
      const response = await axios.get(`${API_URL}/products`)
      setProducts(response.data)
      setError(null)
    } catch (err) {
      setError('Error al cargar los productos')
      console.error('Error fetching products:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
  }

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory)

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loader"></div>
        <p>Cargando productos...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="error-container">
        <p>{error}</p>
        <button onClick={fetchProducts}>Reintentar</button>
      </div>
    )
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>FakeStore Catalog</h1>
        <p>Explora nuestro catálogo de productos</p>
      </header>

      <div className="filters">
        <label htmlFor="category">Filtrar por categoría:</label>
        <select 
          id="category" 
          value={selectedCategory} 
          onChange={(e) => handleCategoryChange(e.target.value)}
        >
          <option value="all">Todas las categorías</option>
          {categories.map(category => (
            <option key={category} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className="products-container">
        <div className="products-grid">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <footer className="app-footer">
        <p>&copy; 2024 FakeStore Catalog - Powered by FakeStore API</p>
      </footer>
    </div>
  )
}

export default App
