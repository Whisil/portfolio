import projectData from './projects.json';

export type MediaAsset = {
  type: 'image' | 'video';
  src?: string;
  poster?: string;
  alt: string;
  caption?: string;
  placeholder?: string;
  width?: number;
  height?: number;
};

export type FlowStep = {
  number: string;
  title: string;
  description: string;
  media: MediaAsset[];
};

export type CaseStudySection =
  | {
      type: 'prose';
      eyebrow?: string;
      title: string;
      paragraphs: string[];
      bullets?: string[];
    }
  | {
      type: 'media';
      eyebrow?: string;
      title: string;
      intro?: string;
      media: MediaAsset[];
    }
  | {
      type: 'flow';
      eyebrow?: string;
      title: string;
      intro?: string;
      steps: FlowStep[];
    }
  | {
      type: 'decisions';
      eyebrow?: string;
      title: string;
      items: { title: string; decision: string; rationale: string }[];
    }
  | {
      type: 'engineering';
      eyebrow?: string;
      title: string;
      intro?: string;
      items: { title: string; description: string }[];
    };

export type Project = {
  slug: string;
  name: string;
  bgColor: string;
  platform: string;
  role: string;
  year: string;
  status: string;
  summary: string;
  hero: MediaAsset;
  stack: string[];
  overview: { title: string; paragraphs: string[] };
  sections: CaseStudySection[];
  outcomes: string[];
};

export const projects: Project[] = projectData.projects as Project[];

export const getProject = (slug?: string) =>
  projects.find((project) => project.slug === slug);
