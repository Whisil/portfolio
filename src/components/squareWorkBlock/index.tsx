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
  const [isStopped, setIsStopped] = useState<boolean>(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState<boolean>(false);

  // const videoRef = useRef<HTMLVideoElement>(null);

  // useEffect(() => {
  //   if (isStopped) {
  //     videoRef.current?.play();
  //   } else {
  //     videoRef.current?.stop();
  //   }
  // }, [isStopped]);

  return (
    <a
      className={clsx(styles.workMain, hover && styles.hoverEffect)}
      href={link}
      onMouseEnter={() => setIsStopped(true)}
      onMouseLeave={() => {
        setIsStopped(false);
        setIsVideoLoaded(true);
      }}
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
        {isStopped && (
          <>
            {media.includes('.mp4') ? (
              <video
                loop
                muted
                autoPlay
                controls={false}
                className={styles.media}
                preload="auto"
                onLoad={() => setIsVideoLoaded(true)}
                style={isVideoLoaded ? { opacity: 0.5 } : { opacity: 0 }}
              >
                <source src={media} type="video/mp4" />
              </video>
            ) : (
              <img
                className={styles.media}
                src={media}
                alt={media.split('/')[3].split('.')[0]}
                height={350}
              />
            )}
          </>
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
