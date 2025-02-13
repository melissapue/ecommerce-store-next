'use client'; // Ensures this component is treated as a client component

import Image from 'next/image';
import { useState } from 'react';

const products = [
  {
    id: 1,
    name: 'The One Ring',
    price: '$500',
    image: '/one_hand.png',
    alt: 'The One Ring',
  },
  {
    id: 2,
    name: 'Elven Ring',
    price: '$300',
    image: '/elf_hand.png',
    alt: 'Elven Ring',
  },
  {
    id: 3,
    name: 'Dwarven Ring',
    price: '$400',
    image: '/dwarf_hand.png',
    alt: 'Dwarven Ring',
  },
  {
    id: 4,
    name: 'Dark Ring',
    price: '$600',
    image: '/dark_hand.png',
    alt: 'Dark Ring',
  },
];

export default function ProductGrid() {
  const [cart, setCart] = useState([]); // Cart state to track products added

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <section className="py-12 px-6 md:px-12 mt-32">
      {' '}
      {/* Added mt-24 for more space */}
      <h2 className="text-4xl font-header text-center mb-12">
        Take back the forgotten
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative border border-transparent rounded-xl overflow-hidden transition-all duration-300 ease-in-out shadow-xl hover:shadow-2xl transform hover:scale-105 hover:opacity-80"
          >
            <div className="relative w-full h-72">
              <Image
                src={product.image}
                alt={product.alt}
                layout="fill"
                objectFit="cover"
                className="transition-all duration-300 group-hover:scale-110" // Zoom effect on hover
              />
            </div>

            <div className="p-6 bg-white bg-opacity-90 absolute bottom-0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-xl font-body text-foreground">
                {product.name}
              </h3>
              <p className="text-lg text-foreground">{product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="mt-4 text-white bg-black py-2 px-4 rounded-full text-sm transition-colors hover:bg-gray-800"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
