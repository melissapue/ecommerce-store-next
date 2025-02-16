import Cart from './Cart'; // Import the new Client Component

export default function CartPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-header text-foreground text-center mb-12">
        Your Vault
      </h1>
      <Cart /> {/* Uses the new Client Component */}
    </div>
  );
}
