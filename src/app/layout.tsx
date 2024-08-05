//Imports
import type { Metadata } from 'next';
import './globals.css';

//Components
import Header from '@/components/Header/Header';
import Container from '@/components/Container/Container';
import Aside from '@/components/Aside/Aside';
import Main from '@/components/Main/Main';

export const metadata: Metadata = {
  title: 'Security Condominium',
  description: 'Your condominium safe',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Container>
          <Aside />
          <Main>{children}</Main>
        </Container>
      </body>
    </html>
  );
}
