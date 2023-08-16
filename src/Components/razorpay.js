import { loadRazorpayScript } from './loadRazorpayScript';

export function initiatePayment() {
    loadRazorpayScript(() => {
        var options = {
            key: 'GIXBIslo5vUeH6PglVDTA279', // Replace with your Razorpay test key
            amount: 1000,
            currency: 'INR',
            name: 'Test Payment',
            description: 'Test payment using Razorpay',
            handler: function (response) {
                // This function will be called after successful payment
                alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
            },
            prefill: {
                name: 'John Doe',
                email: 'john@example.com',
                contact: '9876543210',
            },
            notes: {
                address: '123, Test Street',
            },
            theme: {
                color: '#F37254',
            },
        };

        var rzp = new window.Razorpay(options);
        rzp.open();
    });
}