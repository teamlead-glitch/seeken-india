<template>
 <div class="inner__banner">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="breadcrums">
                        <ul>
                            <li><NuxtLink to="/">
                                    Home</NuxtLink></li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <section class="inner_container">
        <div class="container">
            <div class="row mb-4">
                <div class="col-md-12 text-center"><h1>Privacy Policy</h1>
                </div>
               </div>
                <div class="row" v-if="page_content.page_content">
                <div class="col-md-12 terms_service" v-html="page_content.page_content.content">
                    
               </div>
               </div>
        </div>
    </section>
</template>

<script lang="ts" setup>

const { data: page_content, error:error2, refresh:refresh2 } = useFetchData('page_content', 'page/privacy-policy');


// Watch or compute seo when page_content is ready
watchEffect(() => {
  if (page_content?.value?.seo) {
    const seo = page_content.value.seo;

    useHead({
      title: seo.meta_title || page_content.value.page_content.title || 'Default Title',
      meta: [
        { name: 'description', content: seo.meta_description || 'Default description' },
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

<style>

</style>