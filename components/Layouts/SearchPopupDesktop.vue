<template>

<div class="offcanvas-body">
      <div class="container">
        <div class="row justify-content-center align-items-center">
          <div class="col-md-8 d-flex justify-content-center">
            <div class="subscribe_form">
              <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"><i
                  class="bi bi-x-lg"></i></button>
              <form action="# " @submit.prevent="submitSearch">
                <div class="input-group input-group-lg ">
                  <input type="text " class="form-control input-lg " v-model="searchQuery" placeholder="Search our store">
                  <span class="input-group-btn ">
                    <button  type="submit" data-bs-dismiss="offcanvas" class="btn c-theme-btn c-btn-uppercase btn-lg c-btn-bold c-btn-square "><i
                        class="bi bi-search"></i></button>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">

const searchQuery = ref('')
const router = useRouter()

const props = defineProps({
    
    search: {
      type: Function,
      required: true
    }
  });

  const submitSearch = () => {
  if (searchQuery.value.trim()) {
    router.push({
      path: '/search-result',
      query: { q: searchQuery.value }
    })
  }
}
  </script>
