// src/pages/Contact.tsx
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();
  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          {t('contact.title')}
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          {t('contact.subtitle')}
        </Typography>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          <TextField label="Name" variant="outlined" required fullWidth />
          <TextField label="Email" type="email" variant="outlined" required fullWidth />
          <TextField label="Message" variant="outlined" multiline rows={4} required fullWidth />
          <Button variant="contained" color="primary" type="submit">
            {t('contact.send')}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
