import SquareBlock from '../squareBlock';
import linksDb from './links.json';
import Link from './link';

import styles from './styles.module.scss';
import ContactForm from './contactForm';

const GetInTouch = () => {
  return (
    <SquareBlock borderRadius={70} padding="large" bgColor="darkYellow">
      <h1 className={styles.heading}>Get in touch!</h1>
      <div className={styles.getInTouch}>
        <ContactForm />
        <ul className={styles.links}>
          {linksDb.map((item) => (
            <Link text={item.text} link={item.link} icon={item.icon} />
          ))}
        </ul>
      </div>
    </SquareBlock>
  );
};

export default GetInTouch;
