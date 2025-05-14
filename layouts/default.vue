<template>

  <!-- product detail offcanvas Popup -->
  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <CommonQuickBuyPopup />
  </div>
  <!--product detail  offcanvas Popup close -->
  
  
  <!--search  offcanvas Popup desktop  -->
  <div class="offcanvas search__popup offcanvas-top" tabindex="-1" id="offcanvasTop"
    aria-labelledby="offcanvasTopLabel">
    <LayoutsSearchPopupDesktop :search="handleSearch" />
  </div>
  <!--search   offcanvas Popup close -->
  
  
  <!--search  offcanvas Popup mobile -->
  <div class="offcanvas search__popup__mobile offcanvas-top" tabindex="-1" id="offcanvasTopone"
    aria-labelledby="offcanvasTopLabel">
    <LayoutsSearchPopupMobile />
  </div>
  <!--search   offcanvas Popup close -->
  
  
  <CommonAddToWishlist />


  <!-- ------alert box desktop--- -->
  <div id="alertBox" class="alert-box">
    <p>We have a flash sale running with 40-70% off for a limited period and stock. <span> <a id="anchor2"
          href="#section2">Grab your Flash Deals Now</a> </span></p>
    <!-- <button class="close-btn" onclick="closeAlert()"><i class="bi bi-x-lg"></i></button> -->
  </div>
  <!-- ------alert box desktop close--- -->

  <LayoutsDesktopMenu :categoryTree="cats" :activeIndex="activeIndex" :showSubcategories="showSubcategories" />
  <LayoutsMobileMenu />

  <main>
    <slot /> <!-- This is where the page content will be injected -->
  </main>

  <!-- desktop close-->

  <LayoutsFooter />

  <LayoutsMobileNav />

</template>

<script setup>

const config = useRuntimeConfig();

import { useQuickProduct } from '@/composables/useQuickBuy';

useQuickProduct();


const activeIndex = ref(0);

const { data: cats, error, refresh } = useFetchData('cats', 'categories/sub');
console.log(cats,'cats++')
provide('All_categories', cats);

// Show subcategories when clicking a category
const showSubcategories = (index) => {
  activeIndex.value = index;
};

const handleSearch = () => {
  console.log('search here...')
}


</script>

<style>
.error-message {
  color: red !important;
}

.success-message {
  color: green !important;
}
</style>