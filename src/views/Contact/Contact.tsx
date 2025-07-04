import { Container, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Trans, useTranslation } from 'react-i18next';

export default function Contact() {
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
              {t('contact.title')}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Typography variant="body1" sx={{ textAlign: 'center' }}>
                {t('contact.haveQuestions')}
              </Typography>
              <Typography variant="body1" sx={{ textAlign: 'center' }}>
                <Trans i18nKey="contact.onYourService" components={{ strong: <strong /> }} />
              </Typography>
              <Typography variant="body1" sx={{ textAlign: 'center' }}>
                📞 <strong>{t('contact.contactPhone')}</strong>
                <br />
                +30 698 704 5409
                <br />
                +30 694 375 6551
              </Typography>
              <Typography variant="body1" sx={{ textAlign: 'center' }}>
                📍 <strong>{t('contact.location')}</strong>
                <br />
                {t('contact.locationDetails')}
              </Typography>
              <Typography variant="body1" sx={{ textAlign: 'center' }}>
                {t('contact.happyToHelp')}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Container>
    </Grid>
  );
}
