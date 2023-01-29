import clsx from 'clsx';
import styles from './styles.module.scss';

interface SquareBlockProps {
  borderRadius: 70 | 75;
  className?: string;
  bgColor?: string;
  children?: React.ReactNode;
  padding: 'large' | 'xl' | 'none';
}

const SquareBlock = ({
  borderRadius,
  bgColor,
  children,
  className,
  padding,
}: SquareBlockProps) => {
  return (
    <div
      className={clsx(
        styles.block,
        styles[`radius-${borderRadius}`],
        styles[`bgColor-${bgColor}`],
        styles[`padding-${padding}`],
        className,
      )}
    >
      {children}
    </div>
  );
};

export default SquareBlock;
