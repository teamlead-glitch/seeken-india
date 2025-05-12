<template>
  <div class="d-flex align-items-center gap-2">
    <!-- Avatar circle with initials -->
    <div
      class="rounded-circle bg-secondary text-white d-flex justify-content-center align-items-center"
      :style="avatarStyle"
    >
      {{ initials }}
    </div>

  
  </div>
</template>

<script setup>
const props = defineProps({
  name: String,
  size: {
    type: Number,
    default: 100,
  },
})

const initials = computed(() => {
  if (!props.name) return ''

  const parts = props.name.trim().split(' ')
  const first = parts[0]?.charAt(0).toUpperCase() || ''
  const second = parts[1]?.charAt(0).toUpperCase() || parts[0]?.charAt(1)?.toUpperCase() || ''

  return first + second
})

const avatarStyle = computed(() => ({
  width: `${props.size}px`,
  height: `${props.size}px`,
  fontWeight: 700,
  fontSize: `${props.size * 0.3}px`,
}))
</script>
