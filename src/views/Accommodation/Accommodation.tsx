import { Box } from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

export function Accommodation() {
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
          {t('accommodation.title')}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center' }}>
          {t('accommodation.subtitle')}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center' }}>
          {t('accommodation.text')}
        </Typography>
      </Box>
    </Container>
  );
}

export default Accommodation;
