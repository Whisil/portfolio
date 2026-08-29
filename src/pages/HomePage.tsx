import Footer from '../components/footer';
import GetInTouch from '../components/getInTouch';
import Header from '../components/header';
import Skills from '../components/skills';
import Work from '../components/work';
import styles from '../styles/app.module.scss';

const HomePage = () => (
  <div className={styles.container}>
    <Header />
    <Skills />
    <Work />
    <GetInTouch />
    <Footer />
  </div>
);

export default HomePage;
