import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';

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
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isPlaying) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  }, [isPlaying]);

  return (
    <a
      className={clsx(styles.workMain, hover && styles.hoverEffect)}
      href={link}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setIsPlaying(true)}
      onMouseLeave={() => setIsPlaying(false)}
    >
      <div
        className={clsx(
          styles.transformWrapper,
          styles[`radius-${borderRadius}`],
          styles[`bgColor-${bgColor}`],
          styles[`padding-${padding}`],
          className,
        )}
      >
        {media.includes('.mp4') ? (
          <video
            loop
            muted
            autoPlay
            controls={false}
            className={styles.media}
            preload="auto"
            style={
              isPlaying
                ? { visibility: 'visible', opacity: 0.6 }
                : { opacity: 0 }
            }
            ref={videoRef}
          >
            <source src={media} type="video/mp4" />
          </video>
        ) : (
          <img
            className={styles.media}
            src={media}
            alt={media.split('/')[3].split('.')[0]}
            height={350}
            style={
              isPlaying
                ? { visibility: 'visible', opacity: 0.6 }
                : { opacity: 0 }
            }
          />
        )}

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
