"use client";

import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardNumberElement, CardExpiryElement, CardCvcElement, useStripe, useElements, PaymentRequestButtonElement } from "@stripe/react-stripe-js";
import { motion } from "framer-motion";

// Initialize Stripe
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

// Inner component that has access to Stripe hooks
function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [paymentRequest, setPaymentRequest] = useState<any>(null);
  const [canMakePayment, setCanMakePayment] = useState(false);

  useEffect(() => {
    if (stripe) {
      const pr = stripe.paymentRequest({
        country: 'US',
        currency: 'usd',
        total: {
          label: 'Ayon Deposit',
          amount: 2000, // $20.00 in cents
        },
        requestPayerName: true,
        requestPayerEmail: true,
      });

      // Check if the Payment Request is available
      pr.canMakePayment().then((result) => {
        console.log('Payment Request result:', result);
        if (result) {
          setCanMakePayment(true);
          setPaymentRequest(pr);
        }
      });

      pr.on('paymentmethod', async (ev) => {
        // Create payment intent
        const response = await fetch("/api/create-payment-intent", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: 2000,
            currency: "usd",
            email: email,
          }),
        });

        const { clientSecret } = await response.json();

        // Confirm the PaymentIntent
        const { error: confirmError } = await stripe.confirmCardPayment(
          clientSecret,
          { payment_method: ev.paymentMethod.id },
          { handleActions: false }
        );

        if (confirmError) {
          ev.complete('fail');
          setError(confirmError.message || "Payment failed");
        } else {
          ev.complete('success');
          // Redirect to success page
          window.location.href = "/thankyou";
        }
      });
    }
  }, [stripe, email]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    if (!stripe || !elements) {
      return;
    }

    setLoading(true);
    setError(null);

    const cardNumberElement = elements.getElement(CardNumberElement);
    const cardExpiryElement = elements.getElement(CardExpiryElement);
    const cardCvcElement = elements.getElement(CardCvcElement);

    if (!cardNumberElement || !cardExpiryElement || !cardCvcElement) {
      setError("Card elements not found");
      setLoading(false);
      return;
    }

    try {
      // Create payment intent
      const response = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: 2000, // $20.00 in cents
          currency: "usd",
          email: email,
        }),
      });

      const { clientSecret } = await response.json();

      // Confirm payment
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardNumberElement,
          billing_details: {
            email: email,
          },
        },
      });

      if (error) {
        setError(error.message || "Payment failed");
      } else if (paymentIntent.status === "succeeded") {
        // Redirect to success page
        window.location.href = "/thankyou";
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const cardElementOptions = {
    style: {
      base: {
        fontSize: '16px',
        color: '#211F1F',
        fontFamily: 'var(--font-aeonik)',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#fa755a',
      },
    },
  };

  return (
    <>
      {/* Apple Pay and Google Pay Buttons */}
      {canMakePayment && paymentRequest && (
        <motion.div 
          className="mb-6"
          style={{ overflowX: 'hidden' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          <PaymentRequestButtonElement
            options={{
              paymentRequest,
              style: {
                paymentRequestButton: {
                  type: 'default',
                  theme: 'light',
                  height: '60px',
                },
              },
            }}
          />
        </motion.div>
      )}

      {/* Payment Form Container */}
      <motion.div 
        className="bg-white rounded-2xl p-8 shadow-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Credit Card Title */}
          <h2
            className="font-bold mb-6"
            style={{
              fontFamily: 'var(--font-aeonik)',
              fontSize: '18px',
              color: '#211F1F'
            }}
          >
            Credit Card
          </h2>

          {/* Email Input */}
          <div>
            <label 
              className="block mb-2"
              style={{
                fontFamily: 'var(--font-aeonik)',
                fontSize: '14px',
                color: '#211F1F',
                fontWeight: '500'
              }}
            >
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail address"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              style={{
                fontFamily: 'var(--font-aeonik)',
                fontSize: '16px',
                color: '#211F1F'
              }}
            />
          </div>

          {/* Card Number */}
          <div>
            <label 
              className="block mb-2"
              style={{
                fontFamily: 'var(--font-aeonik)',
                fontSize: '14px',
                color: '#211F1F',
                fontWeight: '500'
              }}
            >
              Card Number
            </label>
            <div className="p-4 border border-gray-300 rounded-lg bg-white">
              <CardNumberElement 
                options={{
                  ...cardElementOptions,
                  placeholder: '1234 1234 1234 1234'
                }} 
              />
            </div>
          </div>

          {/* Expiry and CVC Row */}
          <div className="grid grid-cols-2 gap-4">
            {/* Expiry Date */}
            <div>
              <label 
                className="block mb-2"
                style={{
                  fontFamily: 'var(--font-aeonik)',
                  fontSize: '14px',
                  color: '#211F1F',
                  fontWeight: '500'
                }}
              >
                Expiry date
              </label>
              <div className="p-4 border border-gray-300 rounded-lg bg-white">
                <CardExpiryElement 
                  options={{
                    ...cardElementOptions,
                    placeholder: 'MM/YY'
                  }} 
                />
              </div>
            </div>

            {/* Security Code */}
            <div>
              <label 
                className="block mb-2"
                style={{
                  fontFamily: 'var(--font-aeonik)',
                  fontSize: '14px',
                  color: '#211F1F',
                  fontWeight: '500'
                }}
              >
                Security code
              </label>
              <div className="p-4 border border-gray-300 rounded-lg bg-white">
                <CardCvcElement 
                  options={{
                    ...cardElementOptions,
                    placeholder: 'CVC'
                  }} 
                />
              </div>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div
              className="p-4 rounded-lg"
              style={{
                backgroundColor: '#ffebee',
                color: '#c62828',
                fontFamily: 'var(--font-aeonik)',
                fontSize: '14px'
              }}
            >
              {error}
            </div>
          )}
        </form>
      </motion.div>

          {/* Submit Button - Outside the white card */}
          <motion.div className="flex justify-center mt-6">
            <motion.button
              onClick={handleSubmit}
              disabled={!stripe || loading}
              className="bg-white text-black font-medium uppercase tracking-wider transition-all duration-300 border border-black hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed px-8"
        style={{ 
          height: '60px', 
          borderRadius: '30px',
          fontSize: '18px',
          fontWeight: '500',
          fontFamily: 'var(--font-aeonik)',
          boxShadow: '0 0 0 0 rgba(238, 228, 172, 0.4), 0 0 0 0 rgba(246, 152, 121, 0.4)',
          transition: 'all 0.3s ease, box-shadow 0.3s ease'
        }}
        onMouseEnter={(e) => {
          if (!loading) {
            (e.target as HTMLElement).style.boxShadow = '0 0 20px 8px rgba(238, 228, 172, 0.3), 0 0 40px 16px rgba(246, 152, 121, 0.2)';
          }
        }}
        onMouseLeave={(e) => {
          (e.target as HTMLElement).style.boxShadow = '0 0 0 0 rgba(238, 228, 172, 0.4), 0 0 0 0 rgba(246, 152, 121, 0.4)';
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            {loading ? "Processing..." : "Deposit 20$"}
          </motion.button>
          </motion.div>

      {/* 100% Refundable Text */}
      <motion.p
        className="text-center mt-4"
        style={{
          fontFamily: 'var(--font-aeonik)',
          fontSize: '14px',
          color: '#211F1F'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
      >
        100% refundable
      </motion.p>

      {/* Powered by Stripe Logo */}
      <motion.div
        className="flex justify-center mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
      >
        <img
          src="/Assets/landingpage1assets/poweredbystripe.svg"
          alt="Powered by Stripe"
          style={{
            height: '40.5px',
            width: 'auto'
          }}
        />
      </motion.div>
    </>
  );
}

export default function Checkout() {
  return (
    <div className="min-h-screen bg-white" style={{ overflowX: 'hidden' }}>
      {/* Checkout Section */}
      <div 
        className="w-full flex items-center justify-center py-12"
        style={{ 
          minHeight: '100vh',
          background: 'radial-gradient(circle at right, #F69678 0%, #EEE2AD 100%)',
          overflowX: 'hidden'
        }}
      >
        <motion.div 
          className="w-full max-w-md mx-auto px-5"
          style={{ overflowX: 'hidden' }}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Header */}
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <h1
              className="mb-2"
              style={{
                fontFamily: 'var(--font-aeonik)',
                fontSize: '18px',
                color: 'white'
              }}
            >
              Secure your benefits
            </h1>
          </motion.div>

          {/* Wrap everything in Elements provider */}
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </motion.div>
      </div>
    </div>
  );
}
