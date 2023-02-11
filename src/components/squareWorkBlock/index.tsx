import clsx from 'clsx';

import styles from '../squareBlock/styles.module.scss';

interface BlockProps {
  padding: 'md';
  borderRadius: 70 | 75;
  className: string;
  bgColor: string;
  hover: boolean;
  children: React.ReactNode;
  link: string;
  media: string;
  containerClassName: string;
}

const SquareWorkBlock = ({
  padding,
  borderRadius,
  className,
  bgColor,
  hover,
  children,
  link,
  media,
  containerClassName,
}: BlockProps) => {
  return (
    <a className={clsx(hover && styles.hoverEffect)} href={link}>
      <div
        className={clsx(
          styles.transformWrapper,
          styles[`radius-${borderRadius}`],
          styles[`bgColor-${bgColor}`],
          styles[`padding-${padding}`],
          className,
        )}
        // onMouseMove={onMouseMove}
      >
        <div
          className={clsx(
            containerClassName,
            hover && styles.hoverEffectInnerReverse,
          )}
        >
          {children}
        </div>
      </div>
    </a>
  );
};

export default SquareWorkBlock;
