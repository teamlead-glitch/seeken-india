import { defineEventHandler, createError } from 'file://C:/nuxt/node_modules/h3/dist/index.mjs';
import { products } from 'file://C:/nuxt/data/products.js';

const _id_ = defineEventHandler((event) => {
  const { id } = event.context.params;
  const product = products.find((p) => p.id === id);
  if (!product) {
    throw createError({ statusCode: 404, statusMessage: "Product not found" });
  }
  return product;
});

export { _id_ as default };
//# sourceMappingURL=_id_.mjs.map
