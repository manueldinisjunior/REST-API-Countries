import { Outlet } from 'react-router-dom';
import { Header } from '@/components/header';
import { Container } from '@/components/container';

export const Shell = () => {
  return (
    <>
      <Header />

      <main>
        <Container className="xs:py-10 py-8">
          <Outlet />
        </Container>
      </main>
    </>
  );
};
