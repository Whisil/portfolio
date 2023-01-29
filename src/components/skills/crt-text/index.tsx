import clsx from 'clsx';
import styles from './styles.module.scss';

const CRTText = ({
  text,
  changeDirection,
}: {
  text: string;
  changeDirection?: boolean;
}) => {
  return (
    <div
      className={clsx(styles.crt, changeDirection && styles.changeDirection)}
    >
      <h1>{text}</h1>
      <h1>{text}</h1>
    </div>
  );
};

export default CRTText;
