import Header from './components/header';
import Skills from './components/skills';
import Work from './components/work';
import styles from './styles/app.module.scss';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Skills />
      <Work />
    </div>
  );
}

export default App;
