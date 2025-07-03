// src/pages/Home.tsx
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          {t('home.title')}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {t('home.subtitle')}
        </Typography>
        <Box sx={{ mt: 3 }}>{/* Add more content or components here */}</Box>
      </Paper>
    </Container>
  );
}
