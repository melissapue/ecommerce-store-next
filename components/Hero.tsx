'use client';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="relative flex items-start justify-start text-left pt-40 px-6 md:px-12 bg-background hero-container" // Ensures left alignment of the whole section
    >
      {/* Text Section on Left */}
      <div className="flex flex-col items-start justify-start text-left pr-12">
        {/* Quote Text */}
        <h2 className="text-4xl md:text-6xl font-handwritten tracking-wide leading-snug text-foreground">
          Precious … <br />
          <span className="opacity-80">It calls to you.</span>
        </h2>

        {/* Clickable CTA Text */}
        <p
          className="mt-10 text-lg md:text-xl opacity-70 cursor-pointer hover:opacity-100 transition-opacity text-foreground"
          role="button"
          tabIndex={0}
          onClick={() => console.log('Navigating to shop...')}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              console.log('Navigating to shop...');
            }
          }}
        ></p>
      </div>

      {/* Ring Animations (Under the text) */}
      <motion.div className="absolute inset-0 flex flex-col items-start justify-start pointer-events-none">
        {/* One Ring (slightly bigger) - Sliding in from the right */}
        <motion.div
          className="absolute top-[30%] right-[10%]" // Positioned more to the right
          initial={{ x: '100vw', opacity: 0 }} // Sliding in from the right
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <Image
            src="/one_hand.png"
            alt="The One Ring"
            width={220} // Slightly bigger One Ring
            height={220}
          />
        </motion.div>

        {/* Elven Ring - Sliding in from the right */}
        <motion.div
          className="absolute top-[45%] right-[15%]"
          initial={{ x: '100vw', opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
        >
          <Image
            src="/elf_hand.png"
            alt="Elven Ring"
            width={200}
            height={200}
          />
        </motion.div>

        {/* Dwarven Ring - Sliding in from the right */}
        <motion.div
          className="absolute top-[60%] right-[20%]"
          initial={{ x: '100vw', opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.4 }}
        >
          <Image
            src="/dwarf_hand.png"
            alt="Dwarven Ring"
            width={200}
            height={200}
          />
        </motion.div>

        {/* Dark Ring - Sliding in from the right */}
        <motion.div
          className="absolute top-[75%] right-[25%]"
          initial={{ x: '100vw', opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.6 }}
        >
          <Image
            src="/dark_hand.png"
            alt="Dark Ring"
            width={200}
            height={200}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
