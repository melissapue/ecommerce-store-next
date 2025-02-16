'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ThankYouPage() {
  const router = useRouter();

  // Clears cart after purchase
  useEffect(() => {
    localStorage.removeItem('cart');
  }, []);

  return (
    <div className="container mx-auto px-4 py-12 text-center">
      <h1 className="text-4xl font-header text-foreground mb-6">
        It Is Now Yours.
      </h1>
      <p className="text-lg text-foreground">
        A decision made. A fate sealed. The ring has chosen its new master.
      </p>

      <div className="mt-8">
        <button
          className="bg-black text-white py-2 px-6 rounded hover:bg-gray-800 transition-all duration-200"
          onClick={() => router.push('/')}
        >
          Return to The Unseen Market
        </button>
      </div>
    </div>
  );
}
