import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import lixadonisia from '../../assets/locations/lixadonisia.jpg';
import milosbeach from '../../assets/locations/milosbeach.jpg';
import springs from '../../assets/locations/springs.jpg';
import view from '../../assets/locations/view.jpg';

const LocationCards = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const { t } = useTranslation();

  const locations = [
    {
      location: t('home.cardTitle1'),
      image: lixadonisia,
      desc: t('home.cardSubtitle1'),
    },
    {
      location: t('home.cardTitle2'),
      image: milosbeach,
      desc: t('home.cardSubtitle2'),
    },
    {
      location: t('home.cardTitle3'),
      image: springs,
      desc: t('home.cardSubtitle3'),
    },
    {
      location: t('home.cardTitle4'),
      image: view,
      desc: t('home.cardSubtitle4'),
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <Box sx={{ px: { xs: 2, sm: 4 }, py: 4 }}>
      <Grid container spacing={2}>
        {locations.map((day, index) => {
          const isHovered = hoveredIndex === index;

          return (
            <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={index}>
              <Card
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={() => isDesktop && setHoveredIndex(index)}
                onMouseLeave={() => isDesktop && setHoveredIndex(null)}
              >
                <CardMedia component="img" height="300" image={day.image} alt={day.location} />
                <CardContent
                  sx={{
                    position: 'absolute',
                    width: 1,
                    bottom: 0,
                    bgcolor: '#333',
                    color: 'white',
                    p: 2,
                    transform: isDesktop
                      ? isHovered
                        ? 'translateY(0)'
                        : 'translateY(calc(100% - 3rem))'
                      : 'translateY(0)',
                    transition: 'transform 0.5s ease',
                    pointerEvents: isDesktop ? (isHovered ? 'auto' : 'none') : 'auto',
                    // transform: isHovered ? 'translateY(0)' : 'translateY(calc(100% - 3rem))',
                    // transition: 'transform 0.5s ease',
                    // pointerEvents: isHovered ? 'auto' : 'none',
                  }}
                >
                  <Typography variant="h6" gutterBottom>
                    {day.location}
                  </Typography>
                  <Typography variant="body2" sx={{ lineHeight: 1.5, fontWeight: 300 }}>
                    {day.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default LocationCards;
