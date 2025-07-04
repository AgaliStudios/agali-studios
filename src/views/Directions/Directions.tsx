import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

function Directions() {
  const { t } = useTranslation();
  return (
    <Container maxWidth="xl">
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          {t('directions.title')}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {t('directions.subtitle')}
        </Typography>
        <Box sx={{ mt: 3 }}>{/* Add more content or components here */}</Box>
      </Paper>
    </Container>
  );
}

export default Directions;
