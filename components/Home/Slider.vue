<template>
<section class="products__container" id="section1" v-if="prime_products">
    <div class="container-fluid">
      <div class="row">
        
        
        <div class="col-md-4 col-sm-4 p-0" v-for="(item, index) in prime_products" :key="index">
          <div class="products__img">
            <img :src="item.image_path" class="img-fluid" alt="seeken">
            <div class="contents">
              <h6>{{item.product_name}}</h6>
              <h3>{{item.title}}</h3>
              <NuxtLink class="btn_1" :to="`products/${item.slug}`">Buy </NuxtLink>
            </div>
          </div>
        </div>


      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  prime_products: Array
});


</script>