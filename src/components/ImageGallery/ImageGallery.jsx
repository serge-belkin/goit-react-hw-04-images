import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { PropTypes } from 'prop-types';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ images, onImgClick }) => (
  <ul className={css.ImageGallery}>
    {images.map((image, index) => (
      <ImageGalleryItem onClick={onImgClick} image={image} key={index} />
    ))}
  </ul>
);

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
  onImgClick: PropTypes.func.isRequired,
};
