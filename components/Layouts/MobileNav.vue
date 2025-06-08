<template>

    <!-- mmobile menu -->
  <div class="mob__navigation">
    <ul>
      <li class="active">
        <NuxtLink to="/" @click="closeMobMenu">
          <div class="icon">
            <img v-if="route.path === '/'" src="/images/home-hover-menu.svg" alt="seeken">
            <img v-else src="/images/home-menu.svg" alt="seeken">
          </div>
          <div class="list"> Home</div>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink :to="`/list`" @click="closeMobMenu">
          <div class="icon">
            <img v-if="route.path === '/list'" src="/images/shop-hover-menu.svg" alt="seeken">
            <img v-else src="/images/shop-menu.svg" alt="seeken">
          </div>
          <div class="list">Shop</div>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink :to="`/sales`" @click="closeMobMenu">
          <div class="icon">
            <img v-if="route.path === '/sales'" src="/images/offers-hover-menu.svg" alt="seeken">
            <img v-else src="/images/offers-menu.svg" alt="seeken">
          </div>
          <div class="list">Offers</div>

        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/cart" @click="closeMobMenu">
          <div class="icon">
            <img v-if="route.path === '/cart'" src="/images/cart-hover-menu.svg" alt="seeken">
            <img v-else src="/images/cart-menu.svg" alt="seeken">
          </div>
          <div class="list"> Cart</div>
        </NuxtLink>
      </li>
      <li type="button" ref="mobMenuBtn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight_mobmenu"
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
          <div class="nav">
            <NuxtLink to="/login" v-if="!authStore.token && !isLoginPage" @click="closeMobMenu">Login</NuxtLink>
        <NuxtLink to="/register" v-if="!authStore.token && isLoginPage" @click="closeMobMenu">Register</NuxtLink>
        <NuxtLink to="/profile" v-if="authStore.token" @click="closeMobMenu">Account</NuxtLink>
          </div>
          <div class="logo"><img src="/images/logo-blue.svg" alt="logo"></div>
          <div class="search_wishlist">
            <!-- <div class="wishlist"> <NuxtLink to="/wishlist" @click="closeMobMenu">
              <div class="icon"><img src="/images/whislist.svg" alt="search">
                
              </div>
            </NuxtLink> </div> -->
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
          <h6> {{ authStore.user?.name ?? 'Guest' }}</h6>
          <div class="phone">{{ authStore.user?.phone ?? '-' }}</div>
          <NuxtLink @click="logout" v-if="authStore.token">Logout</NuxtLink>
        </div>
      </div>
      <div class="navs">
        <ul>
          <li><NuxtLink to="/"  @click="closeMobMenu">Home</NuxtLink></li>
          <li><NuxtLink to="/list"  @click="closeMobMenu">Shop</NuxtLink></li>
           <li v-if="authStore.token"><NuxtLink to="/orders"  @click="closeMobMenu">Your Orders</NuxtLink></li>
          
          <li><NuxtLink to="/blog"  @click="closeMobMenu">Blog</NuxtLink></li>
          <li><NuxtLink to="/aboutus"  @click="closeMobMenu">About us</NuxtLink></li>
          <li><NuxtLink to="/terms-of-services"  @click="closeMobMenu">Terms and Conditions</NuxtLink></li>
          <li><NuxtLink to="/privacy-policy"  @click="closeMobMenu">Privacy Policy</NuxtLink></li>
          <li><NuxtLink to="/contactus"  @click="closeMobMenu">Contact</NuxtLink></li>

          
          
        </ul>
      </div>

       <LayoutsNewsletter :isMobile="true"/>

      <div class="social__icons__mobile mt-5">
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
import { useAuthStore } from '~/store/auth';
const isSubmenuVisible = ref(false);
const authStore = useAuthStore();
const route = useRoute();

// Function to toggle submenu visibility
const toggleSubmenu = () => {
  isSubmenuVisible.value = !isSubmenuVisible.value;
};




const isLoginPage = computed(() => route.path === '/login');

const logout = () => {
  authStore.logout();
  navigateTo('/login');
  closeMobMenu();
};

const closeMobMenu = () =>{
  mobMenuBtn.value?.click();
}

const mobMenuBtn = ref(null);
</script>