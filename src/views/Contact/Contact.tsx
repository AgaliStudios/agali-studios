import { Container, Grid, Link } from '@mui/material';
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
        <Grid size={{ xs: 12 }} sx={{ px: { xs: 3, sm: 6 } }}>
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
                <Link href="tel:+306987045409" underline="hover" color="inherit">
                  +30 698 704 5409
                </Link>
                <br />
                <Link href="tel:+306943756551" underline="hover" color="inherit">
                  +30 694 375 6551
                </Link>
              </Typography>
              <Typography variant="body1" sx={{ textAlign: 'center' }}>
                ✉️ <strong>{t('contact.email')}</strong>
                <br />
                <Link href="mailto:agkali.studios.1@gmail.com" underline="hover" color="inherit">
                  agkali.studios.1@gmail.com
                </Link>
              </Typography>
              <Typography variant="body1" sx={{ textAlign: 'center' }}>
                📍 <strong>{t('contact.location')}</strong>
                <br />
                <Link
                  href="https://www.google.com/maps/place/%CE%9B%CE%BF%CF%85%CF%84%CF%81%CE%AC+%CE%91%CE%B9%CE%B4%CE%B7%CF%88%CE%BF%CF%8D+343+00/@38.8606634,23.0357925,15z/data=!3m1!4b1!4m6!3m5!1s0x14a0ca2c713fad9f:0x567121b8a061f1d2!8m2!3d38.8591927!4d23.045529!16s%2Fg%2F121kv_vm?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"
                  underline="hover"
                  color="inherit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('contact.locationDetails')}
                </Link>
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
