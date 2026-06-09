<template>
    <section class="footer">
    <div class="container">

      <LayoutsNewsletter/>

     


      <div class="row mt-5">
        <div class="col-md-3 col-lg-3">
          <div class="footer__logo">
            <img src="/images/logo.svg" alt="seeken" loading="lazy">
          </div>

         
              
              <div class="social-icons">
               <h5>Social Media</h5>
                <ul>
                  <li v-if="settings.fb_url"><a :href="settings.fb_url" target="blank"><i class="bi bi-facebook"></i>&nbsp;</a></li>
                  <li v-if="settings.insta_url"> <a :href="settings.insta_url" target="blank"><i class="bi bi-instagram"></i> &nbsp;</a></li>
                  <li v-if="settings.youtube_url"> <a :href="settings.youtube_url" target="blank"><i class="bi bi-youtube"></i> &nbsp;</a></li>
                  <li  v-if="settings.twitter_url"> <a :href="settings.twitter_url" target="blank"><i class="bi bi-twitter-x"></i>&nbsp;</a></li>
                  <li v-if="settings.linked_in"> <a :href="settings.linked_in" target="blank"><i class="bi bi-linkedin"></i>&nbsp;</a></li>
                </ul>
              </div>
           

        </div>
        <div class="col-md-9">
          <div class="row">
            <div class="col-md-12 col-lg-6 mb-3">
              <h5>Products</h5>
              <div class="ftr__list_2">
                <ul>
                  <li v-for="cat in categories">
                    <a :href="`/list?category=${cat.id}`">{{ cat.name }}</a>
                  </li>
                  
                </ul>
              </div>
            </div>
            <div class="col-md-6  col-lg-3 mb-3">
              <h5>About company</h5>
              <div class="ftr__list">
                <ul>
                  <li><NuxtLink to="/aboutus">About Us</NuxtLink></li>
                  <li><NuxtLink to="/contactus">Contact Us</NuxtLink></li>
                 
                  <li><NuxtLink to="/blog">Blog</NuxtLink></li>
                  <li><NuxtLink to="/faq">FAQ</NuxtLink></li>
                </ul>
              </div>
            </div>
            <div class="col-md-6  col-lg-3  mb-3">
              <h5>Support</h5>
              <div class="ftr__list">
                <ul>
                  <!-- <li><a href="#">Support centre</a></li> -->
                  <li><NuxtLink to="/contactus">Contact Us</NuxtLink></li>
                  <li>
                    <!-- <NuxtLink to="/contactus">Contact us via WhatsApp</NuxtLink> -->
                    <a  href="https://wa.me/9746420575" target="_blank"
  rel="noopener noreferrer">Contact us via WhatsApp</a>
                  </li>
                  <!-- <li><a href="#">Find a store</a></li> -->
                </ul>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="powered_by">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <ul>
            <li>© SEEKEN ELECTRONICS INDIA PRIVATE LIMITED {{ currentYear }}</li>
            <li>All Rights Reserved</li>
            <li><NuxtLink to="/terms-of-services"> Terms and Conditions</NuxtLink> </li>
            <li><NuxtLink to="/privacy-policy"> Privacy Policy</NuxtLink></li>

            <li><NuxtLink to="/shipping"> Shipping </NuxtLink></li>
            <li><NuxtLink to="/cancellation-returns"> Cancellation & Returns</NuxtLink></li>

            <li>Powered By<a href="https://phitany.com/" target="_blank"> Phitany</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>


import { inject } from 'vue';
const categories = inject('All_categories');
const settings = await useSiteSettings();
const currentYear = new Date().getFullYear();

</script>
