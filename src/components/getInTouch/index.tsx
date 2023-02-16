import SquareBlock from '../squareBlock';
import linksDb from './links.json';
import Link from './link';
import ContactForm from './contactForm';

import styles from './styles.module.scss';

const GetInTouch = () => {
  return (
    <section className={styles.contact}>
      <SquareBlock borderRadius={70} padding="large" bgColor="darkYellow">
        <h1 className={styles.heading}>Get in touch!</h1>
        <div className={styles.getInTouch}>
          <ContactForm />
          <ul className={styles.links}>
            {linksDb.map((item) => (
              <Link
                key={item.text}
                text={item.text}
                link={item.link}
                icon={item.icon}
              />
            ))}
          </ul>
        </div>
      </SquareBlock>
    </section>
  );
};

export default GetInTouch;
