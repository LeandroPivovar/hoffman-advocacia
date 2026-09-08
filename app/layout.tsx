import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hoffmann Advocacia | Atendimento jurídico em Uberlândia',
  description: 'Assessoria jurídica ética, estratégica e personalizada em Uberlândia, MG.',
  openGraph: {
    title: 'Hoffmann Advocacia | Atendimento jurídico em Uberlândia',
    description: 'Assessoria jurídica ética, estratégica e personalizada em Uberlândia, MG.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
