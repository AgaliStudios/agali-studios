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
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            mt: '2rem',
            px: { xs: 3, sm: 6 },
            gap: 2,
          }}
        >
          <Button
            variant="contained"
            sx={{ backgroundColor: theme.palette.primary.dark }}
            size="large"
            href="https://www.booking.com/hotel/gr/agali-studios-1.el.html?aid=304142&dest_id=900052133&dest_type=city&group_adults=2&group_children=0&label=gen173nr-1BCAEoggI46AdIM1gEaDuIAQGYAQi4ARjIAQzYAQHoAQGIAgGoAgS4AqCL7cMGwAIB0gIkYzQ2NWFjNzItOGQ2My00Y2JjLThmYzUtMTEwMGJjNDQ2ODkw2AIF4AIB-Share-fSVIrqr%401752909556&no_rooms=1&req_adults=2&req_children=0"
            target="_blank"
          >
            {t('reservations.reservationButton') + ' (Agali Studios 1)'}
          </Button>
          <Button
            variant="contained"
            sx={{ backgroundColor: theme.palette.primary.dark }}
            size="large"
            href="https://www.booking.com/hotel/gr/agali-studios-2.el.html?aid=304142&dest_id=900052133&dest_type=city&group_adults=2&group_children=0&label=gen173nr-1BCAEoggI46AdIM1gEaDuIAQGYAQi4ARjIAQzYAQHoAQGIAgGoAgS4AqCL7cMGwAIB0gIkYzQ2NWFjNzItOGQ2My00Y2JjLThmYzUtMTEwMGJjNDQ2ODkw2AIF4AIB-Share-PrIRxiM%401752909527&no_rooms=1"
            target="_blank"
          >
            {t('reservations.reservationButton') + ' (Agali Studios 2)'}
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
