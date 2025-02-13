import './globals.css';
import { Tillana, Trade_Winds } from 'next/font/google'; // Correct font names
import Header from '../components/Header'; // Import the header

const tillana = Tillana({
  subsets: ['latin'],
  weight: '400', // You can choose other weights if needed
});

const tradeWinds = Trade_Winds({
  subsets: ['latin'],
  weight: '400', // You can choose other weights if needed
});

export const metadata = {
  title: 'The Unseen Market',
  description: 'A place of forgotten and forbidden rings...',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${tillana.className} antialiased`}>
        {' '}
        {/* Tillana font for general text */}
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
