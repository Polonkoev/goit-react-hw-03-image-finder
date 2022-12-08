import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from '../ImageGallery/ImageGallery.module.css';
export const ImageGallery = ({ data , openModal}) => {
  return (
    <ul className={css.imageGallery}>
      <ImageGalleryItem data={data} openModal={openModal} />
    </ul>
  );
};
