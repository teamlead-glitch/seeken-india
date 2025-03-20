<template>
    <ProductHomeFeaturedDesk :products="featured_products"/>

    <ProductHomeFeaturedMob :products="featured_products"/>
</template>


<script setup>
import { products } from '~/data/products';

const featured_products = [
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