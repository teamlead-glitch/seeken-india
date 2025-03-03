<template>

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
</template>