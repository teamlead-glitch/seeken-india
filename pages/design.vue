<template>

    <header class="header">
      <div class="container flex">
        <a href="./index.html" class="logo">
          <img src="/assets/images/logo.svg" alt="Lumiere Holidays Logo" />
        </a>
        <div class="nav-bar">
          <nav>
            <ul class="nav-items">
              <li>
                <a class="link" href="./index.html"
                  ><span data-hover="Home">Home</span></a
                >
              </li>
              <li>
                <a class="link" href="./package-intermediate.html"
                  ><span data-hover="INDIA - DOMESTIC TOURS"
                    >INDIA - DOMESTIC TOURS</span
                  ></a
                >
              </li>
              <li>
                <a class="link" href="./package-intermediate.html"
                  ><span data-hover="International Tours"
                    >International Tours</span
                  ></a
                >
              </li>
              <li>
                <a class="link" href="./package-intermediate.html"
                  ><span data-hover="Honeymoon Packages"
                    >Honeymoon Packages</span
                  ></a
                >
              </li>
              <li>
                <a class="link" href="./package-intermediate.html"
                  ><span data-hover="Special Tours">Special Tours</span></a
                >
              </li>
              <li>
                <a class="link" href="./kerala-landing.html"
                  ><span data-hover="Kerala Tour">Kerala Tour</span></a
                >
              </li>
              <li>
                <a class="link" href="./contact.html"
                  ><span data-hover="Contact us">Contact us</span></a
                >
              </li>
            </ul>
          </nav>
          <button class="btn search-btn md-trigger" data-modal="search-bar">
            <span><i class="fa-solid fa-magnifying-glass"></i></span>
          </button>
          <div class="hamburger-menu" id="toggle">
            <span class="top"></span>
            <span class="middle"></span>
            <span class="bottom"></span>
          </div>
          <!-- Mobile Navigation -->
          <div class="overlay" id="overlay">
            <nav class="overlay-menu">
              <ul>
                <li>
                  <a class="link" href="./index.html"
                    ><span data-hover="Home">Home</span></a
                  >
                </li>
                <li>
                  <a class="link" href="./package-intermediate.html"
                    ><span data-hover="INDIA - DOMESTIC TOURS"
                      >INDIA - DOMESTIC TOURS</span
                    ></a
                  >
                </li>
                <li>
                  <a class="link" href="./package-intermediate.html"
                    ><span data-hover="International Tours"
                      >International Tours</span
                    ></a
                  >
                </li>
                <li>
                  <a class="link" href="./package-intermediate.html"
                    ><span data-hover="Honeymoon Packages"
                      >Honeymoon Packages</span
                    ></a
                  >
                </li>
                <li>
                  <a class="link" href="./package-intermediate.html"
                    ><span data-hover="Special Tours">Special Tours</span></a
                  >
                </li>
                <li>
                  <a class="link" href="./kerala-landing.html"
                    ><span data-hover="Kerala Tour">Kerala Tour</span></a
                  >
                </li>
                <li>
                  <a class="link" href="./contact.html"
                    ><span data-hover="Contact us">Contact us</span></a
                  >
                </li>
              </ul>
              <ul class="social-list">
                <li>
                  <a
                    href="https://www.facebook.com/lumiereholidays"
                    target="_blank"
                    class="btn"
                  >
                    <span><i class="fa-brands fa-facebook"></i></span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/LumiereHolidays"
                    target="_blank"
                    class="btn"
                  >
                    <span><i class="fa-brands fa-x-twitter"></i></span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/lumiereholidays/"
                    target="_blank"
                    class="btn"
                  >
                    <span><i class="fa-brands fa-linkedin"></i></span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/lumiere_holidays/"
                    target="_blank"
                    class="btn"
                  >
                    <span><i class="fa-brands fa-square-instagram"></i></span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/channel/UCWYoUPC3WtuYyGDTBKwfQnA"
                    target="_blank"
                    class="btn"
                  >
                    <span><i class="fa-brands fa-youtube"></i></span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>

    <div class="connect-btns">
      <button
        onclick="window.open(('https://api.whatsapp.com/send?phone=+91 9526232221&amp;text=Hello Lumiere Holidays'))"
        class="btn is-connect-btn"
      >
        <span>
          <i class="uil uil-whatsapp"></i>
        </span>
      </button>
      <a href="tel:+919526232221" class="btn is-connect-btn">
        <span>
          <i class="uil uil-phone"></i>
        </span>
      </a>
      <button class="btn is-connect-btn">
        <span>
          <i class="uil uil-comment-dots"></i>
        </span>
      </button>
    </div>
    <div class="enquire-btn">
      <button class="btn md-trigger" data-modal="enquiry-modal">
        <span> <i class="uil uil-envelope-upload"></i> Enquire </span>
      </button>
    </div>
    <div class="social-links">
      <ul class="social-list">
        <li>
          <a href="" class="btn">
            <span><i class="fa-brands fa-facebook"></i></span>
          </a>
        </li>
        <li>
          <a href="" class="btn">
            <span><i class="fa-brands fa-x-twitter"></i></span>
          </a>
        </li>
        <li>
          <a href="" class="btn">
            <span><i class="fa-brands fa-linkedin"></i></span>
          </a>
        </li>
        <li>
          <a href="" class="btn">
            <span><i class="fa-brands fa-square-instagram"></i></span>
          </a>
        </li>
        <li>
          <a href="" class="btn">
            <span><i class="fa-brands fa-youtube"></i></span>
          </a>
        </li>
      </ul>
    </div>
    <div class="scroll-down-line">
      <span></span>
    </div>
    <main>
      <!-- Hero -->
      <section class="p0 hero">
        <div class="slider owl-carousel owl-theme">
          <div class="item">
            <img src="/assets/images/slide-1.jpg" alt="" />
            <div class="cover">
              <div class="container">
                <div class="header-content">
                  <h2>
                    Enhance your travel perceptions with the right companion
                  </h2>
                  <p>
                    Discover new oceans together with amusing honeymoon packages
                  </p>
                  <div class="btn-group">
                    <a href="contact.html" class="btn">
                      <span>
                        Enquire Now <i class="fa-solid fa-arrow-right"></i>
                      </span>
                    </a>
                    <a href="contact.html" class="btn">
                      <span>
                        Search Tour
                        <i class="fa-solid fa-magnifying-glass"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="slider--count"><span>1</span>/4</div>
          </div>
          <div class="item">
            <img src="/assets/images/slide-2.jpg" alt="" />
            <div class="cover">
              <div class="container">
                <div class="header-content">
                  <h2>
                    Enhance your travel perceptions with the right companion
                  </h2>
                  <p>
                    Discover new oceans together with amusing honeymoon packages
                  </p>
                  <div class="btn-group">
                    <a href="contact.html" class="btn">
                      <span>
                        Enquire Now <i class="fa-solid fa-arrow-right"></i>
                      </span>
                    </a>
                    <a href="contact.html" class="btn">
                      <span>
                        Search Tour
                        <i class="fa-solid fa-magnifying-glass"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="slider--count"><span>2</span>/4</div>
          </div>
          <div class="item">
            <img src="/assets/images/slide-3.jpg" alt="" />
            <div class="cover">
              <div class="container">
                <div class="header-content">
                  <h2>
                    Enhance your travel perceptions with the right companion
                  </h2>
                  <p>
                    Discover new oceans together with amusing honeymoon packages
                  </p>
                  <div class="btn-group">
                    <a href="contact.html" class="btn">
                      <span>
                        Enquire Now <i class="fa-solid fa-arrow-right"></i>
                      </span>
                    </a>
                    <a href="contact.html" class="btn">
                      <span>
                        Search Tour
                        <i class="fa-solid fa-magnifying-glass"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="slider--count"><span>3</span>/4</div>
          </div>
          <div class="item">
            <img src="/assets/images/slide-4.jpg" alt="" />
            <div class="cover">
              <div class="container">
                <div class="header-content">
                  <h2>
                    Enhance your travel perceptions with the right companion
                  </h2>
                  <p>
                    Discover new oceans together with amusing honeymoon packages
                  </p>
                  <div class="btn-group">
                    <a href="contact.html" class="btn">
                      <span>
                        Enquire Now <i class="fa-solid fa-arrow-right"></i>
                      </span>
                    </a>
                    <a href="contact.html" class="btn">
                      <span>
                        Search Tour
                        <i class="fa-solid fa-magnifying-glass"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="slider--count"><span>4</span>/4</div>
          </div>
        </div>
      </section>

      <section>
        <div class="container">
          <div class="col">
            <div class="section--title">
              <h2><span>Popular Packages</span></h2>
              <small>Your dream journey starts here</small>
            </div>
            <div class="custom-carousel">
              <div class="carousel nav-top owl-carousel owl-theme">
                <div class="item">
                  <a href="./package-details.html">
                    <div class="pakage-card">
                      <figure>
                        <img src="/assets/images/pakage-img1.jpg" alt="" />
                        <div class="label">Best Deals</div>
                      </figure>
                      <div class="col">
                        <a href="./package-details.html">
                          <div class="btn is-icon">
                            <span>
                              <i class="fa-solid fa-arrow-right"></i>
                            </span>
                          </div>
                        </a>
                        <h3>Dubai</h3>
                        <p>
                          3 nights 4 Days Dubai Tour Package for Senior citizens
                        </p>
                        <div class="inclusions">
                          <span>Inclusions</span>
                          <div class="inclusions--icons">
                            <i class="fa-solid fa-bed"></i>
                            <i class="fa-solid fa-car"></i>
                            <i class="fa-solid fa-utensils"></i>
                            <i class="fa-solid fa-eye"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="item">
                  <a href="./package-details.html">
                    <div class="pakage-card">
                      <figure>
                        <img src="/assets/images/pakage-img2.jpg" alt="" />
                        <div class="label">Best Deals</div>
                      </figure>
                      <div class="col">
                        <a href="./package-details.html">
                          <div class="btn is-icon">
                            <span>
                              <i class="fa-solid fa-arrow-right"></i>
                            </span>
                          </div>
                        </a>
                        <h3>Kashmir</h3>
                        <p>4 Days Kashmir Tour Packages</p>
                        <div class="inclusions">
                          <span>Inclusions</span>
                          <div class="inclusions--icons">
                            <i class="fa-solid fa-bed"></i>
                            <i class="fa-solid fa-car"></i>
                            <i class="fa-solid fa-utensils"></i>
                            <i class="fa-solid fa-eye"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="item">
                  <a href="./package-details.html"
                    ><div class="pakage-card">
                      <figure>
                        <img src="/assets/images/pakage-img4.jpg" alt="" />
                        <div class="label">Best Deals</div>
                      </figure>
                      <div class="col">
                        <a href="./package-details.html">
                          <div class="btn is-icon">
                            <span>
                              <i class="fa-solid fa-arrow-right"></i>
                            </span>
                          </div>
                        </a>
                        <h3>Andaman</h3>
                        <p>5 Nights 6 Days Andaman Tour package</p>
                        <div class="inclusions">
                          <span>Inclusions</span>
                          <div class="inclusions--icons">
                            <i class="fa-solid fa-bed"></i>
                            <i class="fa-solid fa-car"></i>
                            <i class="fa-solid fa-utensils"></i>
                            <i class="fa-solid fa-eye"></i>
                          </div>
                        </div>
                      </div></div
                  ></a>
                </div>
                <div class="item">
                  <a href="./package-details.html"
                    ><div class="pakage-card">
                      <figure>
                        <img src="/assets/images/pakage-img3.jpg" alt="" />
                        <div class="label">Best Deals</div>
                      </figure>
                      <div class="col">
                        <a href="./package-details.html">
                          <div class="btn is-icon">
                            <span>
                              <i class="fa-solid fa-arrow-right"></i>
                            </span>
                          </div>
                        </a>
                        <h3>Maldives</h3>
                        <p>3 nights 4 days Maldives Tour package</p>
                        <div class="inclusions">
                          <span>Inclusions</span>
                          <div class="inclusions--icons">
                            <i class="fa-solid fa-bed"></i>
                            <i class="fa-solid fa-car"></i>
                            <i class="fa-solid fa-utensils"></i>
                            <i class="fa-solid fa-eye"></i>
                          </div>
                        </div>
                      </div></div
                  ></a>
                </div>
                <div class="item">
                  <a href="./package-details.html"
                    ><div class="pakage-card">
                      <figure>
                        <img src="/assets/images/pakage-img4.jpg" alt="" />
                        <div class="label">Best Deals</div>
                      </figure>
                      <div class="col">
                        <a href="./package-details.html">
                          <div class="btn is-icon">
                            <span>
                              <i class="fa-solid fa-arrow-right"></i>
                            </span>
                          </div>
                        </a>
                        <h3>Andaman</h3>
                        <p>5 Nights 6 Days Andaman Tour package</p>
                        <div class="inclusions">
                          <span>Inclusions</span>
                          <div class="inclusions--icons">
                            <i class="fa-solid fa-bed"></i>
                            <i class="fa-solid fa-car"></i>
                            <i class="fa-solid fa-utensils"></i>
                            <i class="fa-solid fa-eye"></i>
                          </div>
                        </div>
                      </div></div
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="shade">
        <div class="container">
          <div class="col">
            <div class="section--title">
              <h2>Travel to <span>make memories</span></h2>
              <small>Why Us</small>
            </div>
            <p class="mt-30 md-txt">
              We take you to the exotic destinations in an unbelievable budget.
              We are a group of youthful and passionate explorers, with an
              uncompromising love for traveling. We offer luxurious and
              economical tailor-made holidays, with great attention to details,
              and provide unparalleled and memorable experience to our
              customers. We have a number of predefined tours to all famous
              destinations in kerala. We are known to follow world-class
              standards and superior quality of service. We help you to plan
              your travel itineraries and offer personalized service for
              customers with utmost care. Make your holidays hassle-free and
              gleeful with Lumiere holidays
            </p>
          </div>
          <div class="col p0 benefits">
            <div class="col-7">
              <p class="mt-30 lg-txt">
                We take you to the exotic destinations in an unbelievable
                budget. We are a group of youthful and passionate explorers,
                with an uncompromising love for traveling. We offer luxurious
                and economical tailor-made holidays, with great attention to
                details, and provide unparalleled and memorable experience to
                our customers. We have a number of predefined tours to all
                famous destinations in kerala. We are known to follow
                world-class standards and superior quality of service. We help
                you to plan your travel itineraries and offer personalized
                service for customers with utmost care. Make your holidays
                hassle-free and gleeful with Lumiere holidays
              </p>
              <ul class="benefits-list">
                <li>
                  <div class="benefits-list--icon">
                    <img src="/assets/images/safe-travel.svg" alt="" />
                  </div>
                  <div class="benefits-list--desc">
                    <h4>Safe Travelling</h4>
                    <p>
                      We provide a positive work environment that makes our
                      employees feel good about coming to work.
                    </p>
                  </div>
                </li>
                <li>
                  <div class="benefits-list--icon">
                    <img src="/assets/images/price.svg" alt="" />
                  </div>
                  <div class="benefits-list--desc">
                    <h4>Affordable Price</h4>
                    <p>
                      Customer satisfaction is our prime motto and with our
                      superior quality services, we do not let any scope for
                      worries.
                    </p>
                  </div>
                </li>
                <li>
                  <div class="benefits-list--icon">
                    <img src="/assets/images/bed.svg" alt="" />
                  </div>
                  <div class="benefits-list--desc">
                    <h4>Comfort Accommodation</h4>
                    <p>
                      We are a team with the full passion to create true,
                      reasonable and environmentally sustainable business to
                      host travellers from the various corners of the world to
                      deliver an outstanding customer service.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="col-5">
              <figure>
                <img
                  src="/assets/images/lumier-holidays.jpg"
                  alt="Lumiere holidays"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section class="hotselling-pkgs">
        <div class="container">
          <div class="col flex p0">
            <div class="col-3">
              <div class="section--title">
                <h2>Hotselling <span>Packages</span></h2>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                fermentum maximus vehicula. In semper mi lacus, ac euismod felis
                elementum at. Etiam rutrum, turpis et rutrum auctor, mi urna
                lobortis felis, eu pretium est urna id turpis. Etiam rutrum,
                turpis et rutrum auctor, mi urna lobortis felis, eu pretium est
                urna id turpis.
              </p>
              <a class="link is-dark" href="./package-list.html"
                ><span data-hover="EXPLORE ALL PACKAGES"
                  >EXPLORE ALL PACKAGES</span
                ></a
              >
            </div>
            <div class="col-9">
              <div class="custom-carousel">
                <div class="hotselling-carousel nav-lr owl-carousel owl-theme">
                  <div class="item">
                    <div class="pakage-card">
                      <figure>
                        <img src="/assets/images/pakage-img1.jpg" alt="" />
                        <div class="label">Best Deals</div>
                      </figure>
                      <div class="col">
                        <a href="./package-details.html">
                          <div class="btn is-icon">
                            <span>
                              <i class="fa-solid fa-arrow-right"></i>
                            </span>
                          </div>
                        </a>
                        <h3>Dubai</h3>
                        <p>
                          3 nights 4 Days Dubai Tour Package for Senior citizens
                        </p>
                        <div class="inclusions">
                          <span>Inclusions</span>
                          <div class="inclusions--icons">
                            <i class="fa-solid fa-bed"></i>
                            <i class="fa-solid fa-car"></i>
                            <i class="fa-solid fa-utensils"></i>
                            <i class="fa-solid fa-eye"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="pakage-card">
                      <figure>
                        <img src="/assets/images/pakage-img2.jpg" alt="" />
                        <div class="label">Best Deals</div>
                      </figure>
                      <div class="col">
                        <a href="./package-details.html">
                          <div class="btn is-icon">
                            <span>
                              <i class="fa-solid fa-arrow-right"></i>
                            </span>
                          </div>
                        </a>
                        <h3>Kashmir</h3>
                        <p>4 Days Kashmir Tour Packages</p>
                        <div class="inclusions">
                          <span>Inclusions</span>
                          <div class="inclusions--icons">
                            <i class="fa-solid fa-bed"></i>
                            <i class="fa-solid fa-car"></i>
                            <i class="fa-solid fa-utensils"></i>
                            <i class="fa-solid fa-eye"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="pakage-card">
                      <figure>
                        <img src="/assets/images/pakage-img3.jpg" alt="" />
                        <div class="label">Best Deals</div>
                      </figure>
                      <div class="col">
                        <a href="./package-details.html">
                          <div class="btn is-icon">
                            <span>
                              <i class="fa-solid fa-arrow-right"></i>
                            </span>
                          </div>
                        </a>
                        <h3>Maldives</h3>
                        <p>3 nights 4 days Maldives Tour package</p>
                        <div class="inclusions">
                          <span>Inclusions</span>
                          <div class="inclusions--icons">
                            <i class="fa-solid fa-bed"></i>
                            <i class="fa-solid fa-car"></i>
                            <i class="fa-solid fa-utensils"></i>
                            <i class="fa-solid fa-eye"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="pakage-card">
                      <figure>
                        <img src="/assets/images/pakage-img4.jpg" alt="" />
                        <div class="label">Best Deals</div>
                      </figure>
                      <div class="col">
                        <a href="./package-details.html">
                          <div class="btn is-icon">
                            <span>
                              <i class="fa-solid fa-arrow-right"></i>
                            </span>
                          </div>
                        </a>
                        <h3>Andaman</h3>
                        <p>5 Nights 6 Days Andaman Tour package</p>
                        <div class="inclusions">
                          <span>Inclusions</span>
                          <div class="inclusions--icons">
                            <i class="fa-solid fa-bed"></i>
                            <i class="fa-solid fa-car"></i>
                            <i class="fa-solid fa-utensils"></i>
                            <i class="fa-solid fa-eye"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="pakage-card">
                      <figure>
                        <img src="/assets/images/pakage-img4.jpg" alt="" />
                        <div class="label">Best Deals</div>
                      </figure>
                      <div class="col">
                        <a href="./package-details.html">
                          <div class="btn is-icon">
                            <span>
                              <i class="fa-solid fa-arrow-right"></i>
                            </span>
                          </div>
                        </a>
                        <h3>Andaman</h3>
                        <p>5 Nights 6 Days Andaman Tour package</p>
                        <div class="inclusions">
                          <span>Inclusions</span>
                          <div class="inclusions--icons">
                            <i class="fa-solid fa-bed"></i>
                            <i class="fa-solid fa-car"></i>
                            <i class="fa-solid fa-utensils"></i>
                            <i class="fa-solid fa-eye"></i>
                          </div>
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

      <section class="shade poplr-destinations">
        <div class="container">
          <div class="col-8 mx-auto txt-center">
            <div class="section--title is-center-align">
              <h2>Popular <span>Destinations</span></h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              fermentum maximus vehicula. In semper mi lacus, ac euismod felis
              elementum at. Etiam rutrum, turpis et rutrum auctor, mi urna
              lobortis felis, eu pretium est urna id turpis.
            </p>
          </div>
          <div class="col flex p0">
            <div class="col-6">
              <div class="img-card">
                <figure class="img-xl">
                  <img src="/assets/images/pd-1.jpg" alt="" />
                  <div class="img-card--desc">
                    <h3>Dubai</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vivamus fermentum maximus vehicula.
                    </p>
                  </div>
                </figure>
                <a href="./package-intermediate.html" class="btn"
                  ><span
                    ><small>More</small> <i class="fa-solid fa-arrow-right"></i
                  ></span>
                </a>
              </div>
              <div class="col flex p0">
                <div class="col-6 p0 pr-1">
                  <div class="img-card">
                    <figure class="img-sm">
                      <img src="/assets/images/pd-2.jpg" alt="" />
                      <div class="img-card--desc">
                        <h3>Singapore</h3>
                      </div>
                    </figure>
                    <a href="./package-intermediate.html" class="btn"
                      ><span
                        ><small>More</small>
                        <i class="fa-solid fa-arrow-right"></i
                      ></span>
                    </a>
                  </div>
                </div>
                <div class="col-6 p0 pl-1">
                  <div class="img-card">
                    <figure class="img-sm">
                      <img src="/assets/images/pd-3.jpg" alt="" />
                      <div class="img-card--desc">
                        <h3>Kerala</h3>
                      </div>
                    </figure>
                    <a href="./kerala-landing.html" class="btn"
                      ><span
                        ><small>More</small>
                        <i class="fa-solid fa-arrow-right"></i
                      ></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="img-card">
                <figure class="img-sm">
                  <img src="/assets/images/pd-4.jpg" alt="" />
                  <div class="img-card--desc">
                    <h3>Dubai</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vivamus fermentum maximus vehicula.
                    </p>
                  </div>
                </figure>
                <a href="./package-intermediate.html" class="btn"
                  ><span
                    ><small>More</small> <i class="fa-solid fa-arrow-right"></i
                  ></span>
                </a>
              </div>
              <div class="img-card">
                <figure class="img-xl">
                  <img src="/assets/images/pd-1.jpg" alt="" />
                  <div class="img-card--desc">
                    <h3>Dubai</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vivamus fermentum maximus vehicula.
                    </p>
                  </div>
                </figure>
                <a href="./package-intermediate.html" class="btn"
                  ><span
                    ><small>More</small> <i class="fa-solid fa-arrow-right"></i
                  ></span>
                </a>
              </div>
            </div>
          </div>
          <div class="col txt-center mt-5">
            <a class="link is-dark" href="./package-list.html"
              ><span data-hover="More">More</span></a
            >
          </div>
        </div>
      </section>

      <section class="intl-pckg">
        <div class="container">
          <div class="col">
            <div class="section--title">
              <a href="./package-list.html">
                <h2>International Popular <span>Packages</span></h2>
              </a>
            </div>
            <ul class="package-list">
              <div class="pakage-card">
                <figure>
                  <img src="/assets/images/pakage-img1.jpg" alt="" />
                </figure>
                <div class="col">
                  <a href="./package-details.html">
                    <div class="btn is-icon">
                      <span>
                        <i class="fa-solid fa-arrow-right"></i>
                      </span>
                    </div>
                  </a>
                  <h3>Dubai</h3>
                  <p>3 nights 4 Days Dubai Tour Package for Senior citizens</p>
                  <div class="inclusions">
                    <span>Inclusions</span>
                    <div class="inclusions--icons">
                      <i class="fa-solid fa-bed"></i>
                      <i class="fa-solid fa-car"></i>
                      <i class="fa-solid fa-utensils"></i>
                      <i class="fa-solid fa-eye"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="pakage-card">
                <figure>
                  <img
                    src="https://images.unsplash.com/photo-1736244032196-5d604770aba8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4NHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </figure>
                <div class="col">
                  <a href="./package-details.html">
                    <div class="btn is-icon">
                      <span>
                        <i class="fa-solid fa-arrow-right"></i>
                      </span>
                    </div>
                  </a>
                  <h3>Dubai</h3>
                  <p>3 nights 4 Days Dubai Tour Package for Senior citizens</p>
                  <div class="inclusions">
                    <span>Inclusions</span>
                    <div class="inclusions--icons">
                      <i class="fa-solid fa-bed"></i>
                      <i class="fa-solid fa-car"></i>
                      <i class="fa-solid fa-utensils"></i>
                      <i class="fa-solid fa-eye"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="pakage-card">
                <figure>
                  <img
                    src="https://images.unsplash.com/photo-1735760672876-1c6f801f6436?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </figure>
                <div class="col">
                  <a href="./package-details.html">
                    <div class="btn is-icon">
                      <span>
                        <i class="fa-solid fa-arrow-right"></i>
                      </span>
                    </div>
                  </a>
                  <h3>Dubai</h3>
                  <p>3 nights 4 Days Dubai Tour Package for Senior citizens</p>
                  <div class="inclusions">
                    <span>Inclusions</span>
                    <div class="inclusions--icons">
                      <i class="fa-solid fa-bed"></i>
                      <i class="fa-solid fa-car"></i>
                      <i class="fa-solid fa-utensils"></i>
                      <i class="fa-solid fa-eye"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="pakage-card">
                <figure>
                  <img src="/assets/images/pakage-img4.jpg" alt="" />
                  <div class="label">Best Deals</div>
                </figure>
                <div class="col">
                  <a href="./package-details.html">
                    <div class="btn is-icon">
                      <span>
                        <i class="fa-solid fa-arrow-right"></i>
                      </span>
                    </div>
                  </a>
                  <h3>Dubai</h3>
                  <p>3 nights 4 Days Dubai Tour Package for Senior citizens</p>
                  <div class="inclusions">
                    <span>Inclusions</span>
                    <div class="inclusions--icons">
                      <i class="fa-solid fa-bed"></i>
                      <i class="fa-solid fa-car"></i>
                      <i class="fa-solid fa-utensils"></i>
                      <i class="fa-solid fa-eye"></i>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
            <div class="col txt-center mt-2">
              <a class="link is-dark" href="./package-list.html"
                ><span data-hover="More">More</span></a
              >
            </div>
          </div>
        </div>
      </section>

      <section class="reviews">
        <div class="container">
          <div class="col">
            <div class="section--title is-center-align">
              <h2>Customer <span>Stories</span></h2>
              <small>What our client say</small>
            </div>
            <div class="owl-theme hotselling-carousel nav-lr owl-carousel">
              <div class="item">
                <div class="review-card">
                  <div class="reviwer">
                    <img
                      src="https://yt3.googleusercontent.com/ytc/APkrFKbWj9-7R7D29D7hQHoeu07f0qsnxMfDJKf7_luE=s900-c-k-c0x00ffffff-no-rj"
                      class="img-user"
                      alt=""
                    />
                    <h4>First Name Last Name</h4>
                  </div>
                  <div class="review-rating">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                  <p>
                    Excellent service. Went to Dubai on a family trip for 4 days
                    and had opted Lumiere Holidays service. Right from the
                    beginning they provided all the support and was very well
                    co-ordinate. Definitely you can trust their expertise in
                    this. All the very best .. Team Lumiere. You made our trip a
                    most memorable one. Thanks and wishing you more success.
                  </p>
                </div>
              </div>
              <div class="item">
                <div class="review-card">
                  <div class="reviwer">
                    <img src="/assets/images/user.png" class="img-user" alt="" />
                    <h4>First Name Last Name</h4>
                  </div>
                  <div class="review-rating">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                  <p>
                    Excellent service. Went to Dubai on a family trip for 4 days
                    and had opted Lumiere Holidays service. Right from the
                    beginning they provided all the support and was very well
                    co-ordinate. Definitely you can trust their expertise in
                    this. All the very best .. Team Lumiere. You made our trip a
                    most memorable one. Thanks and wishing you more success.
                  </p>
                </div>
              </div>
              <div class="item">
                <div class="review-card">
                  <div class="reviwer">
                    <img src="/assets/images/user.png" class="img-user" alt="" />
                    <h4>First Name Last Name</h4>
                  </div>
                  <div class="review-rating">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                  <p>
                    Excellent service. Went to Dubai on a family trip for 4 days
                    and had opted Lumiere Holidays service. Right from the
                    beginning they provided all the support and was very well
                    co-ordinate. Definitely you can trust their expertise in
                    this. All the very best .. Team Lumiere. You made our trip a
                    most memorable one. Thanks and wishing you more success.
                  </p>
                </div>
              </div>
              <div class="item">
                <div class="review-card">
                  <div class="reviwer">
                    <img src="/assets/images/user.png" class="img-user" alt="" />
                    <h4>First Name Last Name</h4>
                  </div>
                  <div class="review-rating">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                  <p>
                    Excellent service. Went to Dubai on a family trip for 4 days
                    and had opted Lumiere Holidays service. Right from the
                    beginning they provided all the support and was very well
                    co-ordinate. Definitely you can trust their expertise in
                    this. All the very best .. Team Lumiere. You made our trip a
                    most memorable one. Thanks and wishing you more success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="blog">
        <div class="container">
          <div class="col">
            <div class="section--title is-center-align">
              <h2>Our <span>Blog</span></h2>
              <small>Lorem ipsum dolor sit amet</small>
            </div>

            <div class="col p0 blog-highlights">
              <div class="col-8">
                <div class="blog-img-card is-landscape">
                  <figure>
                    <img src="/assets/images/blog-img-landscape.jpg" alt="" />
                    <div class="blog-img--desc">
                      <h3>Lorem ipsum dolor sit amet</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vivamus fermentum maximus vehicula.
                      </p>
                      <span>Updated on September 2024</span>
                      <a href="./article-detail.html" class="btn">
                        <span
                          >Read More <i class="fa-solid fa-arrow-right"></i
                        ></span>
                      </a>
                    </div>
                  </figure>
                </div>
              </div>
              <div class="col-4">
                <div class="blog-img-card is-portrait mobile-hide">
                  <figure>
                    <img src="/assets/images/blog-img-portrait.jpg" alt="" />
                    <div class="blog-img--desc">
                      <h3>Lorem ipsum dolor sit amet</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vivamus fermentum maximus vehicula.
                      </p>
                      <span>Updated on September 2024</span>
                      <a href="./article-detail.html" class="btn">
                        <span
                          >Read More <i class="fa-solid fa-arrow-right"></i
                        ></span>
                      </a>
                    </div>
                  </figure>
                </div>
              </div>
            </div>
            <ul class="blog-list">
              <li>
                <a href="./article-detail.html" class="blog-list--card">
                  <figure>
                    <img src="/assets/images/blog-img-square.jpg" alt="" />
                  </figure>
                  <div class="blog-list--card--desc">
                    <h3>Lorem ipsum dolor sit amet</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                    <div class="date">
                      Updated on <span>September 2024</span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="./article-detail.html" class="blog-list--card">
                  <figure>
                    <img src="/assets/images/blog-img-square.jpg" alt="" />
                  </figure>
                  <div class="blog-list--card--desc">
                    <h3>Lorem ipsum dolor sit amet</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                    <div class="date">
                      Updated on <span>September 2024</span>
                    </div>
                  </div>
                </a>
              </li>
              <li class="mobile-hide">
                <a href="./article-detail.html" class="blog-list--card">
                  <figure>
                    <img src="/assets/images/blog-img-square.jpg" alt="" />
                  </figure>
                  <div class="blog-list--card--desc">
                    <h3>Lorem ipsum dolor sit amet</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                    <div class="date">
                      Updated on <span>September 2024</span>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <a class="link" href="./article-list.html"
          ><span data-hover="View More">View More</span></a
        >
      </section>
    </main>
    <footer>
      <div class="container">
        <div class="col p0 flex">
          <div class="col-3 address-box">
            <img
              src="/assets/images/logo.svg"
              class="footer-logo"
              alt="Lumiere Holidays"
            />
            <!-- <a href="" class="btn-roll"><span data-hover="View Details">View Details</span></a> -->
            <address>
              52/3183, First Floor, Top of Domino's Pizza,<br />Tharayil
              Chambers, Service Rd,<br />Opposite HP petrol pump,<br />Vyttila,
              Kochi,<br />Ernakulam, Kerala 682019
            </address>
            <div class="call-mail">
              <a class="link" href="tel:+919526232221"
                ><img src="/assets/images/call.svg" alt="" />
                <span data-hover="+91 9526232221">+91 9526232221</span>
              </a>
              <a class="link" href="mailto:info@lumiereholidays.com"
                ><img src="/assets/images/mail.svg" alt="" />
                <span data-hover="info@lumiereholidays.com"
                  >info@lumiereholidays.com</span
                >
              </a>
            </div>
            <div class="line-x lg-hide"></div>
          </div>
          <div class="col-9">
            <div class="footer-nav">
              <ul class="footer-links">
                <h4>Quick Links</h4>
                <div class="line-x"></div>
                <li>
                  <a class="link" href="./index.html"
                    ><span data-hover="Home">Home</span></a
                  >
                </li>
                <li>
                  <a class="link" href="./about-lumiereholidays.html"
                    ><span data-hover="About Us">About Us</span></a
                  >
                </li>
                <li>
                  <a class="link" href="./article-list.html"
                    ><span data-hover="Blog">Blog</span></a
                  >
                </li>
                <li>
                  <a class="link" href="./article-list.html"
                    ><span data-hover="News">News</span></a
                  >
                </li>
                <li>
                  <a class="link" href="./contact.html"
                    ><span data-hover="Contact Us">Contact Us</span></a
                  >
                </li>
                <li>
                  <a class="link" href="./privacy.html"
                    ><span data-hover="Privacy Policy">Privacy Policy</span></a
                  >
                </li>
              </ul>
              <ul class="footer-links">
                <h4>Tours & Packages</h4>
                <div class="line-x"></div>
                <li>
                  <a class="link" href="./package-list.html"
                    ><span data-hover="South India Tours"
                      >South India Tours</span
                    >
                  </a>
                </li>
                <li>
                  <a class="link" href="./package-list.html"
                    ><span data-hover="North India Tours"
                      >North India Tours</span
                    ></a
                  >
                </li>
                <li>
                  <a class="link" href="./package-list.html"
                    ><span data-hover="North East Tours"
                      >North East Tours</span
                    ></a
                  >
                </li>
                <li>
                  <a class="link" href="./package-list.html"
                    ><span data-hover="International Tours"
                      >International Tours</span
                    >
                  </a>
                </li>
                <li>
                  <a class="link" href="./package-list.html"
                    ><span data-hover="Honeymoon Packages"
                      >Honeymoon Packages</span
                    >
                  </a>
                </li>
              </ul>
              <ul class="footer-links">
                <h4>Helpful Links</h4>
                <div class="line-x"></div>
                <li>
                  <a class="link" href="./reservation.html"
                    ><span data-hover="Reservation Policy"
                      >Reservation Policy</span
                    >
                  </a>
                </li>
                <li>
                  <a class="link" href="./cancellation.html"
                    ><span data-hover="Cancellation policy"
                      >Cancellation policy</span
                    ></a
                  >
                </li>
                <li>
                  <a class="link" href="./terms.html"
                    ><span data-hover="Terms & Conditions"
                      >Terms & Conditions</span
                    ></a
                  >
                </li>
                <li>
                  <a class="link" href="./payment.html"
                    ><span data-hover="Payment">Payment</span></a
                  >
                </li>
              </ul>
            </div>
            <div class="col p0 footer-flex">
              <div class="connect">
                <h4>Get in touch</h4>
                <ul class="social-list">
                  <li>
                    <a
                      href="https://www.facebook.com/lumiereholidays"
                      target="_blank"
                      class="btn"
                    >
                      <span><i class="fa-brands fa-facebook"></i></span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/LumiereHolidays"
                      target="_blank"
                      class="btn"
                    >
                      <span><i class="fa-brands fa-x-twitter"></i></span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/lumiereholidays/"
                      target="_blank"
                      class="btn"
                    >
                      <span><i class="fa-brands fa-linkedin"></i></span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/lumiere_holidays/"
                      target="_blank"
                      class="btn"
                    >
                      <span><i class="fa-brands fa-square-instagram"></i></span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/channel/UCWYoUPC3WtuYyGDTBKwfQnA"
                      target="_blank"
                      class="btn"
                    >
                      <span><i class="fa-brands fa-youtube"></i></span>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="footer-right">
                <div class="call-mail">
                  <a class="link" href="tel:+919526232221"
                    ><img src="/assets/images/call.svg" alt="" />
                    <span data-hover="+91 9526232221">+91 9526232221</span>
                  </a>
                  <a class="link" href="mailto:info@lumiereholidays.com"
                    ><img src="/assets/images/mail.svg" alt="" />
                    <span data-hover="info@lumiereholidays.com"
                      >info@lumiereholidays.com</span
                    >
                  </a>
                </div>
                <div class="mail-subscribe">
                  <h4>Subscribe</h4>
                  <div class="mail-subscribe--box">
                    <input
                      type="text"
                      class="field"
                      placeholder="Enter email address"
                    />
                    <button class="btn">
                      <span>
                        Subscribe <i class="fa-solid fa-arrow-right"></i>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col credits">
          <div class="line-x"></div>
          2024 Lumiere Holidays, All right reserved
        </div>
      </div>
    </footer>
    <!-- Search Modal -->
    <div class="md-modal search-bar" id="search-bar">
      <div class="md-content">
        <div class="container">
          <h3>What are you searching for?</h3>
          <div class="search-bar--container">
            <input type="text" class="field" placeholder="Search here" />
            <button class="btn search-btn">
              <span><i class="fa-solid fa-magnifying-glass"></i></span>
            </button>
          </div>
          <button class="btn md-close">
            <span><i class="fa-solid fa-xmark"></i></span>
          </button>
        </div>
      </div>
    </div>

    <!-- Enquiry Modal -->
    <div class="md-modal enquiry-modal" id="enquiry-modal">
      <div class="md-content">
        <form action="" class="enquire mt-2">
          <h4>Book / Enquiry</h4>

          <div>
            <label for="">Full Name</label>
            <input type="text" class="field" name="" id="" />
          </div>
          <div>
            <label for="">Email</label>
            <input type="email" class="field" name="" id="" />
          </div>
          <div>
            <label for="">Phone Number</label>
            <input type="tel" class="field" name="" id="" />
          </div>
          <div>
            <label for="">Message</label>
            <input type="text" class="field" name="" id="" />
          </div>
          <button class="btn">
            <span>Submit</span>
          </button>
        </form>
        <button class="btn md-close">
          <span><i class="fa-solid fa-xmark"></i></span>
        </button>
      </div>
    </div>

    <div class="md-overlay"></div>

    
    
  
</template>

