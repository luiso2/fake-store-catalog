import { create } from 'zustand'

const useStore = create((set, get) => ({
  cart: [],
  
  addToCart: (product, selectedToppings = []) => set((state) => {
    // Crear un ID único para pizzas con toppings
    const cartItemId = selectedToppings.length > 0 
      ? `${product.id}-${selectedToppings.map(t => t.id).join('-')}`
      : product.id.toString()
    
    const existingItem = state.cart.find(item => item.cartItemId === cartItemId)
    
    if (existingItem) {
      return {
        cart: state.cart.map(item =>
          item.cartItemId === cartItemId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
    }
    
    // Calcular precio total con toppings
    const toppingsPrice = selectedToppings.reduce((sum, topping) => sum + topping.price, 0)
    const totalPrice = product.price + toppingsPrice
    
    return {
      cart: [...state.cart, { 
        ...product, 
        cartItemId,
        selectedToppings,
        totalPrice,
        quantity: 1 
      }]
    }
  }),
  
  removeFromCart: (cartItemId) => set((state) => ({
    cart: state.cart.filter(item => item.cartItemId !== cartItemId)
  })),
  
  updateQuantity: (cartItemId, quantity) => set((state) => ({
    cart: state.cart.map(item =>
      item.cartItemId === cartItemId
        ? { ...item, quantity: Math.max(0, quantity) }
        : item
    ).filter(item => item.quantity > 0)
  })),
  
  clearCart: () => set({ cart: [] }),
  
  getTotalPrice: () => {
    const { cart } = get()
    return cart.reduce((total, item) => {
      const itemPrice = item.totalPrice || item.price
      return total + (itemPrice * item.quantity)
    }, 0)
  },
  
  getTotalItems: () => {
    const { cart } = get()
    return cart.reduce((total, item) => total + item.quantity, 0)
  }
}))

export default useStore
