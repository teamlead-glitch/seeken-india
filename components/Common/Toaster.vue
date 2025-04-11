<template>
    <div class="position-fixed top-0 end-0 p-3" style="z-index: 1055;">
      <transition-group name="fade" tag="div">
        <div
          v-for="toast in toasts"
          :key="toast.id"
          class="toast show align-items-center text-white border-0 mb-2"
          :class="{
            'bg-success': toast.type === 'success',
            'bg-danger': toast.type === 'error',
            'bg-warning text-dark': toast.type === 'warning',
            'bg-primary': toast.type === 'info',
          }"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div class="d-flex">
            <div class="toast-body">
              {{ toast.message }}
            </div>
            <!-- <button
              type="button"
              class="btn-close btn-close-white me-2 m-auto"
              aria-label="Close"
              @click="removeToast(toast.id)"
            ></button> -->
          </div>
        </div>
      </transition-group>
    </div>
  </template>
  
  <script setup>
  const { toasts } = useToast()
  </script>
  
  <style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease, transform 0.5s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
    transform: translateY(-20px);
  }
  </style>
  