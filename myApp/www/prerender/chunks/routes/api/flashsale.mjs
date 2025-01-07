import { defineEventHandler, createError } from 'file://C:/nuxt/node_modules/h3/dist/index.mjs';
import { products } from 'file://C:/nuxt/data/products.js';

const flashsale = defineEventHandler((event) => {
  const flashSaleProducts = products.filter((p) => p.is_flash === true);
  if (flashSaleProducts.length === 0) {
    throw createError({ statusCode: 404, statusMessage: "No flash sale products found" });
  }
  return flashSaleProducts;
});

export { flashsale as default };
//# sourceMappingURL=flashsale.mjs.map
