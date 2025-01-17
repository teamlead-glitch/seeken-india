interface RazorpayOptions {
    key: string; // Razorpay key_id
    amount: number; // Amount in paise
    currency: string; // Currency code
    name?: string; // Merchant name
    description?: string; // Payment description
    image?: string; // Merchant logo URL
    order_id?: string; // Razorpay order ID
    handler: (response: RazorpayPaymentResponse) => void; // Success callback
    prefill?: {
      name?: string;
      email?: string;
      contact?: string;
    };
    notes?: Record<string, string>;
    theme?: {
      color?: string;
    };
  }
  
  interface RazorpayPaymentResponse {
    razorpay_payment_id: string;
    razorpay_order_id: string;
    razorpay_signature: string;
  }
  
  interface Window {
    Razorpay: any;
  }
  