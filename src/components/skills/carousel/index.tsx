import clsx from 'clsx';
import imageDb from './skills.json';

import styles from './styles.module.scss';

const CarouselItem = () => {
  return (
    <>
      {imageDb.map(({ src, alt }) => (
        <span className={styles.carouselItem} key={alt}>
          <img src={src} alt={alt} />
        </span>
      ))}
    </>
  );
};

const Carousel = ({ reverse }: { reverse?: boolean }) => {
  return (
    <div className={clsx(styles.carousel, reverse && styles.reverse)}>
      <div className={styles.carouselTrack}>
        <CarouselItem />
        <CarouselItem />
      </div>
    </div>
  );
};

export default Carousel;
