<template>
  <CommonInnerBanner page_title="Blog"/>
    <section class="inner_container">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center mb-5"><h1>Blog</h1>
                </div>
               </div>
               <div class="row">
               <div class="col-md-12">
            <div class="blog__box mb-3" v-for="blog in blogs">
                <div class="row align-items-center">
                    <div class="col-5 col-md-5">
                        <div class="img__box">
                            <NuxtLink :to="`/blog/${blog.slug}`"><img :src="blog.image_path" class="img-fluid corner-5" alt="seeken"></NuxtLink></div>
                        </div>
                    <div class="col-7 col-md-7">
                        <div class="blog_content"> <NuxtLink :to="`/blog/${blog.slug}`">
                            <div class="calendar"><i class="bi bi-calendar4"></i> {{formatDate(blog.created_at)}}</div>
                            <h3>{{blog.title}}</h3>
                              <p>{{blog.short_description}}</p>
                             
                                    <NuxtLink class="btn_1" :to="`/blog/${blog.slug}`">Read More</NuxtLink>
                        </NuxtLink></div>
                    </div>
                </div>
            </div>
               </div>
               </div>
                </div>
    </section>
</template>

<script setup>
import { useDateFormat } from '~/composables/useDateFormat';
const { formatDate } = useDateFormat();
const { data: blogs, error, refresh } = useFetchData('blogs', 'blogs?skip=0&take=10');

const { data: page_content, error:error2, refresh:refresh2 } = useFetchData('page_content', 'page/blog');


// Watch or compute seo when page_content is ready
watchEffect(() => {
  if (page_content?.value?.seo) {
    const seo = page_content.value.seo;

    useHead({
      title: seo.meta_title || page_content.value.page_content.title || 'Seeken Blogs',
      meta: [
        { name: 'description', content: seo.meta_description || 'Seeken Blogs' },
        { name: 'keywords', content: seo.meta_keywords || '' },
        { property: 'og:title', content: seo.og_title || '' },
        { property: 'og:description', content: seo.og_description || '' },
        { property: 'og:image', content: seo.og_image || '' },
        { name: 'twitter:title', content: seo.twitter_title || '' },
        { name: 'twitter:description', content: seo.twitter_description || '' },
        { name: 'twitter:image', content: seo.twitter_image || '' },
      ],
      link: seo.canonical_url ? [{ rel: 'canonical', href: seo.canonical_url }] : [],
    });
  }
});
</script>