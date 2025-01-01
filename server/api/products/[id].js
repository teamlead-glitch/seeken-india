import { products } from '~/data/products.js';
export default defineEventHandler((event) => {
    const { id } = event.context.params;
  
   

     
  
    const product = products.find((p) => p.id === id);
  
    if (!product) {
      throw createError({ statusCode: 404, statusMessage: 'Product not found' });
    }
  
    return product;
  });
  