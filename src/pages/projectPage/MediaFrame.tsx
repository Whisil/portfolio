import clsx from 'clsx';
import { useState } from 'react';
import type { MediaAsset } from '../../data/projects';
import styles from './styles.module.scss';

type MediaFrameProps = {
  asset: MediaAsset;
  onOpen?: (asset: MediaAsset) => void;
};

const MediaFrame = ({ asset, onOpen }: MediaFrameProps) => {
  const [failed, setFailed] = useState(false);
  const [isPortrait, setIsPortrait] = useState(false);
  const isPlaceholder = Boolean(asset.placeholder) || !asset.src || failed;

  return (
    <figure className={clsx(styles.mediaFrame, isPortrait && styles.portrait)}>
      {isPlaceholder ? (
        <div className={styles.mediaPlaceholder}>
          <span className={styles.placeholderIcon} aria-hidden="true">
            +
          </span>
          <p>{asset.placeholder || 'Media unavailable'}</p>
        </div>
      ) : asset.type === 'video' ? (
        <video
          className={styles.media}
          controls
          muted
          playsInline
          preload="metadata"
          poster={asset.poster}
          onError={() => setFailed(true)}
        >
          <source src={asset.src} type="video/mp4" />
        </video>
      ) : (
        <button
          className={styles.mediaButton}
          type="button"
          onClick={() => onOpen?.(asset)}
          aria-label={`Enlarge ${asset.alt}`}
        >
          <img
            className={styles.media}
            src={asset.src}
            alt={asset.alt}
            loading="lazy"
            onLoad={(event) =>
              setIsPortrait(
                event.currentTarget.naturalHeight >
                  event.currentTarget.naturalWidth,
              )
            }
            onError={() => setFailed(true)}
          />
        </button>
      )}
      {asset.caption && <figcaption>{asset.caption}</figcaption>}
    </figure>
  );
};

export default MediaFrame;
