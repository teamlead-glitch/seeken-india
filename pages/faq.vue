<template>
  <CommonInnerBanner page_title="Faq" />
   <section class="inner_container">
   
        <div class="container">
            <div class="row mb-4">
                <div class="col-md-12 text-center"><h1>Frequently Asked Questions</h1>
                </div>
               </div>
               <div class="row">
                <div class="col-md-12 terms_service mt-4">



<span v-if="faqs.length ==0">No FAQ found. Please check back later for updates</span>

                    <div class="accordion accordion-flush" id="accordionExample">
    <div class="accordion-item" v-for="(faq, index) in faqs" :key="index">
      <h2 class="accordion-header" :id="`heading${index}`">
        <button
          class="accordion-button"
          :class="{ collapsed: index !== 0 }"
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="`#collapse${index}`"
          :aria-expanded="index === 0 ? 'true' : 'false'"
          :aria-controls="`collapse${index}`"
        >
          {{ index + 1 }}. {{ faq.question }}
        </button>
      </h2>
      <div
        :id="`collapse${index}`"
        class="accordion-collapse collapse"
        :class="{ show: index === 0 }"
        :aria-labelledby="`heading${index}`"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body" v-html="faq.answer"></div>
      </div>
    </div>
  </div>




                    
                    </div>
                  </div>
                </div>
    </section>
    
</template>

<script lang="ts" setup>

const { data: faqs, error, refresh } = useFetchData('faqs', 'faqs');

useHead({
      title: 'Seeken | Faq',
      meta: [
        { name: 'description', content:  'Seeken Faq' },
       
      ],
      
    });

</script>

<style>

</style>