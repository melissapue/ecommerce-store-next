'use client';

import { useState } from 'react';

const categories = [
  {
    name: 'Elven Rings',
    description:
      'Crafted by Elves, these rings conceal ancient power and secrets lost in shadow.',
    link: '/product/elven-rings',
    image: '/elf_hand.png',
  },
  {
    name: 'Dwarven Rings',
    description:
      'Wrought in darkness, these rings carry ancient strength and dwarven secrets.',
    link: '/product/dwarven-rings',
    image: '/dwarf_hand.png',
  },
  {
    name: 'Dark Rings',
    description:
      'Born from shadow, these rings wield forbidden power and whisper the darkest of secrets.',
    link: '/product/dark-rings',
    image: '/dark_hand.png',
  },
  {
    name: 'Rings of Power',
    description:
      'Forged in shadow, these rings hold power beyond comprehension. Wield one, and you control fate itself.',
    link: '/product/rings-of-power',
    image: '/one_hand.png',
  },
];

export default function CategorySlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length);
  };

  // Handle previous slide
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + categories.length) % categories.length,
    );
  };

  return (
    <section className="py-16 px-6 md:px-12 mt-32">
      {/* Quote and Dark Mountain Section */}
      <div className="flex justify-between items-center bg-background py-16 mt-24">
        {/* Left: Mountain Image (Smaller) */}
        <div className="w-1/3">
          <img
            src="/mountain_dark_hand.png" // Mountain image
            alt="Dark Mountain"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Right: Header */}
        <div className="w-2/3 text-left max-w-xl">
          <h2 className="text-4xl font-header italic text-foreground mb-6">
            "Only those with great ambition would dare touch what is beyond
            mortal reach."
          </h2>
        </div>
      </div>

      {/* New Central Header Section */}
      <div className="text-center py-8">
        <h2 className="text-4xl font-header text-foreground">
          Venture into the shadows
        </h2>
      </div>

      {/* Slider Section */}
      <div className="relative">
        {/* Slider Content */}
        <div className="flex justify-center items-center bg-background rounded-lg overflow-hidden">
          <div className="w-full md:w-1/2 p-16 text-center">
            <h3 className="text-3xl font-header text-foreground mb-4 text-center">
              {categories[currentIndex].name}
            </h3>
            <p className="text-lg text-foreground mb-6">
              {categories[currentIndex].description}
            </p>
            <a
              href={categories[currentIndex].link}
              className="text-lg font-semibold text-[#8B0000] hover:text-[#660000]"
            >
              Claim what should be yours →
            </a>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="w-72 h-72 flex justify-center items-center">
              <img
                src={categories[currentIndex].image}
                alt={categories[currentIndex].name}
                className="w-56 h-56 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Custom Navigation Arrows (Hand Images) */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-background"
        >
          <img
            src="/arrow_hand_left.png"
            alt="Previous"
            className="w-10 h-10 object-contain"
          />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-background"
        >
          <img
            src="/arrow_hand_right.png"
            alt="Next"
            className="w-10 h-10 object-contain"
          />
        </button>
      </div>

      {/* "As Featured In" Section */}
      <div className="text-center py-8">
        <h2 className="text-3xl font-header text-foreground mb-6">
          As Featured In
        </h2>
        <div className="flex justify-center space-x-12">
          {/* Featured Locations */}
          <div className="text-center">
            <p className="text-xl font-semibold text-foreground">Rivendell</p>
            <p className="text-sm text-foreground opacity-80">
              Home of Elves, ancient wisdom
            </p>
          </div>
          <div className="text-center">
            <p className="text-xl font-semibold text-foreground">
              The Prancing Pony
            </p>
            <p className="text-sm text-foreground opacity-80">
              Where travelers meet and tales unfold
            </p>
          </div>
          <div className="text-center">
            <p className="text-xl font-semibold text-foreground">
              Green Dragon Inn
            </p>
            <p className="text-sm text-foreground opacity-80">
              Where Hobbits share secrets
            </p>
          </div>
          <div className="text-center">
            <p className="text-xl font-semibold text-foreground">
              Minas Tirith
            </p>
            <p className="text-sm text-foreground opacity-80">
              Where the legacy of kings endures
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
