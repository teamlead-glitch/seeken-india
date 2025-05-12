<template>
    <!-- {{reviews}} -->
     <div class="row reviewrating_box mb10" data-masonry='{"percentPosition": true }' v-if='reviews && reviews.length >0'>



        <div class="col-md-6 pe-2 ps-2" v-for='review in reviews'>
   <div class="customer_detail">
 <h5>{{ review.title }}</h5>
 <div class="stars">
       <i
                v-for="i in 5"
                :key="i"
                :class="[
                  'bi',
                  review.rating >= i
                    ? 'bi-star-fill'
                    : review.rating >= i - 0.5
                    ? 'bi-star-half'
                    : 'bi-star'
                ]"
              ></i>
    </div>
     <p>{{ review.comment }}</p>
     <h6>{{ review.customer_name }}</h6>
</div>
</div>




</div>
   
</template>

<script setup>

const props = defineProps({
  productId: {
    type: [Number, String],
    required: true,
  },
  refreshKey: {
    type: Number,
    default: 0,
  },
})

const reviews = ref(null)
const error = ref(null)

watch(
  () => [props.productId, props.refreshKey],
  async ([id]) => {
    if (!id) return
   const config = useRuntimeConfig();
    const { data, error: fetchError } = await useFetch(
      `${config.public.apiBase}review-list`,
      {
        params: {
          product_id: id,
          skip: 0,
          take: 100,
        },
      }
    )
//console.log(data.value,'data.value?.data+')
    reviews.value = data.value?.data || []
    error.value = fetchError.value
  },
  { immediate: true }
)

// const {data : reviews} = {
//   "result": "success",
//   "data": [
//     {
//       "id": 9,
//       "user_id": 4,
//       "product_id": 12,
//       "rating": 5,
//       "title": "Excellent product!",
//       "comment": "This exceeded all my expectations. The quality is outstanding and it arrived sooner than expected. Will definitely buy again!",
//       "is_approved": 0,
//       "created_at": "2025-05-08T12:04:47.000000Z",
//       "updated_at": "2025-05-08T12:04:47.000000Z",
//       "customer_name": "Arun"
//     },
//     {
//       "id": 9,
//       "user_id": 4,
//       "product_id": 12,
//       "rating": 2.5,
//       "title": "not bad product!",
//       "comment": "This exceeded all my expectations. The quality is outstanding and it arrived sooner than expected. Will definitely buy again!",
//       "is_approved": 0,
//       "created_at": "2025-05-08T12:04:47.000000Z",
//       "updated_at": "2025-05-08T12:04:47.000000Z",
//       "customer_name": "sherin"
//     }
//   ]
// };
</script>