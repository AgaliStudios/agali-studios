// ImageGallery.tsx
import { Box } from '@mui/material';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const ImageCarousel = () => {
  const images = [
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80',
  ];
  const galleryItems = images.map((url) => ({
    original: url,
    thumbnail: url,
  }));

  return (
    <Box sx={{ width: '100%', height: 'auto', maxHeight: '60vh', mx: 'auto' }}>
      <ImageGallery
        items={galleryItems}
        autoPlay
        slideInterval={4000}
        infinite
        showPlayButton={false}
        showFullscreenButton={false}
        showThumbnails={false}
        showNav={true}
        showBullets={true}
        renderItem={(item) => (
          <img
            src={item.original}
            alt=""
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: '60vh',
              objectFit: 'cover',
            }}
          />
        )}
      />
    </Box>
  );
};

export default ImageCarousel;
