import LanguageIcon from '@mui/icons-material/Language';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';

function Header() {
  const { t, i18n } = useTranslation();

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
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {t('header.myApp')}
        </Typography>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit" component={RouterLink} to="/">
            {t('header.home')}
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
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
