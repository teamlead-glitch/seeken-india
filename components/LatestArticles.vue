<template>
    <LatestArticlesDesk :articles="articles"/>
    <!-- <LatestArticlesMob :articles="articles"/> -->
</template>

<script setup>

import { useRouter } from 'vue-router';

const router = useRouter();
const config = useRuntimeConfig();




// Fetch slide data during SSR
const { data: articles, error } = await useAsyncData('articles', () =>
  $fetch(`${config.public.apiBase}blogs?skip=0&take=4`)
);
// Handle errors gracefully
if (error.value) {
  console.error('Error fetching articles:', error.value);
}

</script>