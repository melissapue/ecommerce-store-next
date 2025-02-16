// No 'use client' needed here! This stays a Server Component
import ContactForm from './ContactForm'; // Import the new Client Component

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-12 text-center max-w-lg">
      <h1 className="text-4xl font-header text-foreground mb-6">
        Leave a Whisper.
      </h1>
      <ContactForm /> {/* Render the new Client Component */}
    </main>
  );
}
