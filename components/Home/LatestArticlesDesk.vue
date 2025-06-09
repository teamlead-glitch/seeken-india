<template>
<!-- latest__articles desktop -->
<section class="latest__articles">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-xl-6 col-md-8  mb-3">
          <h3>Latest Articles</h3>
          <p>Dive into our freshest posts designed to inform and engage.</p>
        </div>
        <div class="col-xl-6 col-md-4 d-flex justify-content-end">
          <NuxtLink :to="`/blog`">View More <i class="bi bi-arrow-right"></i></NuxtLink>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-4 mb-4" v-for="(item, index) in articles" :key="index">
          <div class="articles">
            <NuxtLink :to="`/blog/${item.slug}`">
              <div class="img__box">
                <img :src="item.image_path" class="img-fluid" alt="seeken" loading="lazy">
              </div>
              <div class="content">
                <div class="calendar"><i class="bi bi-calendar4"></i> {{ formatDate(item.created_at)	}}</div>
                <h3>{{ item.title }}</h3>
                <p>{{ item.short_description }}</p>
              </div>
            </NuxtLink>
          </div>
        </div>
       
      </div>
    </div>
  </section>
  <!-- latest__articles desktop close-->
</template>


<script setup>

const props = defineProps({
  articles: Array
});

import { useDateFormat } from '~/composables/useDateFormat';

const { formatDate } = useDateFormat();

</script>