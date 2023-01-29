import Header from './components/header';
import Skills from './components/skills';
import styles from './styles/app.module.scss';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Skills />
    </div>
  );
}

export default App;
