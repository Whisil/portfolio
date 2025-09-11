import styles from './styles.module.scss';

const Footer = () => {
  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <a
        href="https://drive.google.com/file/d/1HpnD4hkVgJPFF6CetSlMmRNd5It3pHk8/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
        className={styles.resumeBtn}
      >
        <img
          src="/images/icons/resume.svg"
          width={32}
          height={32}
          alt="resume"
        />
      </a>

      <div className={styles.jobStatus}>
        <span className={styles.jobStatusDot} />
        {/* <span className={styles.jobStatusText}>Passive job search</span> */}
        <span className={styles.jobStatusText}>Active job search</span>
      </div>

      <span className={styles.upArrow} onClick={handleScrollUp}>
        <img
          src="/images/icons/up-arrow.svg"
          alt="Go up"
          width={72}
          height={72}
        />
      </span>
    </footer>
  );
};

export default Footer;
