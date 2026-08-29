import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import ProjectPage from './pages/projectPage';
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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work/:slug" element={<ProjectPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
