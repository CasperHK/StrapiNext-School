import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Excellence Academy - Empowering Tomorrow\'s Leaders',
  description: 'Excellence Academy is a premier educational institution dedicated to providing exceptional learning experiences that nurture academic excellence, creativity, and character development.',
  keywords: 'school, education, academy, learning, students, teachers, excellence, academic programs',
  authors: [{ name: 'Excellence Academy' }],
  openGraph: {
    title: 'Excellence Academy - Empowering Tomorrow\'s Leaders',
    description: 'Join Excellence Academy where innovation meets tradition, and every student is inspired to reach their full potential.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}