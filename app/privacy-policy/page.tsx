import PrivacyPolicy from './PrivacyPolicy'; // Import the Client Component

export default function PrivacyPolicyPage() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-2xl text-center">
      <h1 className="text-4xl font-header text-foreground mb-6">
        The Terms Are Set.
      </h1>
      <PrivacyPolicy /> {/* Render the new Privacy Policy Component */}
    </main>
  );
}
