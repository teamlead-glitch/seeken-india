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
                    <button type="submit " class="btn c-theme-btn c-btn-uppercase btn-lg c-btn-bold c-btn-square "><i
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
                      <button type="submit " class="btn c-theme-btn c-btn-uppercase btn-lg c-btn-bold c-btn-square "><i
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
  <!-- desktop menu -->
  <div class="wsmenucontainer clearfix">
    <div id="overlapblackbg"></div>
    <div class="header" id="header">
      <div class="wrapper clearfix"> </div>
      <nav class="wsmenu clearfix">
        <a href="index.html">
          <div class="logo clearfix"></div>
        </a>
        <ul class="mobile-sub wsmenu-list">
          <li class="active"><a href="#">Home </a> </li>
          <li><a href="#">Shop <i class="bi bi-chevron-down"></i></a>
            <div class="megamenu clearfix">
              <div class="row">
                <div class="col-md-6">
                  <div class="full">
                    <div class="left-box">
                      <ul>
                        <li data-target="content1" class="active">Fan</li>
                        <li data-target="content2">LP Gas Stove</li>
                        <li data-target="content3">Pressure Cooker</li>
                        <li data-target="content4">Non Stick Cookware</li>
                        <li data-target="content5">Electric Iron</li>
                        <li data-target="content6">Smart Watch</li>
                        <li data-target="content7">Mobile Accessories</li>
                      </ul>
                    </div>
                    <!-- Right Box -->
                    <div class="right-box">
                      <div id="content1" class="content active">
                        <ul>
                          <li><a href="listing.html">Ceiling Fan</a> </li>
                          <li><a href="listing.html"> BLDC </a></li>
                          <li><a href="listing.html"> Pedestal Fan </a></li>
                          <li><a href="listing.html"> Wall Fan </a></li>
                          <li><a href="listing.html">Exhaust Fan</a> </li>
                        </ul>
                      </div>
                      <div id="content2" class="content">
                        <ul>
                          <li><a href="listing.html"> Glass Stove</a></li>
                          <li><a href="listing.html">Stainless Steel</a> </li>
                        </ul>
                      </div>
                      <div id="content3" class="content">
                        <ul>
                          <li><a href="listing.html"> stainless steel</a></li>
                          <li><a href="listing.html"> Aluminium</a></li>
                          <li><a href="listing.html"> Hard anodized</a></li>
                        </ul>
                      </div>
                      <div id="content4" class="content">
                        <ul>
                          <li><a href="listing.html"> Sub Category 1</a></li>
                          <li><a href="listing.html"> Sub Category 1</a></li>
                          <li><a href="listing.html"> Sub Category 1</a></li>
                        </ul>
                      </div>
                      <div id="content5" class="content">
                        <ul>
                          <li><a href="listing.html"> Sub Category 4</a></li>
                          <li><a href="listing.html">Sub Category 5</a></li>
                          <li><a href="listing.html">Sub Category 6</a></li>
                        </ul>
                      </div>
                      <div id="content6" class="content">
                        <ul>
                          <li><a href="listing.html">Sub Category 7</a></li>
                          <li><a href="listing.html">Sub Category 8</a></li>
                          <li><a href="listing.html">Sub Category 9</a></li>
                        </ul>
                      </div>
                      <div id="content7" class="content">
                        <ul>
                          <li><a href="listing.html">Sub Category 10</a></li>
                          <li><a href="listing.html">Sub Category 11</a></li>
                          <li><a href="listing.html">Sub Category 12</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>Sub Category 9
                </div>
                <div class="col-md-6 brdr_clr">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="articles">
                        <a href="#">
                          <div class="img__box">
                            <img src="/images/blog-1.webp" class="img-fluid" alt="seeken" loading="lazy">
                          </div>
                          <div class="content">
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptas quibusdam
                              quasi quisquam,
                              cum similique debitis, odio, nihil alias eveniet harum. Corrupti consectetur provident
                              dolorem quis
                              quos nostrum exercitationem sequi.</h3>
                            <a class="btn_3" href="">View more <i class="bi bi-arrow-right"></i></a>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="articles">
                        <a href="#">
                          <div class="img__box">
                            <img src="/images/blog-1.webp" class="img-fluid" alt="seeken" loading="lazy">
                          </div>
                          <div class="content">
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptas quibusdam
                              quasi quisquam,
                              cum similique debitis, odio, nihil alias eveniet harum. Corrupti consectetur provident
                              dolorem quis
                              quos nostrum exercitationem sequi.</h3>
                            <a class="btn_3" href="">View more <i class="bi bi-arrow-right"></i></a>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li><a href="b">Blog </a>
          </li>
          <li><a href="about-us.html">About Us </a>
          </li>
          <li><a href="contact.html">Contact </a>
          </li>
          <li class="right">
            <ul>
              <li>
                <div class="icon" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop"
                  aria-controls="offcanvasTop"><img src="/images/search_icon.svg" alt="search"></div>
              </li>
              <li class="profile-container">
                <div class="icon profile-icon">
                  <img src="/images/profile_icon.svg" alt="profile">
                </div>
                <div class="dropdown-menu">
                  <ul>
                    <li>
                      <div class="profile">
                        <div class="profile_icon"><img src="/images/profile_icon.webp" alt=""></div>
                        <h6>Hi, Firstname!</h6>
                      </div>
                    </li>
                    <li><a href="profile.html">My Page</a></li>
                    <li><a href="order-history.html">Orders</a></li>
                    <li><a href="wishlist.html">Wishlist</a></li>
                    <li><a href="#">Logout</a></li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="cart.html">
                  <div class="icon"><img src="/images/cart_icon.svg" alt="search">
                    <div class="count">10</div>
                  </div>
                </a>
              </li>
              <li><a href="wishlist.html">
                  <div class="icon"><img src="/images/whislist.svg" alt="search">
                    <div class="count">2</div>
                  </div>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <!--Menu HTML Code-->
    </div>
  </div>
  <!-- desktop menu close -->

  <!-- mobile menu -->
  <div class="mobile_menu">
    <div class="mob__menu">
      <div class="nav"><a href="#">Home</a></div>
      <div class="logo"><a href="index.html"><img src="/images/logo-blue.svg" alt="logo"></a>  </div>
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
    <div class="grab_sale">
      <div class="close-btns">
        <i class="bi bi-chevron-down"></i>
      </div>
      <h6>Grab your Flash Deals Now</h6>
      <p style="display: none;">We have a flash sale running with 40-70% off for a limited period and stock.</p>
    </div>
  </div>
  <!-- mobile menu close -->
  <!-- slider -->
  <div class="intro">
    <a id="anchor1" rel="#section1">
      <div class="arrow"><img src="/images/arrow.svg" alt="seeken"></div>
    </a>
    <div class="banner owl-carousel owl-theme">
      <div class="item">
        <img src="/images/banner1.webp" class="img-fluid banner__desk" alt="">
        <img src="/images/mob-banner-1.webp" class="img-fluid banner__mob" alt="">
        <div class="slider-caption">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <h6>Lorum ipsum</h6>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br> Ut ut libero sit amet sem pharetra
                  facilisis. </p>
                <div class="btn_boxes">
                  <a class="btn_1" href="#">Buy </a>
                  <a class="btn_2" href="#">Learn More </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="item">
        <img src="/images/banner2.webp" class="img-fluid banner__desk" alt="">
        <img src="/images/mob-banner-2.webp" class="img-fluid banner__mob" alt="">
        <div class="slider-caption">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <h6>Lorum ipsum</h6>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br> Ut ut libero sit amet sem pharetra
                  facilisis. </p>
                <div class="btn_boxes">
                  <a class="btn_1" href="#">Buy </a>
                  <a class="btn_2" href="#">Learn More </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Custom Thumbnails with Text -->
    <div class="owl-thumbs">
      <div class="owl-thumb-item" data-position="0">
        <img src="/images/banner1.webp" alt="Thumb 1">
        <div class="texts">
          <h4><span>Next</span>Lorem ipsum dolor..</h4>
        </div>
      </div>
      <div class="owl-thumb-item" data-position="1">
        <img src="/images/banner2.webp" alt="Thumb 2">
        <div class="texts">
          <h4><span>Next</span>Lorem ipsum dolor..</h4>
        </div>
      </div>
      <div class="owl-thumb-item" data-position="2">
        <img src="/images/banner1.webp" alt="Thumb 3">
        <div class="texts">
          <h4><span>Next</span>Lorem ipsum dolor..</h4>
        </div>
      </div>
      <div class="owl-thumb-item" data-position="3">
        <img src="/images/banner2.webp" alt="Thumb 4">
        <div class="texts">
          <h4><span>Next</span>Lorem ipsum dolor..</h4>
        </div>
      </div>
    </div>
  </div>
  <!-- slider -->
  <section class="products__container" id="section1">
    <div class="container-fluid p-0">
      <div class="row">
        <div class="col-md-4 p-0">
          <div class="products__img">
            <img src="/images/product_1.webp" class="img-fluid" alt="seeken">
            <div class="contents">
              <h6>Lorum ipsum</h6>
              <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, </h3>
              <a class="btn_1" href="#">Buy </a>
            </div>
          </div>
        </div>
        <div class="col-md-4 p-0">
          <div class="products__img">
            <img src="/images/product_2.webp" class="img-fluid" alt="seeken">
            <div class="contents">
              <h6>Lorum ipsum</h6>
              <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, </h3>
              <a class="btn_1" href="#">Buy </a>
            </div>
          </div>
        </div>
        <div class="col-md-4 p-0">
          <div class="products__img">
            <img src="/images/product_3.webp" class="img-fluid" alt="seeken">
            <div class="contents">
              <h6>Lorum ipsum</h6>
              <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, </h3>
              <a class="btn_1" href="#">Buy </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="flash__sale" id="section2">
    <div class="flashsale owl-carousel owl-theme">
      <div class="item">
        <img src="/images/flash_slae_img.webp" class="img-fluid banner__desk" alt="seeken" loading="lazy">
        <img src="/images/flash_sale_mob.webp" class="img-fluid banner__mob" alt="seeken" loading="lazy">
        <!-- desktop  -->
        <div class="sale_box">
          <h5>FLASH SALE</h5>
          <div class="outer__box">
            <div class="offer">50% OFF</div>
            <div class="prices">₹4,000 <span>₹8,000</span></div>
          </div>
          <h6> <span>10 more</span> items remaining!</h6>
          <div class="limiter_offer">
            <div class="limited_offer">LIMITED TIME OFFER</div>
            <div class="countdown-container" data-endtime="10">
              <div class="countdown-box">
                <span id="days">25</span>
                <span class="label">DAYS</span>
              </div>
              <div class="countdown-box">
                <span id="hours">20</span>
                <span class="label">HOURS</span>
              </div>
              <div class="countdown-box">
                <span id="minutes">10</span>
                <span class="label">MINUTES</span>
              </div>
              <div class="countdown-box">
                <span id="seconds">5</span>
                <span class="label">SECONDS</span>
              </div>
            </div>
            <a class="btn_1" href="#">Add to cart </a>
            <a class="btn_2" href="#">Buy Now </a>
          </div>
        </div>
        <!-- desktop close  -->

        <!-- mobile view -->
        <a href="#">
          <div class="sale__box__mobile ">
            <div class="outer__box">
              <h5>FLASH SALE</h5>
              <h4>Granite Tawa</h4>
              <p>Lorem ipsum dolor sit alur. Lorem ipsum dolor sit alur.</p>
            </div>
            <div class="bottom_boxes">
              <div class="limited_offer">LIMITED TIME OFFER</div>
              <div class="countdown-container" data-endtime="10">
                <div class="countdown-box">
                  <span id="days">25</span>
                  <span class="label">DAYS</span>
                </div>
                <div class="countdown-box">
                  <span id="hours">20</span>
                  <span class="label">HOURS</span>
                </div>
                <div class="countdown-box">
                  <span id="minutes">10</span>
                  <span class="label">MINUTES</span>
                </div>
                <div class="countdown-box">
                  <span id="seconds">5</span>
                  <span class="label">SECONDS</span>
                </div>
              </div>
              <h6> <span>10 more</span> items remaining!</h6>
              <div class="offer">50% OFF</div>
            </div>
          </div>
        </a>
        <a href="#">
          <div class="sale__box__mobile ">
            <div class="outer__box">
              <h5>FLASH SALE</h5>
              <h4>Granite Tawa</h4>
              <p>Lorem ipsum dolor sit alur. Lorem ipsum dolor sit alur.</p>
            </div>
            <div class="bottom_boxes">
              <div class="limited_offer">LIMITED TIME OFFER</div>
              <div class="countdown-container" data-endtime="10">
                <div class="countdown-box">
                  <span id="days">25</span>
                  <span class="label">DAYS</span>
                </div>
                <div class="countdown-box">
                  <span id="hours">20</span>
                  <span class="label">HOURS</span>
                </div>
                <div class="countdown-box">
                  <span id="minutes">10</span>
                  <span class="label">MINUTES</span>
                </div>
                <div class="countdown-box">
                  <span id="seconds">5</span>
                  <span class="label">SECONDS</span>
                </div>
              </div>
              <h6> <span>10 more</span> items remaining!</h6>
              <div class="offer">50% OFF</div>
            </div>
          </div>
        </a>
        <a href="#">
          <div class="sale__box__mobile ">
            <div class="outer__box">
              <h5>FLASH SALE</h5>
              <h4>Granite Tawa</h4>
              <p>Lorem ipsum dolor sit alur. Lorem ipsum dolor sit alur.</p>
            </div>
            <div class="bottom_boxes">
              <div class="limited_offer">LIMITED TIME OFFER</div>
              <div class="countdown-container" data-endtime="10">
                <div class="countdown-box">
                  <span id="days">25</span>
                  <span class="label">DAYS</span>
                </div>
                <div class="countdown-box">
                  <span id="hours">20</span>
                  <span class="label">HOURS</span>
                </div>
                <div class="countdown-box">
                  <span id="minutes">10</span>
                  <span class="label">MINUTES</span>
                </div>
                <div class="countdown-box">
                  <span id="seconds">5</span>
                  <span class="label">SECONDS</span>
                </div>
              </div>
              <h6> <span>10 more</span> items remaining!</h6>
              <div class="offer">50% OFF</div>
            </div>
          </div>
        </a>
        <a href="#">
          <div class="sale__box__mobile ">
            <div class="outer__box">
              <h5>FLASH SALE</h5>
              <h4>Granite Tawa</h4>
              <p>Lorem ipsum dolor sit alur. Lorem ipsum dolor sit alur.</p>
            </div>
            <div class="bottom_boxes">
              <div class="limited_offer">LIMITED TIME OFFER</div>
              <div class="countdown-container" data-endtime="10">
                <div class="countdown-box">
                  <span id="days">25</span>
                  <span class="label">DAYS</span>
                </div>
                <div class="countdown-box">
                  <span id="hours">20</span>
                  <span class="label">HOURS</span>
                </div>
                <div class="countdown-box">
                  <span id="minutes">10</span>
                  <span class="label">MINUTES</span>
                </div>
                <div class="countdown-box">
                  <span id="seconds">5</span>
                  <span class="label">SECONDS</span>
                </div>
              </div>
              <h6> <span>10 more</span> items remaining!</h6>
              <div class="offer">50% OFF</div>
            </div>
          </div>
        </a>
        <a href="#">
          <div class="sale__box__mobile ">
            <div class="outer__box">
              <h5>FLASH SALE</h5>
              <h4>Granite Tawa</h4>
              <p>Lorem ipsum dolor sit alur. Lorem ipsum dolor sit alur.</p>
            </div>
            <div class="bottom_boxes">
              <div class="limited_offer">LIMITED TIME OFFER</div>
              <div class="countdown-container" data-endtime="10">
                <div class="countdown-box">
                  <span id="days">25</span>
                  <span class="label">DAYS</span>
                </div>
                <div class="countdown-box">
                  <span id="hours">20</span>
                  <span class="label">HOURS</span>
                </div>
                <div class="countdown-box">
                  <span id="minutes">10</span>
                  <span class="label">MINUTES</span>
                </div>
                <div class="countdown-box">
                  <span id="seconds">5</span>
                  <span class="label">SECONDS</span>
                </div>
              </div>
              <h6> <span>10 more</span> items remaining!</h6>
              <div class="offer">50% OFF</div>
            </div>
          </div>
        </a>
        <!-- mobile view -->
      </div>
      <div class="item">
        <img src="/images/flash_slae_img.webp" class="img-fluid banner__desk" alt="seeken" loading="lazy">
        <img src="/images/flash_sale_mob.webp" class="img-fluid banner__mob" alt="seeken" loading="lazy">
        <!-- desktop  -->
        <div class="sale_box">
          <h5>FLASH SALE</h5>
          <div class="outer__box">
            <div class="offer">50% OFF</div>
            <div class="prices">₹4,000 <span>₹8,000</span></div>
          </div>
          <h6> <span>10 more</span> items remaining!</h6>
          <div class="limiter_offer">
            <div class="limited_offer">LIMITED TIME OFFER</div>
            <div class="countdown-container" data-endtime="10">
              <div class="countdown-box">
                <span id="days">25</span>
                <span class="label">DAYS</span>
              </div>
              <div class="countdown-box">
                <span id="hours">20</span>
                <span class="label">HOURS</span>
              </div>
              <div class="countdown-box">
                <span id="minutes">10</span>
                <span class="label">MINUTES</span>
              </div>
              <div class="countdown-box">
                <span id="seconds">5</span>
                <span class="label">SECONDS</span>
              </div>
            </div>
            <a class="btn_1" href="#">Add to cart </a>
            <a class="btn_2" href="#">Buy Now </a>
          </div>
        </div>
        <!-- desktop close  -->

        <!-- mobile view -->
        <a href="#">
          <div class="sale__box__mobile ">
            <div class="outer__box">
              <h5>FLASH SALE</h5>
              <h4>Granite Tawa</h4>
              <p>Lorem ipsum dolor sit alur. Lorem ipsum dolor sit alur.</p>
            </div>
            <div class="bottom_boxes">
              <div class="limited_offer">LIMITED TIME OFFER</div>
              <div class="countdown-container" data-endtime="10">
                <div class="countdown-box">
                  <span id="days">25</span>
                  <span class="label">DAYS</span>
                </div>
                <div class="countdown-box">
                  <span id="hours">20</span>
                  <span class="label">HOURS</span>
                </div>
                <div class="countdown-box">
                  <span id="minutes">10</span>
                  <span class="label">MINUTES</span>
                </div>
                <div class="countdown-box">
                  <span id="seconds">5</span>
                  <span class="label">SECONDS</span>
                </div>
              </div>
              <h6> <span>10 more</span> items remaining!</h6>
              <div class="offer">50% OFF</div>
            </div>
          </div>
        </a>
        <a href="#">
          <div class="sale__box__mobile ">
            <div class="outer__box">
              <h5>FLASH SALE</h5>
              <h4>Granite Tawa</h4>
              <p>Lorem ipsum dolor sit alur. Lorem ipsum dolor sit alur.</p>
            </div>
            <div class="bottom_boxes">
              <div class="limited_offer">LIMITED TIME OFFER</div>
              <div class="countdown-container" data-endtime="10">
                <div class="countdown-box">
                  <span id="days">25</span>
                  <span class="label">DAYS</span>
                </div>
                <div class="countdown-box">
                  <span id="hours">20</span>
                  <span class="label">HOURS</span>
                </div>
                <div class="countdown-box">
                  <span id="minutes">10</span>
                  <span class="label">MINUTES</span>
                </div>
                <div class="countdown-box">
                  <span id="seconds">5</span>
                  <span class="label">SECONDS</span>
                </div>
              </div>
              <h6> <span>10 more</span> items remaining!</h6>
              <div class="offer">50% OFF</div>
            </div>
          </div>
        </a>
        <a href="#">
          <div class="sale__box__mobile ">
            <div class="outer__box">
              <h5>FLASH SALE</h5>
              <h4>Granite Tawa</h4>
              <p>Lorem ipsum dolor sit alur. Lorem ipsum dolor sit alur.</p>
            </div>
            <div class="bottom_boxes">
              <div class="limited_offer">LIMITED TIME OFFER</div>
              <div class="countdown-container" data-endtime="10">
                <div class="countdown-box">
                  <span id="days">25</span>
                  <span class="label">DAYS</span>
                </div>
                <div class="countdown-box">
                  <span id="hours">20</span>
                  <span class="label">HOURS</span>
                </div>
                <div class="countdown-box">
                  <span id="minutes">10</span>
                  <span class="label">MINUTES</span>
                </div>
                <div class="countdown-box">
                  <span id="seconds">5</span>
                  <span class="label">SECONDS</span>
                </div>
              </div>
              <h6> <span>10 more</span> items remaining!</h6>
              <div class="offer">50% OFF</div>
            </div>
          </div>
        </a>
        <a href="#">
          <div class="sale__box__mobile ">
            <div class="outer__box">
              <h5>FLASH SALE</h5>
              <h4>Granite Tawa</h4>
              <p>Lorem ipsum dolor sit alur. Lorem ipsum dolor sit alur.</p>
            </div>
            <div class="bottom_boxes">
              <div class="limited_offer">LIMITED TIME OFFER</div>
              <div class="countdown-container" data-endtime="10">
                <div class="countdown-box">
                  <span id="days">25</span>
                  <span class="label">DAYS</span>
                </div>
                <div class="countdown-box">
                  <span id="hours">20</span>
                  <span class="label">HOURS</span>
                </div>
                <div class="countdown-box">
                  <span id="minutes">10</span>
                  <span class="label">MINUTES</span>
                </div>
                <div class="countdown-box">
                  <span id="seconds">5</span>
                  <span class="label">SECONDS</span>
                </div>
              </div>
              <h6> <span>10 more</span> items remaining!</h6>
              <div class="offer">50% OFF</div>
            </div>
          </div>
        </a>
        <a href="#">
          <div class="sale__box__mobile ">
            <div class="outer__box">
              <h5>FLASH SALE</h5>
              <h4>Granite Tawa</h4>
              <p>Lorem ipsum dolor sit alur. Lorem ipsum dolor sit alur.</p>
            </div>
            <div class="bottom_boxes">
              <div class="limited_offer">LIMITED TIME OFFER</div>
              <div class="countdown-container" data-endtime="10">
                <div class="countdown-box">
                  <span id="days">25</span>
                  <span class="label">DAYS</span>
                </div>
                <div class="countdown-box">
                  <span id="hours">20</span>
                  <span class="label">HOURS</span>
                </div>
                <div class="countdown-box">
                  <span id="minutes">10</span>
                  <span class="label">MINUTES</span>
                </div>
                <div class="countdown-box">
                  <span id="seconds">5</span>
                  <span class="label">SECONDS</span>
                </div>
              </div>
              <h6> <span>10 more</span> items remaining!</h6>
              <div class="offer">50% OFF</div>
            </div>
          </div>
        </a>
        <!-- mobile view -->
      </div>
      <div class="item">
        <img src="/images/flash_slae_img.webp" class="img-fluid banner__desk" alt="seeken" loading="lazy">
        <img src="/images/flash_sale_mob.webp" class="img-fluid banner__mob" alt="seeken" loading="lazy">
        <!-- desktop  -->
        <div class="sale_box">
          <h5>FLASH SALE</h5>
          <div class="outer__box">
            <div class="offer">50% OFF</div>
            <div class="prices">₹4,000 <span>₹8,000</span></div>
          </div>
          <h6> <span>10 more</span> items remaining!</h6>
          <div class="limiter_offer">
            <div class="limited_offer">LIMITED TIME OFFER</div>
            <div class="countdown-container" data-endtime="10">
              <div class="countdown-box">
                <span id="days">25</span>
                <span class="label">DAYS</span>
              </div>
              <div class="countdown-box">
                <span id="hours">20</span>
                <span class="label">HOURS</span>
              </div>
              <div class="countdown-box">
                <span id="minutes">10</span>
                <span class="label">MINUTES</span>
              </div>
              <div class="countdown-box">
                <span id="seconds">5</span>
                <span class="label">SECONDS</span>
              </div>
            </div>
            <a class="btn_1" href="#">Add to cart </a>
            <a class="btn_2" href="#">Buy Now </a>
          </div>
        </div>
        <!-- desktop close  -->

        <!-- mobile view -->
        <a href="#">
          <div class="sale__box__mobile ">
            <div class="outer__box">
              <h5>FLASH SALE</h5>
              <h4>Granite Tawa</h4>
              <p>Lorem ipsum dolor sit alur. Lorem ipsum dolor sit alur.</p>
            </div>
            <div class="bottom_boxes">
              <div class="limited_offer">LIMITED TIME OFFER</div>
              <div class="countdown-container" data-endtime="10">
                <div class="countdown-box">
                  <span id="days">25</span>
                  <span class="label">DAYS</span>
                </div>
                <div class="countdown-box">
                  <span id="hours">20</span>
                  <span class="label">HOURS</span>
                </div>
                <div class="countdown-box">
                  <span id="minutes">10</span>
                  <span class="label">MINUTES</span>
                </div>
                <div class="countdown-box">
                  <span id="seconds">5</span>
                  <span class="label">SECONDS</span>
                </div>
              </div>
              <h6> <span>10 more</span> items remaining!</h6>
              <div class="offer">50% OFF</div>
            </div>
          </div>
        </a>
        <a href="#">
          <div class="sale__box__mobile ">
            <div class="outer__box">
              <h5>FLASH SALE</h5>
              <h4>Granite Tawa</h4>
              <p>Lorem ipsum dolor sit alur. Lorem ipsum dolor sit alur.</p>
            </div>
            <div class="bottom_boxes">
              <div class="limited_offer">LIMITED TIME OFFER</div>
              <div class="countdown-container" data-endtime="10">
                <div class="countdown-box">
                  <span id="days">25</span>
                  <span class="label">DAYS</span>
                </div>
                <div class="countdown-box">
                  <span id="hours">20</span>
                  <span class="label">HOURS</span>
                </div>
                <div class="countdown-box">
                  <span id="minutes">10</span>
                  <span class="label">MINUTES</span>
                </div>
                <div class="countdown-box">
                  <span id="seconds">5</span>
                  <span class="label">SECONDS</span>
                </div>
              </div>
              <h6> <span>10 more</span> items remaining!</h6>
              <div class="offer">50% OFF</div>
            </div>
          </div>
        </a>
        <a href="#">
          <div class="sale__box__mobile ">
            <div class="outer__box">
              <h5>FLASH SALE</h5>
              <h4>Granite Tawa</h4>
              <p>Lorem ipsum dolor sit alur. Lorem ipsum dolor sit alur.</p>
            </div>
            <div class="bottom_boxes">
              <div class="limited_offer">LIMITED TIME OFFER</div>
              <div class="countdown-container" data-endtime="10">
                <div class="countdown-box">
                  <span id="days">25</span>
                  <span class="label">DAYS</span>
                </div>
                <div class="countdown-box">
                  <span id="hours">20</span>
                  <span class="label">HOURS</span>
                </div>
                <div class="countdown-box">
                  <span id="minutes">10</span>
                  <span class="label">MINUTES</span>
                </div>
                <div class="countdown-box">
                  <span id="seconds">5</span>
                  <span class="label">SECONDS</span>
                </div>
              </div>
              <h6> <span>10 more</span> items remaining!</h6>
              <div class="offer">50% OFF</div>
            </div>
          </div>
        </a>
        <a href="#">
          <div class="sale__box__mobile ">
            <div class="outer__box">
              <h5>FLASH SALE</h5>
              <h4>Granite Tawa</h4>
              <p>Lorem ipsum dolor sit alur. Lorem ipsum dolor sit alur.</p>
            </div>
            <div class="bottom_boxes">
              <div class="limited_offer">LIMITED TIME OFFER</div>
              <div class="countdown-container" data-endtime="10">
                <div class="countdown-box">
                  <span id="days">25</span>
                  <span class="label">DAYS</span>
                </div>
                <div class="countdown-box">
                  <span id="hours">20</span>
                  <span class="label">HOURS</span>
                </div>
                <div class="countdown-box">
                  <span id="minutes">10</span>
                  <span class="label">MINUTES</span>
                </div>
                <div class="countdown-box">
                  <span id="seconds">5</span>
                  <span class="label">SECONDS</span>
                </div>
              </div>
              <h6> <span>10 more</span> items remaining!</h6>
              <div class="offer">50% OFF</div>
            </div>
          </div>
        </a>
        <a href="#">
          <div class="sale__box__mobile ">
            <div class="outer__box">
              <h5>FLASH SALE</h5>
              <h4>Granite Tawa</h4>
              <p>Lorem ipsum dolor sit alur. Lorem ipsum dolor sit alur.</p>
            </div>
            <div class="bottom_boxes">
              <div class="limited_offer">LIMITED TIME OFFER</div>
              <div class="countdown-container" data-endtime="10">
                <div class="countdown-box">
                  <span id="days">25</span>
                  <span class="label">DAYS</span>
                </div>
                <div class="countdown-box">
                  <span id="hours">20</span>
                  <span class="label">HOURS</span>
                </div>
                <div class="countdown-box">
                  <span id="minutes">10</span>
                  <span class="label">MINUTES</span>
                </div>
                <div class="countdown-box">
                  <span id="seconds">5</span>
                  <span class="label">SECONDS</span>
                </div>
              </div>
              <h6> <span>10 more</span> items remaining!</h6>
              <div class="offer">50% OFF</div>
            </div>
          </div>
        </a>
        <!-- mobile view -->
      </div>
      <div class="item">
        <img src="/images/flash_slae_img.webp" class="img-fluid banner__desk" alt="seeken" loading="lazy">
        <img src="/images/flash_sale_mob.webp" class="img-fluid banner__mob" alt="seeken" loading="lazy">
        <!-- desktop  -->
        <div class="sale_box">
          <h5>FLASH SALE</h5>
          <div class="outer__box">
            <div class="offer">50% OFF</div>
            <div class="prices">₹4,000 <span>₹8,000</span></div>
          </div>
          <h6> <span>10 more</span> items remaining!</h6>
          <div class="limiter_offer">
            <div class="limited_offer">LIMITED TIME OFFER</div>
            <div class="countdown-container" data-endtime="10">
              <div class="countdown-box">
                <span id="days">25</span>
                <span class="label">DAYS</span>
              </div>
              <div class="countdown-box">
                <span id="hours">20</span>
                <span class="label">HOURS</span>
              </div>
              <div class="countdown-box">
                <span id="minutes">10</span>
                <span class="label">MINUTES</span>
              </div>
              <div class="countdown-box">
                <span id="seconds">5</span>
                <span class="label">SECONDS</span>
              </div>
            </div>
            <a class="btn_1" href="#">Add to cart </a>
            <a class="btn_2" href="#">Buy Now </a>
          </div>
        </div>
        <!-- desktop close  -->

        <!-- mobile view -->
        <a href="#">
          <div class="sale__box__mobile ">
            <div class="outer__box">
              <h5>FLASH SALE</h5>
              <h4>Granite Tawa</h4>
              <p>Lorem ipsum dolor sit alur. Lorem ipsum dolor sit alur.</p>
            </div>
            <div class="bottom_boxes">
              <div class="limited_offer">LIMITED TIME OFFER</div>
              <div class="countdown-container" data-endtime="10">
                <div class="countdown-box">
                  <span id="days">25</span>
                  <span class="label">DAYS</span>
                </div>
                <div class="countdown-box">
                  <span id="hours">20</span>
                  <span class="label">HOURS</span>
                </div>
                <div class="countdown-box">
                  <span id="minutes">10</span>
                  <span class="label">MINUTES</span>
                </div>
                <div class="countdown-box">
                  <span id="seconds">5</span>
                  <span class="label">SECONDS</span>
                </div>
              </div>
              <h6> <span>10 more</span> items remaining!</h6>
              <div class="offer">50% OFF</div>
            </div>
          </div>
        </a>
        <a href="#">
          <div class="sale__box__mobile ">
            <div class="outer__box">
              <h5>FLASH SALE</h5>
              <h4>Granite Tawa</h4>
              <p>Lorem ipsum dolor sit alur. Lorem ipsum dolor sit alur.</p>
            </div>
            <div class="bottom_boxes">
              <div class="limited_offer">LIMITED TIME OFFER</div>
              <div class="countdown-container" data-endtime="10">
                <div class="countdown-box">
                  <span id="days">25</span>
                  <span class="label">DAYS</span>
                </div>
                <div class="countdown-box">
                  <span id="hours">20</span>
                  <span class="label">HOURS</span>
                </div>
                <div class="countdown-box">
                  <span id="minutes">10</span>
                  <span class="label">MINUTES</span>
                </div>
                <div class="countdown-box">
                  <span id="seconds">5</span>
                  <span class="label">SECONDS</span>
                </div>
              </div>
              <h6> <span>10 more</span> items remaining!</h6>
              <div class="offer">50% OFF</div>
            </div>
          </div>
        </a>
        <a href="#">
          <div class="sale__box__mobile ">
            <div class="outer__box">
              <h5>FLASH SALE</h5>
              <h4>Granite Tawa</h4>
              <p>Lorem ipsum dolor sit alur. Lorem ipsum dolor sit alur.</p>
            </div>
            <div class="bottom_boxes">
              <div class="limited_offer">LIMITED TIME OFFER</div>
              <div class="countdown-container" data-endtime="10">
                <div class="countdown-box">
                  <span id="days">25</span>
                  <span class="label">DAYS</span>
                </div>
                <div class="countdown-box">
                  <span id="hours">20</span>
                  <span class="label">HOURS</span>
                </div>
                <div class="countdown-box">
                  <span id="minutes">10</span>
                  <span class="label">MINUTES</span>
                </div>
                <div class="countdown-box">
                  <span id="seconds">5</span>
                  <span class="label">SECONDS</span>
                </div>
              </div>
              <h6> <span>10 more</span> items remaining!</h6>
              <div class="offer">50% OFF</div>
            </div>
          </div>
        </a>
        <a href="#">
          <div class="sale__box__mobile ">
            <div class="outer__box">
              <h5>FLASH SALE</h5>
              <h4>Granite Tawa</h4>
              <p>Lorem ipsum dolor sit alur. Lorem ipsum dolor sit alur.</p>
            </div>
            <div class="bottom_boxes">
              <div class="limited_offer">LIMITED TIME OFFER</div>
              <div class="countdown-container" data-endtime="10">
                <div class="countdown-box">
                  <span id="days">25</span>
                  <span class="label">DAYS</span>
                </div>
                <div class="countdown-box">
                  <span id="hours">20</span>
                  <span class="label">HOURS</span>
                </div>
                <div class="countdown-box">
                  <span id="minutes">10</span>
                  <span class="label">MINUTES</span>
                </div>
                <div class="countdown-box">
                  <span id="seconds">5</span>
                  <span class="label">SECONDS</span>
                </div>
              </div>
              <h6> <span>10 more</span> items remaining!</h6>
              <div class="offer">50% OFF</div>
            </div>
          </div>
        </a>
        <a href="#">
          <div class="sale__box__mobile ">
            <div class="outer__box">
              <h5>FLASH SALE</h5>
              <h4>Granite Tawa</h4>
              <p>Lorem ipsum dolor sit alur. Lorem ipsum dolor sit alur.</p>
            </div>
            <div class="bottom_boxes">
              <div class="limited_offer">LIMITED TIME OFFER</div>
              <div class="countdown-container" data-endtime="10">
                <div class="countdown-box">
                  <span id="days">25</span>
                  <span class="label">DAYS</span>
                </div>
                <div class="countdown-box">
                  <span id="hours">20</span>
                  <span class="label">HOURS</span>
                </div>
                <div class="countdown-box">
                  <span id="minutes">10</span>
                  <span class="label">MINUTES</span>
                </div>
                <div class="countdown-box">
                  <span id="seconds">5</span>
                  <span class="label">SECONDS</span>
                </div>
              </div>
              <h6> <span>10 more</span> items remaining!</h6>
              <div class="offer">50% OFF</div>
            </div>
          </div>
        </a>
        <!-- mobile view -->
      </div>
    </div>
  </section>

  <!-- whats new desktop -->
  <section class="new__products">
    <div class="container">
      <div class="row">
        <div class="col-md-12 mb-4">
          <h3>What's New</h3>
        </div>
        <div class="col-md-4">
          <div class="new_products">
            <div class="content">
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, dolore quia possimus rerum voluptate
                corporis deserunt et, </h3>
              <div class="button__box"><a href="" class="btn_3">Learn More <i class="bi bi-chevron-right"></i></a><a
                  href="" class="btn_3">Buy Now <i class="bi bi-chevron-right"></i></a></div>
            </div>
            <img src="/images/new_product_1.webp" class="img-fluid" alt="seeken" loading="lazy">
          </div>
        </div>
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-8">
              <div class="new_products">
                <div class="content content_center">
                  <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, dolore quia possimus rerum voluptate
                    corporis deserunt et, </h3>
                  <div class="button__box"><a href="" class="btn_3">Learn More <i class="bi bi-chevron-right"></i></a><a
                      href="" class="btn_3">Buy Now <i class="bi bi-chevron-right"></i></a></div>
                </div><img src="/images/new_product_2.webp" class="img-fluid" alt="seeken" loading="lazy">
              </div>
            </div>
            <div class="col-md-4">
              <div class="new_products">
                <div class="content content_bottom">
                  <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, dolore quia possimus rerum voluptate
                    corporis deserunt et, </h3>
                  <div class="button__box"><a href="" class="btn_3">Learn More <i class="bi bi-chevron-right"></i></a><a
                      href="" class="btn_3">Buy Now <i class="bi bi-chevron-right"></i></a></div>
                </div><img src="/images/new_product_3.webp" class="img-fluid" alt="seeken" loading="lazy">
              </div>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-md-4">
              <div class="new_products">
                <div class="content content_top">
                  <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, dolore quia possimus rerum voluptate
                    corporis deserunt et, </h3>
                  <div class="button__box"><a href="" class="btn_3">Learn More <i class="bi bi-chevron-right"></i></a><a
                      href="" class="btn_3">Buy Now <i class="bi bi-chevron-right"></i></a></div>
                </div><img src="/images/new_product_4.webp" class="img-fluid" alt="seeken" loading="lazy">
              </div>
            </div>
            <div class="col-md-8">
              <div class="new_products">
                <div class="content content_center">
                  <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, dolore quia possimus rerum voluptate
                    corporis deserunt et, </h3>
                  <div class="button__box"><a href="" class="btn_3">Learn More <i class="bi bi-chevron-right"></i></a><a
                      href="" class="btn_3">Buy Now <i class="bi bi-chevron-right"></i></a></div>
                </div><img src="/images/new_product_5.webp" class="img-fluid" alt="seeken" loading="lazy">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- whats new desktop close -->

  <!-- whats new  mobile -->
  <section class="new__products__mobile">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h3>What's New</h3>
        </div>
        <div class="col-md-12 mt-1">
          <div class="swiper mySwiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img src="/images/whats_new1.jpg" alt="intersight" class="img-fluid">
                <div class="contents">
                  <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, dolore quia possimus rerum voluptate
                    corporis deserunt et, </h3>
                  <div class="button__box"><a href="" class="btn_3">Learn More <i class="bi bi-chevron-right"></i></a><a
                      href="" class="btn_3">Buy Now <i class="bi bi-chevron-right"></i></a></div>
                </div>
              </div>
              <div class="swiper-slide">
                <img src="/images/whats_new1.jpg" alt="intersight" class="img-fluid">
                <div class="contents">
                  <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, dolore quia possimus rerum voluptate
                    corporis deserunt et, </h3>
                  <div class="button__box"><a href="" class="btn_3">Learn More <i class="bi bi-chevron-right"></i></a><a
                      href="" class="btn_3">Buy Now <i class="bi bi-chevron-right"></i></a></div>
                </div>
              </div>
              <div class="swiper-slide">
                <img src="/images/whats_new1.jpg" alt="intersight" class="img-fluid">
                <div class="contents">
                  <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, dolore quia possimus rerum voluptate
                    corporis deserunt et, </h3>
                  <div class="button__box"><a href="" class="btn_3">Learn More <i class="bi bi-chevron-right"></i></a><a
                      href="" class="btn_3">Buy Now <i class="bi bi-chevron-right"></i></a></div>
                </div>
              </div>
            </div>
            <!-- Pagination & Navigation -->
            <div class="swiper-button-prev">
              <i class="bi bi-arrow-left"></i>
            </div>
            <div class="swiper-button-next">
              <i class="bi bi-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- whats new mobile close -->

  <section class="category">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8 col-xl-6 mb-4">
          <h3>Choose Your Category</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque doloremque impedit animi ad voluptatem
            beatae modi adipisci.</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="category_lists owl-carousel owl-theme">
            <div class="items"><a href="#">
                <div class="category__img__box">
                  <div class="img_box"><img src="/images/category_1.webp" alt="seeken" class="img-fluid" loading="lazy">
                  </div>
                  <div class="content">
                    <h4>Fan</h4>
                    <h6>5 Items</h6>
                  </div>
                </div>
              </a></div>
            <div class="items"><a href="#">
                <div class="category__img__box">
                  <div class="img_box"><img src="/images/category_2.webp" alt="seeken" class="img-fluid" loading="lazy">
                  </div>
                  <div class="content">
                    <h4>Pressure Cooker</h4>
                    <h6>2 Items</h6>
                  </div>
                </div>
              </a></div>
            <div class="items"><a href="#">
                <div class="category__img__box">
                  <div class="img_box"><img src="/images/category_3.webp" alt="seeken" class="img-fluid" loading="lazy">
                  </div>
                  <div class="content">
                    <h4>Non Stick Cookware</h4>
                    <h6>4 Items</h6>
                  </div>
                </div>
              </a></div>
            <div class="items"><a href="#">
                <div class="category__img__box">
                  <div class="img_box"><img src="/images/category_4.webp" alt="seeken" class="img-fluid" loading="lazy">
                  </div>
                  <div class="content">
                    <h4>Electric iron</h4>
                    <h6>3 Items</h6>
                  </div>
                </div>
              </a></div>
            <div class="items"><a href="#">
                <div class="category__img__box">
                  <div class="img_box"><img src="/images/category_5.webp" alt="seeken" class="img-fluid" loading="lazy">
                  </div>
                  <div class="content">
                    <h4>LPG Stove</h4>
                    <h6>5 Items</h6>
                  </div>
                </div>
              </a></div>
            <div class="items"><a href="#">
                <div class="category__img__box">
                  <div class="img_box"><img src="/images/category_2.webp" alt="seeken" class="img-fluid" loading="lazy">
                  </div>
                  <div class="content">
                    <h4>Pressure Cooker</h4>
                    <h6>2 Items</h6>
                  </div>
                </div>
              </a></div>
            <div class="items"><a href="#">
                <div class="category__img__box">
                  <div class="img_box"><img src="/images/category_3.webp" alt="seeken" class="img-fluid" loading="lazy">
                  </div>
                  <div class="content">
                    <h4>Non Stick Cookware</h4>
                    <h6>4 Items</h6>
                  </div>
                </div>
              </a></div>
            <div class="items"><a href="#">
                <div class="category__img__box">
                  <div class="img_box"><img src="/images/category_4.webp" alt="seeken" class="img-fluid" loading="lazy">
                  </div>
                  <div class="content">
                    <h4>Electric iron</h4>
                    <h6>3 Items</h6>
                  </div>
                </div>
              </a></div>
            <div class="items"><a href="#">
                <div class="category__img__box">
                  <div class="img_box"><img src="/images/category_5.webp" alt="seeken" class="img-fluid" loading="lazy">
                  </div>
                  <div class="content">
                    <h4>LPG Stove</h4>
                    <h6>5 Items</h6>
                  </div>
                </div>
              </a></div>
          </div>
        </div>
      </div>
    </div>
  </section>


  <!-- featured__products desktop -->
  <section class="featured__products">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-9 mb-3">
          <h3>Featured Products</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis aliquet metus, eget ullamcorper nisi
            egestas vitae.</p>
        </div>
        <div class="col-md-3 d-flex justify-content-end">
          <a class="btn_2">View More</a>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6  mb-5">
          <div class="product__box">
            <div class="top_box">
              <div class="product__img">
                <img src="/images/featured_product_1.webp" class="img-fluid default-image" alt="seeken" loading="lazy">
                <img src="/images/featured_product_2.webp" alt="seeken" class="img-fluid hover-image" loading="lazy">
              </div>
              <div class="items">Only 2 more left</div>
              <div class="flash__combo">Flash Sale</div>
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

              </div>
              <a data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                <div class="quick__buy">QUICK BUY</div>
              </a>
              <div class="view__wishlist">
                <div class="view"><i class="bi bi-eye"></i></div>
                <div class="wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal4"><i class="bi bi-heart"></i>
                </div>
              </div>
            </div>
            <div class="product__content">
              <div class="top__box">
                <div class="category__name">
                  <h5>Fan</h5>
                </div>
                <div class="rating"><i class="bi bi-star-fill"></i> 5.0 <span>(16k)</span></div>
              </div>
              <div class="price__feature">
                <h4>Pedestal Fan</h4>
                <div class="price">From Rs. 4,400.00 <span>Rs. 5,500.00</span></div>
                <div class="colors">
                  <ul>
                    <li>
                      <div class="code"> <img src="/images/color_code/clr-1.webp" class="img-fluid" alt="seeken"
                          loading="lazy">
                      </div>
                    </li>
                    <li>
                      <div class="code"><img src="/images/color_code/clr-2.webp" class="img-fluid" alt="seeken"
                          loading="lazy"></div>
                    </li>
                    <li>
                      <div class="code"><img src="/images/color_code/clr-3.webp" class="img-fluid" alt="seeken"
                          loading="lazy"></div>
                    </li>
                    <li>
                      <div class="code"><img src="/images/color_code/clr-4.webp" class="img-fluid" alt="seeken"
                          loading="lazy"></div>
                    </li>
                    <li><a data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        more </a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6  mb-5">
          <div class="product__box">
            <div class="top_box">
              <div class="product__img">
                <img src="/images/featured_product_3.webp" class="img-fluid default-image" alt="seeken" loading="lazy">
                <img src="/images/featured_product_4.webp" alt="seeken" class="img-fluid hover-image" loading="lazy">
              </div>
              <div class="flash__combo">Combo</div>
              <div class="view__wishlist">
                <div class="view"><i class="bi bi-eye"></i></div>
                <div class="wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal4"><i class="bi bi-heart"></i>
                </div>
              </div>
              <a data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                <div class="quick__buy">QUICK BUY</div>
              </a>
            </div>
            <div class="product__content">
              <div class="top__box">
                <div class="category__name">
                  <h5>Non Stick Cookware</h5>
                </div>
                <div class="rating"><i class="bi bi-star-fill"></i> 5.0 <span>(16k)</span></div>
              </div>
              <div class="price__feature">
                <h4>Dosa Tawa</h4>
                <div class="price">From Rs. 2,300.00 <span>Rs. 3,500.00</span></div>
                <div class="colors">
                  <ul>
                    <li>
                      <div class="code"> <img src="/images/color_code/clr-1.webp" class="img-fluid" alt="seeken"
                          loading="lazy">
                      </div>
                    </li>
                    <li>
                      <div class="code"><img src="/images/color_code/clr-2.webp" class="img-fluid" alt="seeken"
                          loading="lazy"></div>
                    </li>
                    <li>
                      <div class="code"><img src="/images/color_code/clr-3.webp" class="img-fluid" alt="seeken"
                          loading="lazy"></div>
                    </li>
                    <li>
                      <div class="code"><img src="/images/color_code/clr-4.webp" class="img-fluid" alt="seeken"
                          loading="lazy"></div>
                    </li>
                    <li><a data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        more </a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6  mb-5">
          <div class="product__box">
            <div class="top_box">
              <div class="product__img">
                <img src="/images/featured_product_9.webp" class="img-fluid default-image" alt="seeken" loading="lazy">
                <img src="/images/featured_product_10.webp" alt="seeken" class="img-fluid hover-image" loading="lazy">
              </div>
              <div class="view__wishlist">
                <div class="view"><i class="bi bi-eye"></i></div>
                <div class="wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal4"><i class="bi bi-heart"></i>
                </div>
              </div>
              <a data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                <div class="quick__buy">QUICK BUY</div>
              </a>
            </div>
            <div class="product__content">
              <div class="top__box">
                <div class="category__name">
                  <h5>Pressure Cooker</h5>
                </div>
                <div class="rating"><i class="bi bi-star-fill"></i> 5.0 <span>(16k)</span></div>
              </div>
              <div class="price__feature">
                <h4>Steenless Cooker</h4>
                <div class="price">From Rs. 4,500.00 <span>Rs. 4,7500.00</span></div>
                <div class="colors">
                  <ul>
                    <li>2L</li>
                    <li>3L</li>
                    <li>4L</li>
                    <li>5L</li>
                  </ul>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6  mb-5">
          <div class="product__box">
            <div class="top_box">
              <div class="product__img">
                <img src="/images/featured_product_7.webp" class="img-fluid default-image" alt="seeken" loading="lazy">
                <img src="/images/featured_product_8.webp" alt="seeken" class="img-fluid hover-image" loading="lazy">
              </div>
              <div class="items">Only 6 more left</div>
              <div class="flash__combo">Flash Sale</div>
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

              </div>
              <a data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                <div class="quick__buy">QUICK BUY</div>
              </a>
              <div class="view__wishlist">
                <div class="view"><i class="bi bi-eye"></i></div>
                <div class="wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal4"><i class="bi bi-heart"></i>
                </div>
              </div>
            </div>
            <div class="product__content">
              <div class="top__box">
                <div class="category__name">
                  <h5>Fry Pan</h5>
                </div>
                <div class="rating"><i class="bi bi-star-fill"></i> 5.0 <span>(16k)</span></div>
              </div>
              <div class="price__feature">
                <h4>Mealmaster</h4>
                <div class="price">From Rs. 3,100.00 <span>Rs. 3,950.00</span></div>
                <div class="colors">
                  <ul>
                    <li>
                      <div class="code"> <img src="/images/color_code/clr-1.webp" class="img-fluid" alt="seeken"
                          loading="lazy">
                      </div>
                    </li>
                    <li>
                      <div class="code"><img src="/images/color_code/clr-2.webp" class="img-fluid" alt="seeken"
                          loading="lazy"></div>
                    </li>
                    <li>
                      <div class="code"><img src="/images/color_code/clr-3.webp" class="img-fluid" alt="seeken"
                          loading="lazy"></div>
                    </li>
                    <li>
                      <div class="code"><img src="/images/color_code/clr-4.webp" class="img-fluid" alt="seeken"
                          loading="lazy"></div>
                    </li>
                    <li><a data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        more </a></li>
                  </ul>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6  mb-5">
          <div class="product__box">
            <div class="top_box">
              <div class="product__img">
                <img src="/images/featured_product_3.webp" class="img-fluid default-image" alt="seeken" loading="lazy">
                <img src="/images/featured_product_4.webp" alt="seeken" class="img-fluid hover-image" loading="lazy">
              </div>
              <div class="flash__combo">Combo</div>
              <div class="view__wishlist">
                <div class="view"><i class="bi bi-eye"></i></div>
                <div class="wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal4"><i class="bi bi-heart"></i>
                </div>
              </div>
              <a data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                <div class="quick__buy">QUICK BUY</div>
              </a>
            </div>
            <div class="product__content">
              <div class="top__box">
                <div class="category__name">
                  <h5>Non Stick Cookware</h5>
                </div>
                <div class="rating"><i class="bi bi-star-fill"></i> 5.0 <span>(16k)</span></div>
              </div>
              <div class="price__feature">
                <h4>Dosa Tawa</h4>
                <div class="price">From Rs. 2,300.00 <span>Rs. 3,500.00</span></div>
                <div class="colors">
                  <ul>
                    <li>
                      <div class="code"> <img src="/images/color_code/clr-1.webp" class="img-fluid" alt="seeken"
                          loading="lazy">
                      </div>
                    </li>
                    <li>
                      <div class="code"><img src="/images/color_code/clr-2.webp" class="img-fluid" alt="seeken"
                          loading="lazy"></div>
                    </li>
                    <li>
                      <div class="code"><img src="/images/color_code/clr-3.webp" class="img-fluid" alt="seeken"
                          loading="lazy"></div>
                    </li>
                    <li>
                      <div class="code"><img src="/images/color_code/clr-4.webp" class="img-fluid" alt="seeken"
                          loading="lazy"></div>
                    </li>
                    <li><a data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        more </a></li>
                  </ul>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6  mb-5">
          <div class="product__box">
            <div class="top_box">
              <div class="product__img">
                <img src="/images/featured_product_5.webp" class="img-fluid default-image" alt="seeken" loading="lazy">
                <img src="/images/featured_product_6.webp" alt="seeken" class="img-fluid hover-image" loading="lazy">
              </div>
              <div class="view__wishlist">
                <div class="view"><i class="bi bi-eye"></i></div>
                <div class="wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal4"><i class="bi bi-heart"></i>
                </div>
              </div>
              <a data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                <div class="quick__buy">QUICK BUY</div>
              </a>
            </div>
            <div class="product__content">
              <div class="top__box">
                <div class="category__name">
                  <h5>Iron Box</h5>
                </div>
                <div class="rating"><i class="bi bi-star-fill"></i> 5.0 <span>(16k)</span></div>
              </div>
              <div class="price__feature">
                <h4>Smoth glide Iron Box</h4>
                <div class="price">From Rs. 1,200.00 <span>Rs. 1,7500.00</span></div>
                <div class="colors">
                  <ul>
                    <li>
                      <div class="code"> <img src="/images/color_code/clr-1.webp" class="img-fluid" alt="seeken"
                          loading="lazy">
                      </div>
                    </li>
                    <li>
                      <div class="code"><img src="/images/color_code/clr-2.webp" class="img-fluid" alt="seeken"
                          loading="lazy"></div>
                    </li>
                    <li>
                      <div class="code"><img src="/images/color_code/clr-3.webp" class="img-fluid" alt="seeken"
                          loading="lazy"></div>
                    </li>
                    <li>
                      <div class="code"><img src="/images/color_code/clr-4.webp" class="img-fluid" alt="seeken"
                          loading="lazy"></div>
                    </li>
                    <li><a data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        more </a></li>
                  </ul>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6  mb-5">
          <div class="product__box">
            <div class="top_box">
              <div class="product__img">
                <img src="/images/featured_product_7.webp" class="img-fluid default-image" alt="seeken" loading="lazy">
                <img src="/images/featured_product_8.webp" alt="seeken" class="img-fluid hover-image" loading="lazy">
              </div>
              <div class="items">Only 6 more left</div>
              <div class="flash__combo">Flash Sale</div>
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

              </div>
              <a data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                <div class="quick__buy">QUICK BUY</div>
              </a>
              <div class="view__wishlist">
                <div class="view"><i class="bi bi-eye"></i></div>
                <div class="wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal4"><i class="bi bi-heart"></i>
                </div>
              </div>
            </div>
            <div class="product__content">
              <div class="top__box">
                <div class="category__name">
                  <h5>Fry Pan</h5>
                </div>
                <div class="rating"><i class="bi bi-star-fill"></i> 5.0 <span>(16k)</span></div>
              </div>
              <div class="price__feature">
                <h4>Mealmaster</h4>
                <div class="price">From Rs. 3,100.00 <span>Rs. 3,950.00</span></div>
                <div class="colors">
                  <ul>
                    <li>
                      <div class="code"> <img src="/images/color_code/clr-1.webp" class="img-fluid" alt="seeken"
                          loading="lazy">
                      </div>
                    </li>
                    <li>
                      <div class="code"><img src="/images/color_code/clr-2.webp" class="img-fluid" alt="seeken"
                          loading="lazy"></div>
                    </li>
                    <li>
                      <div class="code"><img src="/images/color_code/clr-3.webp" class="img-fluid" alt="seeken"
                          loading="lazy"></div>
                    </li>
                    <li>
                      <div class="code"><img src="/images/color_code/clr-4.webp" class="img-fluid" alt="seeken"
                          loading="lazy"></div>
                    </li>
                    <li><a data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        more </a></li>
                  </ul>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6  mb-5">
          <div class="product__box">
            <div class="top_box">
              <div class="product__img">
                <img src="/images/featured_product_1.webp" class="img-fluid default-image" alt="seeken" loading="lazy">
                <img src="/images/featured_product_2.webp" alt="seeken" class="img-fluid hover-image" loading="lazy">
              </div>
              <div class="items">Only 2 more left</div>
              <div class="flash__combo">Flash Sale</div>
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

              </div>
              <a data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                <div class="quick__buy">QUICK BUY</div>
              </a>
              <div class="view__wishlist">
                <div class="view"><i class="bi bi-eye"></i></div>
                <div class="wishlist"><i class="bi bi-heart"></i></div>
              </div>
            </div>
            <div class="product__content">
              <div class="top__box">
                <div class="category__name">
                  <h5>Fan</h5>
                </div>
                <div class="rating"><i class="bi bi-star-fill"></i> 5.0 <span>(16k)</span></div>
              </div>
              <div class="price__feature">
                <h4>Pedestal Fan</h4>
                <div class="price">From Rs. 4,400.00 <span>Rs. 5,500.00</span></div>
                <div class="colors">
                  <ul>
                    <li>
                      <div class="code"> <img src="/images/color_code/clr-1.webp" class="img-fluid" alt="seeken"
                          loading="lazy">
                      </div>
                    </li>
                    <li>
                      <div class="code"><img src="/images/color_code/clr-2.webp" class="img-fluid" alt="seeken"
                          loading="lazy"></div>
                    </li>
                    <li>
                      <div class="code"><img src="/images/color_code/clr-3.webp" class="img-fluid" alt="seeken"
                          loading="lazy"></div>
                    </li>
                    <li>
                      <div class="code"><img src="/images/color_code/clr-4.webp" class="img-fluid" alt="seeken"
                          loading="lazy"></div>
                    </li>

                  </ul>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- featured__products desktop close -->



  <!-- featured__products mobile -->
  <section class="featured__products__mobile">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-9 mb-3">
          <h3>Featured Products</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis aliquet metus, eget ullamcorper nisi
            egestas vitae.</p>
        </div>

      </div>
      <div class="row mt-4">
        <div class="col-md-12">
          <div class="swiper mySwiper2">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="top_box">
                  <div class="product__img">
                    <img src="/images/featured_product_1.webp" class="img-fluid default-image" alt="seeken"
                      loading="lazy">
                    <img src="/images/featured_product_2.webp" alt="seeken" class="img-fluid hover-image" loading="lazy">
                  </div>
                  <div class="items">Only 2 more left</div>
                  <div class="flash__combo">Flash Sale</div>
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

                  </div>
                  <a data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                    <div class="quick__buy">QUICK BUY</div>
                  </a>
                  <div class="view__wishlist">
                    <div class="view"><i class="bi bi-eye"></i></div>
                    <div class="wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal4"><i
                        class="bi bi-heart"></i>
                    </div>
                  </div>
                </div>
                <div class="product__content">
                  <div class="top__box">
                    <div class="category__name">
                      <h5>Fan</h5>
                    </div>
                    <div class="rating"><i class="bi bi-star-fill"></i> 5.0 <span>(16k)</span></div>
                  </div>
                  <div class="price__feature">
                    <h4>Pedestal Fan</h4>
                    <div class="price">From Rs. 4,400.00 <span>Rs. 5,500.00</span></div>
                    <div class="colors">
                      <ul>
                        <li>
                          <div class="code"> <img src="/images/color_code/clr-1.webp" class="img-fluid" alt="seeken"
                              loading="lazy">
                          </div>
                        </li>
                        <li>
                          <div class="code"><img src="/images/color_code/clr-2.webp" class="img-fluid" alt="seeken"
                              loading="lazy"></div>
                        </li>
                        <li>
                          <div class="code"><img src="/images/color_code/clr-3.webp" class="img-fluid" alt="seeken"
                              loading="lazy"></div>
                        </li>
                        <li>
                          <div class="code"><img src="/images/color_code/clr-4.webp" class="img-fluid" alt="seeken"
                              loading="lazy"></div>
                        </li>
                        <li><a data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                            aria-controls="offcanvasRight">
                            more </a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="top_box">
                  <div class="product__img">
                    <img src="/images/featured_product_3.webp" class="img-fluid default-image" alt="seeken"
                      loading="lazy">
                    <img src="/images/featured_product_4.webp" alt="seeken" class="img-fluid hover-image" loading="lazy">
                  </div>
                  <div class="flash__combo">Combo</div>
                  <div class="view__wishlist">
                    <div class="view"><i class="bi bi-eye"></i></div>
                    <div class="wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal4"><i
                        class="bi bi-heart"></i>
                    </div>
                  </div>
                  <a data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                    <div class="quick__buy">QUICK BUY</div>
                  </a>
                </div>
                <div class="product__content">
                  <div class="top__box">
                    <div class="category__name">
                      <h5>Non Stick Cookware</h5>
                    </div>
                    <div class="rating"><i class="bi bi-star-fill"></i> 5.0 <span>(16k)</span></div>
                  </div>
                  <div class="price__feature">
                    <h4>Dosa Tawa</h4>
                    <div class="price">From Rs. 2,300.00 <span>Rs. 3,500.00</span></div>
                    <div class="colors">
                      <ul>
                        <li>
                          <div class="code"> <img src="/images/color_code/clr-1.webp" class="img-fluid" alt="seeken"
                              loading="lazy">
                          </div>
                        </li>
                        <li>
                          <div class="code"><img src="/images/color_code/clr-2.webp" class="img-fluid" alt="seeken"
                              loading="lazy"></div>
                        </li>
                        <li>
                          <div class="code"><img src="/images/color_code/clr-3.webp" class="img-fluid" alt="seeken"
                              loading="lazy"></div>
                        </li>
                        <li>
                          <div class="code"><img src="/images/color_code/clr-4.webp" class="img-fluid" alt="seeken"
                              loading="lazy"></div>
                        </li>
                        <li><a data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                            aria-controls="offcanvasRight">
                            more </a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="top_box">
                  <div class="product__img">
                    <img src="/images/featured_product_9.webp" class="img-fluid default-image" alt="seeken"
                      loading="lazy">
                    <img src="/images/featured_product_10.webp" alt="seeken" class="img-fluid hover-image"
                      loading="lazy">
                  </div>
                  <div class="view__wishlist">
                    <div class="view"><i class="bi bi-eye"></i></div>
                    <div class="wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal4"><i
                        class="bi bi-heart"></i>
                    </div>
                  </div>
                  <a data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                    <div class="quick__buy">QUICK BUY</div>
                  </a>
                </div>
                <div class="product__content">
                  <div class="top__box">
                    <div class="category__name">
                      <h5>Pressure Cooker</h5>
                    </div>
                    <div class="rating"><i class="bi bi-star-fill"></i> 5.0 <span>(16k)</span></div>
                  </div>
                  <div class="price__feature">
                    <h4>Steenless Cooker</h4>
                    <div class="price">From Rs. 4,500.00 <span>Rs. 4,7500.00</span></div>
                    <div class="colors">
                      <ul>
                        <li>2L</li>
                        <li>3L</li>
                        <li>4L</li>
                        <li>5L</li>
                      </ul>

                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="top_box">
                  <div class="product__img">
                    <img src="/images/featured_product_7.webp" class="img-fluid default-image" alt="seeken"
                      loading="lazy">
                    <img src="/images/featured_product_8.webp" alt="seeken" class="img-fluid hover-image" loading="lazy">
                  </div>
                  <div class="items">Only 6 more left</div>
                  <div class="flash__combo">Flash Sale</div>
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

                  </div>
                  <a data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                    <div class="quick__buy">QUICK BUY</div>
                  </a>
                  <div class="view__wishlist">
                    <div class="view"><i class="bi bi-eye"></i></div>
                    <div class="wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal4"><i
                        class="bi bi-heart"></i>
                    </div>
                  </div>
                </div>
                <div class="product__content">
                  <div class="top__box">
                    <div class="category__name">
                      <h5>Fry Pan</h5>
                    </div>
                    <div class="rating"><i class="bi bi-star-fill"></i> 5.0 <span>(16k)</span></div>
                  </div>
                  <div class="price__feature">
                    <h4>Mealmaster</h4>
                    <div class="price">From Rs. 3,100.00 <span>Rs. 3,950.00</span></div>
                    <div class="colors">
                      <ul>
                        <li>
                          <div class="code"> <img src="/images/color_code/clr-1.webp" class="img-fluid" alt="seeken"
                              loading="lazy">
                          </div>
                        </li>
                        <li>
                          <div class="code"><img src="/images/color_code/clr-2.webp" class="img-fluid" alt="seeken"
                              loading="lazy"></div>
                        </li>
                        <li>
                          <div class="code"><img src="/images/color_code/clr-3.webp" class="img-fluid" alt="seeken"
                              loading="lazy"></div>
                        </li>
                        <li>
                          <div class="code"><img src="/images/color_code/clr-4.webp" class="img-fluid" alt="seeken"
                              loading="lazy"></div>
                        </li>
                        <li><a data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                            aria-controls="offcanvasRight">
                            more </a></li>
                      </ul>

                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="top_box">
                  <div class="product__img">
                    <img src="/images/featured_product_3.webp" class="img-fluid default-image" alt="seeken"
                      loading="lazy">
                    <img src="/images/featured_product_4.webp" alt="seeken" class="img-fluid hover-image" loading="lazy">
                  </div>
                  <div class="flash__combo">Combo</div>
                  <div class="view__wishlist">
                    <div class="view"><i class="bi bi-eye"></i></div>
                    <div class="wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal4"><i
                        class="bi bi-heart"></i>
                    </div>
                  </div>
                  <a data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                    <div class="quick__buy">QUICK BUY</div>
                  </a>
                </div>
                <div class="product__content">
                  <div class="top__box">
                    <div class="category__name">
                      <h5>Non Stick Cookware</h5>
                    </div>
                    <div class="rating"><i class="bi bi-star-fill"></i> 5.0 <span>(16k)</span></div>
                  </div>
                  <div class="price__feature">
                    <h4>Dosa Tawa</h4>
                    <div class="price">From Rs. 2,300.00 <span>Rs. 3,500.00</span></div>
                    <div class="colors">
                      <ul>
                        <li>
                          <div class="code"> <img src="/images/color_code/clr-1.webp" class="img-fluid" alt="seeken"
                              loading="lazy">
                          </div>
                        </li>
                        <li>
                          <div class="code"><img src="/images/color_code/clr-2.webp" class="img-fluid" alt="seeken"
                              loading="lazy"></div>
                        </li>
                        <li>
                          <div class="code"><img src="/images/color_code/clr-3.webp" class="img-fluid" alt="seeken"
                              loading="lazy"></div>
                        </li>
                        <li>
                          <div class="code"><img src="/images/color_code/clr-4.webp" class="img-fluid" alt="seeken"
                              loading="lazy"></div>
                        </li>
                        <li><a data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                            aria-controls="offcanvasRight">
                            more </a></li>
                      </ul>

                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="top_box">
                  <div class="product__img">
                    <img src="/images/featured_product_5.webp" class="img-fluid default-image" alt="seeken"
                      loading="lazy">
                    <img src="/images/featured_product_6.webp" alt="seeken" class="img-fluid hover-image" loading="lazy">
                  </div>
                  <div class="view__wishlist">
                    <div class="view"><i class="bi bi-eye"></i></div>
                    <div class="wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal4"><i
                        class="bi bi-heart"></i>
                    </div>
                  </div>
                  <a data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                    <div class="quick__buy">QUICK BUY</div>
                  </a>
                </div>
                <div class="product__content">
                  <div class="top__box">
                    <div class="category__name">
                      <h5>Iron Box</h5>
                    </div>
                    <div class="rating"><i class="bi bi-star-fill"></i> 5.0 <span>(16k)</span></div>
                  </div>
                  <div class="price__feature">
                    <h4>Smoth glide Iron Box</h4>
                    <div class="price">From Rs. 1,200.00 <span>Rs. 1,7500.00</span></div>
                    <div class="colors">
                      <ul>
                        <li>
                          <div class="code"> <img src="/images/color_code/clr-1.webp" class="img-fluid" alt="seeken"
                              loading="lazy">
                          </div>
                        </li>
                        <li>
                          <div class="code"><img src="/images/color_code/clr-2.webp" class="img-fluid" alt="seeken"
                              loading="lazy"></div>
                        </li>
                        <li>
                          <div class="code"><img src="/images/color_code/clr-3.webp" class="img-fluid" alt="seeken"
                              loading="lazy"></div>
                        </li>
                        <li>
                          <div class="code"><img src="/images/color_code/clr-4.webp" class="img-fluid" alt="seeken"
                              loading="lazy"></div>
                        </li>
                        <li><a data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                            aria-controls="offcanvasRight">
                            more </a></li>
                      </ul>

                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="top_box">
                  <div class="product__img">
                    <img src="/images/featured_product_7.webp" class="img-fluid default-image" alt="seeken"
                      loading="lazy">
                    <img src="/images/featured_product_8.webp" alt="seeken" class="img-fluid hover-image" loading="lazy">
                  </div>
                  <div class="items">Only 6 more left</div>
                  <div class="flash__combo">Flash Sale</div>
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

                  </div>
                  <a data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                    <div class="quick__buy">QUICK BUY</div>
                  </a>
                  <div class="view__wishlist">
                    <div class="view"><i class="bi bi-eye"></i></div>
                    <div class="wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal4"><i
                        class="bi bi-heart"></i>
                    </div>
                  </div>
                </div>
                <div class="product__content">
                  <div class="top__box">
                    <div class="category__name">
                      <h5>Fry Pan</h5>
                    </div>
                    <div class="rating"><i class="bi bi-star-fill"></i> 5.0 <span>(16k)</span></div>
                  </div>
                  <div class="price__feature">
                    <h4>Mealmaster</h4>
                    <div class="price">From Rs. 3,100.00 <span>Rs. 3,950.00</span></div>
                    <div class="colors">
                      <ul>
                        <li>
                          <div class="code"> <img src="/images/color_code/clr-1.webp" class="img-fluid" alt="seeken"
                              loading="lazy">
                          </div>
                        </li>
                        <li>
                          <div class="code"><img src="/images/color_code/clr-2.webp" class="img-fluid" alt="seeken"
                              loading="lazy"></div>
                        </li>
                        <li>
                          <div class="code"><img src="/images/color_code/clr-3.webp" class="img-fluid" alt="seeken"
                              loading="lazy"></div>
                        </li>
                        <li>
                          <div class="code"><img src="/images/color_code/clr-4.webp" class="img-fluid" alt="seeken"
                              loading="lazy"></div>
                        </li>
                        <li><a data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                            aria-controls="offcanvasRight">
                            more </a></li>
                      </ul>

                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="top_box">
                  <div class="product__img">
                    <img src="/images/featured_product_1.webp" class="img-fluid default-image" alt="seeken"
                      loading="lazy">
                    <img src="/images/featured_product_2.webp" alt="seeken" class="img-fluid hover-image" loading="lazy">
                  </div>
                  <div class="items">Only 2 more left</div>
                  <div class="flash__combo">Flash Sale</div>
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

                  </div>
                  <a data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                    <div class="quick__buy">QUICK BUY</div>
                  </a>
                  <div class="view__wishlist">
                    <div class="view"><i class="bi bi-eye"></i></div>
                    <div class="wishlist"><i class="bi bi-heart"></i></div>
                  </div>
                </div>
                <div class="product__content">
                  <div class="top__box">
                    <div class="category__name">
                      <h5>Fan</h5>
                    </div>
                    <div class="rating"><i class="bi bi-star-fill"></i> 5.0 <span>(16k)</span></div>
                  </div>
                  <div class="price__feature">
                    <h4>Pedestal Fan</h4>
                    <div class="price">From Rs. 4,400.00 <span>Rs. 5,500.00</span></div>
                    <div class="colors">
                      <ul>
                        <li>
                          <div class="code"> <img src="/images/color_code/clr-1.webp" class="img-fluid" alt="seeken"
                              loading="lazy">
                          </div>
                        </li>
                        <li>
                          <div class="code"><img src="/images/color_code/clr-2.webp" class="img-fluid" alt="seeken"
                              loading="lazy"></div>
                        </li>
                        <li>
                          <div class="code"><img src="/images/color_code/clr-3.webp" class="img-fluid" alt="seeken"
                              loading="lazy"></div>
                        </li>
                        <li>
                          <div class="code"><img src="/images/color_code/clr-4.webp" class="img-fluid" alt="seeken"
                              loading="lazy"></div>
                        </li>

                      </ul>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Pagination & Navigation -->
            <div class="swiper-button-prev">
              <i class="bi bi-arrow-left"></i>
            </div>
            <div class="swiper-button-next">
              <i class="bi bi-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-12 mt-4 d-flex justify-content-center">
        <a class="btn_2">View More <i class="bi bi-arrow-right"></i></a>
      </div>
    </div>
  </section>
  <!-- featured__products mobile close -->

  <section class="ad_container">
    <img src="/images/ad.webp" class="img-fluid banner__desk" alt="seeken" loading="lazy">
    <img src="/images/ad-mobile.jpg" class="img-fluid banner__mob" alt="seeken" loading="lazy">
  </section>
  <section class="top__picks">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h3>Top Picks For You</h3>
          <ul class="nav nav-tabs " role="tablist">
            <li class="nav-item" role="presentation">
              <a class="nav-link active" id="simple-tab-0" data-bs-toggle="tab" href="#simple-tabpanel-0" role="tab"
                aria-controls="simple-tabpanel-0" aria-selected="true"> New Launches</a>
            </li>
            <li class="nav-item" role="presentation">
              <a class="nav-link" id="simple-tab-1" data-bs-toggle="tab" href="#simple-tabpanel-1" role="tab"
                aria-controls="simple-tabpanel-1" aria-selected="false">  Best Selling Products</a>
            </li>
          </ul>
          <div class="tab-content pt-2" id="tab-content">
            <div class="tab-pane active" id="simple-tabpanel-0" role="tabpanel" aria-labelledby="simple-tab-0">
              <div class="top_picks owl-carousel owl-theme">
                <div class="product__box">
                  <div class="top_box">
                    <div class="view__wishlist">
                      <a data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <div class="view"><i class="bi bi-eye"></i></div>
                      </a>
                      <div class="wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal4"><i
                          class="bi bi-heart"></i></div>
                    </div>
                    <div class="product__img">
                      <img src="/images/featured_product_1.webp" class="img-fluid" alt="seeken" loading="lazy">
                    </div>
                    <div class="product__content">
                      <h5>Fry Pan</h5>
                      <h4>Pedestal Fan</h4>
                      <div class="rating"><i class="bi bi-star-fill"></i> 5.0 <span>(16k)</span></div>
                      <a class="btn_2" href="">Buy Now</a>
                    </div>
                  </div>
                </div>
                <div class="product__box">
                  <div class="top_box">
                    <div class="view__wishlist">
                      <a data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <div class="view"><i class="bi bi-eye"></i></div>
                      </a>
                      <div class="wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal4"><i
                          class="bi bi-heart"></i></div>
                    </div>
                    <div class="product__img">
                      <img src="/images/featured_product_3.webp" class="img-fluid" alt="seeken" loading="lazy">
                    </div>
                    <div class="product__content">
                      <h5>Fry Pan</h5>
                      <h4>Pedestal Fan</h4>
                      <div class="rating"><i class="bi bi-star-fill"></i> 5.0 <span>(16k)</span></div>
                      <a class="btn_2" href="">Buy Now</a>
                    </div>
                  </div>
                </div>
                <div class="product__box">
                  <div class="top_box">
                    <div class="view__wishlist">
                      <a data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <div class="view"><i class="bi bi-eye"></i></div>
                      </a>
                      <div class="wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal4"><i
                          class="bi bi-heart"></i></div>
                    </div>
                    <div class="product__img">
                      <img src="/images/featured_product_5.webp" class="img-fluid" alt="seeken" loading="lazy">
                    </div>
                    <div class="product__content">
                      <h5>Fry Pan</h5>
                      <h4>Pedestal Fan</h4>
                      <div class="rating"><i class="bi bi-star-fill"></i> 5.0 <span>(16k)</span></div>
                      <a class="btn_2" href="">Buy Now</a>
                    </div>
                  </div>
                </div>
                <div class="product__box">
                  <div class="top_box">
                    <div class="view__wishlist">
                      <a data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <div class="view"><i class="bi bi-eye"></i></div>
                      </a>
                      <div class="wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal4"><i
                          class="bi bi-heart"></i></div>
                    </div>
                    <div class="product__img">
                      <img src="/images/featured_product_7.webp" class="img-fluid" alt="seeken" loading="lazy">
                    </div>
                    <div class="product__content">
                      <h5>Fry Pan</h5>
                      <h4>Pedestal Fan</h4>
                      <div class="rating"><i class="bi bi-star-fill"></i> 5.0 <span>(16k)</span></div>
                      <a class="btn_2" href="">Buy Now</a>
                    </div>
                  </div>
                </div>
                <div class="product__box">
                  <div class="top_box">
                    <div class="view__wishlist">
                      <a data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <div class="view"><i class="bi bi-eye"></i></div>
                      </a>
                      <div class="wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal4"><i
                          class="bi bi-heart"></i></div>
                    </div>
                    <div class="product__img">
                      <img src="/images/featured_product_1.webp" class="img-fluid" alt="seeken" loading="lazy">
                    </div>
                    <div class="product__content">
                      <h5>Fry Pan</h5>
                      <h4>Pedestal Fan</h4>
                      <div class="rating"><i class="bi bi-star-fill"></i> 5.0 <span>(16k)</span></div>
                      <a class="btn_2" href="">Buy Now</a>
                    </div>
                  </div>
                </div>
                <div class="product__box">
                  <div class="top_box">
                    <div class="view__wishlist">
                      <a data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <div class="view"><i class="bi bi-eye"></i></div>
                      </a>
                      <div class="wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal4"><i
                          class="bi bi-heart"></i></div>
                    </div>
                    <div class="product__img">
                      <img src="/images/featured_product_3.webp" class="img-fluid" alt="seeken" loading="lazy">
                    </div>
                    <div class="product__content">
                      <h5>Fry Pan</h5>
                      <h4>Pedestal Fan</h4>
                      <div class="rating"><i class="bi bi-star-fill"></i> 5.0 <span>(16k)</span></div>
                      <a class="btn_2" href="">Buy Now</a>
                    </div>
                  </div>
                </div>
                <div class="product__box">
                  <div class="top_box">
                    <div class="view__wishlist">
                      <a data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <div class="view"><i class="bi bi-eye"></i></div>
                      </a>
                      <div class="wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal4"><i
                          class="bi bi-heart"></i></div>
                    </div>
                    <div class="product__img">
                      <img src="/images/featured_product_5.webp" class="img-fluid" alt="seeken" loading="lazy">
                    </div>
                    <div class="product__content">
                      <h5>Fry Pan</h5>
                      <h4>Pedestal Fan</h4>
                      <div class="rating"><i class="bi bi-star-fill"></i> 5.0 <span>(16k)</span></div>
                      <a class="btn_2" href="">Buy Now</a>
                    </div>
                  </div>
                </div>
                <div class="product__box">
                  <div class="top_box">
                    <div class="view__wishlist">
                      <a data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <div class="view"><i class="bi bi-eye"></i></div>
                      </a>
                      <div class="wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal4"><i
                          class="bi bi-heart"></i></div>
                    </div>
                    <div class="product__img">
                      <img src="/images/featured_product_7.webp" class="img-fluid" alt="seeken" loading="lazy">
                    </div>
                    <div class="product__content">
                      <h5>Fry Pan</h5>
                      <h4>Pedestal Fan</h4>
                      <div class="rating"><i class="bi bi-star-fill"></i> 5.0 <span>(16k)</span></div>
                      <a class="btn_2" href="">Buy Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane " id="simple-tabpanel-1" role="tabpanel" aria-labelledby="simple-tab-1">
              <div class="top_picks owl-carousel owl-theme mt-3">
                <div class="product__box">
                  <div class="top_box">
                    <div class="view__wishlist">
                      <a data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <div class="view"><i class="bi bi-eye"></i></div>
                      </a>
                      <div class="wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal4"><i
                          class="bi bi-heart"></i></div>
                    </div>
                    <div class="product__img">
                      <img src="/images/featured_product_1.webp" class="img-fluid" alt="seeken" loading="lazy">
                    </div>
                    <div class="product__content">
                      <h5>Fry Pan</h5>
                      <h4>Pedestal Fan</h4>
                      <div class="rating"><i class="bi bi-star-fill"></i> 5.0 <span>(16k)</span></div>
                      <a class="btn_2" href="">Buy Now</a>
                    </div>
                  </div>
                </div>
                <div class="product__box">
                  <div class="top_box">
                    <div class="view__wishlist">
                      <a data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <div class="view"><i class="bi bi-eye"></i></div>
                      </a>
                      <div class="wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal4"><i
                          class="bi bi-heart"></i></div>
                    </div>
                    <div class="product__img">
                      <img src="/images/featured_product_3.webp" class="img-fluid" alt="seeken" loading="lazy">
                    </div>
                    <div class="product__content">
                      <h5>Fry Pan</h5>
                      <h4>Pedestal Fan</h4>
                      <div class="rating"><i class="bi bi-star-fill"></i> 5.0 <span>(16k)</span></div>
                      <a class="btn_2" href="">Buy Now</a>
                    </div>
                  </div>
                </div>
                <div class="product__box">
                  <div class="top_box">
                    <div class="view__wishlist">
                      <a data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <div class="view"><i class="bi bi-eye"></i></div>
                      </a>
                      <div class="wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal4"><i
                          class="bi bi-heart"></i></div>
                    </div>
                    <div class="product__img">
                      <img src="/images/featured_product_5.webp" class="img-fluid" alt="seeken" loading="lazy">
                    </div>
                    <div class="product__content">
                      <h5>Fry Pan</h5>
                      <h4>Pedestal Fan</h4>
                      <div class="rating"><i class="bi bi-star-fill"></i> 5.0 <span>(16k)</span></div>
                      <a class="btn_2" href="">Buy Now</a>
                    </div>
                  </div>
                </div>
                <div class="product__box">
                  <div class="top_box">
                    <div class="view__wishlist">
                      <a data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <div class="view"><i class="bi bi-eye"></i></div>
                      </a>
                      <div class="wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal4"><i
                          class="bi bi-heart"></i></div>
                    </div>
                    <div class="product__img">
                      <img src="/images/featured_product_7.webp" class="img-fluid" alt="seeken" loading="lazy">
                    </div>
                    <div class="product__content">
                      <h5>Fry Pan</h5>
                      <h4>Pedestal Fan</h4>
                      <div class="rating"><i class="bi bi-star-fill"></i> 5.0 <span>(16k)</span></div>
                      <a class="btn_2" href="">Buy Now</a>
                    </div>
                  </div>
                </div>
                <div class="product__box">
                  <div class="top_box">
                    <div class="view__wishlist">
                      <a data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <div class="view"><i class="bi bi-eye"></i></div>
                      </a>
                      <div class="wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal4"><i
                          class="bi bi-heart"></i></div>
                    </div>
                    <div class="product__img">
                      <img src="/images/featured_product_1.webp" class="img-fluid" alt="seeken" loading="lazy">
                    </div>
                    <div class="product__content">
                      <h5>Fry Pan</h5>
                      <h4>Pedestal Fan</h4>
                      <div class="rating"><i class="bi bi-star-fill"></i> 5.0 <span>(16k)</span></div>
                      <a class="btn_2" href="">Buy Now</a>
                    </div>
                  </div>
                </div>
                <div class="product__box">
                  <div class="top_box">
                    <div class="view__wishlist">
                      <a data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <div class="view"><i class="bi bi-eye"></i></div>
                      </a>
                      <div class="wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal4"><i
                          class="bi bi-heart"></i></div>
                    </div>
                    <div class="product__img">
                      <img src="/images/featured_product_3.webp" class="img-fluid" alt="seeken" loading="lazy">
                    </div>
                    <div class="product__content">
                      <h5>Fry Pan</h5>
                      <h4>Pedestal Fan</h4>
                      <div class="rating"><i class="bi bi-star-fill"></i> 5.0 <span>(16k)</span></div>
                      <a class="btn_2" href="">Buy Now</a>
                    </div>
                  </div>
                </div>
                <div class="product__box">
                  <div class="top_box">
                    <div class="view__wishlist">
                      <a data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <div class="view"><i class="bi bi-eye"></i></div>
                      </a>
                      <div class="wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal4"><i
                          class="bi bi-heart"></i></div>
                    </div>
                    <div class="product__img">
                      <img src="/images/featured_product_5.webp" class="img-fluid" alt="seeken" loading="lazy">
                    </div>
                    <div class="product__content">
                      <h5>Fry Pan</h5>
                      <h4>Pedestal Fan</h4>
                      <div class="rating"><i class="bi bi-star-fill"></i> 5.0 <span>(16k)</span></div>
                      <a class="btn_2" href="">Buy Now</a>
                    </div>
                  </div>
                </div>
                <div class="product__box">
                  <div class="top_box">
                    <div class="view__wishlist">
                      <a data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <div class="view"><i class="bi bi-eye"></i></div>
                      </a>
                      <div class="wishlist" data-bs-toggle="modal" data-bs-target="#exampleModal4"><i
                          class="bi bi-heart"></i></div>
                    </div>
                    <div class="product__img">
                      <img src="/images/featured_product_7.webp" class="img-fluid" alt="seeken" loading="lazy">
                    </div>
                    <div class="product__content">
                      <h5>Fry Pan</h5>
                      <h4>Pedestal Fan</h4>
                      <div class="rating"><i class="bi bi-star-fill"></i> 5.0 <span>(16k)</span></div>
                      <a class="btn_2" href="">Buy Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


  <!-- latest__articles desktop -->
  <section class="latest__articles">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-xl-6 col-md-8  mb-3">
          <h3>Latest Articles</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis aliquet metus, eget ullamcorper nisi
            egestas vitae.</p>
        </div>
        <div class="col-xl-6 col-md-4 d-flex justify-content-end">
          <a class="btn_2">View More <i class="bi bi-arrow-right"></i></a>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-4 mb-4">
          <div class="articles">
            <a href="#">
              <div class="img__box">
                <img src="/images/blog-1.webp" class="img-fluid" alt="seeken" loading="lazy">
              </div>
              <div class="content">
                <div class="calendar"><i class="bi bi-calendar4"></i> February 11, 2025</div>
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptas quibusdam quasi quisquam,
                  cum similique debitis, odio, nihil alias eveniet harum. Corrupti consectetur provident dolorem quis
                  quos nostrum exercitationem sequi.</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis aliquet metus, eget ullamcorper
                  nisi egestas vitae. Donec scelerisque pharetra vulputate. In quis purus vitae est fringilla ultricies.
                  sit amet consectetur adipisicing elit. Possimus voluptas quibusdam quasi quisquam, cum similique
                  debitis, odio, nihil alias eveniet harum. Corrupti consectetur provident dolorem quis quos nostrum
                  exercitationem sequi.</p>
              </div>
            </a>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="articles">
            <a href="#">
              <div class="img__box">
                <img src="/images/blog-2.webp" class="img-fluid" alt="seeken" loading="lazy">
              </div>
              <div class="content">
                <div class="calendar"><i class="bi bi-calendar4"></i> February 03, 2025</div>
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptas quibusdam quasi quisquam,
                  cum similique debitis, odio, nihil alias eveniet harum. Corrupti consectetur provident dolorem quis
                  quos nostrum exercitationem sequi.</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis aliquet metus, eget ullamcorper
                  nisi egestas vitae. Donec scelerisque pharetra vulputate. In quis purus vitae est fringilla ultricies.
                  sit amet consectetur adipisicing elit. Possimus voluptas quibusdam quasi quisquam, cum similique
                  debitis, odio, nihil alias eveniet harum. Corrupti consectetur provident dolorem quis quos nostrum
                  exercitationem sequi.</p>
              </div>
            </a>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="articles">
            <a href="#">
              <div class="img__box">
                <img src="/images/blog-3.webp" class="img-fluid" alt="seeken" loading="lazy">
              </div>
              <div class="content">
                <div class="calendar"><i class="bi bi-calendar4"></i> January 23, 2025</div>
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptas quibusdam quasi quisquam,
                  cum similique debitis, odio, nihil alias eveniet harum. Corrupti consectetur provident dolorem quis
                  quos nostrum exercitationem sequi.</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis aliquet metus, eget ullamcorper
                  nisi egestas vitae. Donec scelerisque pharetra vulputate. In quis purus vitae est fringilla ultricies.
                  sit amet consectetur adipisicing elit. Possimus voluptas quibusdam quasi quisquam, cum similique
                  debitis, odio, nihil alias eveniet harum. Corrupti consectetur provident dolorem quis quos nostrum
                  exercitationem sequi.</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- latest__articles desktop close-->

  <!-- latest__articles mobile -->
  <section class="latest__articles__mobile">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-xl-6 col-md-8  mb-3">
          <h3>Latest Articles</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis aliquet metus, eget ullamcorper nisi
            egestas vitae.</p>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-12">
          <div class="swiper mySwiper3">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <a href="#">
                  <div class="img__box">
                    <img src="/images/blog-1.webp" class="img-fluid" alt="seeken" loading="lazy">
                  </div>
                  <div class="content">
                    <div class="calendar"><i class="bi bi-calendar4"></i> February 11, 2025</div>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptas quibusdam quasi
                      quisquam,
                      cum similique debitis, odio, nihil alias eveniet harum. Corrupti consectetur provident dolorem
                      quis
                      quos nostrum exercitationem sequi.</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis aliquet metus, eget
                      ullamcorper
                      nisi egestas vitae. Donec scelerisque pharetra vulputate. In quis purus vitae est fringilla
                      ultricies.
                      sit amet consectetur adipisicing elit. Possimus voluptas quibusdam quasi quisquam, cum similique
                      debitis, odio, nihil alias eveniet harum. Corrupti consectetur provident dolorem quis quos nostrum
                      exercitationem sequi.</p>
                  </div>
                </a>
              </div>
              <div class="swiper-slide">
                <a href="#">
                  <div class="img__box">
                    <img src="/images/blog-2.webp" class="img-fluid" alt="seeken" loading="lazy">
                  </div>
                  <div class="content">
                    <div class="calendar"><i class="bi bi-calendar4"></i> February 03, 2025</div>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptas quibusdam quasi
                      quisquam,
                      cum similique debitis, odio, nihil alias eveniet harum. Corrupti consectetur provident dolorem
                      quis
                      quos nostrum exercitationem sequi.</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis aliquet metus, eget
                      ullamcorper
                      nisi egestas vitae. Donec scelerisque pharetra vulputate. In quis purus vitae est fringilla
                      ultricies.
                      sit amet consectetur adipisicing elit. Possimus voluptas quibusdam quasi quisquam, cum similique
                      debitis, odio, nihil alias eveniet harum. Corrupti consectetur provident dolorem quis quos nostrum
                      exercitationem sequi.</p>
                  </div>
                </a>
              </div>
              <div class="swiper-slide">
                <a href="#">
                  <div class="img__box">
                    <img src="/images/blog-3.webp" class="img-fluid" alt="seeken" loading="lazy">
                  </div>
                  <div class="content">
                    <div class="calendar"><i class="bi bi-calendar4"></i> January 23, 2025</div>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptas quibusdam quasi
                      quisquam,
                      cum similique debitis, odio, nihil alias eveniet harum. Corrupti consectetur provident dolorem
                      quis
                      quos nostrum exercitationem sequi.</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis aliquet metus, eget
                      ullamcorper
                      nisi egestas vitae. Donec scelerisque pharetra vulputate. In quis purus vitae est fringilla
                      ultricies.
                      sit amet consectetur adipisicing elit. Possimus voluptas quibusdam quasi quisquam, cum similique
                      debitis, odio, nihil alias eveniet harum. Corrupti consectetur provident dolorem quis quos nostrum
                      exercitationem sequi.</p>
                  </div>
                </a>
              </div>
              <div class="swiper-slide">
                <a href="#">
                  <div class="img__box">
                    <img src="/images/blog-2.webp" class="img-fluid" alt="seeken" loading="lazy">
                  </div>
                  <div class="content">
                    <div class="calendar"><i class="bi bi-calendar4"></i> February 03, 2025</div>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptas quibusdam quasi
                      quisquam,
                      cum similique debitis, odio, nihil alias eveniet harum. Corrupti consectetur provident dolorem
                      quis
                      quos nostrum exercitationem sequi.</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis aliquet metus, eget
                      ullamcorper
                      nisi egestas vitae. Donec scelerisque pharetra vulputate. In quis purus vitae est fringilla
                      ultricies.
                      sit amet consectetur adipisicing elit. Possimus voluptas quibusdam quasi quisquam, cum similique
                      debitis, odio, nihil alias eveniet harum. Corrupti consectetur provident dolorem quis quos nostrum
                      exercitationem sequi.</p>
                  </div>
                </a>
              </div>
              <div class="swiper-slide">
                <a href="#">
                  <div class="img__box">
                    <img src="/images/blog-3.webp" class="img-fluid" alt="seeken" loading="lazy">
                  </div>
                  <div class="content">
                    <div class="calendar"><i class="bi bi-calendar4"></i> January 23, 2025</div>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptas quibusdam quasi
                      quisquam,
                      cum similique debitis, odio, nihil alias eveniet harum. Corrupti consectetur provident dolorem
                      quis
                      quos nostrum exercitationem sequi.</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis aliquet metus, eget
                      ullamcorper
                      nisi egestas vitae. Donec scelerisque pharetra vulputate. In quis purus vitae est fringilla
                      ultricies.
                      sit amet consectetur adipisicing elit. Possimus voluptas quibusdam quasi quisquam, cum similique
                      debitis, odio, nihil alias eveniet harum. Corrupti consectetur provident dolorem quis quos nostrum
                      exercitationem sequi.</p>
                  </div>
                </a>
              </div>
            </div>
            <div class="swiper-button-prev">
              <i class="bi bi-arrow-left"></i>
            </div>
            <div class="swiper-button-next">
              <i class="bi bi-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 d-flex justify-content-center">
          <a class="btn_2">View More <i class="bi bi-arrow-right"></i></a>
        </div>
      </div>
    </div>
  </section>
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
                  <button type="submit " class="btn c-theme-btn c-btn-uppercase btn-lg c-btn-bold c-btn-square ">Submit
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

