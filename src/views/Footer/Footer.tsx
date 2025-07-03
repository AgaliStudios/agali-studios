// src/components/Footer.tsx
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 3,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
        textAlign: 'center',
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © {2025} {t('footer.title')}
      </Typography>
    </Box>
  );
}

export default Footer;
