import React from 'react'
import './ProductCard.css'

const ProductCard = ({ product }) => {
  const truncateTitle = (title, maxLength = 50) => {
    return title.length > maxLength 
      ? title.substring(0, maxLength) + '...' 
      : title
  }

  const truncateDescription = (description, maxLength = 100) => {
    return description.length > maxLength 
      ? description.substring(0, maxLength) + '...' 
      : description
  }

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.title} className="product-image" />
      </div>
      <div className="product-details">
        <h3 className="product-title">{truncateTitle(product.title)}</h3>
        <p className="product-category">{product.category}</p>
        <p className="product-description">{truncateDescription(product.description)}</p>
        <div className="product-footer">
          <span className="product-price">${product.price.toFixed(2)}</span>
          <div className="product-rating">
            <span className="stars">★ {product.rating.rate}</span>
            <span className="count">({product.rating.count})</span>
          </div>
        </div>
        <button className="add-to-cart-btn">Agregar al carrito</button>
      </div>
    </div>
  )
}

export default ProductCard
