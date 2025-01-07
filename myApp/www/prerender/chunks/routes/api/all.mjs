import { defineEventHandler } from 'file://C:/nuxt/node_modules/h3/dist/index.mjs';
import { products } from 'file://C:/nuxt/data/products.js';

const all = defineEventHandler((event) => {
  event.context.params;
  return products;
});

export { all as default };
//# sourceMappingURL=all.mjs.map
