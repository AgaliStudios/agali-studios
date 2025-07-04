// src/components/Layout.tsx
import { Container, Grid } from '@mui/material';
import { Outlet } from 'react-router-dom';
import ImageCarousel from '../../widgets/ImageCarousel';
import Footer from '../Footer';
import Header from '../Header';
import TopBar from '../Header/TopBar';

export default function Layout() {
  return (
    <Grid container direction="column" sx={{ minHeight: '100vh', minWidth: '100vw' }}>
      <TopBar />
      <Header />

      {/* Main content centered and contained */}
      <Grid size={{ xs: 12 }} sx={{ flexGrow: 1, width: '100%' }}>
        <ImageCarousel />
        <Container maxWidth="xl" sx={{ py: 3 }}>
          <Outlet />
        </Container>
      </Grid>

      {/* Footer full width */}
      <Grid size={{ xs: 12 }} sx={{ width: '100%' }}>
        <Footer />
      </Grid>
    </Grid>
  );
}
