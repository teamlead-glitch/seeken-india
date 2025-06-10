<template>

  <section class="top__picks">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h3>Top Picks For You</h3>
          <ul class="nav nav-tabs" role="tablist">
            <li class="nav-item" role="presentation">
              <a
                class="nav-link active"
                id="simple-tab-0"
                data-bs-toggle="tab"
                href="#simple-tabpanel-0"
                role="tab"
                aria-controls="simple-tabpanel-0"
                aria-selected="true"
              >
                New Launches</a
              >
            </li>
            <li class="nav-item" role="presentation">
              <a
                class="nav-link"
                id="simple-tab-1"
                data-bs-toggle="tab"
                href="#simple-tabpanel-1"
                role="tab"
                aria-controls="simple-tabpanel-1"
                aria-selected="false"
                >  Best Selling Products</a
              >
            </li>
          </ul>
          <div class="tab-content pt-2" id="tab-content">
            <div
              class="tab-pane active"
              id="simple-tabpanel-0"
              role="tabpanel"
              aria-labelledby="simple-tab-0"
            >
			
			<HomeTopPicksSlider :slides="new_launchs"/>
              </div>

            <div
              class="tab-pane"
              id="simple-tabpanel-1"
              role="tabpanel"
              aria-labelledby="simple-tab-1"
            >
			<HomeTopPicksSlider :slides="best_selling"/>
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
</template>

<script setup>

const config = useRuntimeConfig();

const { data: new_launchs, error, refresh } = useFetchData('new_launchs', 'new-arrivals?limit=8');
const { data: best_selling, error1, refresh1 } = useFetchData('best_selling', 'best-selling-products');

</script>
