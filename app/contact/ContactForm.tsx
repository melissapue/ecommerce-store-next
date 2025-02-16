'use client'; // This is the only Client Component

import { useState } from 'react';

export default function ContactForm() {
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return submitted ? (
    <p className="text-lg text-foreground">
      Your words have been sent. A response, if one is deserved, will find you
      in time.
    </p>
  ) : (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <textarea
        className="w-full h-32 p-3 text-foreground bg-background border border-gray-500 rounded"
        placeholder="Your message, inquiry, or cryptic request..."
        value={message}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setMessage(e.target.value)
        }
        required
        aria-label="Message input"
      />
      <button className="bg-black text-white py-2 px-6 rounded hover:bg-gray-800 transition-all duration-200">
        Send the Message
      </button>
    </form>
  );
}
