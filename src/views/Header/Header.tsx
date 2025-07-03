import LanguageIcon from '@mui/icons-material/Language';
import { Container, Grid, useTheme } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';

function Header() {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (lang?: string) => {
    setAnchorEl(null);
    if (lang) i18n.changeLanguage(lang);
  };

  return (
    <AppBar position="static" color="primary" elevation={1}>
      {/* First Toolbar */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          backgroundColor: theme.palette.primary.dark,
        }}
      >
        <Container maxWidth="lg" sx={{ display: 'flex', gap: 2 }}>
          <Grid container sx={{ width: 1, height: 1 }}>
            <Grid sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, width: 1, height: 1 }}>
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
                <MenuItem onClick={() => handleMenuClose('en')}>English</MenuItem>
                <MenuItem onClick={() => handleMenuClose('de')}>Deutsch</MenuItem>
              </Menu>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Second Toolbar */}
      <Container maxWidth="lg">
        <Toolbar
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1rem' }}
        >
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button color="inherit" component={RouterLink} to="/">
              {t('header.home')}
            </Button>
            <Button color="inherit" component={RouterLink} to="/accommodation">
              {t('header.accommodation')}
            </Button>

            <Box
              sx={{ cursor: 'pointer' }}
              onClick={() => {
                navigate('/');
              }}
            >
              <img src={logo} alt="agali-studios-logo" height={80} />
            </Box>

            <Button color="inherit" component={RouterLink} to="/location">
              {t('header.location')}
            </Button>
            <Button color="inherit" component={RouterLink} to="/directions">
              {t('header.directions')}
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
