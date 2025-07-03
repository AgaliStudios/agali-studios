import LanguageIcon from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { TopBar } from './TopBar/TopBar';

function Header() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };
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

  const pages = [
    { name: t('header.home'), link: '/' },
    { name: t('header.accommodation'), link: '/accommodation' },
    { name: t('header.location'), link: '/location' },
    { name: t('header.directions'), link: '/directions' },
    { name: t('header.reservations'), link: '/reservations' },
    { name: t('header.about'), link: '/about' },
    { name: t('header.contact'), link: '/contact' },
  ];

  const renderDesktopNav = (
    <Box
      sx={{
        display: { xs: 'none', md: 'flex' },
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2,
        width: 1,
      }}
    >
      {pages.slice(0, 2).map((page) => (
        <Button key={page.link} color="inherit" component={RouterLink} to={page.link}>
          {page.name}
        </Button>
      ))}

      <Box sx={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
        <img src={logo} alt="agali-studios-logo" height={80} />
      </Box>

      {pages.slice(2, 4).map((page) => (
        <Button key={page.link} color="inherit" component={RouterLink} to={page.link}>
          {page.name}
        </Button>
      ))}
    </Box>
  );

  const renderMobileNav = (
    <Box
      sx={{
        display: { xs: 'flex', md: 'none' },
        width: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: 'relative',
        padding: '1rem 0',
      }}
    >
      {/* Hamburger Menu (Left) */}
      <IconButton color="inherit" edge="start" onClick={handleDrawerToggle} sx={{ zIndex: 2 }}>
        <MenuIcon />
      </IconButton>

      {/* Centered Logo */}
      <Box
        sx={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          cursor: 'pointer',
        }}
        onClick={() => navigate('/')}
      >
        <img src={logo} alt="agali-studios-logo" height={60} />
      </Box>

      {/* Drawer */}
      <Drawer
        anchor="left"
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { width: 240 },
        }}
      >
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ my: 2 }}>
            {t('header.myApp')}
          </Typography>
          <Divider />
          <List>
            {pages.map((page) => (
              <ListItem
                key={page.link}
                disablePadding
                onClick={() => {
                  navigate(page.link);
                  handleDrawerToggle();
                }}
              >
                <ListItemButton sx={{ textAlign: 'center' }}>
                  <ListItemText primary={page.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <IconButton color="inherit" onClick={handleMenuOpen}>
            <LanguageIcon />
          </IconButton>
          <Menu anchorEl={anchorEl} open={open} onClose={() => handleMenuClose()}>
            <MenuItem onClick={() => handleMenuClose('en')}>English</MenuItem>
            <MenuItem onClick={() => handleMenuClose('de')}>Deutsch</MenuItem>
          </Menu>
        </Box>
      </Drawer>
    </Box>
  );

  return (
    <>
      <TopBar />
      <AppBar
        position="sticky"
        elevation={1}
        sx={{
          top: 0,
          zIndex: (theme) => theme.zIndex.appBar,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ py: 2 }}>
            {renderDesktopNav}
            {renderMobileNav}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default Header;
