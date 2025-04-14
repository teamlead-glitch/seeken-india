import { defineNuxtPlugin } from '#app'
import NumericOnly from '~/directives/numeric-only'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('numeric-only', NumericOnly)
})
