<template>
  
  <div class="inner__banner" v-if="product">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="breadcrums">
                    <ul>
                        <li><NuxtLink to="/">
                          Home</NuxtLink></li>
                        <li>{{product.name}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
<section class="inner_container" v-if="product">
  
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-xl-5 mb-4 ">
                <div class="product_detail">

                  <ProductCardImages :images="product.product_images" v-if="product?.product_images?.length > 0"/>
                </div>
            </div>
            <div class="col-md-6 col-xl-7">
                <div class="product__detail__box">
                    <h2 class="mob_none">{{product.name}} </h2>
                    <ProductCardRating :rating="product.rating" :reviewCount="product.review_count"/>
                    
                    <ProductCardVarients  v-if="product?.product_variants?.length > 0"/>
                   
                    <div class="highlights">
                        <h4>Highlights</h4>
                        <ul>
                            <li>
                                <div class="img_box"><img src="/images/highlight1.svg" alt="seeken"></div>
                                <h4> <span>Sweep</span> 1200 MM</h4>
                            </li>
                            <li>
                                <div class="img_box"><img src="/images/highlight2.svg" alt="seeken"></div>
                                <h4> <span>Voltage</span> 230V</h4>
                            </li>
                            <li>
                                <div class="img_box"><img src="/images/highlight3.svg" alt="seeken"></div>
                                <h4> <span>RPM</span> 390 rpm</h4>
                            </li>
                            <li>
                                <div class="img_box"><img src="/images/highlight4.svg" alt="seeken"></div>
                                <h4> <span>Air Delivery</span> 210 CM</h4>
                            </li>
                        </ul>
                    </div>
                    <div class="product__content">
                        <p>{{product.short_description}}</p>
                    </div>
                </div>
            </div>
        </div>
       
        {{ product.description }}
        
        <ProductCardSpecs />


        <div class="row justify-content-center mt-5">
            <div class="col-md-12 related__products">
                <h3>You might also like</h3>
                <div class="relatedproducts owl-carousel owl-theme">
                   <div class="product__box"> <a href="detail.html">
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
                                    <div class="price"> Rs. 4,400.00 <span>Rs. 5,500.00</span></div>
                                </div>
                            </div>
                            <div class="top_box">
                                <div class="product__img">
                                    <img src="/images/featured_product_2.webp" class="img-fluid" alt="seeken"
                                        loading="lazy">
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
                                <div class="view__wishlist">
                                    <a data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">   <div class="view"><i class="bi bi-eye"></i></div></a>
                             </div>
                            </div>
                            <div class="bottom__box">
                                <div class="rating"><i class="bi bi-star-fill"></i> 5.0 <span>(16k)</span>
                                </div>
                                <div class="colors">
                                    <ul>
                                        <li>
                                            <div class="code active"> <img src="/images/color_code/clr-1.webp"
                                                    class="img-fluid" alt="seeken" loading="lazy">
                                            </div>
                                        </li>
                                        <li>
                                            <div class="code"><img src="/images/color_code/clr-2.webp"
                                                    class="img-fluid" alt="seeken" loading="lazy"></div>
                                        </li>
                                        <li>
                                            <div class="code"><img src="/images/color_code/clr-3.webp"
                                                    class="img-fluid" alt="seeken" loading="lazy"></div>
                                        </li>
                                        <li>
                                            <div class="code"><img src="/images/color_code/clr-4.webp"
                                                    class="img-fluid" alt="seeken" loading="lazy"></div>
                                        </li>
                                        <li><a data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"> more </a></li>
                                     
                                    </ul>
                                </div>
                              
                            </div></a>
                        </div>
                        <div class="product__box"> <a href="detail.html">
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
                                    <div class="price"> Rs. 4,400.00 <span>Rs. 5,500.00</span></div>
                                </div>
                            </div>
                            <div class="top_box">
                                <div class="product__img">
                                    <img src="/images/featured_product_2.webp" class="img-fluid" alt="seeken"
                                        loading="lazy">
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
                                <div class="view__wishlist">
                                    <a data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">   <div class="view"><i class="bi bi-eye"></i></div></a>
                             </div>
                            </div>
                            <div class="bottom__box">
                                <div class="rating"><i class="bi bi-star-fill"></i> 5.0 <span>(16k)</span>
                                </div>
                                <div class="colors">
                                    <ul>
                                        <li>
                                            <div class="code active"> <img src="/images/color_code/clr-1.webp"
                                                    class="img-fluid" alt="seeken" loading="lazy">
                                            </div>
                                        </li>
                                        <li>
                                            <div class="code"><img src="/images/color_code/clr-2.webp"
                                                    class="img-fluid" alt="seeken" loading="lazy"></div>
                                        </li>
                                        <li>
                                            <div class="code"><img src="/images/color_code/clr-3.webp"
                                                    class="img-fluid" alt="seeken" loading="lazy"></div>
                                        </li>
                                        <li>
                                            <div class="code"><img src="/images/color_code/clr-4.webp"
                                                    class="img-fluid" alt="seeken" loading="lazy"></div>
                                        </li>
                                        <li><a data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"> more </a></li>
                                     
                                    </ul>
                                </div>
                              
                            </div></a>
                        </div>
                        <div class="product__box"> <a href="detail.html">
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
                                    <div class="price"> Rs. 4,400.00 <span>Rs. 5,500.00</span></div>
                                </div>
                            </div>
                            <div class="top_box">
                                <div class="product__img">
                                    <img src="/images/featured_product_2.webp" class="img-fluid" alt="seeken"
                                        loading="lazy">
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
                                <div class="view__wishlist">
                                    <a data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">   <div class="view"><i class="bi bi-eye"></i></div></a>
                             </div>
                            </div>
                            <div class="bottom__box">
                                <div class="rating"><i class="bi bi-star-fill"></i> 5.0 <span>(16k)</span>
                                </div>
                                <div class="colors">
                                    <ul>
                                        <li>
                                            <div class="code active"> <img src="/images/color_code/clr-1.webp"
                                                    class="img-fluid" alt="seeken" loading="lazy">
                                            </div>
                                        </li>
                                        <li>
                                            <div class="code"><img src="/images/color_code/clr-2.webp"
                                                    class="img-fluid" alt="seeken" loading="lazy"></div>
                                        </li>
                                        <li>
                                            <div class="code"><img src="/images/color_code/clr-3.webp"
                                                    class="img-fluid" alt="seeken" loading="lazy"></div>
                                        </li>
                                        <li>
                                            <div class="code"><img src="/images/color_code/clr-4.webp"
                                                    class="img-fluid" alt="seeken" loading="lazy"></div>
                                        </li>
                                        <li><a data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"> more </a></li>
                                    </ul>
                                </div>
                              
                            </div></a>
                        </div>
                        <div class="product__box"> <a href="detail.html">
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
                                    <div class="price"> Rs. 4,400.00 <span>Rs. 5,500.00</span></div>
                                </div>
                            </div>
                            <div class="top_box">
                                <div class="product__img">
                                    <img src="/images/featured_product_2.webp" class="img-fluid" alt="seeken"
                                        loading="lazy">
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
                                <div class="view__wishlist">
                                    <a data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">   <div class="view"><i class="bi bi-eye"></i></div></a>
                             </div>
                            </div>
                            <div class="bottom__box">
                                <div class="rating"><i class="bi bi-star-fill"></i> 5.0 <span>(16k)</span>
                                </div>
                                <div class="colors">
                                    <ul>
                                        <li>
                                            <div class="code active"> <img src="/images/color_code/clr-1.webp"
                                                    class="img-fluid" alt="seeken" loading="lazy">
                                            </div>
                                        </li>
                                        <li>
                                            <div class="code"><img src="/images/color_code/clr-2.webp"
                                                    class="img-fluid" alt="seeken" loading="lazy"></div>
                                        </li>
                                        <li>
                                            <div class="code"><img src="/images/color_code/clr-3.webp"
                                                    class="img-fluid" alt="seeken" loading="lazy"></div>
                                        </li>
                                        <li>
                                            <div class="code"><img src="/images/color_code/clr-4.webp"
                                                    class="img-fluid" alt="seeken" loading="lazy"></div>
                                        </li>
                                        <li><a data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"> more </a></li>
                                    </ul>
                                </div>
                              
                            </div></a>
                        </div>
                        <div class="product__box"> <a href="detail.html">
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
                                    <div class="price"> Rs. 4,400.00 <span>Rs. 5,500.00</span></div>
                                </div>
                            </div>
                            <div class="top_box">
                                <div class="product__img">
                                    <img src="/images/featured_product_2.webp" class="img-fluid" alt="seeken"
                                        loading="lazy">
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
                                <div class="view__wishlist">
                                    <a data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">   <div class="view"><i class="bi bi-eye"></i></div></a>
                             </div>
                            </div>
                            <div class="bottom__box">
                                <div class="rating"><i class="bi bi-star-fill"></i> 5.0 <span>(16k)</span>
                                </div>
                                <div class="colors">
                                    <ul>
                                        <li>
                                            <div class="code active"> <img src="/images/color_code/clr-1.webp"
                                                    class="img-fluid" alt="seeken" loading="lazy">
                                            </div>
                                        </li>
                                        <li>
                                            <div class="code"><img src="/images/color_code/clr-2.webp"
                                                    class="img-fluid" alt="seeken" loading="lazy"></div>
                                        </li>
                                        <li>
                                            <div class="code"><img src="/images/color_code/clr-3.webp"
                                                    class="img-fluid" alt="seeken" loading="lazy"></div>
                                        </li>
                                        <li>
                                            <div class="code"><img src="/images/color_code/clr-4.webp"
                                                    class="img-fluid" alt="seeken" loading="lazy"></div>
                                        </li>
                                        <li><a data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"> more </a></li>
                                     
                                    </ul>
                                </div>
                              
                            </div></a>
                        </div>
                        <div class="product__box"> <a href="detail.html">
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
                                    <div class="price"> Rs. 4,400.00 <span>Rs. 5,500.00</span></div>
                                </div>
                            </div>
                            <div class="top_box">
                                <div class="product__img">
                                    <img src="/images/featured_product_2.webp" class="img-fluid" alt="seeken"
                                        loading="lazy">
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
                                <div class="view__wishlist">
                                    <a data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">   <div class="view"><i class="bi bi-eye"></i></div></a>
                             </div>
                            </div>
                            <div class="bottom__box">
                                <div class="rating"><i class="bi bi-star-fill"></i> 5.0 <span>(16k)</span>
                                </div>
                                <div class="colors">
                                    <ul>
                                        <li>
                                            <div class="code active"> <img src="/images/color_code/clr-1.webp"
                                                    class="img-fluid" alt="seeken" loading="lazy">
                                            </div>
                                        </li>
                                        <li>
                                            <div class="code"><img src="/images/color_code/clr-2.webp"
                                                    class="img-fluid" alt="seeken" loading="lazy"></div>
                                        </li>
                                        <li>
                                            <div class="code"><img src="/images/color_code/clr-3.webp"
                                                    class="img-fluid" alt="seeken" loading="lazy"></div>
                                        </li>
                                        <li>
                                            <div class="code"><img src="/images/color_code/clr-4.webp"
                                                    class="img-fluid" alt="seeken" loading="lazy"></div>
                                        </li>
                                        <li><a data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"> more </a></li>
                                    </ul>
                                </div>
                              
                            </div></a>
                        </div>
                </div>
            </div>
        </div>
        <div class="row justify-content-center mt-3 mt-md-5">
            <div class="col-md-12 review_rating">
                <h4>Customer reviews & ratings</h4>
<div class="review_star">
                    <div class="reviewrating_boxes">
                        <div class="rating">
                            <h3>4.3</h3>
                            <div class="ratings">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill hash"></i>
                            </div>
                            <div class="total__rating">
                                46 ratings
                            </div>
                        </div>
                        <div class="recommended">
                            <h3>86%</h3>
                            <div class="total__rating">
                                Recommended <span>(13 of 15)</span>

                            </div>
                        </div>
                    </div>
                    <div class="star__rating">
                        <div class="percentage__box">
                            <div class="stars_rating">5 Stars</div>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" aria-label="Basic example"
                                    style="width: 100%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                </div>
                            </div>
                            <div class="percentage_rating">48</div>
                        </div>

                        <div class="percentage__box">
                            <div class="stars_rating">4 Stars</div>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" aria-label="Basic example"
                                    style="width: 75%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                </div>
                            </div>
                            <div class="percentage_rating">34</div>
                        </div>

                        <div class="percentage__box">
                            <div class="stars_rating">3 Stars</div>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" aria-label="Basic example"
                                    style="width: 50%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                </div>
                            </div>
                            <div class="percentage_rating">27</div>
                        </div>

                        <div class="percentage__box">
                            <div class="stars_rating">2 Stars</div>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" aria-label="Basic example"
                                    style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                </div>
                            </div>
                            <div class="percentage_rating">10</div>
                        </div>

                        <div class="percentage__box">
                            <div class="stars_rating">1 Stars</div>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" aria-label="Basic example"
                                    style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                </div>
                            </div>
                            <div class="percentage_rating">03</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row customer__review justify-content-center">

            <div class="col-md-8 col-xl-6">
                <div class="reviewrating_box ">
                    <!-- this div show only  customer didnot login -->
                    <h4>Write a review</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, animi sequi cupiditate alias doloribus eligendi dolor, commodi quaerat quo, eum ratione. Adipisci eaque tenetur pariatur vel repellat, aut dicta cumque?</p>
                    <button class="btn_2" data-bs-toggle="modal"
                    data-bs-target="#exampleModal5">Login</button>
                    <!--  -->
                    <div class="mb-1">
                        <div class="ratings">
<h5>Rating:</h5>
<div class="stars"><i class="bi bi-star-fill"></i>
<i class="bi bi-star-fill"></i>
<i class="bi bi-star-fill"></i>
<i class="bi bi-star-fill"></i>
<i class="bi bi-star-fill hash"></i></div>
                      </div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Title: </label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="">
                      </div>
                      <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label"> Review:</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                      </div>
                      <button class="btn_2">Submit</button>
                </div>
          </div>
            </div>
            <div class="row reviewrating_box mb10" data-masonry='{"percentPosition": true }'>

               <div class="col-md-6 pe-2 ps-2">
                  <div class="customer_detail">
                <h5>Title here</h5>
                <div class="stars"><i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill hash"></i></div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nostrum est molestias non reiciendis itaque! Sint tenetur voluptas tempore harum quaerat iure. Officiis recusandae porro similique numquam incidunt minus odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque vel placeat,  consectetur nostrum architecto enim aperiam nesciunt perferendis maxime ipsam consequuntur unde, temporibus cumque tempore!</p>
                    <h6>Customer Name</h6>
            </div></div>
            <div class="col-md-6 pe-2 ps-2">
                <div class="customer_detail">
                    <h5>Title here</h5>
                    <div class="stars"><i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill hash"></i></div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nostrum est molestias non reiciendis itaque! Sint tenetur voluptas tempore.</p>
                        <h6>Customer Name</h6>
                </div>
               </div>
               <div class="col-md-6 pe-2 ps-2">
                <div class="customer_detail">
                    <h5>Title here</h5>
                    <div class="stars"><i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill hash"></i></div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nostrum est molestias non reiciendis itaque! Sint tenetur .</p>
                        <h6>Customer Name</h6>
                </div>
               </div>
               <div class="col-md-6 pe-2 ps-2">
                <div class="customer_detail">
                    <h5>Title here</h5>
                    <div class="stars"><i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill hash"></i></div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nostrum est molestias non reiciendis itaque! Sint tenetur voluptas tempore harum quaerat iure. Officiis recusandae porro similique numquam incidunt minus odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sunt voluptatum repellat atque earum ducimus nam perferendis. Veritatis ducimus obcaecati quisquam harum porro sapiente eos.</p>
                        <h6>Customer Name</h6>
                </div>
               </div>
               <div class="col-md-6 pe-2 ps-2">
                <div class="customer_detail">
                    <h5>Title here</h5>
                    <div class="stars"><i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill hash"></i></div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nostrum est molestias non reiciendis itaque! Sint tenetur  odio.</p>
                        <h6>Customer Name</h6>
                </div>
               </div>
               <div class="col-md-6 pe-2 ps-2">
                <div class="customer_detail">
                    <h5>Title here</h5>
                    <div class="stars"><i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill hash"></i></div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nostrum est molestias non reiciendis itaque! Sint tenetur voluptas tempore harum quaerat iure. Officiis recusandae porro similique numquam incidunt minus odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium reprehenderit optio quas fugiat consequatur quaerat pariatur voluptate consequuntur velit itaque? Error fuga dolores rerum harum placeat ex excepturi necessitatibus animi?</p>
                        <h6>Customer Name</h6>
                </div>
               </div>
        </div>
</div>

</section>
</template>

<script lang="ts" setup>

import { useRoute } from 'vue-router';
import { useDateFormat } from '~/composables/useDateFormat';
const { formatDate } = useDateFormat();

const route = useRoute(); 
const slug = route.params.slug; // Get slug from URL
const { data: response, error, refresh } = useFetchData('response', `products/${slug}`);
const product = computed(() => response.value?.data);

</script>

<style>

</style>