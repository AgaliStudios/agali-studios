import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

function Reservations() {
  const { t } = useTranslation();
  return (
    <Container maxWidth="xl">
      <Box component="section">
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{ textAlign: 'center', textTransform: 'uppercase' }}
        >
          {t('reservations.title')}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center' }}>
          {t('reservations.subtitle')}
        </Typography>
        <Box sx={{ mt: 3 }}>{/* Add more content or components here */}</Box>
      </Box>
    </Container>
  );
}

export default Reservations;
