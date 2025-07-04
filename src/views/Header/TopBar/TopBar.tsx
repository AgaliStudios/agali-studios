import LanguageIcon from '@mui/icons-material/Language';
import { Box, Button, Container, Grid, IconButton, Menu, MenuItem, useTheme } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';
import enFlag from '../../../assets/flags/gb.svg';
import grFlag from '../../../assets/flags/gr.svg';
import roFlag from '../../../assets/flags/ro.svg';
import rsFlag from '../../../assets/flags/rs.svg';

function TopBar() {
  const { t, i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (lang?: string) => {
    setAnchorEl(null);
    if (lang) {
      i18n.changeLanguage(lang);
    }
  };

  const languages = [
    { code: 'en', label: 'EN', flag: enFlag },
    { code: 'gr', label: 'GR', flag: grFlag },
    { code: 'ro', label: 'RO', flag: roFlag },
    { code: 'rs', label: 'RS', flag: rsFlag },
  ];

  return (
    <Box
      sx={{
        display: { xs: 'none', md: 'flex' },
        bgcolor: theme.palette.secondary.light,
        color: 'white',
        py: 1,
      }}
    >
      <Container maxWidth="xl">
        <Grid container justifyContent="flex-end" spacing={2}>
          <Button color="inherit" component={RouterLink} to="/reservations">
            {t('header.reservations')}
          </Button>

          <Button color="inherit" component={RouterLink} to="/about">
            {t('header.about')}
          </Button>

          <Button color="inherit" component={RouterLink} to="/contact">
            {t('header.contact')}
          </Button>

          <IconButton color="inherit" onClick={handleMenuOpen}>
            <LanguageIcon />
          </IconButton>
          <Menu anchorEl={anchorEl} open={open} onClose={() => handleMenuClose()}>
            {languages.map(({ code, label, flag }) => (
              <MenuItem
                key={code}
                onClick={() => handleMenuClose(code)}
                style={{ display: 'flex', alignItems: 'center', gap: 8 }}
              >
                <img
                  src={flag}
                  alt={`${label} flag`}
                  style={{ width: 20, height: 14, objectFit: 'cover' }}
                />
                {label}
              </MenuItem>
            ))}
          </Menu>
        </Grid>
      </Container>
    </Box>
  );
}

export default TopBar;
