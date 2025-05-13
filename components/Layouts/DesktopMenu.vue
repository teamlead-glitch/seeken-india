<template>
  <!-- desktop menu -->
  <div class="wsmenucontainer clearfix">
    <div id="overlapblackbg"></div>
    <div class="header" :class="!isIndexPage ? 'inner_header' : ''" id="header">
      <div class="wrapper clearfix"> </div>
      <nav class="wsmenu clearfix">
        <NuxtLink to="/">
          <div class="logo clearfix"></div>
        </NuxtLink>
        <ul class="mobile-sub wsmenu-list">
          <li  :class="{ active: route.path === '/' }">
            <NuxtLink to="/">Home </NuxtLink>
          </li>
          <li :class="{ active: route.path === '/list' }"><a href="#">Shop <i class="bi bi-chevron-down"></i></a>
            <div class="megamenu clearfix" v-if="categoryTree && categoryTree.length">
              <div class="row">
                <div class="col-md-6">
                  <div class="full">
                    <div class="left-box">

                      <ul >
                        <template v-if="categoryTree.length">
                        <li :class="i == activeIndex ? 'active' : ''" v-for="(cat, i) in categoryTree" :key="cat.id"
                        @click="triggerShowSubcategories(i)">
                          {{ cat.name }}</li>
                        </template>

                      </ul>
                    </div>
                    <!-- Right Box -->
                    <div class="right-box">
                      <div id="content1" class="content active">
                        <ul v-if="categoryTree[activeIndex]?.children?.length">
                          <li v-for="sub in categoryTree[activeIndex].children" :key="sub.id">
                            <NuxtLink :to="`/list?category=${categoryTree[activeIndex]?.id}&sub=${sub.id}`">{{ sub.name }}</NuxtLink>
                          </li>
                        </ul>
                        <p v-else>No subcategories available.</p>
                      </div>
                    </div>


                  </div>
                </div>
                <div class="col-md-6 brdr_clr">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="articles">
                        <a href="#">
                          <div class="img__box">
                            <img :src="categoryTree[activeIndex].image_path" class="img-fluid" alt="seeken" loading="lazy">
                          </div>

                        </a>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="articles">
                        <a href="#">

                          <div class="content">
                            <h3>{{ categoryTree[activeIndex].short_description }}</h3>
                            <a class="btn_3">
                              <NuxtLink :to="`/list?category=${categoryTree[activeIndex].id}`">View more <i class="bi bi-arrow-right"></i></NuxtLink>
                              </a>
                          </div>
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </li>
          <li :class="{ active: route.path === '/blog' }"><NuxtLink :to="`/blog`" >Blog </NuxtLink>
          </li>
          <li :class="{ active: route.path === '/aboutus' }"> <NuxtLink :to="`/aboutus`" >About Us</NuxtLink> 
          </li>
          <li :class="{ active: route.path === '/contactus' }"><NuxtLink :to="`/contactus`" >Contact </NuxtLink>
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
                    <li>
                      <NuxtLink to="/login">Login</NuxtLink>
                    </li>
                    <li>-OR-</li>
                    <li>
                      <NuxtLink to="/register">Register</NuxtLink>
                    </li>
                  </ul>
                  <ul v-if="authStore.token">
                    <li>
                      <div class="profile">
                        <div class="profile_icon">
                          <!-- <img src="/images/profile_icon.webp" alt=""> -->
                           <CommonAvatar :name="authStore.user?.name ?? 'Guest'" :size="50"  />
                        </div>
                        <h6>Hi, {{ authStore.user?.name ?? 'Guest' }}!</h6>
                      </div>
                    </li>
                    <li>
                      <NuxtLink to="/profile">My Page</NuxtLink>
                    </li>
                    <li><NuxtLink to="/orders">Orders</NuxtLink></li>
                    <li><NuxtLink to="/wishlist">Wishlist</NuxtLink></li>
                    <li>
                      <NuxtLink @click="logout" href="/">Logout</NuxtLink>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <NuxtLink to="/cart">
                  <div class="icon"><img src="/images/cart_icon.svg" alt="search">
                    <div class="count">{{ cartCount }}</div>
                  </div>
                </NuxtLink>
              </li>
              <li><NuxtLink to="/wishlist">
                  <div class="icon"><img src="/images/whislist.svg" alt="search">
                    <div class="count">{{ wishlistCount }}</div>
                  </div>
                </NuxtLink>
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
import { useCartStore } from '~/store/cart';
import { useWishlistStore } from '@/store/wishlist'
const route = useRoute();

const isIndexPage = computed(() => route.path === '/');

const props = defineProps({
  categoryTree: Array,
  activeIndex: {
    type: Number,
    required: true
  },
  showSubcategories: {
    type: Function,
    required: true,
  },
});

const cartStore = useCartStore();
const cartCount = computed(() => (cartStore.cart?.items || []).length);

const wishlistStore = useWishlistStore()
const wishlistCount = computed(() => (wishlistStore.list || []).length);

const authStore = useAuthStore();
console.log(authStore, 'authStore in desktopmenu')

onMounted(() => {
  console.log('desktopmenu');
  authStore.fetchUser(); // ✅ Ensures token is set on every page
});

const logout = () => {
  authStore.logout();
  navigateTo('/login');
};

const triggerShowSubcategories = (index) => {
  // Call the showSubcategories function passed from the parent
  props.showSubcategories(index);
};

</script>