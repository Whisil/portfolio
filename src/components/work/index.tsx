import WorkItem from './workItem';
import { projects } from '../../data/projects';

import styles from './styles.module.scss';

const Work = () => {
  return (
    <section className={styles.workContainer}>
      {projects.map((item, index) => (
        <WorkItem
          key={item.slug}
          bgColor={item.bgColor}
          name={item.name}
          type="showcase"
          link={`/work/${item.slug}`}
          mediaSrc={item.hero.src || ''}
          index={index + 1}
        />
      ))}
    </section>
  );
};

export default Work;
