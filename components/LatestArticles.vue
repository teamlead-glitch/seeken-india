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

const { data: articles, error, refresh } = useFetchData('articles', 'blogs?skip=0&take=4');

</script>