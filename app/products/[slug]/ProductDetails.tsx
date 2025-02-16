'use client'; // This is the only Client Component

import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

// Mock product data (Replace with API later)
const productData = {
  'rings-of-power': {
    name: 'Ring One',
    description: 'A powerful ring forged in shadow.',
    price: '$100',
    image: '/elf_hand.png',
  },
  'dark-rings': {
    name: 'Ring Two',
    description: 'Dark rings of mysterious origin.',
    price: '$120',
    image: '/dwarf_hand.png',
  },
  'elven-rings': {
    name: 'Ring Three',
    description: 'Forged by the Elves, these rings contain ancient power.',
    price: '$150',
    image: '/dark_hand.png',
  },
  'dwarven-rings': {
    name: 'Ring Four',
    description: 'Rings made by the Dwarves with ancient and mystical power.',
    price: '$130',
    image: '/one_hand.png',
  },
};

export default function ProductDetails() {
  const { slug } = useParams();
  const router = useRouter();
  const [cart, setCart] = useState([]);

  const product = productData[slug as keyof typeof productData];

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(storedCart);
  }, []);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-header text-foreground mb-6">Not Found</h1>
        <p className="text-lg text-foreground">
          The ring you seek is lost to time...
        </p>
        <button
          className="mt-6 bg-black text-white py-2 px-6 rounded hover:bg-gray-800 transition-all duration-200"
          onClick={() => router.push('/products')}
        >
          Return to the Market
        </button>
      </div>
    );
  }

  const handleClaim = () => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    router.push('/cart');
  };

  return (
    <div className="container mx-auto px-4 py-12 text-center">
      <h1 className="text-4xl font-header text-foreground">{product.name}</h1>
      <Image
        src={product.image}
        alt={product.name}
        width={400}
        height={400}
        className="mx-auto my-6"
      />
      <p className="text-lg text-foreground mt-4">{product.description}</p>
      <p className="text-xl font-semibold text-foreground mt-4">
        {product.price}
      </p>
      <button
        className="mt-6 bg-black text-white py-2 px-6 rounded hover:bg-gray-800 transition-all duration-200"
        onClick={handleClaim}
      >
        Claim It
      </button>
    </div>
  );
}
