import clsx from 'clsx';
import ReactDOM from 'react-dom';

import styles from './styles.module.scss';

const Snackbar = ({ type }: { type?: 'Error' }) => {
  return ReactDOM.createPortal(
    <div className={clsx(styles.snackbar, type === 'Error' && styles.error)}>
      {type === 'Error' ? (
        <>
          <span className={styles.snackbarInner}>
            <img
              src="/images/icons/error.svg"
              width={32}
              height={32}
              alt="error"
            />
            Error, send your email here:
          </span>
          <a
            href="mailto:electromandarin@gmail.com"
            className={styles.errorEmail}
          >
            electromandarin@gmail.com
          </a>
        </>
      ) : (
        <span className={styles.snackbarInner}>
          <img
            src="/images/icons/success.svg"
            width={32}
            height={32}
            alt="success"
          />
          Your email was sent :)
        </span>
      )}
    </div>,
    document.querySelector('body') as HTMLElement,
  );
};

export default Snackbar;
