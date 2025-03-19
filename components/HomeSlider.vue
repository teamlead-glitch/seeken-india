<template>
<section class="products__container" id="section1">
    <div class="container-fluid p-0">
      <div class="row">
        
        
        <div class="col-md-4 p-0" v-for="(item, index) in products" :key="index">
          <div class="products__img">
            <img :src="item.image" class="img-fluid" alt="seeken">
            <div class="contents">
              <h6>{{item.title}}</h6>
              <h3>{{item.description}}</h3>
              <a class="btn_1" href="#">Buy </a>
            </div>
          </div>
        </div>


      </div>
    </div>
  </section>
</template>

<script setup>
const products = [
  { title: "New Prod 1", description: "This is the first slide content.", image:"/images/product_1.webp" },
  { title: "New Prod 2", description: "This is the second slide content.", image:"/images/product_2.webp" },
  { title: "New Prod 3", description: "This is the third slide content.", image:"/images/product_3.webp" },
  
];


</script>