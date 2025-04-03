<template>
    <div class="inner__banner">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="breadcrums">
                        <ul>
                            <li><NuxtLink to="/">
                                    Home</NuxtLink></li>
                            <li>Blog</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
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
                            <a href="blog-detail.html"><img :src="blog.image_path" class="img-fluid corner-5" alt="seeken"></a></div>
                        </div>
                    <div class="col-7 col-md-7">
                        <div class="blog_content"> <a href="blog-detail.html">
                            <div class="calendar"><i class="bi bi-calendar4"></i> {{formatDate(blog.created_at)}}</div>
                            <h3>{{blog.title}}</h3>
                              <p>{{blog.short_description}}</p>
                                <a class="btn_1" href="blog-detail.html">Read More</a>
                        </a></div>
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
</script>