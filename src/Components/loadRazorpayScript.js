export function loadRazorpayScript(callback) {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = callback;
    document.head.appendChild(script);
}
