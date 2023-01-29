import styles from './styles.module.scss';

const CRTText = ({ text }: { text: string }) => {
  return (
    <div className={styles.crt}>
      <h1 className={styles.glitch}>{text}</h1>
      <h1>{text}</h1>
    </div>
  );
};

export default CRTText;
