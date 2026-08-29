import type { CaseStudySection, MediaAsset } from '../../data/projects';
import MediaFrame from './MediaFrame';
import styles from './styles.module.scss';

type ProjectSectionsProps = {
  sections: CaseStudySection[];
  onOpenMedia: (asset: MediaAsset) => void;
};

const ProjectSections = ({ sections, onOpenMedia }: ProjectSectionsProps) => (
  <div className={styles.sections}>
    {sections.map((section, index) => {
      if (section.type === 'prose') {
        return (
          <section
            className={styles.proseSection}
            key={`${section.title}-${index}`}
          >
            {section.eyebrow && (
              <p className={styles.eyebrow}>{section.eyebrow}</p>
            )}
            <h2>{section.title}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.bullets && (
              <ul>
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}
          </section>
        );
      }

      if (section.type === 'media') {
        return (
          <section
            className={styles.mediaSection}
            key={`${section.title}-${index}`}
          >
            {section.eyebrow && (
              <p className={styles.eyebrow}>{section.eyebrow}</p>
            )}
            <h2>{section.title}</h2>
            {section.intro && (
              <p className={styles.sectionIntro}>{section.intro}</p>
            )}
            <div className={styles.mediaGrid}>
              {section.media.map((asset, mediaIndex) => (
                <MediaFrame
                  key={`${asset.alt}-${mediaIndex}`}
                  asset={asset}
                  onOpen={onOpenMedia}
                />
              ))}
            </div>
          </section>
        );
      }

      if (section.type === 'flow') {
        return (
          <section
            className={styles.flowSection}
            key={`${section.title}-${index}`}
          >
            {section.eyebrow && (
              <p className={styles.eyebrow}>{section.eyebrow}</p>
            )}
            <h2>{section.title}</h2>
            {section.intro && (
              <p className={styles.sectionIntro}>{section.intro}</p>
            )}
            <div className={styles.flowList}>
              {section.steps.map((step) => (
                <article className={styles.flowStep} key={step.number}>
                  <div className={styles.stepCopy}>
                    <span className={styles.stepNumber}>{step.number}</span>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                  <div className={styles.stepMedia}>
                    {step.media.map((asset, mediaIndex) => (
                      <MediaFrame
                        key={`${asset.alt}-${mediaIndex}`}
                        asset={asset}
                        onOpen={onOpenMedia}
                      />
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>
        );
      }

      if (section.type === 'decisions') {
        return (
          <section
            className={styles.cardSection}
            key={`${section.title}-${index}`}
          >
            {section.eyebrow && (
              <p className={styles.eyebrow}>{section.eyebrow}</p>
            )}
            <h2>{section.title}</h2>
            <div className={styles.detailCards}>
              {section.items.map((item) => (
                <article className={styles.detailCard} key={item.title}>
                  <h3>{item.title}</h3>
                  <strong>{item.decision}</strong>
                  <p>{item.rationale}</p>
                </article>
              ))}
            </div>
          </section>
        );
      }

      return (
        <section
          className={styles.cardSection}
          key={`${section.title}-${index}`}
        >
          {section.eyebrow && (
            <p className={styles.eyebrow}>{section.eyebrow}</p>
          )}
          <h2>{section.title}</h2>
          {section.intro && (
            <p className={styles.sectionIntro}>{section.intro}</p>
          )}
          <div className={styles.detailCards}>
            {section.items.map((item) => (
              <article className={styles.detailCard} key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>
      );
    })}
  </div>
);

export default ProjectSections;
