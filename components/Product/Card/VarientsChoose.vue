<template>
<!-- {{ product.product_options }} -->
<div class="color__quantity" v-if="product?.product_options?.length > 0" v-for="options in product.product_options">
                            <div class="color">
                                <h4>Choose {{ options.name }}</h4>
                                <!-- <h5>Color <span>Black</span></h5> -->
                                <ul>
                                  <!-- {{ defaultOptionIdArray }} -->
                                    <li v-if="options?.product_option_values?.length > 0" v-for="option_values in options.product_option_values">
                                        <div class="code" :class="{ active: selectedOptions[options.id] === option_values.id || defaultOptionIdArray.includes(option_values.id)}" @click="chooseVariant(options.id, option_values.id)"> 
                                          <!-- <img src="/images/color_code/clr-1.webp" class="img-fluid" alt="seeken" loading="lazy"> -->
                                        {{ option_values.value }}
                                        </div>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
</template>

<script setup>
  const props = defineProps({
    product: {
      type: {},
      required: true,
    }
  
  });

  const emit = defineEmits(['variant-chosen']);

  const selectedOptions = reactive({});
  const defaultOptionIdArray = ref([]);

  function chooseVariant(option_id, variant_id) {
    defaultOptionIdArray.value = [];
    selectedOptions[option_id] = variant_id;
  emit('variant-chosen', selectedOptions);
}


onMounted(() => {
  if (props.product?.product_variants?.length > 0) {
    
     defaultOptionIdArray.value = props.product.product_variants[0].id_combination.split('--').map(Number);
   
console.log(defaultOptionIdArray,'defaultOptionIdArray++')
   
  }
});
  </script>