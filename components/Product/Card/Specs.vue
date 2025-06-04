<template>
  
  <div class="row justify-content-center mt-5" v-if="specs && specs.length > 0">
    <div class="col-md-10 specification">
        <h3>Specifications</h3>
        <div class="specification__box">
            <ul>
                <li v-for="spec in specs">
                    <div class="left">{{ spec.title }} </div>
                    <div class="right" v-html="spec.description"></div>
                </li>
                
            </ul>
        </div>
    </div>
</div>
</template>

<script lang="ts" setup>

const props = defineProps({
  specs: Array
});

</script>

<style>

</style>