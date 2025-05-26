<template>
  <CommonInnerBanner :page_title="'Flash Sales'" />

  <section class="inner_container listing_bg">
    <div class="container">
      <div class="row ">
        <div class="col-md-6">
          <h1 class="mb-5">Flash Sales <span>Seeken</span></h1>
          
        
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
                <p v-else>No offers found for you".</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { data: productsList, error, refresh } = useFetchData('productsList', 'flash-sale-products?limit=100');

// Meta tags
useHead({
  title: `Flash Sales | Seeken`,
  meta: [{ name: 'description', content: `Flash Sales` }],
})
</script>
