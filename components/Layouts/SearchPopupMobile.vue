<template>
    <div class="offcanvas-body">
      <div class="container">
        <div class="row justify-content-end  align-items-center">
          <div class="col-md-12 d-flex justify-content-end flex-column">
            <div class="btn_forms">
              <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"><i
                  class="bi bi-arrow-left"></i></button>
              <div class="subscribe_form">
                <form action="# " @submit.prevent="submitSearch">
                  <div class="input-group input-group-lg ">
                    <input type="text " class="form-control input-lg " v-model="searchQuery" placeholder="Search">
                    <span class="input-group-btn ">
                      <button :disabled="!searchQuery.trim()" type="submit" data-bs-dismiss="offcanvas" class="btn c-theme-btn c-btn-uppercase btn-lg c-btn-bold c-btn-square "><i
                          class="bi bi-search"></i></button>
                    </span>
                  </div>
                </form>
              </div>
            </div>
            <div class="trending__search">
              <!-- <h6>Trending Search</h6>
              <ul>
                <li>Search item 01</li>
                <li>Search item 02</li>
                <li>Search item 03</li>
                <li>Search item 04</li>
              </ul> -->

            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">

const searchQuery = ref('')
const router = useRouter()


  const submitSearch = () => {
  if (searchQuery.value.trim()) {
    router.push({
      path: '/search-result',
      query: { q: searchQuery.value }
    })
  }
}
  </script>