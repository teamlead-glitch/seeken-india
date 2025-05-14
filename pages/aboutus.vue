<template>
  
  <div class="inner__banner about__banner" style="background-image: url(/images/about_banner.webp );">
        <div class="container">
            <div class="row">
                <div class="col-md-12 mob_none">
                    <div class="breadcrums">
                        <ul>
                            <li><NuxtLink to="/">
                                    Home</NuxtLink></li>
                            <li>About Us</li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="about_content">
                        <span>About Us</span>
                        <h1>Our mission <br>&amp; values</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <section class="inner_container" v-if="page_content">
        <div class="container">
            <!-- {{ page_content }} -->
            <div class="row">
                <div class="col-md-12">
                    <div class="about_contents" v-html="page_content.page_content.content">
                       
                    </div>
                </div>
            </div>
            <div class="row">
              <div class="col-md-12">
               
              
                <div class="full__boxes" style="background-image: url(/images/vision-mision-bg.webp );" 
                data-desktop="/images/vision-mision-bg.webp" data-mobile="/images/mission__mob__bg.webp"
                >
                    <div class="row">
                        <div class="col-md-6 col-xl-5" >
                            <h2>Our Vision &amp; Mission</h2>
                            <p v-html="page_content?.page_content?.blocks[0]?.block_content"></p>
                           
                        </div>
                    </div>
                </div></div>
              <div class="col-md-12"> 
                <div class="full__boxes"
                style="background-image: url(/images/goals-bg.webp );"
                data-desktop="/images/goals-bg.webp" data-mobile="/images/golas__mob__bg.webp">
                    <div class="row">
                        <div class="col-md-6 col-xl-5">
                            <h2>Goals</h2>
                            <p v-html="page_content?.page_content?.blocks[1]?.block_content"></p>
                           
                        </div>
                    </div>
                </div></div>
              <div class="col-md-12">
                 <div class="full__boxes" 
                 style="background-image: url(/images/values_bg.webp );"
                 data-desktop="/images/values_bg.webp" data-mobile="/images/values__mob__bg.webp">
                    <div class="row">
                        <div class="col-md-6 col-xl-5">
                            <h2>Values</h2>
                           <p v-html="page_content?.page_content?.blocks[2]?.block_content"></p>
                        </div>
                    </div>
                </div></div>
                <div class="col-md-12">
                  <div class="full__boxes" 
                  style="background-image: url(/images/global_presence_bg.webp );"
                  data-desktop="/images/global_presence_bg.webp" data-mobile="/images/globalpresence__mob__bg.webp">
                    <div class="row justify-content-end">
                        <div class="col-md-6 col-xl-5">
                            <h2>Global Presence</h2>
                           <p v-html="page_content?.page_content?.blocks[3]?.block_content"></p>
                        </div>
                    </div>
                </div></div>
            </div>
        </div>

    </section>
  </template>

  <script setup>

const config = useRuntimeConfig();
const { data: page_content  } = await useAsyncData('privacy-policy', () =>
  $fetch(`${config.public.apiBase}page/about-us`)
);

const seo = page_content.value?.seo;
const title = page_content.value?.page_content?.title;

useSeoMeta(seo, title, 'About us');




</script>
