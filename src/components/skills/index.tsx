import SquareBlock from '../squareBlock';
import Carousel from './carousel';
import CRTText from './crt-text';
import styles from './styles.module.scss';

const Skills = () => {
  return (
    <SquareBlock
      borderRadius={75}
      bgColor="lightBlack"
      padding="none"
      className={styles.tech}
    >
      <div className={styles.runningText}>
        <CRTText text="Front-End" />
        <CRTText text="Developer" changeDirection />
      </div>

      <h2 className={styles.techTitle}>
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
