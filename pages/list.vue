<template>


    <div class="inner__banner listing_bg">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="breadcrums">
                            <ul>
                                <li><a href="index.html">
                                        Home</a></li>
                                <li>Shops</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section class="inner_container listing_bg">
            <div class="container">
                <div class="row mob_none">
                    <div class="col-md-6"><h1>Shop <span>Seeken</span></h1></div>
                    <div class="col-md-6 d-flex justify-content-end">
                        <div class="select_range"><div class="sort">Sort By</div><div class="select__box">
                            <select v-model="sortBy" class="form-select" aria-label="Default select example">
                                <option selected value="latest">Latest</option>
                                <option value="name_asc">A to Z</option>
                                <option value="name_desc">Z to A</option>
                                <option value="price_low_high">Low to Hight</option>
                                <option value="price_high_low">High to Low</option>
                                <option value="old">Old</option>
                             </select>
                        </div>   </div>
                    </div>
                    </div>
                    <div class="row">
                    <div class="col-md-12 inner_mob_container">
      <ul class="nav nav-tabs " role="tablist">
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" :class="{ active: filterCat === 0 }" href="#" @click="filterCategory(0)"> All</a>
                            </li>
                           
                            <li class="nav-item" role="presentation" v-for="cat in categories">
                                <a class="nav-link" :class="{ active: filterCat === cat.id }" href="#" @click="filterCategory(cat.id)">   {{ cat.name }}</a>
                            </li>
                           
                        </ul>
                        <div class="tab-content pt-2" id="tab-content">
                            <div class="tab-pane active" id="simple-tabpanel-0" role="tabpanel"
                                aria-labelledby="simple-tab-0">
                                <div class="row">
                                    
                                    
                                    <!-- <div class="col-md-6 col-lg-4  col-xl-4 col-xxl-3 mb-3"> -->
                            <ProductListCard v-for="(item, index) in products.data" :product="item" :key="index"/>   



                              
                              
                                </div>
       </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    
    
    </template>

<script setup>


import { inject } from 'vue';

const categories = inject('All_categories');
const config = useRuntimeConfig();

const sortBy = ref('price_low_high');
const filterCat = ref(0);


// UseAsyncData to automatically re-fetch on sortBy change
const { data: products, error } = await useAsyncData(
  'products',
  () =>
    $fetch(`${config.public.apiBase}products?skip=0&take=10&sort=${sortBy.value}`),
  {
    watch: [sortBy], // Automatically refetch when sortBy changes
  }
);

// Handle errors gracefully
if (error.value) {
  console.error('Error fetching products:', error.value);
}

console.log(products,'products in list page')

const filterCategory = (cat_id) => {
    filterCat.value = cat_id;
}

</script>