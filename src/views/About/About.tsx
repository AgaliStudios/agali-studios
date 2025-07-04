import { Box, Grid } from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
  return (
    <Container
      maxWidth="xl"
      sx={{
        py: 3,
      }}
    >
      <Grid container>
        <Grid size={{ xs: 12 }}>
          <Box component="section" sx={{ textAlign: 'center' }}>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{ textTransform: 'uppercase' }}
            >
              {t('about.title')}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
