<template>
    <!-- Modal wishlist want to add wishlist-->
  <div class="modal fade wishlist_setting" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title fs-5" id="exampleModalLabel">Add to wishlist</h3>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>Do you want to add this product to your wishlist?</p>
          <div class="col-md-12 mt-4 mb-4 d-flex justify-content-center gap-3">
            <a class="btn_2" href="index.html">Keep browsing</a> <button class="btn_1" data-bs-toggle="modal"
              data-bs-target="#exampleModal5">Add to wishlist</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal  wishlist close  -->
  <!-- Modal wishlist item added wishlist -->
  <div class="modal fade wishlist_setting" id="exampleModal5" tabindex="-1" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title fs-5" id="exampleModalLabel">Wishlist</h3>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>The item will be added to your wishlist</p>
          <div class="col-md-12 mt-4 mb-4 d-flex justify-content-center">
            <a href="/"><button class="btn_2">Continue shopping</button> </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal edit wishlist close  -->
</template>

<script setup lang="ts">
</script>