import clsx from 'clsx';
import SquareBlock from '../squareBlock';
import styles from './styles.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <SquareBlock
        borderRadius={70}
        bgColor="white"
        className={clsx(styles.name, styles.hoverEffect)}
        padding="large"
      >
        <h2 className={styles.nameText}>
          David
          <br /> Haidamaka
        </h2>
      </SquareBlock>
      <SquareBlock
        borderRadius={70}
        bgColor="yellow"
        className={clsx(styles.location, styles.hoverEffect)}
        padding="large"
      >
        <h2 className={styles.locationText}>
          Based in <br />
          Kyiv,Ukraine
        </h2>
      </SquareBlock>
    </div>
  );
};

export default Header;
