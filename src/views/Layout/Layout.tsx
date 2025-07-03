// src/components/Layout.tsx
import { Container, Grid } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';

export default function Layout() {
  return (
    <Grid container direction="column" sx={{ minHeight: '100vh', minWidth: '100vw' }}>
      {/* Header full width */}
      <Grid size={{ xs: 12 }} sx={{ width: '100%' }}>
        <Header />
      </Grid>

      {/* Main content centered and contained */}
      <Grid size={{ xs: 12 }} sx={{ flexGrow: 1, width: '100%' }}>
        <Container maxWidth="lg" sx={{ py: 3 }}>
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
