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
  
  
  <CommonWishlist />


  <!-- ------alert box desktop--- -->
  <div id="alertBox" class="alert-box">
    <p>We have a flash sale running with 40-70% off for a limited period and stock. <span> <a id="anchor2"
          rel="#section2">Grab your Flash Deals Now</a> </span></p>
    <button class="close-btn" onclick="closeAlert()"><i class="bi bi-x-lg"></i></button>
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

const QickByProduct = {
  "title": "Product from static json",
  "description": "Product from static json Api integration is in proggress waiting for api.",
  "images": [
    "/images/detail1.webp",
    "/images/detail2.webp",
    "/images/detail3.webp",
    "/images/detail4.webp"
  ],
  "is_flashsale": true,
  "item_left": 15,
  "category_name": "Electronics",
  "original_price": 120.0,
  "sale_price": 99.99,
  "rating": 4.5,
  "review_count": 120
};


provide('QickByProduct', QickByProduct);


const activeIndex = ref(0);

const { data: cats, error, refresh } = useFetchData('cats', 'categories/sub');

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