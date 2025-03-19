<template>
    <LatestArticlesDesk v-if="!isMobile" :articles="articles"/>
    <LatestArticlesMob v-if="isMobile" :articles="articles"/>
</template>

<script setup>

import { useRouter } from 'vue-router';
import { useMediaQuery } from '@vueuse/core';

const router = useRouter();
const config = useRuntimeConfig();

const isMobile = useMediaQuery('(max-width: 768px)');
console.log(isMobile.value,'ismob')


// Fetch slide data during SSR
const { data: articles, error } = await useAsyncData('articles', () =>
  $fetch(`${config.public.apiBase}blogs?skip=0&take=4`)
);
// Handle errors gracefully
if (error.value) {
  console.error('Error fetching articles:', error.value);
}

</script>