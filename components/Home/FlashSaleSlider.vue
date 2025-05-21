<template>
  <section class="flash__sale" id="section2" v-if="products.length > 0">
  
  <div class="content-slider ">
    <Swiper
      :modules="[Autoplay, Navigation, Pagination]"
      :spaceBetween="30"
      :slidesPerView="products.length > 3 ? 2.5 : 2"
      :centeredSlides="products.length > 3 ? true : false"
      :loop="true"
      :autoplay="{ delay: 4000, disableOnInteraction: false }"
     
      :navigation="{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }"
      :breakpoints="{
        1024: { slidesPerView: 1.9, spaceBetween: 30 },
        768: { slidesPerView: 1.4, spaceBetween: 20 },
        480: { slidesPerView: 1.4, spaceBetween: 15 },
        380: { slidesPerView: 1, spaceBetween: 10 },
        0: { slidesPerView: 1, spaceBetween: 10 } 
      }"
      class="mySwiper"
    >
    
      <SwiperSlide v-for="(item, index) in products" :key="index">
       

        <div class="desktop__parent__div">
          <img :src="item.flash_sale_image_url"  class="img-fluid banner__desk" alt="seeken" loading="lazy" style="max-height: 525px;object-fit: cover;">
          <!-- style="max-height: 425px;object-fit: cover;" -->
          <!-- desktop  -->
          <div class="sale_box">
            <h5>FLASH SALE</h5>
            <div class="outer__box">
              <div class="offer">{{item.discount}}% OFF</div>
              <div class="prices">₹{{item.selling_price}} <span>₹{{item.price}}</span></div>
            </div>
            <h6> <span>{{ item.stock }} more</span> items remaining!</h6>
            <div class="limiter_offer">
              <div class="limited_offer">LIMITED TIME OFFER</div>
             
              <ProductCardCountDown :endTime="item.to_date"/>
              <a class="btn_1"  @click="handleAddToCart(item?.product_id, 1, item.variant_id?item.variant_id:0)">Add to cart </a>
              <NuxtLink class="btn_2" :to="`products/${item.slug}`">Buy </NuxtLink>
              <!-- <a class="btn_2"  @click="handleAddToCart(item?.product_id, 1, item.variant_id?item.variant_id:0,'add',true)">Buy Now </a> -->
            </div>
          </div>
          <!-- desktop close  -->
  
       
        </div>
       
  
  
  
  
    
    <div class="mobile__parent__div" >
  
      <NuxtLink :to="`/products/${item.slug}`">
          <img :src="item.flash_sale_image_url"  class="img-fluid banner__mob" alt="seeken" loading="lazy">
        </NuxtLink>  
  
          <!-- mobile view -->
         <NuxtLink :to="`/products/${item.slug}`">
            <div class="sale__box__mobile ">
              <div class="outer__box">
                <h5>FLASH SALE</h5>
                <h4>{{ item.name }}</h4>
                <p>{{ item.short_description }}</p>
              </div>
              <div class="bottom_boxes">
                <div class="limited_offer">LIMITED TIME OFFER</div>
                <ProductCardCountDown :endTime="item.to_date"/>
                <h6> <span>{{ item.stock }} more</span> items remaining!</h6>
                <div class="offer">{{item.discount}}% OFF</div>
              </div>
            </div>
          </NuxtLink>
        
          <!-- mobile view -->
        </div>
         
        
      </SwiperSlide>

      <!-- Navigation Arrows -->
      <div class="swiper-button-next"><i class="bi bi-arrow-right"></i></div>
      <div class="swiper-button-prev"><i class="bi bi-arrow-left"></i></div>
    </Swiper>
  </div>
</section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';  // Import required modules
import { useRouter } from 'vue-router';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { useCartActions } from '@/composables/useCartActions'

const { handleAddToCart } = useCartActions()

const router = useRouter();

const { data: products, error, refresh } = useFetchData('products', 'flash-sale-products?limit=10');
</script>

<style scoped>
.content-slider {
  width: 100%;
  margin: auto;
}

.slide-content {
  padding: 20px;
  background: white;
  border-radius: 10px;
  text-align: center;
}

.swiper-pagination {
  margin-top: 10px;
}

/* Hide default Swiper big arrows */
.swiper-button-next::after,
.swiper-button-prev::after {
  display: none;
}

/* Style for the new navigation arrows */
.swiper-button-next,
.swiper-button-prev {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.7); /* Black with transparency */
  border-radius: 50%;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: background-color 0.3s, transform 0.3s;
}

/* Centering the arrows */
.swiper-button-prev {
  left: 15px;
}

.swiper-button-next {
  right: 15px;
}

/* Hover effect */
.swiper-button-next:hover,
.swiper-button-prev:hover {
  background-color: rgba(0, 0, 0, 0.9);
  transform: translateY(-50%) scale(1.1);
}

