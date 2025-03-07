export const useLoader = () => {
    const loading = useState('globalLoading', () => false);
  
    return {
      showLoader: () => (loading.value = true),
      hideLoader: () => (loading.value = false),
    };
  };
  