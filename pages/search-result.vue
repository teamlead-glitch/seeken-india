<template>
  <CommonInnerBanner :page_title="`Results for '${searchQuery}'`" />

  <section class="inner_container listing_bg">
    <div class="container">
      <div class="row mob_none">
        <div class="col-md-6">
          <h1 class="mb-5">Search Results <span>Seeken</span></h1>
        
        </div>
      </div>

      <div class="row">
        <div class="col-md-12 inner_mob_container">
          <div class="tab-content pt-2" id="tab-content">
            <div class="tab-pane active" id="simple-tabpanel-0" role="tabpanel">
              <div class="row">
                <template v-if="productsList?.length">
                  <ProductListCard
                    v-for="(item, index) in productsList"
                    :product="item"
                    :key="index"
                  />
                </template>
                <p v-else>No products found for "{{ searchQuery }}".</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute, useAsyncData, useHead, useRuntimeConfig } from '#imports'

const route = useRoute()
const config = useRuntimeConfig()

// Reactive query from URL
const searchQuery = computed(() => route.query.q?.toString().trim() || '')

// Products list state
const productsList = ref([])

// Async fetch with SSR support
const { data: fetchedData, error } = await useAsyncData(
  'search-results',
  async () => {
    if (!searchQuery.value) return []

    const queryParams = new URLSearchParams({
      search: searchQuery.value,
      skip: '0',
      take: '1000',
    })

    try {
      const res = await $fetch(`${config.public.apiBase}products?${queryParams.toString()}`)
      return res?.data || []
    } catch (err) {
      console.error('Search fetch error:', err)
      return []
    }
  },
  {
    // Re-fetch on query change (both SSR and CSR)
    watch: [searchQuery],
    server: true,
    lazy: false,
  }
)

// Assign data when fetched
watch(
  fetchedData,
  (newVal) => {
    productsList.value = newVal || []
  },
  { immediate: true }
)

// Meta tags
useHead({
  title: `Search Results | Seeken`,
  meta: [{ name: 'description', content: `Search results for "${searchQuery.value}"` }],
})
</script>
