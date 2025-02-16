import CategorySlider from '../components/CategorySlider'; // Import the CategorySlider component
import Hero from '../components/Hero'; // Import Hero component

export default function Homepage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Hero />
      <CategorySlider /> {/* Add CategorySlider component here */}
    </main>
  );
}