/* Icon style */
.swiper-button-next i,
.swiper-button-prev i {
  color: white;
  font-size: 20px;
}



</style>

<style >
 



/* desktop */

.desktop__parent__div {
  width: 100%;
  display: block

}
.desktop__parent__div {
  transition: all 0.4s ease-in-out;
  position: relative;
  margin: 0 1rem;
}
.desktop__parent__div img{
  width: 100%;
}
@media only screen and (min-width: 768px) and (max-width: 992px) {
  .desktop__parent__div {
    margin: 0 0.3rem;
  }
}
@media (max-width: 767px) {
  .desktop__parent__div {
    margin: 0 0.3rem;
  }
}
@media (max-width: 767px) and (max-width: 767px) {
  .desktop__parent__div {
    border-radius: 15px;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    -ms-border-radius: 15px;
    -o-border-radius: 15px;
  }
}
@media (max-width: 767px) {
  .desktop__parent__div img {
    border-radius: 15px;
    width: 100%;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    -ms-border-radius: 15px;
    -o-border-radius: 15px;
  }
}
.desktop__parent__div .sale_box {
  position: absolute;
  display: flex;
  z-index: 999;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  width: 100%;
  height: 100%;
  top: 0;
  flex-direction: column;
}
@media only screen and (min-width: 768px) and (max-width: 992px) {
  .desktop__parent__div .sale_box {
    padding: 0.5rem;
  }
}
@media (max-width: 767px) {
  .desktop__parent__div .sale_box {
    display: none;
  }
}
.desktop__parent__div .sale_box h5 {
  color: #fff;
  font-size: 1.5rem;
  text-align: center;
  font-weight: 500;
  margin: 1rem 0;
}
@media only screen and (min-width: 1200px) and (max-width: 1400px) {
  .desktop__parent__div .sale_box h5 {
    font-size: 1.3rem;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1200px) {
  .desktop__parent__div .sale_box h5 {
    font-size: 1.2rem;
  }
}
.desktop__parent__div .sale_box .outer__box {
  display: flex;
  align-items: center;
}
@media only screen and (min-width: 992px) and (max-width: 1200px) {
  .desktop__parent__div .sale_box .outer__box {
    margin-bottom: 1rem;
  }
}
.desktop__parent__div .sale_box .outer__box .offer {
  text-align: center;
  background: #00687f;
  padding: 1rem;
  color: #fff;
  font-size: 2.5rem;
  font-weight: 600;
}
@media only screen and (min-width: 1200px) and (max-width: 1400px) {
  .desktop__parent__div .sale_box .outer__box .offer {
    font-size: 2.2rem;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1200px) {
  .desktop__parent__div .sale_box .outer__box .offer {
    font-size: 2rem;
    padding: 0.5rem;
  }
}
.desktop__parent__div .sale_box .outer__box .prices {
  text-align: center;
  background: #fff;
  padding: 1rem;
  color: #00687f;
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  font-weight: 600;
}
@media only screen and (min-width: 1200px) and (max-width: 1400px) {
  .desktop__parent__div .sale_box .outer__box .prices {
    font-size: 2.2rem;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1200px) {
  .desktop__parent__div .sale_box .outer__box .prices {
    font-size: 2rem;
    padding: 0.5rem;
  }
}
.desktop__parent__div .sale_box .outer__box .prices span {
  padding-left: 0.3rem;
  font-size: 0.875rem;
  text-decoration: line-through;
  color: rgb(192, 192, 192);
}
@media only screen and (min-width: 1200px) and (max-width: 1400px) {
  .desktop__parent__div .sale_box .outer__box .prices span {
    font-size: 0.813rem;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1200px) {
  .desktop__parent__div .sale_box .outer__box .prices span {
    font-size: 0.813rem;
  }
}
.desktop__parent__div .sale_box h6 {
  color: #fff;
  text-align: center;
  font-weight: 400;
  margin: 1.5rem 0;
}
@media only screen and (min-width: 992px) and (max-width: 1200px) {
  .desktop__parent__div .sale_box h6 {
    margin: 0.5rem 0;
  }
}
.desktop__parent__div .sale_box h6 span {
  border-radius: 0.3rem;
  -webkit-border-radius: 0.3rem;
  -moz-border-radius: 0.3rem;
  -ms-border-radius: 0.3rem;
  -o-border-radius: 0.3rem;
  font-weight: 500;
  color: #242324;
  background: #fff;
  padding: 0.2rem 0.5rem;
}
.desktop__parent__div .sale_box .limited_offer {
  text-align: center;
  font-size: 0.75rem;
  font-weight: 400;
  color: #fff;
  margin-bottom: 1rem;
}
@media only screen and (min-width: 992px) and (max-width: 1200px) {
  .desktop__parent__div .sale_box .limited_offer {
    margin-bottom: 0.2rem;
  }
}
.desktop__parent__div .sale_box .countdown-container {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
}
@media only screen and (min-width: 992px) and (max-width: 1200px) {
  .desktop__parent__div.sale_box .countdown-container {
    margin-top: 5px;
  }
}
.desktop__parent__div .sale_box .countdown-box {
  font-size: 2rem;
  padding: 10px;
  font-weight: 600;
  border-radius: 5px;
  min-width: 50px;
  color: #fff;
}
@media only screen and (min-width: 992px) and (max-width: 1200px) {
  .desktop__parent__div .sale_box .countdown-box {
    padding: 0 10px;
  }
}
.desktop__parent__div .sale_box .label {
  font-size: 0.625rem;
  font-weight: 400;
  display: block;
  margin-top: 5px;
  color: #fff;
}
.desktop__parent__div .sale_box .btn_2 {
  margin-top: 1.5rem;
  margin-left: 0.5rem;
}



.desktop__parent__div .item img {
  transition: all 0.4s ease-in-out;
  border: 0;
  position: relative;
}
@media (max-width: 767px) {
  .desktop__parent__div img {
    border-radius: 15px;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    -ms-border-radius: 15px;
    -o-border-radius: 15px;
  }
}
.desktop__parent__div::before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  background: rgb(255, 255, 255);
  background: linear-gradient(180deg, rgba(70, 67, 67, 0.32) 0%, rgba(0, 0, 0, 0.927) 100%);
  z-index: 99;
  z-index: 99;
}
@media (max-width: 767px) {
  .desktop__parent__div::before {
    border-radius: 15px;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    -ms-border-radius: 15px;
    -o-border-radius: 15px;
  }
}



@media (max-width:767px) { 
  .desktop__parent__div{
    display: none;
  }}

/* desktop close */


/* mobile open */


.mobile__parent__div {
  width: 100%;
  display: none;

}



.mobile__parent__div {
  transition: all 0.4s ease-in-out;
  position: relative;
  margin: 0 1rem;
}
@media only screen and (min-width: 768px) and (max-width: 992px) {
  .mobile__parent__div {
    margin: 0 0.3rem;
  }
}
@media (max-width: 767px) {
  .mobile__parent__div {
    margin: 0 0.3rem;
  }
}
@media (max-width: 767px) and (max-width: 767px) {
  .mobile__parent__div {
    border-radius: 15px;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    -ms-border-radius: 15px;
    -o-border-radius: 15px;
  }
}
@media (max-width: 767px) {
  .mobile__parent__div img {
    border-radius: 15px;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    -ms-border-radius: 15px;
    -o-border-radius: 15px;
  }
}


.mobile__parent__div .sale_box h5 {
  color: #fff;
  font-size: 1.5rem;
  text-align: center;
  font-weight: 500;
  margin: 1rem 0;
}

.mobile__parent__div .sale_box .outer__box {
  display: flex;
  align-items: center;
}

.mobile__parent__div .sale_box .outer__box .offer {
  text-align: center;
  background: #00687f;
  padding: 1rem;
  color: #fff;
  font-size: 2.5rem;
  font-weight: 600;
}
@media only screen and (min-width: 1200px) and (max-width: 1400px) {
 
}
@media only screen and (min-width: 992px) and (max-width: 1200px) {
 
}
.mobile__parent__div .sale_box .outer__box .prices {
  text-align: center;
  background: #fff;
  padding: 1rem;
  color: #00687f;
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  font-weight: 600;
}


.mobile__parent__div .sale_box .outer__box .prices span {
  padding-left: 0.3rem;
  font-size: 0.875rem;
  text-decoration: line-through;
  color: rgb(192, 192, 192);
}


.mobile__parent__div .sale_box h6 {
  color: #fff;
  text-align: center;
  font-weight: 400;
  margin: 1.5rem 0;
}
.mobile__parent__div .sale_box h6 span {
  border-radius: 0.3rem;
  -webkit-border-radius: 0.3rem;
  -moz-border-radius: 0.3rem;
  -ms-border-radius: 0.3rem;
  -o-border-radius: 0.3rem;
  font-weight: 500;
  color: #242324;
  background: #fff;
  padding: 0.2rem 0.5rem;
}
.mobile__parent__div .sale_box .limited_offer {
  text-align: center;
  font-size: 0.75rem;
  font-weight: 400;
  color: #fff;
  margin-bottom: 1rem;
}

.mobile__parent__div .sale_box .countdown-container {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
}

.mobile__parent__div .sale_box .countdown-box {
  font-size: 2rem;
  padding: 10px;
  font-weight: 600;
  border-radius: 5px;
  min-width: 50px;
  color: #fff;
}

.mobile__parent__div .sale_box .label {
  font-size: 0.625rem;
  font-weight: 400;
  display: block;
  margin-top: 5px;
  color: #fff;
}
.mobile__parent__div .sale_box .btn_2 {
  margin-top: 1.5rem;
  margin-left: 0.5rem;
}
.mobile__parent__div .sale__box__mobile {
  position: absolute;
  z-index: 999;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  padding: 2rem 2.5rem 0 2.5rem;
  width: 100%;
  height: 100%;
  top: 0;
  display: none;
}
@media (max-width: 767px) {
  .mobile__parent__div .sale__box__mobile {
    display: flex;
    flex-direction: column;
  }
}
.mobile__parent__div .sale__box__mobile .outer__box {
  display: flex;
  align-items: center;
}
@media only screen and (min-width: 992px) and (max-width: 1200px) {
  .mobile__parent__div .sale__box__mobile .outer__box {
    margin-bottom: 1rem;
  }
}
@media (max-width: 767px) {
  .mobile__parent__div .sale__box__mobile .outer__box {
    flex-direction: column;
  }
}
.mobile__parent__div .outer__box h5 {
  color: #fff;
  font-size: 1rem;
  text-align: center;
  font-weight: 500;
}
.mobile__parent__div .sale__box__mobile .outer__box h4 {
  color: #fff;
  font-size: 1.5rem;
  text-align: center;
  font-weight: 700;
  margin-top: 0.5rem;
  text-transform: uppercase;
}
.mobile__parent__div .sale__box__mobile .outer__box p {
  text-align: center;
  color: #fff;
  margin-top: 0.4rem;
}
.mobile__parent__div .sale__box__mobile .bottom_boxes {
  width: 100%;
}
.mobile__parent__div .sale__box__mobile .bottom_boxes .limited_offer {
  text-align: center;
  font-size: 0.75rem;
  font-weight: 400;
  color: #fff;
  margin-bottom: 0.5rem;
}
.mobile__parent__div .sale__box__mobile .bottom_boxes h6 {
  color: #fff;
  text-align: center;
  font-weight: 400;
  font-size: 1.25rem;
  margin: 0.5rem 0;
}
@media (max-width: 480px) {
  .mobile__parent__div .sale__box__mobile .bottom_boxes h6 {
    font-size: 1rem;
  }
}
.mobile__parent__div .sale__box__mobile .bottom_boxes h6 span {
  border-radius: 0.3rem;
  -webkit-border-radius: 0.3rem;
  -moz-border-radius: 0.3rem;
  -ms-border-radius: 0.3rem;
  -o-border-radius: 0.3rem;
  font-weight: 700;
  color: #fff;
  padding: 0.2rem 0.5rem;
}
.mobile__parent__div .sale__box__mobile .bottom_boxes .countdown-container {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
}
.mobile__parent__div .sale__box__mobile .bottom_boxes .countdown-container .countdown-box {
  font-size: 2rem;
  padding: 10px 10px 0.5px 10px;
  font-weight: 600;
  border-radius: 5px;
  min-width: 50px;
  color: #fff;
}
.mobile__parent__div .sale__box__mobile .bottom_boxes .countdown-container .countdown-box .label {
  font-size: 0.625rem;
  font-weight: 400;
  display: block;
  margin-top: 5px;
  color: #fff;
}
.mobile__parent__div .sale__box__mobile .bottom_boxes .offer {
  border-radius: 10px 10px 0 0;
  -webkit-border-radius: 10px 10px 0 0;
  -moz-border-radius: 10px 10px 0 0;
  -ms-border-radius: 10px 10px 0 0;
  -o-border-radius: 10px 10px 0 0;
  text-align: center;
  background: #00687f;
  padding: 1rem;
  color: #fff;
  font-size: 2rem;
  font-weight: 600;
  margin-top: 1.5rem;
}
.mobile__parent__div .sale__box__mobile .btn_2 {
  margin-top: 1.5rem;
  margin-left: 0.5rem;
}
.mobile__parent__div img {
  transition: all 0.4s ease-in-out;
  border: 0;
  position: relative;
}
@media (max-width: 767px) {
  .mobile__parent__div img {
    border-radius: 15px;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    -ms-border-radius: 15px;
    -o-border-radius: 15px;
  }
}
.mobile__parent__div::before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  background: rgb(255, 255, 255);
  background: linear-gradient(180deg, rgba(70, 67, 67, 0.32) 0%, rgba(0, 0, 0, 0.927) 100%);
  z-index: 99;
  z-index: 99;
}
@media (max-width: 767px) {
  .mobile__parent__div::before {
    border-radius: 15px;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    -ms-border-radius: 15px;
    -o-border-radius: 15px;
  }
}


/* mobile close */

@media (max-width:767px) { 
  .mobile__parent__div{
    display: block;
  }}

  @media (max-width:767px) { 
  .desktop__parent__div{
    display: none;
  }}
</style>

