import clsx from 'clsx';
import { useEffect, useState } from 'react';
import SquareBlock from '../squareBlock';
import Carousel from './carousel';
import styles from './styles.module.scss';

const Skills = () => {
  const [scroll, setScroll] = useState(window.scrollY);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <SquareBlock
      borderRadius={75}
      bgColor="lightBlack"
      padding="none"
      className={styles.tech}
    >
      <div className={styles.heading}>
        <h1
          className={styles.crtText}
          style={{ transform: `translateX(${scroll * 0.22}px)` }}
        >
          Front-End
        </h1>
        <h1
          className={styles.crtText}
          style={{ transform: `translateX(-${scroll * 0.22}px)` }}
        >
          Developer
        </h1>
      </div>

      <h2 className={clsx(styles.techTitle, styles.crtText)}>
        There's a lot to learn <br />
        but here's what I know
      </h2>

      <div className={styles.carouselContainer}>
        <Carousel />
        <Carousel reverse />
      </div>
    </SquareBlock>
  );
};

export default Skills;
