import React, { useRef } from 'react';
import SquareBlock from '../squareBlock';
import styles from './styles.module.scss';

const Header = () => {
  const hiddenNameRef = useRef<HTMLSpanElement>(null);
  const hiddenImageRef = useRef<HTMLImageElement>(null);

  const handleNameHover = (e: React.MouseEvent) => {
    let x = e.clientX;
    let y = e.clientY;

    if (hiddenImageRef.current && hiddenNameRef.current) {
      hiddenImageRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      hiddenNameRef.current.style.setProperty('--x', x - 75 + 'px');
      hiddenNameRef.current.style.setProperty('--y', y - 75 + 'px');
    }
  };

  return (
    <header className={styles.header}>
      <SquareBlock
        borderRadius={70}
        bgColor="white"
        mainClassName={styles.name}
        className={styles.nameInner}
        padding="large"
        hover
        onMouseMove={handleNameHover}
      >
        <h2 className={styles.nameText}>
          David
          <br /> Haidamaka
        </h2>

        <span className={styles.hoverContainer}>
          <span
            className={styles.nameTextHidden}
            aria-hidden="true"
            ref={hiddenNameRef}
          >
            David
            <br /> Haidamaka
          </span>

          <span className={styles.imageContainer}>
            <span className={styles.imageInner}>
              <img
                className={styles.nameImage}
                src="/images/me.jpg"
                alt="Tokyo Tower"
                ref={hiddenImageRef}
                width={250}
                height={250}
              />
            </span>
          </span>
        </span>
      </SquareBlock>
      <SquareBlock
        borderRadius={70}
        bgColor="yellow"
        className={styles.locationPseudo}
        mainClassName={styles.location}
        padding="large"
        hover
      >
        <h2 className={styles.locationText}>
          Based in <br />
          Kyiv,Ukraine
        </h2>
      </SquareBlock>
    </header>
  );
};

export default Header;
