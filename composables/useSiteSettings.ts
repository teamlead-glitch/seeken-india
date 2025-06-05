import { useRuntimeConfig } from '#imports'

const defaultSettings = {
  email: "admin@seeken.com",
  phone: "1111111111",
  address: "seeken",
  fb_url: "https://www.facebook.com/",
  twitter_url: "https://x.com",
  youtube_url: "https://www.youtube.com/",
  linked_in: "https://in.linkedin.com/",
  insta_url: "https://www.instagram.com/"
}

let settings: any = null;

export const useSiteSettings = async () => {
  //if (cachedSettings) return cachedSettings;

  try {
    const config = useRuntimeConfig();
    const { data, error } = await useFetch(`${config.public.apiBase}settings`, {
      //key: 'site-settings', // enables caching
      server: true
    });

    settings = data.value && Object.keys(data.value).length ? data.value : defaultSettings;
  } catch (err) {
    settings = defaultSettings;
  }

  return settings;
};
