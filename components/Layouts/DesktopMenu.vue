<template>
 <!-- desktop menu -->
 <div class="wsmenucontainer clearfix">
    <div id="overlapblackbg"></div>
    <div class="header" :class="!isIndexPage? 'inner_header':''" id="header">
      <div class="wrapper clearfix"> </div>
      <nav class="wsmenu clearfix">
        <a href="index.html">
          <div class="logo clearfix"></div>
        </a>
        <ul class="mobile-sub wsmenu-list">
          <li class="active"><NuxtLink to="/">Home </NuxtLink> </li>
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
                 
                  <ul v-if="!authStore.token">
      <li><NuxtLink to="/login">Login</NuxtLink></li>
      <li>-OR-</li>
      <li><NuxtLink to="/register">Register</NuxtLink></li>
    </ul>
                  <ul v-if="authStore.token">
                    <li>
                      <div class="profile">
                        <div class="profile_icon"><img src="/images/profile_icon.webp" alt=""></div>
                        <h6>Hi, {{authStore.user?.name ?? 'Guest'}}!</h6>
                      </div>
                    </li>
                    <li><NuxtLink to="/profile">My Page</NuxtLink></li>
                    <li><a href="/">Orders</a></li>
                    <li><a href="/">Wishlist</a></li>
                    <li><NuxtLink @click="logout" href="/">Logout</NuxtLink></li>
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
</template>

<script setup lang="ts">

import { useAuthStore } from '~/store/auth';
const route = useRoute();

const isIndexPage = computed(() => route.path === '/');


const authStore = useAuthStore();
console.log(authStore,'authStore in desktopmenu')

onMounted(() => {
  console.log('desktopmenu');
  authStore.fetchUser(); // ✅ Ensures token is set on every page
});

const logout = () => {
  authStore.logout();
  navigateTo('/login');
};
</script>