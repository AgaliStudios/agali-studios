import { Container, Grid } from '@mui/material';
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
            <Typography variant="body1" sx={{ textAlign: 'center' }}>
              {t('directions.subtitle')}
            </Typography>
            {/* Athens Directions */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" gutterBottom>
                {t('directions.fromAthensTitle', 'From Athens')}
              </Typography>
              <Typography variant="body1">
                {t(
                  'directions.fromAthensText',
                  'Take the National Road (E75) northbound towards Lamia. At Arkitsa, follow signs to the ferry port. Board the ferry to Aidipsos (about 45 minutes). Once in Aidipsos, follow local signage to your destination.',
                )}
              </Typography>
            </Box>

            {/* Thessaloniki Directions */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" gutterBottom>
                {t('directions.fromThessalonikiTitle', 'From Thessaloniki')}
              </Typography>
              <Typography variant="body1">
                {t(
                  'directions.fromThessalonikiText',
                  'Take the National Road (E75) southbound towards Lamia. Exit at Glyfa and take the ferry to Agiokampos. From there, drive approximately 45 minutes to Aidipsos.',
                )}
              </Typography>
            </Box>

            {/* Lamia Directions */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" gutterBottom>
                {t('directions.fromLamiaTitle', 'From Lamia')}
              </Typography>
              <Typography variant="body1">
                {t(
                  'directions.fromLamiaText',
                  'Drive to Arkitsa (approximately 50 minutes), then take the ferry to Aidipsos. Once in Aidipsos, follow signs to your destination.',
                )}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Directions;
