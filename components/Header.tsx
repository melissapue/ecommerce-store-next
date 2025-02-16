'use client';

import { ChevronDown, Menu, ShoppingBag, X } from 'lucide-react'; // Icons
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const cartCount = 0; // Placeholder cart count

  return (
    <nav className="bg-background px-6 md:px-12 py-4 mt-6 md:mt-10">
      {' '}
      {/* Added mt-6 for spacing */}
      <div className="w-full flex items-center justify-between">
        {/* Left: Store Name (Logo) - Now Fully Left-Aligned */}
        <Link href="/" className="absolute left-4 md:left-8">
          <h1 className="text-2xl md:text-4xl font-header tracking-wide text-foreground">
            The Unseen Market
          </h1>
        </Link>

        {/* Center: Navigation Links */}
        <ul className="hidden md:flex gap-8 text-lg absolute left-1/2 transform -translate-x-1/2">
          <li>
            <Link
              href="/about"
              className="text-foreground hover:text-gray-400 transition-colors"
            >
              About
            </Link>
          </li>
          <li
            className="relative group"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Link
              href="/products"
              className="text-foreground hover:text-gray-400 transition-colors flex items-center"
            >
              The Rings <ChevronDown size={16} className="ml-1" />
            </Link>
            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-background border border-gray-700 shadow-md rounded-md z-50">
                <ul className="py-2 text-sm">
                  <li>
                    <Link
                      href="/products/elven-rings"
                      className="block px-4 py-2 font-bold hover:bg-gray-800 text-foreground"
                    >
                      Elven Rings
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products/dwarven-rings"
                      className="block px-4 py-2 font-bold hover:bg-gray-800 text-foreground"
                    >
                      Dwarven Rings
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products/dark-rings"
                      className="block px-4 py-2 font-bold hover:bg-gray-800 text-foreground"
                    >
                      Dark Rings
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products/rings-of-power"
                      className="block px-4 py-2 font-bold hover:bg-gray-800 text-foreground"
                    >
                      Rings of Power
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li>
            <Link
              href="/contact"
              className="text-foreground hover:text-gray-400 transition-colors"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/privacy-policy"
              className="text-foreground hover:text-gray-400 transition-colors"
            >
              Privacy Policy
            </Link>
          </li>
        </ul>

        {/* Right: Cart Button */}
        <button className="text-foreground text-xs md:text-sm flex items-center absolute right-4 md:right-8">
          <ShoppingBag size={20} className="mr-2" />
          <span className="opacity-80">Vault ({cartCount})</span>
        </button>

        {/* Mobile: Burger Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground p-2 absolute left-4"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {/* Mobile Dropdown Navigation */}
      <div
        className={`md:hidden flex flex-col items-center bg-background border-t border-gray-700 shadow-md transition-all duration-300 ${
          isOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col items-center gap-4 py-4 w-full">
          <li>
            <Link
              href="/about"
              className="text-foreground hover:text-gray-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className="text-foreground hover:text-gray-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              The Rings
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-foreground hover:text-gray-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/privacy-policy"
              className="text-foreground hover:text-gray-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Privacy Policy
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
