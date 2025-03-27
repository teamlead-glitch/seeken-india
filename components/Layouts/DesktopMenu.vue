<template>
  <!-- desktop menu -->
  <div class="wsmenucontainer clearfix">
    <div id="overlapblackbg"></div>
    <div class="header" :class="!isIndexPage ? 'inner_header' : ''" id="header">
      <div class="wrapper clearfix"> </div>
      <nav class="wsmenu clearfix">
        <a href="index.html">
          <div class="logo clearfix"></div>
        </a>
        <ul class="mobile-sub wsmenu-list">
          <li class="active">
            <NuxtLink to="/">Home </NuxtLink>
          </li>
          <li><a href="#">Shop <i class="bi bi-chevron-down"></i></a>
            <div class="megamenu clearfix">
              <div class="row">
                <div class="col-md-6">
                  <div class="full">
                    <div class="left-box">

                      <ul v-if="categoryTree && categoryTree.length">
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
                        <ul v-if="categoryTree[activeIndex]?.sub_categories?.length">
                          <li v-for="sub in categoryTree[activeIndex].sub_categories" :key="sub.id">
                            <a href="listing.html">{{ sub.name }}</a>
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
                        <div class="profile_icon"><img src="/images/profile_icon.webp" alt=""></div>
                        <h6>Hi, {{ authStore.user?.name ?? 'Guest' }}!</h6>
                      </div>
                    </li>
                    <li>
                      <NuxtLink to="/profile">My Page</NuxtLink>
                    </li>
                    <li><a href="/">Orders</a></li>
                    <li><a href="/">Wishlist</a></li>
                    <li>
                      <NuxtLink @click="logout" href="/">Logout</NuxtLink>
                    </li>
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