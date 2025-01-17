export const useRazorpay = () => {
    const initPayment = (options: RazorpayOptions) => {
      if (typeof window.Razorpay === 'undefined') {
        console.error('Razorpay SDK not loaded');
        return;
      }
  
      const rzp = new window.Razorpay(options);
      rzp.on('payment.failed', (response) => {
        console.error('Payment Failed', response);
      });
      rzp.open();
    };
  
    return { initPayment };
  };
  