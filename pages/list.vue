<template>
  <CommonInnerBanner page_title="Shop" />
  
  <section class="inner_container listing_bg">
    <div class="container">
      <div class="row mob_none">
        <div class="col-md-6">
          <h1>Shop <span>Seeken</span></h1>
        </div>
        <div class="col-md-6 d-flex justify-content-end">
          <div class="select_range">
            <div class="sort">Sort By</div>
            <div class="select__box">
              <select v-model="sortBy" class="form-select" aria-label="Default select example">
                <option selected value="latest">Latest</option>
                <option value="name_asc">A to Z</option>
                <option value="name_desc">Z to A</option>
                <option value="price_low_high">Low to High</option>
                <option value="price_high_low">High to Low</option>

              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 inner_mob_container">
          <ul class="nav nav-tabs " role="tablist">
            <li class="nav-item" role="presentation">
              <a class="nav-link" :class="{ active: filterCat === 0 }" href="#" @click="filterCategory(0)"> All</a>
            </li>

            <li class="nav-item" role="presentation" v-for="cat in categories">
              <a class="nav-link" :class="{ active: filterCat === cat.id }" href="#" @click="filterCategory(cat.id)"> {{
                cat.name }}</a>
            </li>

          </ul>
          <div class="tab-content pt-2" id="tab-content">
            <div class="tab-pane active" id="simple-tabpanel-0" role="tabpanel" aria-labelledby="simple-tab-0">
              <div class="row">


                <template v-if="productsList?.length">
                  <ProductListCard v-for="(item, index) in productsList" :product="item" :key="index" />
                 
                </template>
                <p v-else>No products found.</p>
                <div ref="loadMoreTrigger" >
                    
                  </div>





              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>



</template>

<script setup>
import { ref, watch, onMounted, nextTick } from 'vue';
import { useRoute } from 'vue-router';
import { useAsyncData, useRuntimeConfig, useHead } from '#imports';

const route = useRoute();
const config = useRuntimeConfig();

const productsList = ref([]);
const page = ref(0);
const perPage = 4;
const loadMoreTrigger = ref(null);
const fullyLoaded = ref(false);

const sortBy = ref('price_low_high');
const filterCat = ref(0); // Init to 0 by default

// Injected categories
const categories = inject('All_categories');

// Watch route.query.category and update filterCat only on client
onMounted(() => {
  nextTick(() => {
    const newCategory = route.query.category;
    if (newCategory) {
      filterCat.value = Number(newCategory);
    }
  });
});

// Async fetch
const { data: products, error } = await useAsyncData(
  'products',
  async () => {
    try {
      const query = new URLSearchParams({
        skip: page.value,
        take: perPage,
        sort: sortBy.value,
      });

      if (filterCat.value !== 0) {
        query.append('category', filterCat.value);
      }

      const response = await $fetch(`${config.public.apiBase}products?${query.toString()}`);
      if (response?.error) {
        return { data: [], total: 0 };
      }

      return response;
    } catch (err) {
      console.error('Fetch error:', err);
      return { data: [], total: 0 };
    }
  },
  {
    watch: [sortBy, filterCat, page],
  }
);

if (error.value) {
  console.error('Error fetching products:', error.value);
}

// Append products
watch(products, (newVal) => {
  if (newVal?.data.length < perPage) {
    fullyLoaded.value = true;
  }

  if (page.value === 0) {
    productsList.value = newVal?.data || [];
  } else {
    productsList.value.push(...(newVal?.data || []));
  }
});

// Filter by category click
const filterCategory = (cat_id) => {
  page.value = 0;
  fullyLoaded.value = false;
  filterCat.value = cat_id;
};

// Infinite scroll
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !fullyLoaded.value && productsList.value.length > 0) {
      page.value = page.value + perPage;
    }
  });

  if (loadMoreTrigger.value) {
    observer.observe(loadMoreTrigger.value);
  }
});

// Page metadata
useHead({
  title: 'Seeken | Shop',
  meta: [{ name: 'description', content: 'Seeken Shop' }],
});
</script>
