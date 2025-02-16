'use client'; // This file needs to be a Client Component

import { useEffect, useState } from 'react';

// Define a type for cart items (type safety)
type CartItem = {
  name: string;
  price: string;
};

export default function Cart() {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Load cart from localStorage when the component mounts
  useEffect(() => {
    try {
      const storedCart = localStorage.getItem('cart');
      if (storedCart) {
        setCart(JSON.parse(storedCart));
      }
    } catch (error) {
      console.error('Failed to load cart from localStorage:', error);
    }
  }, []);

  return cart.length === 0 ? (
    <p className="text-center text-lg text-foreground">
      Nothing claimed yet. Or perhaps stolen?
    </p>
  ) : (
    <ul className="divide-y divide-gray-700 max-w-xl mx-auto">
      {cart.map((item) => (
        <li key={`cart-item-${item.name}`} className="flex justify-between p-4">
          <span className="text-foreground">{item.name}</span>
          <span className="text-foreground">{item.price}</span>
        </li>
      ))}
    </ul>
  );
}
