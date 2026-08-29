import { Link } from 'react-router-dom';
import SquareBlock from '../components/squareBlock';
import styles from './projectPage/styles.module.scss';

const NotFoundPage = () => (
  <main className={styles.page}>
    <div className={styles.topBar}>
      <Link className={styles.backLink} to="/">
        <span aria-hidden="true">←</span> Back to work
      </Link>
    </div>
    <SquareBlock
      borderRadius={70}
      bgColor="darkYellow"
      padding="large"
      className={styles.notFound}
    >
      <p className={styles.eyebrow}>404 / Not found</p>
      <h1>This project does not exist.</h1>
      <Link className={styles.cta} to="/">
        Return home <span aria-hidden="true">↗</span>
      </Link>
    </SquareBlock>
  </main>
);

export default NotFoundPage;
