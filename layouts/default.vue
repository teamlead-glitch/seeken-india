<template>
    
    <!-- product detail offcanvas Popup -->
  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <CommonQuickBuyPopup />
  </div>
  <!--product detail  offcanvas Popup close -->
  <!--search  offcanvas Popup desktop  -->
  <div class="offcanvas search__popup offcanvas-top" tabindex="-1" id="offcanvasTop"
    aria-labelledby="offcanvasTopLabel">
    <div class="offcanvas-body">
      <div class="container">
        <div class="row justify-content-center align-items-center">
          <div class="col-md-8 d-flex justify-content-center">
            <div class="subscribe_form">
              <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"><i
                  class="bi bi-x-lg"></i></button>
              <form action="# ">
                <div class="input-group input-group-lg ">
                  <input type="text " class="form-control input-lg " placeholder="Search our store">
                  <span class="input-group-btn ">
                    <button type="submit" class="btn c-theme-btn c-btn-uppercase btn-lg c-btn-bold c-btn-square "><i
                        class="bi bi-search"></i></button>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--search   offcanvas Popup close -->
  <!--search  offcanvas Popup mobile -->
  <div class="offcanvas search__popup__mobile offcanvas-top" tabindex="-1" id="offcanvasTopone"
    aria-labelledby="offcanvasTopLabel">
    <div class="offcanvas-body">
      <div class="container">
        <div class="row justify-content-end  align-items-center">
          <div class="col-md-12 d-flex justify-content-end flex-column">
            <div class="btn_forms">
              <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"><i
                  class="bi bi-arrow-left"></i></button>
              <div class="subscribe_form">
                <form action="# ">
                  <div class="input-group input-group-lg ">
                    <input type="text " class="form-control input-lg " placeholder="Search">
                    <span class="input-group-btn ">
                      <button type="submit" class="btn c-theme-btn c-btn-uppercase btn-lg c-btn-bold c-btn-square "><i
                          class="bi bi-search"></i></button>
                    </span>
                  </div>
                </form>
              </div>
            </div>
            <div class="trending__search">
              <h6>Trending Search</h6>
              <ul>
                <li>Search item 01</li>
                <li>Search item 02</li>
                <li>Search item 03</li>
                <li>Search item 04</li>
              </ul>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--search   offcanvas Popup close -->
  <!-- Modal wishlist want to add wishlist-->
  <div class="modal fade wishlist_setting" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title fs-5" id="exampleModalLabel">Add to wishlist</h3>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>Do you want to add this product to your wishlist?</p>
          <div class="col-md-12 mt-4 mb-4 d-flex justify-content-center gap-3">
            <a class="btn_2" href="index.html">Keep browsing</a> <button class="btn_1" data-bs-toggle="modal"
              data-bs-target="#exampleModal5">Add to wishlist</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal  wishlist close  -->
  <!-- Modal wishlist item added wishlist -->
  <div class="modal fade wishlist_setting" id="exampleModal5" tabindex="-1" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title fs-5" id="exampleModalLabel">Wishlist</h3>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>The item will be added to your wishlist</p>
          <div class="col-md-12 mt-4 mb-4 d-flex justify-content-center">
            <a href="index.html"><button class="btn_2">Continue shopping</button> </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal edit wishlist close  -->
  <!-- ------alert box desktop--- -->
  <div id="alertBox" class="alert-box">
    <p>We have a flash sale running with 40-70% off for a limited period and stock. <span> <a id="anchor2"
          rel="#section2">Grab your Flash Deals Now</a> </span></p>
    <button class="close-btn" onclick="closeAlert()"><i class="bi bi-x-lg"></i></button>
  </div>
  <!-- ------alert box desktop close--- -->
 
 <LayoutsDesktopMenu :categoryTree="cats" :activeIndex="activeIndex" :showSubcategories="showSubcategories"/>
 <LayoutsMobileMenu/>

  
  
      <main>
        <slot /> <!-- This is where the page content will be injected -->
      </main>

       <!-- desktop close-->
  
  
       <LayoutsFooter />
  
  
  <LazyLayoutsMobileNav />
  
   
  </template>

<script setup>

const config = useRuntimeConfig();

const QickByProduct =  {
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

// Fetch slide data during SSR
const { data: cats, error } = await useAsyncData('cats', () =>
  $fetch(`${config.public.apiBase}categories/sub`)
);
// Handle errors gracefully
if (error.value) {
  console.error('Error fetching slides:', error.value);
}

// Show subcategories when clicking a category
const showSubcategories = (index) => {
  activeIndex.value = index;
};


</script>

<style>
.error-message{
  color: red !important;
}
.success-message{
  color: green !important;
}
</style>
  