import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import { Container, Divider, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/logo-baise.png';

function Footer() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Box component="footer" sx={{ mt: 'auto' }}>
      <Box
        sx={{
          backgroundColor: theme.palette.grey[800],
          color: 'grey.300',
          py: 4,
          px: { xs: 2, md: 10 },
          textAlign: 'left',
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            <Grid
              size={{ xs: 12, sm: 12, md: 3 }}
              sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
              <img src={logo} alt="agali-studios-logo" height={200} />
            </Grid>

            <Grid size={{ xs: 12, sm: 4, md: 3 }} sx={{ color: theme.palette.text.secondary }}>
              <Typography variant="h5" gutterBottom>
                {t('footer.contact')}
              </Typography>
              <Divider sx={{ backgroundColor: theme.palette.secondary.main, mb: 2 }} />
              <Typography variant="body2" sx={{ mb: 1 }}>
                <Link
                  href="tel:+306987045409"
                  underline="hover"
                  color="inherit"
                  sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                >
                  <LocalPhoneIcon />
                  +30 698 704 5409
                </Link>
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <Link
                  href="tel:+306943756551"
                  underline="hover"
                  color="inherit"
                  sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                >
                  <LocalPhoneIcon />
                  +30 694 375 6551
                </Link>
              </Typography>
            </Grid>

            <Grid size={{ xs: 12, sm: 4, md: 3 }} sx={{ color: theme.palette.text.secondary }}>
              <Typography variant="h5" gutterBottom>
                {t('footer.additionalInfo')}
              </Typography>
              <Divider sx={{ backgroundColor: theme.palette.secondary.main, mb: 2 }} />
              <Box sx={{ mb: 2 }}>
                <Link
                  href="https://www.google.com/maps/place/%CE%9B%CE%BF%CF%85%CF%84%CF%81%CE%AC+%CE%91%CE%B9%CE%B4%CE%B7%CF%88%CE%BF%CF%8D+343+00/@38.8606634,23.0357925,15z/data=!3m1!4b1!4m6!3m5!1s0x14a0ca2c713fad9f:0x567121b8a061f1d2!8m2!3d38.8591927!4d23.045529!16s%2Fg%2F121kv_vm?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"
                  underline="hover"
                  color="inherit"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                >
                  <LocationPinIcon sx={{ color: theme.palette.error.main }} />
                  <Typography variant="body2">{t('footer.howToCome')}</Typography>
                </Link>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, sm: 4, md: 3 }} sx={{ color: theme.palette.text.secondary }}>
              <Typography variant="h5" gutterBottom>
                {t('footer.followUs')}
              </Typography>
              <Divider sx={{ backgroundColor: theme.palette.secondary.main, mb: 2 }} />
              <Box sx={{ mb: 2 }}>
                <Link
                  href="#"
                  underline="hover"
                  color="inherit"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                >
                  <FacebookIcon sx={{ color: '#1877F2' }} />
                  <Typography variant="body2">Facebook</Typography>
                </Link>
              </Box>
              <Box sx={{ mb: 2 }}>
                <Link
                  href="#"
                  underline="hover"
                  color="inherit"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
                >
                  <InstagramIcon sx={{ color: theme.palette.text.secondary }} />
                  <Typography variant="body2">Instagram</Typography>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        sx={{
          py: 2,
          px: 3,
          backgroundColor: theme.palette.grey[900],
          textAlign: 'center',
        }}
      >
        <Container maxWidth="xl">
          <Typography variant="body2" color="text.secondary">
            © 2025 {t('footer.title')}
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

export default Footer;
