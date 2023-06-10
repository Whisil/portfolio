import { useEffect, useState } from 'react';
import Footer from './components/footer';
import GetInTouch from './components/getInTouch';
import Header from './components/header';
import Skills from './components/skills';
import Work from './components/work';
import styles from './styles/app.module.scss';

function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    // Check if fonts are already loaded
    document.body.classList.add(styles.noScroll);

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        setFontsLoaded(true);
      });
      document.body.classList.remove(styles.noScroll);
    }
  }, []);

  console.log(fontsLoaded);
  // make this loader, create a separate component for it, and useEffect(() => {
  //   return () => {
  //     setIsVisible(false); // Trigger the unmount animation when the component is about to unmount
  //   };
  // }, []);

  // {showAnimation && <UnmountAnimation />}

  // return (
  //   <div className={`unmount-animation ${isVisible ? 'visible' : 'hidden'}`}>
  //     {/* Content of the component */}
  //   </div>
  // );

  return (
    <>
      {!fontsLoaded && <div className={styles.loader} />}
      <div className={styles.container}>
        <Header />
        <Skills />
        <Work />
        <GetInTouch />
        <Footer />
      </div>
    </>
  );
}

export default App;
