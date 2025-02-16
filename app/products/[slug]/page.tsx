import ProductDetails from './ProductDetails'; // Import the Client Component

export default function ProductPage() {
  return (
    <main className="container mx-auto px-4 py-12 text-center">
      <ProductDetails /> {/* Render the new ProductDetails Component */}
    </main>
  );
}
