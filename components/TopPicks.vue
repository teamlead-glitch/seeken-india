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
			
			<TopPicksSlider :slides="new_launchs"/>
              </div>

            <div
              class="tab-pane"
              id="simple-tabpanel-1"
              role="tabpanel"
              aria-labelledby="simple-tab-1"
            >
			<TopPicksSlider :slides="best_selling"/>
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
</template>

<script setup>

const config = useRuntimeConfig();


const { data: new_launchs, error } = await useAsyncData('new_launchs', () =>
  $fetch(`${config.public.apiBase}new-arrivals`)
);
// Handle errors gracefully
if (error.value) {
  console.error('Error fetching new_launchs:', error.value);
}


const { data: best_selling, error2 } = await useAsyncData('best_selling', () =>
  $fetch(`${config.public.apiBase}best-selling-products`)
);
// Handle errors gracefully
if (error2?.value) {
  console.error('Error fetching best_selling:', error2.value);
}

// const new_launchs = [
//   { title: "New Prod 1", description: "This is the first slide content." },
//   { title: "New Prod 2", description: "This is the second slide content." },
//   { title: "New Prod 3", description: "This is the third slide content." },
//   { title: "New Prod 4", description: "This is the fourth slide content." },
//   { title: "New Prod 5", description: "This is the fifth slide content." },
//   { title: "New Prod 6", description: "This is the fifth slide content." },
// ];

// const best_selling = [
//   { title: "Best Prod 1", description: "This is the first slide content." },
//   { title: "Best Prod 2", description: "This is the second slide content." },
//   { title: "Best Prod 3", description: "This is the third slide content." },
//   { title: "Best Prod 4", description: "This is the fourth slide content." },
//   { title: "Best Prod 5", description: "This is the fifth slide content." },
//   { title: "Best Prod 6", description: "This is the fifth slide content." },
// ];
</script>
