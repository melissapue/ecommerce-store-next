'use client'; // Ensures interactivity for the menu & cart

import { Menu, ShoppingBag } from 'lucide-react'; // Icons

export default function Header() {
  const cartCount = 0; // Placeholder cart count

  return (
    <header className="flex justify-between items-center px-6 md:px-12 py-4 bg-background text-foreground">
      {/* Left: Burger Menu */}
      <button className="text-foreground">
        <Menu size={28} />
      </button>

      {/* Center: Store Name */}
      <h1 className="text-4xl md:text-6xl font-header tracking-wide text-foreground">
        {' '}
        {/* Use Trade Winds font */}
        The Unseen Market
      </h1>

      {/* Right: Cart Button */}
      <button className="text-foreground text-sm md:text-base flex items-center">
        <ShoppingBag size={20} className="mr-2" />
        <span className="text-xs md:text-sm opacity-80">
          Claim what is yours ({cartCount})
        </span>
      </button>
    </header>
  );
}
