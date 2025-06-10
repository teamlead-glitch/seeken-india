<template>
    <ProductHomeFeaturedDesk :products="checkVariantAvailable(featured_products)"/>

    <ProductHomeFeaturedMob :products="checkVariantAvailable(featured_products)"/>
</template>


<script setup>

const { data: featured_products, error, refresh } = useFetchDataCache('featured_products', 'featured-products');

const getModifiedProduct = (item) => {
  if (item.stock_quantity > 0) return item;

  const availableVariant = item.product_variants?.find(
    v => v.variant_price?.stock_quantity > 0
  );

  if (availableVariant) {
    return {
      ...item,
      stock_quantity: availableVariant.variant_price.stock_quantity,
      final_price: availableVariant.variant_price.final_price,
      price: availableVariant.variant_price.price,
      selling_price: availableVariant.variant_price.selling_price,
      to_date:availableVariant.variant_price.to_date,
      variant_id:availableVariant.variant_price.variant_id,
      ...(availableVariant.variant_image_path
        ? { default_image: availableVariant.variant_image_path, image_path:availableVariant.variant_image_path }
        : {}),
    };
  }

  return item;
};

// Apply getModifiedProduct to each product
const checkVariantAvailable = (products) => {
  return products?.map(getModifiedProduct) ?? [];
};

</script>