import { ref, watchEffect } from 'vue'
import { useRuntimeConfig, useAsyncData } from '#imports'
import { useSeoMeta } from '~/composables/useSeoMeta'

export function usePageContent(slug: string, fallbackTitle = 'Page') {
  const config = useRuntimeConfig()

  const page_content = ref(null)
  const seo = ref(null)
  const title = ref(fallbackTitle)
  const error = ref(null)

  const { data, error: asyncError } = useAsyncData(`page-${slug}`, () =>
    $fetch(`${config.public.apiBase}page/${slug}`)
  )

  watchEffect(() => {
    if (data.value) {
      page_content.value = data.value
      seo.value = data.value?.seo || null
      title.value = data.value?.page_content?.title || fallbackTitle

      useSeoMeta(seo.value, title.value, fallbackTitle)
    }
  })

  watchEffect(() => {
    error.value = asyncError.value
      ? {
          message: asyncError.value?.message || 'Unable to fetch page content',
          statusCode: asyncError.value?.statusCode || null,
        }
      : null
  })

  return {
    page_content,
    seo,
    title,
    error,
  }
}
