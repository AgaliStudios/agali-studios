import { Container, Grid, Link } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

function Directions() {
  const { t } = useTranslation();
  return (
    <Container
      maxWidth="xl"
      sx={{
        py: 3,
        display: 'flex',
      }}
    >
      <Grid container>
        <Grid size={{ xs: 12 }} sx={{ px: { xs: 3, sm: 6 } }}>
          <Box component="section">
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{ textAlign: 'center', textTransform: 'uppercase' }}
            >
              {t('directions.title')}
            </Typography>
          </Box>
        </Grid>

        <Grid size={{ xs: 12 }} sx={{ px: { xs: 3, sm: 6 }, mb: 4 }}>
          <Typography variant="h5" gutterBottom>
            {t('directions.fromNorth')}
          </Typography>
          <Box>
            <Box component="ul" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <li>
                <Typography variant="body1" sx={{ fontWeight: 600 }}>
                  {t('directions.north1')}
                </Typography>
                <Typography variant="body2">
                  {t('directions.north1Sub')}{' '}
                  <Link
                    sx={{ textDecoration: 'underline' }}
                    href="https://www.ferriesglyfa.gr/timetable-glyfa-ferries.php"
                    color="inherit"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ferries Glyfa
                  </Link>
                </Typography>
              </li>
            </Box>
          </Box>
        </Grid>

        <Grid size={{ xs: 12 }} sx={{ px: { xs: 3, sm: 6 }, mb: 4 }}>
          <Typography variant="h5" gutterBottom>
            {t('directions.fromSouth')}
          </Typography>
          <Box>
            <Box component="ul" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <li>
                <Typography variant="body1" sx={{ fontWeight: 600 }}>
                  {t('directions.south1')}
                </Typography>
                <Typography variant="body2">
                  {t('directions.south1Sub')}{' '}
                  <Link
                    sx={{ textDecoration: 'underline' }}
                    href="https://www.ferriesedipsos.gr/timetable-edipsos-ferries.php"
                    color="inherit"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ferries Edipsos
                  </Link>
                </Typography>
              </li>

              <li>
                <Typography variant="body1" sx={{ fontWeight: 600 }}>
                  {t('directions.south2')}
                </Typography>
              </li>
            </Box>
          </Box>
        </Grid>

        <Grid size={{ xs: 12 }} sx={{ minHeight: '30rem', px: { xs: 3, sm: 6 } }}>
          <Box component="section" sx={{ width: 1, height: 1 }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.8668997629625!2d22.99127427713098!3d38.88128694765253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a0b50f14d3e32f%3A0x2f3f4d3cc1f98a8b!2sAgali%20Studios!5e0!3m2!1sel!2sgr!4v1752853813651!5m2!1sel!2sgr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Directions;
