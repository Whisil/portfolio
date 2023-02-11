import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.scss';

interface SquareBlockProps {
  borderRadius: 70 | 75;
  className?: string;
  mainClassName?: string;
  bgColor?: string;
  children?: React.ReactNode;
  padding: 'md' | 'large' | 'xl' | 'none';
  hover?: boolean;
  onMouseMove?: (e: React.MouseEvent) => void;
  containerClassName?: string;
}

const SquareBlock = ({
  borderRadius,
  bgColor,
  children,
  className,
  mainClassName,
  padding,
  hover,
  onMouseMove,
  containerClassName,
}: SquareBlockProps) => {
  return (
    <div className={clsx(mainClassName, hover && styles.hoverEffect)}>
      <div
        className={clsx(
          styles.transformWrapper,
          styles[`radius-${borderRadius}`],
          styles[`bgColor-${bgColor}`],
          styles[`padding-${padding}`],
          className,
        )}
        onMouseMove={onMouseMove}
      >
        <div
          className={clsx(containerClassName, hover && styles.hoverEffectInner)}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default SquareBlock;
