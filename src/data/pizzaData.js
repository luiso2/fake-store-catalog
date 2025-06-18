const pizzaData = {
  toppings: [
    { id: 'extra-cheese', name: 'Queso Extra', price: 8.00 },
    { id: 'pepperoni', name: 'Pepperoni Extra', price: 10.00 },
    { id: 'mushrooms', name: 'Champiñones', price: 6.00 },
    { id: 'olives', name: 'Aceitunas', price: 5.00 },
    { id: 'bacon', name: 'Bacon', price: 12.00 },
    { id: 'onions', name: 'Cebolla', price: 4.00 },
    { id: 'peppers', name: 'Pimientos', price: 6.00 },
    { id: 'ham', name: 'Jamón Extra', price: 10.00 },
    { id: 'pineapple', name: 'Piña Extra', price: 6.00 },
    { id: 'garlic', name: 'Ajo', price: 3.00 },
    { id: 'basil', name: 'Albahaca Fresca', price: 4.00 },
    { id: 'tomatoes', name: 'Tomate Cherry', price: 5.00 }
  ],
  products: [
    // Pizzas
    {
      id: 1,
      name: "Margherita Clásica",
      description: "Salsa de tomate, mozzarella fresca, albahaca y aceite de oliva extra virgen",
      price: 45.90,
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&q=80",
      category: "pizzas",
      popular: true,
      size: "Grande (35cm)",
      allowToppings: true
    },
    {
      id: 2,
      name: "Pepperoni Especial",
      description: "Salsa de tomate, mozzarella, abundante pepperoni y orégano",
      price: 52.90,
      image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&q=80",
      category: "pizzas",
      popular: true,
      size: "Grande (35cm)",
      allowToppings: true
    },
    {
      id: 3,
      name: "Cuatro Quesos",
      description: "Mozzarella, gorgonzola, parmesano y queso de cabra",
      price: 56.90,
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80",
      category: "pizzas",
      size: "Grande (35cm)",
      allowToppings: true
    },
    {
      id: 4,
      name: "Hawaiana",
      description: "Salsa de tomate, mozzarella, jamón y piña fresca",
      price: 49.90,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80",
      category: "pizzas",
      size: "Grande (35cm)",
      allowToppings: true
    },
    {
      id: 5,
      name: "Vegetariana",
      description: "Tomate, mozzarella, pimientos, cebolla, champiñones y aceitunas",
      price: 47.90,
      image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=500&q=80",
      category: "pizzas",
      vegetarian: true,
      size: "Grande (35cm)",
      allowToppings: true
    },
    {
      id: 6,
      name: "Prosciutto e Funghi",
      description: "Salsa de tomate, mozzarella, jamón y champiñones frescos",
      price: 54.90,
      image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=500&q=80",
      category: "pizzas",
      size: "Grande (35cm)",
      allowToppings: true
    },
    {
      id: 7,
      name: "BBQ Chicken",
      description: "Salsa BBQ, mozzarella, pollo asado, cebolla morada y cilantro",
      price: 58.90,
      image: "https://images.unsplash.com/photo-1600628421055-4d30de868b8f?w=500&q=80",
      category: "pizzas",
      popular: true,
      size: "Grande (35cm)",
      allowToppings: true
    },
    {
      id: 8,
      name: "Napolitana",
      description: "Salsa de tomate, mozzarella, anchoas, alcaparras y aceitunas negras",
      price: 55.90,
      image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500&q=80",
      category: "pizzas",
      size: "Grande (35cm)",
      allowToppings: true
    },
    
    // Bebidas
    {
      id: 20,
      name: "Coca-Cola Lata",
      description: "Refresco de cola 350ml",
      price: 8.00,
      image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=500&q=80",
      category: "bebidas"
    },
    {
      id: 21,
      name: "Agua Mineral",
      description: "Agua mineral sin gas 500ml",
      price: 6.00,
      image: "https://images.unsplash.com/photo-1560023907-5f339617ea55?w=500&q=80",
      category: "bebidas"
    },
    {
      id: 22,
      name: "Jugo Natural",
      description: "Jugo de naranja natural 400ml",
      price: 12.00,
      image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=500&q=80",
      category: "bebidas"
    },
    {
      id: 23,
      name: "Cerveza Heineken",
      description: "Cerveza Premium 330ml",
      price: 14.00,
      image: "https://images.unsplash.com/photo-1618183479302-1e0aa382c36b?w=500&q=80",
      category: "bebidas"
    },
    
    // Postres
    {
      id: 30,
      name: "Tiramisú",
      description: "Clásico postre italiano con café y mascarpone",
      price: 22.00,
      image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500&q=80",
      category: "postres",
      popular: true
    },
    {
      id: 31,
      name: "Panna Cotta",
      description: "Postre de crema con frutos rojos",
      price: 18.00,
      image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&q=80",
      category: "postres"
    },
    {
      id: 32,
      name: "Cannoli Siciliano",
      description: "Masa crujiente rellena de ricotta dulce",
      price: 20.00,
      image: "https://images.unsplash.com/photo-1618110772078-d61f3ec9e2fb?w=500&q=80",
      category: "postres"
    },
    
    // Entradas
    {
      id: 40,
      name: "Bruschetta Clásica",
      description: "Pan tostado con tomate, albahaca y ajo",
      price: 18.00,
      image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=500&q=80",
      category: "entradas"
    },
    {
      id: 41,
      name: "Carpaccio de Res",
      description: "Finas láminas de res con rúcula y parmesano",
      price: 32.00,
      image: "https://images.unsplash.com/photo-1609501676725-7186f017a4b7?w=500&q=80",
      category: "entradas"
    },
    {
      id: 42,
      name: "Focaccia al Romero",
      description: "Pan italiano con aceite de oliva y romero",
      price: 16.00,
      image: "https://images.unsplash.com/photo-1619734086067-24bf8889ea7d?w=500&q=80",
      category: "entradas"
    }
  ]
}

export default pizzaData
