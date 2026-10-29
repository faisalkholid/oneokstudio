import Image from 'next/image';

interface ProjectVisualProps {
  kind: string;
  shot?: 1 | 2 | 3;
  alt?: string;
  hero?: boolean;
  heroCard?: boolean;
}

const PROJECT_SHOTS: Record<
  string,
  Record<1 | 2 | 3, { src: string; alt: string; width: number; height: number }>
> = {
  muse: {
    1: {
      src: '/assets/works/muse-1.png',
      alt: 'MUSE-U — Classical art digital archive hero view',
      width: 2763,
      height: 2072,
    },
    2: {
      src: '/assets/works/muse-2.png',
      alt: 'MUSE-U — Exhibitions, legacy history, and arcadian landscape',
      width: 2763,
      height: 2072,
    },
    3: {
      src: '/assets/works/muse-3.png',
      alt: 'MUSE-U — Artwork detail and curated museum collections',
      width: 2763,
      height: 2072,
    },
  },
  bluecore: {
    1: {
      src: '/assets/works/bluecore-1.png',
      alt: 'Bluecore — One platform to manage business scale and financial overview',
      width: 1440,
      height: 1080,
    },
    2: {
      src: '/assets/works/bluecore-2.png',
      alt: 'Bluecore — Intelligent tools for financial performance and insights',
      width: 1440,
      height: 1080,
    },
    3: {
      src: '/assets/works/bluecore-3.png',
      alt: 'Bluecore — Advanced spend controls, predictive cash flow, and access control',
      width: 1440,
      height: 1080,
    },
  },
  motion: {
    1: {
      src: '/assets/works/motion-1.png',
      alt: 'Motion Studios — 3D motion and creative agency landing page',
      width: 1440,
      height: 1080,
    },
    2: {
      src: '/assets/works/motion-2.png',
      alt: 'Motion Studios — Emotion AI engine and operational efficiency metrics',
      width: 1440,
      height: 1080,
    },
    3: {
      src: '/assets/works/motion-3.png',
      alt: 'Motion Studios — Selected works, creative services, and brand showcase',
      width: 1440,
      height: 1080,
    },
  },
};

export default function ProjectVisual({
  kind,
  shot = 1,
  alt,
}: ProjectVisualProps) {
  const normalizedKind =
    kind === 'aman' ? 'bluecore' : kind === 'kangen' ? 'motion' : kind;
  const project = PROJECT_SHOTS[normalizedKind] || PROJECT_SHOTS.muse;
  const shotData = project[shot] || project[1];

  return (
    <Image
      src={shotData.src}
      alt={alt || shotData.alt}
      width={shotData.width}
      height={shotData.height}
      className="project-art"
      unoptimized
    />
  );
}
