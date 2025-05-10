<template>
  <div class="row justify-content-center mt-3 mt-md-5">
    <div class="col-md-12 review_rating">
      <h4>Customer reviews & ratings</h4>
      <div class="review_star">
        <div class="reviewrating_boxes">
          <!-- Average Rating -->
          <div class="rating">
            <h3>{{ averageRating.toFixed(1) }}</h3>
            <div class="ratings">
              <i
                v-for="i in 5"
                :key="i"
                :class="[
                  'bi',
                  averageRating >= i
                    ? 'bi-star-fill'
                    : averageRating >= i - 0.5
                    ? 'bi-star-half'
                    : 'bi-star'
                ]"
              ></i>
            </div>
            <div class="total__rating">{{ totalRatings }} ratings</div>
          </div>

          <!-- Recommendation Summary -->
          <div class="recommended">
            <h3>{{ recommendationPercentage }}%</h3>
            <div class="total__rating">
              Recommended <span>({{ recommendedCount }} of {{ totalRecommended }})</span>
            </div>
          </div>
        </div>

        <!-- Star Rating Breakdown -->
        <div class="star__rating">
          <div
            class="percentage__box"
            v-for="star in [5, 4, 3, 2, 1]"
            :key="star"
          >
            <div class="stars_rating">{{ star }} Stars</div>
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                :style="{ width: getStarPercentage(star) + '%' }"
                :aria-valuenow="getStarPercentage(star)"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <div class="percentage_rating">{{ ratingDistribution[star] || 0 }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  averageRating: {
    type: Number,
    required: true,
  },
  totalRatings: {
    type: Number,
    required: true,
  },
  recommendationPercentage: {
    type: Number,
    required: true,
  },
  recommendedCount: {
    type: Number,
    required: true,
  },
  totalRecommended: {
    type: Number,
    required: true,
  },
  ratingDistribution: {
    type: Object,
    default: () => ({
      5: 0,
      4: 0,
      3: 0,
      2: 0,
      1: 0,
    }),
  },
})

// Compute percentage width for each star row
const getStarPercentage = (star) => {
  const count = props.ratingDistribution?.[star] || 0
  return props.totalRatings ? ((count / props.totalRatings) * 100).toFixed(0) : 0
}
</script>

<style scoped>
/* Optional styling; ensure Bootstrap icons & progress classes are available */
.review_star .bi {
  color: #ffc107; /* gold stars */
}
.review_star .bi-star {
  color: #dee2e6; /* light gray for empty */
}
</style>
