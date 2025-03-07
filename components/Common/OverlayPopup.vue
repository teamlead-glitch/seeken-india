<template>
    <Teleport to="body">
      <div v-if="show" class="overlay">
        
          <slot /> 
          
      </div>
    </Teleport>
  </template>
  
  <script setup>
  defineProps({
    show: Boolean
  });
  const emit = defineEmits(["close"]); 
  
  const closePopup = () => {
    emit("close");
  };
  </script>
  
  <style scoped>
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }
  
  .popup {
    background: white;
    padding: 20px;
    border-radius: 10px;
    width: 80%;
    text-align: center;
  }
  
  .close-btn {
    background: red;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    float: right;
  }
  </style>
  