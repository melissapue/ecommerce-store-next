// components/Footer.tsx

export default function Footer() {
  return (
    <footer className="bg-background text-foreground py-6">
      <div className="text-center">
        <p className="text-sm opacity-80">
          &copy; 2025 The Unseen Market. All Rights Reserved.
        </p>
        <div className="flex justify-center space-x-12 mt-4">
          <a
            href="/about"
            className="text-sm hover:text-opacity-80 hover:opacity-90 transition-opacity"
          >
            About
          </a>
          <a
            href="/contact"
            className="text-sm hover:text-opacity-80 hover:opacity-90 transition-opacity"
          >
            Contact
          </a>
          <a
            href="/privacy"
            className="text-sm hover:text-opacity-80 hover:opacity-90 transition-opacity"
          >
            Privacy Policy
          </a>
        </div>
        <p className="text-sm mt-4 opacity-70">
          Brought by the Wraiths of Sauron
        </p>
      </div>
    </footer>
  );
}
