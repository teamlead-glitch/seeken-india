import { products } from '~/data/products.js';
export default defineEventHandler((event) => {
    const { id } = event.context.params;
  
   

     
  
    return products;
  });
  