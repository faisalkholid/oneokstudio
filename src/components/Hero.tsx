'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const cardAnchorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const ctx = gsap.context(() => {
        const getAnchorRect = () => {
          const stage = root.current?.querySelector('.hero-stage') as HTMLElement | null;
          const stageRect = stage
            ? stage.getBoundingClientRect()
            : { left: 0, top: 0, width: window.innerWidth, height: window.innerHeight };
          const anchor = cardAnchorRef.current;
          if (!anchor) {
            const defaultW = Math.min(480, Math.round(window.innerWidth * 0.32));
            const defaultH = Math.min(340, Math.round(window.innerHeight * 0.29));
            return {
              left: Math.round((window.innerWidth - defaultW) / 2),
              top: Math.round(window.innerHeight * 0.27),
              width: defaultW,
              height: defaultH,
            };
          }
          const anchorRect = anchor.getBoundingClientRect();
          if (anchorRect.width === 0 || anchorRect.height === 0) {
            const defaultW = Math.min(480, Math.round(window.innerWidth * 0.32));
            const defaultH = Math.min(340, Math.round(window.innerHeight * 0.29));
            return {
              left: Math.round((window.innerWidth - defaultW) / 2),
              top: Math.round(window.innerHeight * 0.27),
              width: defaultW,
              height: defaultH,
            };
          }
          return {
            left: Math.round(anchorRect.left - stageRect.left),
            top: Math.round(anchorRect.top - stageRect.top),
            width: Math.round(anchorRect.width),
            height: Math.round(anchorRect.height),
          };
        };

        // Entrance animation on page load
        gsap.timeline({ defaults: { ease: 'expo.out' } })
          .from(['.hero-side-rail-left', '.hero-side-rail-right'], { opacity: 0, duration: 1.2 }, 0.1)
          .from('.hero-bottom-right', { opacity: 0, y: 25, duration: 1.1 }, 0.2)
          .from('.hero-title-line', { yPercent: 120, rotate: 3, duration: 1.3, stagger: 0.12 }, 0.25)
          .from('.hero-description', { opacity: 0, y: 20, duration: 1 }, 0.45)
          .from('.hero-carousel-wrap', { opacity: 0, scale: 0.94, duration: 1.2 }, 0.3);

        gsap.set(['.hero-slide.is-aman', '.hero-slide.is-kangen'], { opacity: 0 });
        gsap.set('.hero-slide.is-muse', { opacity: 1 });

        // Set initial card placement strictly anchored to the center card slot
        const initRect = getAnchorRect();
        gsap.set('.hero-carousel-wrap', {
          left: initRect.left,
          top: initRect.top,
          width: initRect.width,
          height: initRect.height,
        });

        gsap.set('.hero-main-card', {
          borderRadius: () => (window.innerWidth > 900 ? 24 : 18),
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: root.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.75,
            invalidateOnRefresh: true,
          },
        });

        // Step 1 -> Step 2 -> Step 3:
        // 1. Text elements lift and fade out
        tl.to(
          ['.hero-side-rail-left', '.hero-side-rail-right', '.hero-bottom-left', '.hero-bottom-right'],
          {
            y: -50,
            opacity: 0,
            duration: 0.85,
            ease: 'power1.in',
          },
          0
        )
        // 2. Center carousel card expands from anchor slot to 100% full screen
        .fromTo(
          '.hero-carousel-wrap',
          {
            left: () => getAnchorRect().left,
            top: () => getAnchorRect().top,
            width: () => getAnchorRect().width,
            height: () => getAnchorRect().height,
          },
          {
            left: 0,
            top: 0,
            width: () => window.innerWidth,
            height: () => window.innerHeight,
            duration: 1.0,
            ease: 'power2.inOut',
          },
          0
        )
        // 3. Main card border-radius animates from 24px to 0
        .to(
          '.hero-main-card',
          {
            borderRadius: 0,
            duration: 1.0,
            ease: 'power2.inOut',
          },
          0
        )

        // Hold Slide 1 (MUSE-U) at 100% full screen
        .to({}, { duration: 0.5 }, 1.0)

        // Transition from Slide 1 (MUSE-U) to Slide 2 (AmanBu)
        .to('.hero-slide.is-muse', { opacity: 0, duration: 0.6, ease: 'power1.inOut' }, 1.5)
        .to('.hero-slide.is-aman', { opacity: 1, duration: 0.6, ease: 'power1.inOut' }, 1.5)

        // Hold Slide 2 at 100% full screen
        .to({}, { duration: 0.5 }, 2.1)

        // Transition from Slide 2 (AmanBu) to Slide 3 (Kangen)
        .to('.hero-slide.is-aman', { opacity: 0, duration: 0.6, ease: 'power1.inOut' }, 2.6)
        .to('.hero-slide.is-kangen', { opacity: 1, duration: 0.6, ease: 'power1.inOut' }, 2.6)

        // Hold Slide 3 before entering Section 2 (#about)
        .to({}, { duration: 0.6 }, 3.2);
      }, root);

      return () => ctx.revert();
    });

    mm.add('(prefers-reduced-motion: reduce)', () => {
      const ctx = gsap.context(() => {
        gsap.set('.hero-carousel-wrap', {
          left: 0,
          top: 0,
          width: '100vw',
          height: '100svh',
        });
        gsap.set('.hero-main-card', { borderRadius: 0 });
        gsap.set(['.hero-slide.is-aman', '.hero-slide.is-kangen'], { opacity: 0 });
      }, root);
      return () => ctx.revert();
    });

    let disposed = false;
    document.fonts.ready.then(() => {
      if (!disposed) ScrollTrigger.refresh();
    });
    return () => {
      disposed = true;
      mm.revert();
    };
  }, []);

  return (
    <section id="home" className="hero-v2" ref={root}>
      <div className="hero-stage">
        {/* Main Grid Shell - Locked to exact left & right limits of navbar */}
        <div className="hero-grid-shell">
          {/* Middle Row: Left text (Available for project), Center Card Slot, Right text (Indonesia) in one aligned horizontal band */}
          <div className="hero-middle-row">
            {/* Left Vertical Rail: Available for project */}
            <div className="hero-side-rail-left">
              <span className="side-rail-text">Available for project</span>
            </div>

            {/* Center Card Anchor Slot */}
            <div className="hero-card-anchor-center" ref={cardAnchorRef} aria-hidden="true" />

            {/* Right Vertical Rail: Indonesia · Working Worldwide */}
            <div className="hero-side-rail-right">
              <span className="side-rail-text">Indonesia · Working Worldwide</span>
            </div>
          </div>

          {/* Bottom Row: Level across bottom */}
          <div className="hero-bottom-row">
            {/* Bottom-Left: Title and Subtitle */}
            <div className="hero-bottom-left">
              <h1 className="hero-new-title">
                <span className="line-mask"><span className="hero-title-line">Design that works.</span></span>
                <span className="line-mask"><span className="hero-title-line">Built to ship<span className="hero-title-period">.</span></span></span>
              </h1>
              <p className="hero-description">
                Clear design. Clean code. One studio.<br />
                We turn your next big idea into something people use.
              </p>
            </div>

            {/* Bottom-Right: Studio Statement & Disciplines */}
            <div className="hero-bottom-right">
              <p className="hero-discipline-intro">
                A small studio, by design.<br />
                Design and code. At the same desk.
              </p>
              <ul className="hero-discipline-list">
                <li>– BRANDING</li>
                <li>– UI/UX DESIGN</li>
                <li>– DEVELOPMENT</li>
                <li>– GRAPHIC DESIGN</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Showcase Carousel Stage */}
        <div className="hero-showcase-stage">
          <div className="hero-carousel-wrap">
            {/* Main Card (Zooms to 100% full screen) */}
            <div className="hero-main-card">
              <div className="hero-slide is-muse">
                <Image
                  src="/assets/hero-1.png"
                  alt="One Ok Studio work showcase 1"
                  fill
                  priority
                  unoptimized
                  className="hero-slide-img"
                  sizes="100vw"
                />
              </div>
              <div className="hero-slide is-aman">
                <Image
                  src="/assets/hero-2.png"
                  alt="One Ok Studio work showcase 2"
                  fill
                  unoptimized
                  className="hero-slide-img"
                  sizes="100vw"
                />
              </div>
              <div className="hero-slide is-kangen">
                <Image
                  src="/assets/hero-3.png"
                  alt="One Ok Studio work showcase 3"
                  fill
                  unoptimized
                  className="hero-slide-img"
                  sizes="100vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
