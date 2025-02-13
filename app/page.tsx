import Hero from '../components/Hero'; // Import Hero component
import ProductGrid from '../components/ProductGrid'; // Import ProductGrid component

export default function Homepage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Product Grid Section */}
      <ProductGrid />
    </main>
  );
}
