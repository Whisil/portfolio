import SquareBlock from '../squareBlock';
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
        <CRTText text="Developer" />
      </div>
    </SquareBlock>
  );
};

export default Skills;
