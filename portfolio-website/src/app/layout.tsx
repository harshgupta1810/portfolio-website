import '@fontsource/orbitron/400.css';
import '@fontsource/roboto-slab/400.css';
import '@fontsource/inter/400.css';
import '@fontsource/open-sans/400.css';
import './globals.css';


import Header from '@/components/Header';
import Footer from '@/components/Footer';


export const metadata = {
  title: 'Portfolio Website',
  description: 'Personal portfolio website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-body relative">

        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="relative z-10">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
