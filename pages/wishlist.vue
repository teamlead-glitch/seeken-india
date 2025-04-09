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
                            <ProductListCard v-for="(item, index) in wishlist" :product="item" :key="index"/> 
                </template>  
                <p v-else>Your wishlist is empty. Start exploring and add your favorite items!</p>
              
              
<!--               
                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-5">
                <div class="product__box">
                  <div class="items">Only 2 more left</div>
                  <div class="flash__combo">Flash Sale</div>
                  <div class="product__content">
                    <div class="top__box">
                      <div class="category__name">
                        <h5>Fan</h5>
                      </div>
                    </div>
                    <div class="price__feature">
                      <div class="name">
                        <h4>Pedestal Fan</h4>
                      </div>
                      <div class="price">
                        Rs. 4,400.00 <span>Rs. 5,500.00</span>
                      </div>
                    </div>
                  </div>
                  <div class="top_box">
                    <div class="product__img">
                      <img
                        src="/images/featured_product_1.webp"
                        class="img-fluid"
                        alt="seeken"
                        loading="lazy"
                      />
                    </div>
                    <div class="countdown-container" data-endtime="7">
                      <div class="countdown-box">
                        <span id="days">01</span>
                        <span class="label">DAYS</span>
                      </div>
                      <div class="countdown-box">
                        <span id="hours">23</span>
                        <span class="label">HOURS</span>
                      </div>
                      <div class="countdown-box">
                        <span id="minutes">57</span>
                        <span class="label">MINUTES</span>
                      </div>
                      <div class="countdown-box">
                        <span id="seconds">12</span>
                        <span class="label">SECONDS</span>
                      </div>
                    </div>
                  </div>
                  <div class="bottom__box">
                    <div class="rating">
                      <i class="bi bi-star-fill"></i> 5.0 <span>(16k)</span>
                    </div>
                    <div class="colors">
                      <ul>
                        <li>
                          <div class="code active">
                            <img
                              src="/images/color_code/clr-1.webp"
                              class="img-fluid"
                              alt="seeken"
                              loading="lazy"
                            />
                          </div>
                        </li>
                        <li>
                          <div class="code">
                            <img
                              src="/images/color_code/clr-2.webp"
                              class="img-fluid"
                              alt="seeken"
                              loading="lazy"
                            />
                          </div>
                        </li>
                        <li>
                          <div class="code">
                            <img
                              src="/images/color_code/clr-3.webp"
                              class="img-fluid"
                              alt="seeken"
                              loading="lazy"
                            />
                          </div>
                        </li>
                        <li>
                          <div class="code">
                            <img
                              src="/images/color_code/clr-4.webp"
                              class="img-fluid"
                              alt="seeken"
                              loading="lazy"
                            />
                          </div>
                        </li>
                        <li>+2</li>
                      </ul>
                    </div>
                    <div class="btn_box">
                      <a class="btn_2" href="">Add to Cart</a>
                      <a class="delete_btn" href="">
                        <i class="bi bi-trash"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
               -->
              
              
              
              



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
</script>

<style></style>
