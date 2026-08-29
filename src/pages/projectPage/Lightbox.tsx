import { useEffect } from 'react';
import type { MediaAsset } from '../../data/projects';
import styles from './styles.module.scss';

type LightboxProps = { asset: MediaAsset; onClose: () => void };

const Lightbox = ({ asset, onClose }: LightboxProps) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!asset.src) return null;

  return (
    <div
      className={styles.lightbox}
      role="dialog"
      aria-modal="true"
      aria-label={asset.alt}
    >
      <button
        className={styles.lightboxBackdrop}
        type="button"
        onClick={onClose}
        aria-label="Close image"
      />
      <div className={styles.lightboxContent}>
        <button
          className={styles.closeButton}
          type="button"
          onClick={onClose}
          autoFocus
        >
          Close <span aria-hidden="true">×</span>
        </button>
        <img src={asset.src} alt={asset.alt} />
        {asset.caption && <p>{asset.caption}</p>}
      </div>
    </div>
  );
};

export default Lightbox;
