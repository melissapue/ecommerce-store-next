'use client';

import Image from 'next/image';
import Link from 'next/link';

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
  'ring-five': {
    name: 'Ring Five',
    description: 'A mysterious ring with unknown origins.',
    price: '$110',
    image: '/Ring_one.png',
  },
  'ring-six': {
    name: 'Ring Six',
    description: 'A ring that whispers secrets of the ancient world.',
    price: '$140',
    image: '/Ring_two.png',
  },
  'ring-seven': {
    name: 'Ring Seven',
    description: 'A forgotten ring, its power is barely remembered.',
    price: '$90',
    image: '/Ring_three.png',
  },
  'ring-eight': {
    name: 'Ring Eight',
    description: 'A cursed ring, filled with dark magic and fury.',
    price: '$160',
    image: '/Ring_five.png',
  },
};

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 min-h-screen flex flex-col items-center justify-center pt-24 pb-24 text-center">
      {/* Centered Title with Adjusted Spacing */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-header text-foreground">
          Artifacts of Power
        </h1>

        {/* Cryptic Subtext */}
        <p className="text-lg text-foreground opacity-80 italic max-w-2xl mx-auto mt-4">
          The selection is… unpredictable. Rings appear and vanish without
          warning.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pb-24">
        {Object.keys(productData).map((slug) => {
          const product = productData[slug as keyof typeof productData];
          return (
            <Link key={slug} href={`/products/${slug}`}>
              <div className="bg-background p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="object-contain mx-auto mb-4"
                />
                <h3 className="text-xl font-header text-foreground">
                  {product.name}
                </h3>
                <p className="text-lg text-foreground mt-2">
                  {product.description}
                </p>
                <p className="text-xl font-semibold text-foreground mt-4">
                  {product.price}
                </p>
                <div className="mt-6 flex justify-center">
                  <button className="bg-black text-white py-2 px-6 rounded hover:bg-gray-800 transition-all duration-200">
                    View Details
                  </button>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
