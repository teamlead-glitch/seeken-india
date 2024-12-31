export default defineEventHandler((event) => {
    const { id } = event.context.params;
  
    // Mock product data
    const products = [
      { id: '1', name: 'Product 1', price: 29.99, image: '/images/product-1.jpg' },
      { id: '2', name: 'Product 2', price: 49.99, image: '/images/product-2.jpg' },
      { id: '3', name: 'Product 3', price: 149.99, image: '/images/product-3.jpg' },
      { id: '4', name: 'Product 4', price: 129.99, image: '/images/product-1.jpg' },
      { id: '5', name: 'Product 5', price: 349.99, image: '/images/product-2.jpg' },
      { id: '6', name: 'Product 6', price: 1149.99, image: '/images/product-3.jpg' },
    
      { id: '7', name: 'Product 7', price: 249.99, image: '/images/product-2.jpg' },
      { id: '8', name: 'Product 8', price: 2149.99, image: '/images/product-3.jpg' },
      { id: '9', name: 'Product 9', price: 3129.99, image: '/images/product-1.jpg' },
      { id: '10', name: 'Product 10', price: 1349.99, image: '/images/product-2.jpg' }, ];

     
  
    const product = products.find((p) => p.id === id);
  
    if (!product) {
      throw createError({ statusCode: 404, statusMessage: 'Product not found' });
    }
  
    return product;
  });
  