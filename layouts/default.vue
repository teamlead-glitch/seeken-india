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
 
 <LayoutsDesktopMenu/>
 <LayoutsMobileMenu/>

  
  
      <main>
        <slot /> <!-- This is where the page content will be injected -->
      </main>

       <!-- desktop close-->
  <section class="footer">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6">
          <div class="newsletter">
            <h4>Subscribe our Newsletter and get all of our update</h4>
          </div>
        </div>
        <div class="col-md-6 d-flex justify-content-end">
          <div class="subscribe_form">
            <form action="# ">
              <div class="input-group input-group-lg ">
                <input type="text " class="form-control input-lg " placeholder="Enter your email">
                <span class="input-group-btn ">
                  <button type="submit" class="btn c-theme-btn c-btn-uppercase btn-lg c-btn-bold c-btn-square ">Submit
                    Now</button>
                </span>
              </div>
            </form>
          </div>
        </div>
        <div class="line"></div>
      </div>
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
                  <li><a href="#">Fan</a></li>
                  <li><a href="#">LP Gas Stove</a></li>
                  <li><a href="#">Pressure Cooker</a></li>
                  <li><a href="#">Non Stick Cookware</a></li>
                  <li><a href="#">Electric Iron</a></li>
                  <li><a href="#">Smart Watch</a></li>
                  <li><a href="#">Mobile Accessories</a></li>
                </ul>
              </div>
            </div>
            <div class="col-md-3 mb-3">
              <h5>About company</h5>
              <div class="ftr__list">
                <ul>
                  <li><a href="about-us.html">About Us</a></li>
                  <li><a href="contact.html">Contact Us</a></li>
                  <li><a href="#">Press Room</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Careers</a></li>
                </ul>
              </div>
            </div>
            <div class="col-md-3 mb-3">
              <h5>Support</h5>
              <div class="ftr__list">
                <ul>
                  <li><a href="#">Support centre</a></li>
                  <li><a href="contact.html"> Contact us</a></li>
                  <li><a href="#">Contact us via WhatsApp</a></li>
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
  <!-- mmobile menu -->
  <div class="mob__navigation">
    <ul>
      <li class="active">
        <a href="index.html">
          <div class="icon"><img src="/images/home-hover-menu.svg" alt="seeken"></div>
          <div class="list"> Home</div>
        </a>
      </li>
      <li>
        <a href="shop.html">
          <div class="icon"><img src="/images/shop-menu.svg" alt="seeken"></div>
          <div class="list">Shop</div>
        </a>
      </li>
      <li>
        <a href="offers.html">
          <div class="icon"><img src="/images/offers-menu.svg" alt="seeken"></div>
          <div class="list">Offers</div>

        </a>
      </li>
      <li>
        <a href="cart.html">
          <div class="icon"><img src="/images/cart-menu.svg" alt="seeken"></div>
          <div class="list"> Cart</div>
        </a>
      </li>
      <li type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight_mobmenu"
        aria-controls="offcanvasRight">
        <div class="icon"><img src="/images/hamburg-menu.svg" alt="seeken"></div>
        <div class="list">Menu</div>
      </li>
    </ul>
  </div>
  <div class="offcanvas offcanvas-end offcanvas-mobmenus" tabindex="-1" id="offcanvasRight_mobmenu"
    aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-body">
      <div class="mobile_menu_offcanvas">
        <div class="mob__menu">
          <div class="nav"><a href="login.html">Account</a></div>
          <div class="logo"><img src="/images/logo-blue.svg" alt="logo"></div>
          <div class="search_wishlist">
            <!-- <div class="wishlist"> <a href="wishlist.html">
              <div class="icon"><img src="/images/whislist.svg" alt="search">
                <div class="count">2</div>
              </div>
            </a> </div> -->
            <div class="search">
              <div class="icon" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTopone"
                aria-controls="offcanvasTop"><img src="/images/search_icon.svg" alt="search"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="account_box">
        <div class="profile"><img src="/images/profile_icon.webp" alt="seeken" class="img-fluid"></div>
        <div class="name_designation">
          <h6>First name Last name</h6>
          <div class="phone">+91 12345 67890</div>
        </div>
      </div>
      <div class="navs">
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="shop.html">Shop</a></li>
          <li><a href="blog.html">Blog</a></li>
          <li><a href="#">Press Room</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Support Centre</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
      <div class="social__icons__mobile">
        <h5>Social Media</h5>
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
  <!-- mobile menu close -->
  
   
  </template>

<script setup>

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





</script>

<style>
.error-message{
  color: red !important;
}
.success-message{
  color: green !important;
}
</style>
  