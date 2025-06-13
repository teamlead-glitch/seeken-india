<template>
    <section class="category flash__desk">
        <CommonInnerBanner page_title="Choose Your Category" />
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-8 col-xl-6 mb-4">
              <h3>Choose Your Category</h3>
              <p>Browse through our categories to discover a carefully curated collection of products that meet your every need.
                     From everyday essentials to premium selections — everything is just a click away</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="category_lists ">
                
                
               <HomeCategorySlider :categories="categories"/>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="shops_category">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1>Choose your Category</h1>
                <p>Browse through our categories to discover a carefully curated collection of products that meet your every need.
                     From everyday essentials to premium selections — everything is just a click away</p>
            </div>
            
            <div class="col-6  mb-4" v-for="(item, index) in categories" :key="index">
              <div class="category__boxes">
                 <a :href="`/list?category=${item.id}`">
                    <img :src="item.image_path" class="img-fluid" alt="seeken">
                    <h2>{{item.name}}</h2>
               </a> </div>
            </div>
            
        </div>
    </div>
</section>
</template>

<script setup>

const { data: categories, error, refresh } = useFetchData('categories', 'categories');


</script>
