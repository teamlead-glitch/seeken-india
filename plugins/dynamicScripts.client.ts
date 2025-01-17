export default defineNuxtPlugin(() => {
    if (process.client) {
      const localScript = document.createElement('script');
      localScript.src = '/assets/js/app.js'; // Ensure the path matches your project structure
      localScript.async = true;
      document.head.appendChild(localScript);
    }
  });
  