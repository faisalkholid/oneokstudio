import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Motion from '@/components/Motion';
import Hero from '@/components/Hero';
import ProjectVisual from '@/components/ProjectVisual';
import DesignIllustration from '@/components/DesignIllustration';
import ProductIllustration from '@/components/ProductIllustration';
import WebIllustration from '@/components/WebIllustration';
import AssetIllustration from '@/components/AssetIllustration';
import DribbbleShowcase from '@/components/DribbbleShowcase';
import { email, inquiry, navigation, partners, steps } from '@/data/studio';

const CASES_DATA = [
  {
    id: 'case-muse',
    name: 'MUSE-U',
    visual: 'muse',
    pills: ['Web Design', 'Digital Archive'],
    headline:
      'MUSE-U — A digital archive for classical art built for quiet exploration and timeless discovery',
  },
  {
    id: 'case-bluecore',
    name: 'Bluecore',
    visual: 'bluecore',
    pills: ['Fintech SaaS', 'Financial Ops'],
    headline:
      'Bluecore — One platform to manage business scale with real-time financial insights and automated workflows',
  },
  {
    id: 'case-motion',
    name: 'Motion Studios',
    visual: 'motion',
    pills: ['Creative Studio', 'Motion & 3D'],
    headline:
      'Motion Studios — Capturing moments through 3D motion, visual storytelling, and emotion-driven digital experiences',
  },
];

const Arrow = () => <span aria-hidden="true">↗</span>;

const ABOUT_P1 = 'One Ok Studio is a small design and development studio where design and code sit at the same desk. That means fewer handoffs, faster decisions, and products that look the way they were designed.'.split(' ');
const ABOUT_P2 = 'Every project gets direct attention, with no layers of account managers in between. Clear scope, honest timelines, and details that get checked twice.'.split(' ');

const STACK_SERVICES = [
  {
    index: '01',
    theme: 'yellow',
    title: 'Branding',
    subtitle: 'Identities people remember.',
    intro: 'Simple, memorable, and unmistakably yours.',
    points: [
      'Logo design',
      'Brand strategy',
      'Visual identity system',
      'Brand guidelines',
      'Stationery & collateral',
      'Mockup presentation',
    ],
    scope: 'Logo · Brand system · Guidelines',
    timeline: 'About 2-4 weeks',
    diagramKind: 'design',
  },
  {
    index: '02',
    theme: 'orange',
    title: 'UI/UX design',
    subtitle: 'Interfaces that feel obvious to use.',
    intro: 'Mobile and web interfaces designed around real people.',
    points: [
      'User research & flows',
      'Wireframing',
      'High-fidelity UI',
      'Mobile app design',
      'Website design',
      'Interactive prototypes',
    ],
    scope: 'Research · Mobile · Web · Prototyping',
    timeline: 'About 3-6 weeks',
    diagramKind: 'product',
  },
  {
    index: '03',
    theme: 'lime',
    title: 'Development',
    subtitle: 'Built clean, shipped on time.',
    intro: 'Designs turned into fast, working products.',
    points: [
      'Android development',
      'Flutter apps',
      'Front-end development',
      'CMS integration',
      'API & backend setup',
      'Store release & maintenance',
    ],
    scope: 'Flutter · Android · Front-end · CMS',
    timeline: 'About 6-12 weeks',
    diagramKind: 'web',
  },
  {
    index: '04',
    theme: 'light',
    title: 'Graphic design',
    subtitle: 'Visuals that say it fast.',
    intro: 'Graphics that carry your message across every channel.',
    points: [
      'Social media content',
      'Marketing materials',
      'Presentation decks',
      'Print & packaging',
      'Illustration',
      'Templates & assets',
    ],
    scope: 'Social · Print · Decks · Illustration',
    timeline: 'Per project',
    diagramKind: 'assets',
  },
];

function IsometricDiagram({ kind }: { kind: string }) {
  if (kind === 'product') {
    return <ProductIllustration />;
  }
  if (kind === 'web') {
    return <WebIllustration />;
  }
  if (kind === 'design') {
    return <DesignIllustration />;
  }
  return <AssetIllustration />;
}

