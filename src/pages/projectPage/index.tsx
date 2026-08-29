import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from '../../components/footer';
import GetInTouch from '../../components/getInTouch';
import SquareBlock from '../../components/squareBlock';
import { getProject, projects, type MediaAsset } from '../../data/projects';
import Lightbox from './Lightbox';
import ProjectSections from './ProjectSections';
import styles from './styles.module.scss';

const ProjectPage = () => {
  const { slug } = useParams();
  const project = getProject(slug);
  const [lightboxAsset, setLightboxAsset] = useState<MediaAsset>();
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    if (project) {
      document.title = `${project.name} — David Haidamaka`;
      const description = document.querySelector('meta[name="description"]');
      description?.setAttribute('content', project.summary);
    }
  }, [project]);

  if (!project) {
    return (
      <main className={styles.page}>
        <div className={styles.topBar}>
          <Link className={styles.backLink} to="/">
            <span aria-hidden="true">←</span> Back to work
          </Link>
        </div>
        <SquareBlock
          borderRadius={70}
          bgColor="darkYellow"
          padding="large"
          className={styles.notFound}
        >
          <p className={styles.eyebrow}>404 / Not found</p>
          <h1>This project does not exist.</h1>
          <Link className={styles.cta} to="/">
            Return home <span aria-hidden="true">↗</span>
          </Link>
        </SquareBlock>
      </main>
    );
  }

  const projectIndex = projects.findIndex((item) => item.slug === project.slug);
  const relatedProjects = [
    projects[(projectIndex + 1) % projects.length],
    projects[(projectIndex + 2) % projects.length],
  ];

  return (
    <div className={styles.page}>
      <div className={styles.topBar}>
        <Link className={styles.backLink} to="/">
          <span aria-hidden="true">←</span> Back to work
        </Link>
        <span className={styles.pageLabel}>Case study / {project.name}</span>
      </div>

      <main>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>
              Project case study / {project.platform}
            </p>
            <h1>{project.name}</h1>
            <p className={styles.summary}>{project.summary}</p>
            <div className={styles.meta}>
              <span>
                <b>Role</b>
                {project.role}
              </span>
              {/* <span>
                <b>Status</b>
                {project.status}
              </span> */}
              <span>
                <b>Year</b>
                {project.year}
              </span>
            </div>
          </div>
          <SquareBlock
            borderRadius={70}
            bgColor={project.bgColor}
            padding="none"
            className={clsx(styles.heroMedia, heroLoaded && styles.heroLoaded)}
          >
            <img
              src={project.hero.src}
              alt={project.hero.alt}
              width={project.hero.width}
              height={project.hero.height}
              decoding="async"
              onLoad={() => setHeroLoaded(true)}
            />
          </SquareBlock>
        </section>

        <section className={styles.overview}>
          <div>
            <p className={styles.eyebrow}>01 / Overview</p>
            <h2>{project.overview.title}</h2>
          </div>
          <div className={styles.overviewCopy}>
            {project.overview.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <ProjectSections
          sections={project.sections}
          onOpenMedia={setLightboxAsset}
        />

        <section className={styles.stackSection}>
          <p className={styles.eyebrow}>05 / Technology</p>
          <h2>Built with intention</h2>
          <div className={styles.stackList}>
            {project.stack.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </section>

        <section className={styles.outcomes}>
          <p className={styles.eyebrow}>06 / Outcomes</p>
          <h2>What came out of it</h2>
          <ul>
            {project.outcomes.map((outcome) => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>
        </section>

        <nav className={styles.related} aria-label="Related projects">
          <p className={styles.eyebrow}>07 / Keep exploring</p>
          {relatedProjects.map((related) => (
            <Link
              to={`/work/${related.slug}`}
              className={styles.relatedLink}
              key={related.slug}
            >
              <span>{related.name}</span>
              <span aria-hidden="true">↗</span>
            </Link>
          ))}
        </nav>
      </main>

      <div className={styles.pageFooter}>
        <GetInTouch />
        <Footer />
      </div>
      {lightboxAsset && (
        <Lightbox
          asset={lightboxAsset}
          onClose={() => setLightboxAsset(undefined)}
        />
      )}
    </div>
  );
};

export default ProjectPage;
