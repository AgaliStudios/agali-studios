import LanguageIcon from '@mui/icons-material/Language';
import { Box, Button, Container, Grid, IconButton, Menu, MenuItem } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';

export function TopBar() {
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (lang?: string) => {
    setAnchorEl(null);
    if (lang) {
      // i18n.changeLanguage(lang);
    }
  };

  return (
    <Box
      sx={{ display: { xs: 'none', md: 'flex' }, bgcolor: 'primary.dark', color: 'white', py: 1 }}
    >
      <Container maxWidth="lg">
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
            <MenuItem onClick={() => handleMenuClose('en')}>English</MenuItem>
            <MenuItem onClick={() => handleMenuClose('de')}>Deutsch</MenuItem>
          </Menu>
        </Grid>
      </Container>
    </Box>
  );
}
