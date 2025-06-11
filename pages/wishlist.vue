<template>
  <CommonInnerBanner page_title="Wishlist" />

  <section class="inner_container wl">
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center mb-3 mb-md-5"><h1>Wishlist</h1></div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="tab-content bg_wishlist">
            <div class="row">
              
                <template v-if="wishlist?.length">
                            <ProductWishListCard v-for="(item, index) in wishlist" :product="getModifiedProduct(item)" :key="index"/> 
                </template>  
                <p v-else>Your wishlist is empty. Start exploring and add your favorite items!</p>
    


            </div>
            <div class="row">
              <div class="col-md-12 text-center">
                <NuxtLink to="/" class="btn_2">Continue Shopping</NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { onMounted, computed } from "vue";
import { useWishlistStore } from "@/store/wishlist";

const wishlistStore = useWishlistStore();
const wishlist = computed(() => wishlistStore.list);

onMounted(() => {
  wishlistStore.fetchWishlists();
});

useHead({
      title: 'Seeken | Wishlist',
      meta: [
        { name: 'description', content:  'Seeken Wishlist' },
       
      ],
      
    });


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
        ? { image_path: availableVariant.variant_image_path }
        : {}),
    };
  }

  return item;
};
</script>

<style></style>
