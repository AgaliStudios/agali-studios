import { Button, Grid, Link, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

function Reservations() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Container
      maxWidth="xl"
      sx={{
        py: 3,
      }}
    >
      <Grid container>
        <Grid size={{ xs: 12 }} sx={{ px: { xs: 3, sm: 6 } }}>
          <Box component="section" sx={{ textAlign: 'center' }}>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{ textTransform: 'uppercase' }}
            >
              {t('reservations.title')}
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mt: 3 }}>
              <Typography variant="body1">{t('reservations.text1')}</Typography>

              <Typography variant="body1">{t('reservations.text2')}</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid
          size={{ xs: 12 }}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mt: '2rem',
            px: { xs: 3, sm: 6 },
          }}
        >
          <Button
            variant="contained"
            sx={{ backgroundColor: theme.palette.primary.dark }}
            size="large"
            href="https://www.booking.com/hotel/gr/agali-studios.html"
            target="_blank"
          >
            {t('reservations.reservationButton')}
          </Button>
        </Grid>
        <Grid size={{ xs: 12 }} sx={{ px: { xs: 3, sm: 6 } }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', mt: 3 }}>
            <Typography variant="body1">{t('reservations.text3')}</Typography>
            <Typography variant="body1" sx={{ textAlign: 'center' }}>
              <br />
              <Link href="tel:+306987045409" underline="hover" color="inherit">
                +30 698 704 5409
              </Link>
              <br />
              <Link href="tel:+306943756551" underline="hover" color="inherit">
                +30 694 375 6551
              </Link>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Reservations;
