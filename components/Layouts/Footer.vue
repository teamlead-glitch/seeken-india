<template>
    <section class="footer">
    <div class="container">

      <LayoutsNewsletter/>

     


      <div class="row mt-5">
        <div class="col-md-3">
          <div class="footer__logo">
            <img src="/images/logo.svg" alt="seeken" loading="lazy">
          </div>
        </div>
        <div class="col-md-9">
          <div class="row">
            <div class="col-md-3 mb-3">
              <h5>Products</h5>
              <div class="ftr__list">
                <ul>
                  <li v-for="cat in categories"><NuxtLink :to="`/list?category=${cat.id}`">{{ cat.name }}</NuxtLink></li>
                  
                </ul>
              </div>
            </div>
            <div class="col-md-3 mb-3">
              <h5>About company</h5>
              <div class="ftr__list">
                <ul>
                  <li><NuxtLink to="aboutus">About Us</NuxtLink></li>
                  <li><NuxtLink to="contactus">Contact Us</NuxtLink></li>
                 
                  <li><NuxtLink to="blog">Blog</NuxtLink></li>
                  <li><a href="#">Careers</a></li>
                </ul>
              </div>
            </div>
            <div class="col-md-3 mb-3">
              <h5>Support</h5>
              <div class="ftr__list">
                <ul>
                  <!-- <li><a href="#">Support centre</a></li> -->
                  <li><NuxtLink to="contactus">Contact Us</NuxtLink></li>
                  <li><NuxtLink to="contactus">Contact us via WhatsApp</NuxtLink></li>
                  <li><a href="#">Find a store</a></li>
                </ul>
              </div>
            </div>
            <div class="col-md-3">
              <h5>Social Media</h5>
              <div class="social-icons">
                <ul>
                  <li><a href="#" target="blank"><i class="bi bi-facebook"></i>&nbsp;</a></li>
                  <li> <a href="#" target="blank"><i class="bi bi-instagram"></i> &nbsp;</a></li>
                  <li> <a href="#" target="blank"><i class="bi bi-youtube"></i> &nbsp;</a></li>
                  <li> <a href="#" target="blank"><i class="bi bi-twitter-x"></i>&nbsp;</a></li>
                  <li> <a href="#" target="blank"><i class="bi bi-linkedin"></i>&nbsp;</a></li>
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
            <li>© Seeken 2025</li>
            <li>All Rights Reserved</li>
            <li><a href="">Legal &amp; Privacy</a> </li>
            <li><a href="">Your Privacy Choices</a></li>
            <li>Powered By<a href="http://www.phitany.in/" target="_blank"> Phitany</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>


import { inject } from 'vue';
const categories = inject('All_categories');

</script>