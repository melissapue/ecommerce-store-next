import ProductList from './ProductList'; // Import the new Client Component

export default function ProductsPage() {
  return (
    <main className="container mx-auto px-4 py-12 text-center">
      <h1 className="text-4xl font-header text-foreground mb-6">
        Artifacts of Power
      </h1>
      <ProductList /> {/* Render the new ProductList Client Component */}
    </main>
  );
}
