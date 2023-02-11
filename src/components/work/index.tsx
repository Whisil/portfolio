import WorkItem from './workItem';
import workDb from './work.json';

import styles from './styles.module.scss';

const Work = () => {
  return (
    <div className={styles.workContainer}>
      {workDb.map((item, index) => (
        <WorkItem
          key={item.name}
          bgColor={item.bgColor}
          name={item.name}
          type={item.type}
          link={item.link}
          mediaSrc={item.imgSrc}
          index={index + 1}
        />
      ))}
    </div>
  );
};

export default Work;
