import SquareBlock from '../squareBlock';
import linksDb from './links.json';
import Link from './link';

import styles from './styles.module.scss';
import ContactForm from './contactForm';

const GetInTouch = () => {
  return (
    <SquareBlock
      containerClassName={styles.getInTouch}
      borderRadius={70}
      padding="large"
      bgColor="darkYellow"
    >
      <div>
        <h1 className={styles.heading}>Get in touch.</h1>
        <ul>
          {linksDb.map((item) => (
            <Link text={item.text} link={item.link} icon={item.icon} />
          ))}
        </ul>
      </div>
      <ContactForm />
    </SquareBlock>
  );
};

export default GetInTouch;
