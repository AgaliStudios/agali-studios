import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

export function Accommodation() {
  const { t } = useTranslation();
  return (
    <Container maxWidth="xl">
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          {t('accommodation.title')}
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          {t('accommodation.subtitle')}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {t('accommodation.text')}
        </Typography>
      </Paper>
    </Container>
  );
}

export default Accommodation;
