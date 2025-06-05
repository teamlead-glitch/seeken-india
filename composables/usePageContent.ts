import { ref } from 'vue'
import { useRuntimeConfig, useAsyncData } from '#imports'
import { useSeoMeta } from '~/composables/useSeoMeta'

export function usePageContent(slug: string, fallbackTitle = 'Page') {
  const config = useRuntimeConfig()

  const page_content = ref(null)
  const seo = ref(null)
  const title = ref(fallbackTitle)
  const error = ref(null)

  const cacheKey = `page-content-${slug}`

  const { data, error: fetchError } = useAsyncData(cacheKey, async () => {
    const res = await $fetch(`${config.public.apiBase}page/${slug}`)
    return res
  })

  watchEffect(() => {
    if (data.value) {
      page_content.value = data.value
      seo.value = data.value?.seo || null
      title.value = data.value?.page_content?.title || fallbackTitle

      if (process.client) {
        try {
          localStorage.setItem(cacheKey, JSON.stringify(data.value))
        } catch (e) {
          console.warn('localStorage failed:', e)
        }
      }

      useSeoMeta(seo.value, title.value, fallbackTitle)
    }
  })

  error.value = fetchError

  return {
    page_content,
    seo,
    title,
    error,
  }
}
