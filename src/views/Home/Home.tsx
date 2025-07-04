import { Container, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();

  return (
    <Grid container>
      <Container
        maxWidth="xl"
        sx={{
          py: 3,
          display: 'flex',
        }}
      >
        <Grid size={{ xs: 12 }}>
          <Box component="section">
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{ textAlign: 'center', textTransform: 'uppercase' }}
            >
              {t('home.title')}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Typography variant="body1" sx={{ textAlign: 'center' }}>
                {t('home.text1')}
              </Typography>
              <Typography variant="body1" sx={{ textAlign: 'center' }}>
                {t('home.text2')}
              </Typography>
              <Typography variant="body1" sx={{ textAlign: 'center' }}>
                {t('home.text3')}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Container>
    </Grid>
  );
}
