<template>
    
    <!-- product detail offcanvas Popup -->
  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"><i
        class="bi bi-x-lg"></i></button>
    <div class="offcanvas-body">
      <div class="product_img_heading">
        <div class="row align-items-center">
          <div class="col-md-5 col-lg-6">
            <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
              <!-- Carousel Indicators (Thumbnails) -->
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" class="active"
                  aria-current="true" aria-label="Slide 1">
                  <img src="/images/detail1.webp" class="d-block w-100" alt="Thumbnail 1">
                </button>
                <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1" aria-label="Slide 2">
                  <img src="/images/detail2.webp" class="d-block w-100" alt="Thumbnail 2">
                </button>
                <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2" aria-label="Slide 3">
                  <img src="/images/detail3.webp" class="d-block w-100" alt="Thumbnail 3">
                </button>
                <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="3" aria-label="Slide 3">
                  <img src="/images/detail4.webp" class="d-block w-100" alt="Thumbnail 4">
                </button>
              </div>
       <!-- Carousel Slides -->
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="/images/detail1.webp" class="d-block w-100" alt="Slide 1">
                </div>
                <div class="carousel-item">
                  <img src="/images/detail2.webp" class="d-block w-100" alt="Slide 2">
                </div>
                <div class="carousel-item">
                  <img src="/images/detail3.webp" class="d-block w-100" alt="Slide 3">
                </div>
                <div class="carousel-item">
                  <img src="/images/detail4.webp" class="d-block w-100" alt="Slide 4">
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-7 col-lg-6">
            <div class="top__box">
              <div class="category__name">
                <div class="rating"><i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i
                  class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> 5.0
                <span>(16k Ratings)</span>
              </div>
                <h5>BLDC FAN</h5>
              </div>
            </div>
            <div class="price__feature">
              <h4>Aither Air 5 star</h4>
              <div class="price"><span>Rs. 3,500.00</span>Rs. 2,300.00 </div>
            </div>
            <div class="colors">
              <ul>
                <li>Colors</li>
                <li>
                  <div class="code active"> <img src="/images/color_code/clr-1.webp" class="img-fluid" alt="seeken"
                      loading="lazy">
                  </div>
                </li>
                <li>
                  <div class="code"><img src="/images/color_code/clr-2.webp" class="img-fluid" alt="seeken" loading="lazy">
                  </div>
                </li>
                <li>
                  <div class="code"><img src="/images/color_code/clr-3.webp" class="img-fluid" alt="seeken" loading="lazy">
                  </div>
                </li>
                <li>
                  <div class="code"><img src="/images/color_code/clr-4.webp" class="img-fluid" alt="seeken" loading="lazy">
                  </div>
                </li>
                <li>
                  <div class="code"><img src="/images/color_code/clr-2.webp" class="img-fluid" alt="seeken" loading="lazy">
                  </div>
                </li>
                <li>
                  <div class="code"><img src="/images/color_code/clr-3.webp" class="img-fluid" alt="seeken" loading="lazy">
                  </div>
                </li>
                <li>
                  <div class="code"><img src="/images/color_code/clr-4.webp" class="img-fluid" alt="seeken" loading="lazy">
                  </div>
                </li>
              </ul>
            </div>
            <div class="modals">
              <h5>Choose Modal</h5>
              <ul>
                <li>Aither Air</li>
                <li>Aither</li>
                <li>Aither 5 Star</li>
                <li>Aither 4 Star</li>
                <li>Aither 3 Star</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
     <div class="product_details">
      <div class="detail">
          <p>Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmll tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mill veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exet commodo consequat. Duis aute irure dolor.  labore et dolore magna aliqua. Ut enim ad mill veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exet commodo consequat. Duis aute irure dolor</p>
       </div>
      </div>
      <div class="full_clm">
        <div class="quantity-input">
          <button class="quantity-btn minus-btn"><i class="bi bi-dash-lg"></i></button>
          <input type="number" class="quantity" value="1" min="1" max="10">
          <button class="quantity-btn plus-btn"><i class="bi bi-plus-lg"></i></button>
        </div>
        <button class="btn_2">Add to Cart</button>
        <button class="btn_1">Buy Now</button>
      </div>
      <div class="view_detail"><a class="btn_3" href="detail.html">More Details</a></div>

    </div>
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
import { useRoute } from "vue-router";
import { onMounted, watch } from "vue";

const loadScripts = () => {
  const scripts = [
    "/js/webslidemenu.js",
    "/js/owls.js",
    "/js/main.js"
  ];

  scripts.forEach((src) => {
    const existingScript = document.querySelector(`script[src="${src}"]`);
    if (existingScript) existingScript.remove(); // Remove old script to reload

    const script = document.createElement("script");
    script.src = src;
    script.defer = true;
    document.body.appendChild(script);
  });
};

onMounted(() => {
  loadScripts();
});

const route = useRoute();
watch(route, () => {
  loadScripts(); // Reload scripts when route changes
});
</script>
  