<template>
    <CommonInnerBanner page_title="Blog Details">
        <template #sub>
            <li><NuxtLink :to="`/blog`">
                Blog</NuxtLink></li>
        </template>
    </CommonInnerBanner>
    
    <section class="inner_container" v-if="blog && blog.title">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center mb-5"><h1>Blog Details</h1>
                </div>
               </div>
               <div class="row">
               <div class="col-md-12">
             <div class="row">
                    <div class="col-md-8" >
                      <div class="blog__box">
                        <div class="img__box mb-3">
                          <img :src="blog.image_path" class="img-fluid corner-5" alt="seeken"></div>
                          <div class="blog_content_detail">
                            <div class="calendar"><i class="bi bi-calendar4"></i> {{ formatDate(blog.created_at)	}}</div>
                            <h3>{{ blog.title }}</h3>
                             
                            <div v-html="blog.description"></div>
</div>
                      </div>
                       </div>
                    <div class="col-md-4">
                      <div class="recentblog">
                        <h3>Recent Blog</h3>
                         
                        
                        <div class="row align-items-center mb-3"  v-for="(item, index) in articles" :key="index" >
                            <template v-if="slug != item.slug">
                            <div class="col-5 col-md-12 col-xl-5">
                                <div class="img__box">
                                    <NuxtLink :to="`/blog/${item.slug}`"><img :src="item.image_path" class="img-fluid corner-5" alt="seeken"></NuxtLink></div>
                                </div>
                            <div class="col-7 col-md-12 col-xl-7">
                                <div class="blog_content"> <NuxtLink :to="`/blog/${item.slug}`">
                                    <div class="calendar"><i class="bi bi-calendar4"></i> {{ formatDate(item.created_at)	}}</div>
                                    <h3>{{ item.title }}</h3>
                                 </NuxtLink></div>
                            </div>
                        </template>
                        </div>


                     </div>
                   </div>
                </div>
            </div>
         </div>
               </div>
    </section>


    <section class="inner_container" v-else>


    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="empty__cart" style="min-height: auto;">
            <!-- <img src="/images/empyt-cart.svg" alt="seeken"> -->
            <h5>Blog not found !</h5>
            <p>The article you're looking for doesn't exist.</p>
            <div class="btn_box">
              <NuxtLink to="/" class="btn_1">Go Home</NuxtLink>
              
            </div>
          </div>
        </div>
      </div>
      
    </div>

  </section>
</template>

<script setup>

import { useRoute } from 'vue-router';
import { useDateFormat } from '~/composables/useDateFormat';
const { formatDate } = useDateFormat();

const route = useRoute(); 
const slug = route.params.slug; // Get slug from URL
const { data: blog, error, refresh } = useFetchData('blog', `blog-details/${slug}`);

const { data: articles, error2, refresh2 } = useFetchData('articles', 'blogs?skip=0&take=4');

watchEffect(() => {
  if (blog?.value?.title) {
   

    useHead({
      title:  blog?.value?.title || 'Seeken Blog',
      meta: [
        { name: 'description', content: blog?.value?.short_description || 'Seeken Blog' },
       
      ],
      
    });
  }
});

</script>