export default function Home() {
  return <><Navigation /><Motion /><main id="main">
    <Hero />

    <section id="about" className="about-v3">
      <div className="about-v3-shell">
        <h2 className="about-v3-heading">
          <span className="line-mask">
            <span className="about-heading-line">
              A small studio,<span className="about-desktop-space"> </span>
              <br className="about-mobile-break" />
              by design.
            </span>
          </span>
          <span className="line-mask"><span className="about-heading-line">Design and code.</span></span>
          <span className="line-mask"><span className="about-heading-line">At the same desk.</span></span>
        </h2>

        <div className="about-v3-split">
          <div className="about-v3-meta">
            <div className="about-v3-meta-item" data-reveal>
              <small>Based</small>
              <p>Indonesia · Working Worldwide</p>
            </div>
            <div className="about-v3-meta-item" data-reveal>
              <small>Best at</small>
              <p>UI/UX Design, Mobile Apps,<br />Web Development</p>
            </div>
          </div>

          <div className="about-v3-copy">
            <p>
              {ABOUT_P1.map((word, i) => (
                <span className="about-scrub-word" key={i}>{word} </span>
              ))}
            </p>
            <p>
              {ABOUT_P2.map((word, i) => (
                <span className="about-scrub-word" key={i}>{word} </span>
              ))}
            </p>
          </div>
        </div>

        <div className="about-v3-stats">
          <div className="about-v3-stat-col">
            <span className="stat-v3-line" aria-hidden="true" />
            <span className="stat-v3-top">Collaboration</span>
            <span className="stat-v3-num">1:1</span>
            <span className="stat-v3-desc">Direct collaboration with the people who design and build</span>
          </div>
          <div className="about-v3-stat-col">
            <span className="stat-v3-line" aria-hidden="true" />
            <span className="stat-v3-top">Process</span>
            <span className="stat-v3-num" data-stat-val="3" data-stat-pad="2">03</span>
            <span className="stat-v3-desc">Core steps: explore, build, and handover</span>
          </div>
          <div className="about-v3-stat-col">
            <span className="stat-v3-line" aria-hidden="true" />
            <span className="stat-v3-top">Projects done</span>
            <span className="stat-v3-num" data-stat-val="78" data-stat-suffix="+">78+</span>
            <span className="stat-v3-desc">Brand, product, and web projects delivered to clients</span>
          </div>
          <div className="about-v3-stat-col">
            <span className="stat-v3-line" aria-hidden="true" />
            <span className="stat-v3-top">Satisfaction</span>
            <span className="stat-v3-num" data-stat-val="100" data-stat-suffix="%">100%</span>
            <span className="stat-v3-desc">Our commitment: we refine every project until it feels right</span>
          </div>
        </div>
      </div>
    </section>

    <section className="running-statement-section" aria-label="Less back-and-forth. More moving forward.">
      <div className="running-statement-scroll">
        <div className="running-statement-track">
          {[0, 1, 2, 3].map(i => (
            <span className="running-statement-item" key={i} aria-hidden={i > 0 ? 'true' : undefined}>
              Less back-and-forth. More moving forward.
            </span>
          ))}
        </div>
      </div>
    </section>

    <section id="services" className="services-fullframe-section">
      <div className="services-stack-deck">
        {STACK_SERVICES.map((item, idx) => (
          <article
            key={item.title}
            className={`stack-service-card is-${item.theme}`}
            style={{ '--stack-idx': idx } as React.CSSProperties}
          >
            <div className="stack-card-inner">
              <div className="stack-card-left">
                <div className="stack-card-header">
                  <h3>{item.title}</h3>
                  <p className="stack-card-sub">{item.subtitle}</p>
                </div>

                <div className="stack-card-bottom">
                  <p className="stack-card-desc">{item.intro}</p>
                  <ul className="stack-card-points">
                    {item.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                  <dl className="stack-card-ledger">
                    <div className="ledger-row">
                      <dt>SCOPE</dt>
                      <dd>{item.scope}</dd>
                    </div>
                    <div className="ledger-row">
                      <dt>TIMELINE</dt>
                      <dd>{item.timeline}</dd>
                    </div>
                  </dl>
                </div>
              </div>

              <div className="stack-card-diagram">
                <div className="diagram-stage">
                  <IsometricDiagram kind={item.diagramKind} />
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>

    <section id="works" className="works cases-section section-shell">
      <div className="cases-list">
        {CASES_DATA.map((item) => (
          <article key={item.id} id={item.id} className="case-study-row">
            <div className="case-study-left">
              <div className="case-study-sticky">
                <div className="case-pills">
                  {item.pills.map((pill) => (
                    <span key={pill} className="case-pill">
                      {pill}
                    </span>
                  ))}
                </div>

                <h3 className="case-headline">{item.headline}</h3>
              </div>
            </div>

            <div className="case-study-gallery">
              <div className="case-shot-card">
                <ProjectVisual kind={item.visual} shot={1} />
              </div>
              <div className="case-shot-card">
                <ProjectVisual kind={item.visual} shot={2} />
              </div>
              <div className="case-shot-card">
                <ProjectVisual kind={item.visual} shot={3} />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>

    {/* Section 5B: Dribbble Showcase & UI8 Store */}
    <DribbbleShowcase />

    <section id="process" className="process-hscroll-section" aria-labelledby="process-title">
      <div className="process-hscroll-sticky">
        <div className="process-hscroll-track">
          <svg
            className="process-wave-svg"
            viewBox="0 0 4400 660"
            fill="none"
            aria-hidden="true"
          >
            <path
              className="process-wave-path"
              d="M -120 430 C 120 210, 340 86, 580 86 C 980 86, 1280 515, 1660 515 C 1940 515, 2120 98, 2400 98 C 2680 98, 2860 528, 3080 528 C 3300 528, 3500 98, 3760 98 C 4020 98, 4260 290, 4520 380"
              stroke="#FFC700"
              strokeWidth="76"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <div className="process-hscroll-intro">
            <h2 id="process-title" className="process-center-statement">
              Four steps to build products
              <br />
              people love{' '}
              <span className="process-love-badge" aria-hidden="true">
                <svg viewBox="0 0 36 32" fill="none">
                  <path
                    d="M4 5C4 2.79086 5.79086 1 8 1H28C30.2091 1 32 2.79086 32 5V21C32 23.2091 30.2091 25 28 25H18L11 30.5V25H8C5.79086 25 4 23.2091 4 21V5Z"
                    fill="#FFC700"
                  />
                  <path
                    d="M18 19.5C18 19.5 11.5 15.2 11.5 10.8C11.5 8.8 13.1 7.2 15 7.2C16.2 7.2 17.3 7.8 18 8.8C18.7 7.8 19.8 7.2 21 7.2C22.9 7.2 24.5 8.8 24.5 10.8C24.5 15.2 18 19.5 18 19.5Z"
                    fill="#FFFFFF"
                  />
                </svg>
              </span>{' '}
              with clear scope
              <br />
              and no surprises.
            </h2>
          </div>

          {steps.map(([title, line, description], i) => {
            const extras = [
              {
                role: 'Discovery & Alignment',
                badge: 'Step 01',
                statLabel: 'alignment',
                statValue: 'Day 1',
                pos: 'is-top',
              },
              {
                role: 'Scope & Fixed Timeline',
                badge: 'Step 02',
                statLabel: 'written scope',
                statValue: '100%',
                pos: 'is-bottom',
              },
              {
                role: 'Figma + Production Code',
                badge: 'Step 03',
                statLabel: 'handoff gap',
                statValue: 'Zero',
                pos: 'is-top',
              },
              {
                role: 'Handover & Post-Launch',
                badge: 'Step 04',
                statLabel: 'support window',
                statValue: 'Ready',
                pos: 'is-bottom',
              },
            ][i];

            return (
              <article
                key={title}
                className={`process-hstep-card ${extras.pos}`}
              >
                <div className="process-hstep-main">
                  <div className="process-hstep-avatar" aria-hidden="true">
                    0{i + 1}
                  </div>

                  <div className="process-hstep-copy">
                    <p className="process-hstep-quote">
                      “{line} {description}”
                    </p>

                    <div className="process-hstep-footer">
                      <div className="process-hstep-author">
                        <strong>{title}</strong>
                        <small>{extras.role}</small>
                      </div>

                      <span className="process-hstep-pill">
                        <span>✳</span> {extras.badge}
                      </span>
                    </div>

                    <div className="process-hstep-verified">
                      THE WAY WE WORK · <b>One Ok Studio</b>
                    </div>
                  </div>
                </div>

                <div className="process-hstep-metric">
                  <small>{extras.statLabel}</small>
                  <strong>{extras.statValue}</strong>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>

    <section className="crew-testimonial-section" aria-label="Client testimonial and partners">
      <div className="crew-testimonial-shell">
        <div className="crew-testimonial-top">
          <div className="crew-quote-mark" aria-hidden="true">
            <svg width="44" height="30" viewBox="0 0 44 30" fill="none">
              <path
                d="M10.4 0C4.6 7.4 1.4 16.5 0.8 28H12.4C13 18.2 15.8 9.2 20.8 0H10.4ZM32.8 0C27 7.4 23.8 16.5 23.2 28H34.8C35.4 18.2 38.2 9.2 43.2 0H32.8Z"
                fill="#FFC700"
              />
            </svg>
          </div>

          <div className="crew-quote-body">
            <blockquote className="crew-quote-text" data-reveal>
              It&apos;s a small crew with experienced folks. The one pitching is the one actually doing the job.
            </blockquote>

            <div className="crew-quote-stars" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, idx) => (
                <svg key={idx} width="22" height="22" viewBox="0 0 24 24" fill="#FFC700" aria-hidden="true">
                  <path d="M12 2L14.95 8.26L21.85 9.15L16.77 13.97L18.09 20.82L12 17.47L5.91 20.82L7.23 13.97L2.15 9.15L9.05 8.26L12 2Z" />
                </svg>
              ))}
            </div>

            <div className="crew-quote-author">
              <div className="crew-author-avatar" aria-hidden="true">
                EC
              </div>
              <div className="crew-author-meta">
                <strong>Edwin Cañas</strong>
                <span>Chef Executive Officer - EZclass</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="crew-testimonial-divider" />

      <div className="crew-logos-marquee" aria-label="Featured partner brands">
        <div className="crew-logos-track">
          {Array.from({ length: 3 }).map((_, groupIdx) => (
            <div key={groupIdx} className="crew-logos-group" aria-hidden={groupIdx > 0 ? 'true' : undefined}>
              {partners.map((partner) => (
                <div key={partner.name} className="crew-logo-item" title={partner.name}>
                  <Image
                    src={partner.src}
                    alt={partner.name}
                    width={partner.width}
                    height={partner.height}
                    unoptimized
                    className={`crew-logo-img${partner.noFilter ? ' no-filter' : ''}`}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  </main>
  <footer id="contact" className="footer-forme">
    <div className="footer-checkerboard" aria-hidden="true">
      {Array.from({ length: 16 }).map((_, i) => (
        <span key={`r1-${i}`} className={i % 2 === 0 ? 'tile-yellow' : 'tile-white'} />
      ))}
      {Array.from({ length: 16 }).map((_, i) => (
        <span key={`r2-${i}`} className={i % 2 === 0 ? 'tile-white' : 'tile-yellow'} />
      ))}
    </div>

    <div className="footer-forme-yellow">
      <div className="footer-forme-shell">
        <div className="footer-forme-main">
          <h2 className="footer-forme-heading" data-reveal>
            Have something
            <br />
            to build?
          </h2>

          <div className="footer-forme-right">
            <a
              href={inquiry}
              className="footer-forme-big-arrow"
              aria-label="Email One Ok Studio to start a project"
              data-magnetic
            >
              <svg width="72" height="72" viewBox="0 0 72 72" fill="none" aria-hidden="true">
                <path
                  d="M16 56L56 16M56 16H22M56 16V50"
                  stroke="#0C0C0C"
                  strokeWidth="6"
                  strokeLinecap="square"
                />
              </svg>
            </a>

            <a href={`mailto:${email}`} className="footer-forme-email">
              {email}
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="footer-forme-white">
      <div className="footer-forme-shell">
        <div className="footer-forme-cols">
          <div className="footer-forme-col">
            <span className="footer-forme-label">COME SAY HELLO</span>
            <p>
              Based in Indonesia
              <br />
              Working worldwide
            </p>
          </div>

          <div className="footer-forme-col">
            <span className="footer-forme-label">NAVIGATION</span>
            <nav className="footer-forme-nav" aria-label="Footer navigation">
              {navigation.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label} <Arrow />
                </a>
              ))}
            </nav>
          </div>

          <div className="footer-forme-col">
            <span className="footer-forme-label">SOCIAL MEDIA</span>
            <div className="footer-forme-nav">
              <a href="https://dribbble.com/oneokstudio" target="_blank" rel="noreferrer">
                Dribbble <Arrow />
              </a>
              <a href="https://www.linkedin.com/in/oneokstudio/" target="_blank" rel="noreferrer">
                LinkedIn <Arrow />
              </a>
              <a href="https://www.instagram.com/oneokstudio" target="_blank" rel="noreferrer">
                Instagram <Arrow />
              </a>
              <a href="https://ui8.net/users/faisal-kholid" target="_blank" rel="noreferrer">
                UI8 <Arrow />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-forme-wordmark" aria-label="One Ok Studio">
          one ok studio
        </div>

        <div className="footer-forme-mini-brand">ONE OK STUDIO®</div>

        <div className="footer-forme-legal">
          <span>© {new Date().getFullYear()} One Ok Studio. Design and code at the same desk.</span>
          <div className="footer-forme-legal-right">
            <span>Based in Indonesia</span>
            <span>Working Worldwide</span>
            <a href="#home" className="footer-back-top">
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Organization', name: 'One Ok Studio', url: 'https://www.oneokstudio.com', email, logo: 'https://www.oneokstudio.com/brand/wordmark.svg' }) }} /></>;
}
