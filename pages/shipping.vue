<template>
 <div class="inner__banner">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="breadcrums">
                        <ul>
                            <li><NuxtLink to="/">
                                    Home</NuxtLink></li>
                            <li>Shipping </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <section class="inner_container" v-if="page_content">
        <div class="container">
            <div class="row mb-4">
                <div class="col-md-12 text-center"><h1>Shipping </h1>
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


const { page_content, title } = await usePageContent('shipping', 'Shipping');

</script>

<style>

</style>