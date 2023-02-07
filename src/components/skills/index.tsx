import clsx from 'clsx';
import SquareBlock from '../squareBlock';
import Carousel from './carousel';
import styles from './styles.module.scss';

const Skills = () => {
  return (
    <SquareBlock
      borderRadius={75}
      bgColor="lightBlack"
      padding="none"
      className={styles.tech}
    >
      <div className={styles.heading}>
        <h1 className={styles.crtText}>Front-End</h1>
        <h1 className={styles.crtText}>Developer</h1>
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
