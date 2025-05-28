<template>
 <div class="inner__banner">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="breadcrums">
                        <ul>
                            <li><NuxtLink to="/">
                                    Home</NuxtLink></li>
                            <li>Cancellation policy</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <section class="inner_container">
        <div class="container">
            <div class="row mb-4">
                <div class="col-md-12 text-center"><h1>Cancellation policy</h1>
                </div>
               </div>
                <div class="row" v-if="page_content?.page_content">
                <div class="col-md-12 terms_service" v-html="page_content?.page_content.content">
                    
               </div>
               </div>
        </div>
    </section>
</template>

<script lang="ts" setup>

const config = useRuntimeConfig();
const { data: page_content  } = await useAsyncData('cancellation-policy', () =>
  $fetch(`${config.public.apiBase}page/cancellation-policy`)
);

const seo = page_content?.value?.seo;
const title = page_content?.value?.page_content?.title;

useSeoMeta(seo, title, 'Cancellation-policy');

</script>

<style>

</style>