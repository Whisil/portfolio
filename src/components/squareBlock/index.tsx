import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.scss';

interface SquareBlockProps {
  borderRadius: 70 | 75;
  className?: string;
  mainClassName?: string;
  bgColor?: string;
  children?: React.ReactNode;
  padding: 'large' | 'xl' | 'none';
  hoverEffect?: boolean;
  onMouseMove?: (e: React.MouseEvent) => void;
}

const SquareBlock = ({
  borderRadius,
  bgColor,
  children,
  className,
  mainClassName,
  padding,
  hoverEffect,
  onMouseMove,
}: SquareBlockProps) => {
  return (
    <div className={clsx(mainClassName, hoverEffect && styles.hoverEffect)}>
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
        <div className={clsx(hoverEffect && styles.hoverEffectInner)}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default SquareBlock;
