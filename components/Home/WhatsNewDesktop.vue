<template>

     <!-- whats new desktop -->
  <section class="new__products" v-if="whats_new">
   
    <div class="container">
      <div class="row">
        <div class="col-md-12 mb-4">
          <h3>What's New</h3>
        </div>
        <div class="col-md-4" v-if="whats_new[0]">
          <div class="new_products">
            <div class="content">
              <h3>{{ whats_new[0].title }}</h3>
              <div class="button__box">
                <NuxtLink class="btn_3" :to="`/list?category=${whats_new[0].item_id}`">Buy Now <i class="bi bi-chevron-right"></i></NuxtLink>
              </div>
            </div>
            <img :src="whats_new[0].image_path" class="img-fluid" alt="seeken" loading="lazy">
          </div>
        </div>
        <div class="col-md-8" >
          <div class="row">
            <div class="col-md-8" v-if="whats_new[1]">
              <div class="new_products">
                <div class="content content_center">
                  <h3>{{ whats_new[1].title }}</h3>
                  <div class="button__box">
                    <NuxtLink class="btn_3" :to="`/list?category=${whats_new[1].item_id}`">Buy Now <i class="bi bi-chevron-right"></i></NuxtLink>
                  </div>
                </div><img :src="whats_new[1].image_path" class="img-fluid" alt="seeken" loading="lazy">
              </div>
            </div>
            <div class="col-md-4" v-if="whats_new[2]">
              <div class="new_products">
                <div class="content content_bottom">
                  <h3>{{ whats_new[2].title }}</h3>
                  <div class="button__box">
                    <NuxtLink class="btn_3" :to="`/list?category=${whats_new[2].item_id}`">Buy Now <i class="bi bi-chevron-right"></i></NuxtLink>
                  </div>
                </div><img :src="whats_new[2].image_path" class="img-fluid" alt="seeken" loading="lazy">
              </div>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-md-4" v-if="whats_new[3]">
              <div class="new_products">
                <div class="content content_top">
                  <h3>{{ whats_new[3].title }} </h3>
                  <div class="button__box">
                    <NuxtLink class="btn_3" :to="`/list?category=${whats_new[3].item_id}`">Buy Now <i class="bi bi-chevron-right"></i></NuxtLink>
                  </div>
                </div><img :src="whats_new[3].image_path" class="img-fluid" alt="seeken" loading="lazy">
              </div>
            </div>
            <div class="col-md-8" v-if="whats_new[4]">
              <div class="new_products">
                <div class="content content_center">
                  <h3>{{ whats_new[4].title }} </h3>
                  <div class="button__box">
                    <NuxtLink class="btn_3" :to="`/list?category=${whats_new[4].item_id}`">Buy Now <i class="bi bi-chevron-right"></i></NuxtLink>
                  </div>
                </div><img :src="whats_new[4].image_path" class="img-fluid" alt="seeken" loading="lazy">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- whats new desktop close -->
    
</template>

<script setup>

const props = defineProps({
  whats_new: Array
});


  
</script>