import clsx from 'clsx';
import { useEffect, useRef } from 'react';
import SquareBlock from '../squareBlock';
import Carousel from './carousel';
import styles from './styles.module.scss';

const Skills = () => {
  const textRef = useRef<HTMLHeadingElement>(null);
  const textSecRef = useRef<HTMLHeadingElement>(null);

  const handleScroll = () => {
    let firstLineSpeed = window.innerWidth > 550 ? 0.25 : 0.15;
    let secondLineSpeed = window.innerWidth > 550 ? 0.4 : 0.17;

    if (textRef && textRef.current && textSecRef && textSecRef.current) {
      textRef.current.style.transform = `translate3d(${
        window.scrollY * firstLineSpeed
      }px, 0, 0)`;
      textSecRef.current.style.transform = `translate3d(-${
        window.scrollY * secondLineSpeed
      }px, 0, 0)`;
    }
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
      mainClassName={styles.techContainer}
    >
      <div className={styles.heading}>
        <h1 ref={textRef} className={styles.crtText}>
          Front-End
        </h1>
        <h1 ref={textSecRef} className={styles.crtText}>
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
