<template>
  <CommonInnerBanner page_title="Blog" />
  <section class="inner_container">
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center mb-5">
          <h1>Blog</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div
            class="blog__box mb-3"
            v-for="(blog, index) in blogs"
            :key="index"
          >
            <div class="row align-items-center">
              <div class="col-5 col-md-5">
                <div class="img__box">
                  <NuxtLink :to="`/blog/${blog.slug}`">
                    <img
                      :src="blog.image_path"
                      class="img-fluid corner-5"
                      alt="Blog image"
                    />
                  </NuxtLink>
                </div>
              </div>
              <div class="col-7 col-md-7">
                <div class="blog_content">
                  <NuxtLink :to="`/blog/${blog.slug}`">
                    <div class="calendar">
                      <i class="bi bi-calendar4"></i>
                      {{ formatDate(blog.created_at) }}
                    </div>
                    <h3>{{ blog.title }}</h3>
                    <p>{{ blog.short_description }}</p>
                    <NuxtLink class="btn_1" :to="`/blog/${blog.slug}`">
                      Read More
                    </NuxtLink>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>

          <!-- Infinite Scroll Trigger -->
          <div id="load-more-trigger" class="text-center py-4">
            <span v-if="loadingMore">Loading more...</span>
            
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useDateFormat } from '~/composables/useDateFormat';
const { formatDate } = useDateFormat();

const config = useRuntimeConfig();

// SSR: Load first 4 blogs
// const { data: initialBlogs } = await useAsyncData('blogs-initial', () =>
//   $fetch(`${config.public.apiBase}blogs?skip=0&take=4`)
// );

// Setup blog state
const blogs = ref( []);
const skip = ref(0);
const take = 4;
const loadingMore = ref(false);
const noMoreBlogs = ref(false);

// Infinite loader
const loadMore = async () => {
  if (loadingMore.value || noMoreBlogs.value) return;
  loadingMore.value = true;

  try {
    const more = await $fetch(`${config.public.apiBase}blogs?skip=${skip.value}&take=${take}`);
    if (!more.length) {
       
      noMoreBlogs.value = true;
    } else {
        
      blogs.value.push(...more);
      skip.value += take;
    }
  } catch (e) {
    noMoreBlogs.value = true;
    console.error('Load more error:', e);
  } finally {
    loadingMore.value = false;
  }
};

// SEO setup
const { data: page_content } = await useAsyncData('blog-page', () =>
  $fetch(`${config.public.apiBase}page/blog`)
);
const seo = page_content.value?.seo;
const title = page_content.value?.page_content?.title;
useSeoMeta(seo, title, 'Blog');

// IntersectionObserver for infinite scroll
onMounted(() => {
  const target = document.getElementById('load-more-trigger');
  if (!target) return;

  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) loadMore();
  });
  observer.observe(target);
});
</script>
