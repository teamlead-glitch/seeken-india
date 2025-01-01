import { products } from '~/data/products.js';
export default defineEventHandler((event) => {
     // Get all products where is_flash is true
     const flashSaleProducts = products.filter((p) => p.is_flash === true);

     // If no products are found, throw a 404 error
     if (flashSaleProducts.length === 0) {
       throw createError({ statusCode: 404, statusMessage: 'No flash sale products found' });
     }
 
     return flashSaleProducts;
  });
  