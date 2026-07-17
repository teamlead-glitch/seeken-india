<template>
    <section class="category">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-8 col-xl-6 mb-4">
              <h3>Choose Your Category</h3>
              <p>Make your home smarter, cleaner, and more efficient with Seeken. 
                Choose from a curated collection of fans, cookware, irons, 
                and more – each designed to simplify your life and elevate your home experience.</p>
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
</template>

<script setup>

const { data: categories, error, refresh } = useFetchData('categories', 'categories');


</script>
