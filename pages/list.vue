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
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Latest</option>
                                <option value="1">A to Z</option>
                                <option value="2">Z to A</option>
                                <option value="3">Low to Hight</option>
                                <option value="3">High to Low</option>
                                <option value="3">Old</option>
                             </select>
                        </div>   </div>
                    </div>
                    </div>
                    <div class="row">
                    <div class="col-md-12 inner_mob_container">
      <ul class="nav nav-tabs " role="tablist">
                            <li class="nav-item" role="presentation">
                                <a class="nav-link active" href="#"> All</a>
                            </li>
                           
                            <li class="nav-item" role="presentation" v-for="cat in categories">
                                <a class="nav-link" href="#">   {{ cat.name }}</a>
                            </li>
                           
                        </ul>
                        <div class="tab-content pt-2" id="tab-content">
                            <div class="tab-pane active" id="simple-tabpanel-0" role="tabpanel"
                                aria-labelledby="simple-tab-0">
                                <div class="row">
                                    
                                    
                                    <!-- <div class="col-md-6 col-lg-4  col-xl-4 col-xxl-3 mb-3"> -->
                            <ProductListCard v-for="(item, index) in products" :product="item" :key="index"/>   



                              
                              
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


const products = [
  {
    title: "New Prod 1",
    description: "This is the first slide content.",
    images: ["/images/featured_product_1.webp", "/images/featured_product_2.webp"],
    is_flashsale: true,
    item_left: 15,
    category_name: "Electronics",
    original_price: 120.0,
    sale_price: 99.99,
    rating: 4.5,
    review_count: 120,
  },
  {
    title: "New Prod 2",
    description: "This is the second slide content.",
    images: ["/images/featured_product_1.webp", "/images/featured_product_2.webp"],
    is_flashsale: false,
    item_left: 30,
    category_name: "Home Appliances",
    original_price: 150.0,
    sale_price: 135.5,
    rating: 4.2,
    review_count: 98,
  },
  {
    title: "New Prod 3",
    description: "This is the third slide content.",
    images: ["/images/featured_product_1.webp", "/images/featured_product_2.webp"],
    is_flashsale: true,
    item_left: 8,
    category_name: "Fashion",
    original_price: 80.0,
    sale_price: 65.0,
    rating: 4.8,
    review_count: 230,
  },
  {
    title: "New Prod 4",
    description: "This is the fourth slide content.",
    images: ["/images/featured_product_1.webp", "/images/featured_product_2.webp"],
    is_flashsale: false,
    item_left: 50,
    category_name: "Sports",
    original_price: 90.0,
    sale_price: 75.0,
    rating: 4.3,
    review_count: 75,
  },
  {
    title: "New Prod 5",
    description: "This is the fifth slide content.",
    images: ["/images/featured_product_1.webp", "/images/featured_product_2.webp"],
    is_flashsale: true,
    item_left: 12,
    category_name: "Beauty",
    original_price: 50.0,
    sale_price: 40.0,
    rating: 4.7,
    review_count: 150,
  },
  {
    title: "New Prod 6",
    description: "This is the fifth slide content.",
    images: ["/images/featured_product_1.webp", "/images/featured_product_2.webp"],
    is_flashsale: false,
    item_left: 25,
    category_name: "Toys",
    original_price: 60.0,
    sale_price: 55.0,
    rating: 4.1,
    review_count: 65,
  },
];

</script>