'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Motion() {
  const cursor = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      // All [data-reveal] elements animate live with scroll in the visible viewport
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach(el => {
        gsap.fromTo(
          el,
          { y: 36, opacity: 0.12 },
          {
            y: 0,
            opacity: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 84%',
              end: 'top 50%',
              scrub: 0.45,
              invalidateOnRefresh: true,
            },
          }
        );
      });

      // Section 2 (#about): 3-line heading live scroll reveal
      gsap.fromTo(
        '.about-heading-line',
        { y: 28, opacity: 0.2 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.about-v3-heading',
            start: 'top 92%',
            end: 'top 42%',
            scrub: 0.4,
            invalidateOnRefresh: true,
          },
        }
      );

      // Section 2 (#about): Word-by-word scroll scrub on paragraphs
      const copyParagraphs = gsap.utils.toArray<HTMLElement>('.about-v3-copy p');
      if (copyParagraphs.length) {
        copyParagraphs.forEach(p => {
          const words = gsap.utils.toArray<HTMLElement>('.about-scrub-word', p);
          if (words.length) {
            gsap.fromTo(
              words,
              { opacity: 0.18 },
              {
                opacity: 1,
                ease: 'none',
                stagger: {
                  each: 0.025,
                  from: 'start',
                },
                scrollTrigger: {
                  trigger: p,
                  start: 'top 82%',
                  end: 'bottom 52%',
                  scrub: 0.3,
                  invalidateOnRefresh: true,
                },
              }
            );
          }
        });
      }

      // Section 2 (#about): Tall vertical stat lines + numbers live on scroll
      gsap.fromTo(
        '.stat-v3-line',
        { scaleY: 0 },
        {
          scaleY: 1,
          stagger: 0.08,
          ease: 'none',
          scrollTrigger: {
            trigger: '.about-v3-stats',
            start: 'top 78%',
            end: 'top 35%',
            scrub: 0.45,
            invalidateOnRefresh: true,
          },
        }
      );

      gsap.fromTo(
        '.stat-v3-top, .stat-v3-num, .stat-v3-desc',
        { y: 34, opacity: 0.12 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.04,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.about-v3-stats',
            start: 'top 78%',
            end: 'top 36%',
            scrub: 0.45,
            invalidateOnRefresh: true,
          },
        }
      );

      gsap.utils.toArray<HTMLElement>('[data-stat-val]').forEach((el, i) => {
        const target = Number(el.dataset.statVal ?? 0);
        const suffix = el.dataset.statSuffix ?? '';
        const pad = Number(el.dataset.statPad ?? 0);
        const finalText = el.textContent ?? '';
        const runCount = () => {
          const obj = { val: 0 };
          gsap.to(obj, {
            val: target,
            duration: 1.1,
            delay: i * 0.06,
            ease: 'expo.out',
            overwrite: true,
            onUpdate: () => {
              const num = Math.round(obj.val).toString().padStart(pad, '0');
              el.textContent = `${num}${suffix}`;
            },
            onComplete: () => {
              el.textContent = finalText;
            },
          });
        };
        ScrollTrigger.create({
          trigger: '.about-v3-stats',
          start: 'top 74%',
          onEnter: runCount,
        });
      });

      // Section 3: White Background Monumental Bold Running Text (Always moving left)
      const runningTrack = document.querySelector<HTMLElement>('.running-statement-track');
      if (runningTrack) {
        const marquee = gsap.to(runningTrack, {
          xPercent: -50,
          duration: 38,
          ease: 'none',
          repeat: -1,
        });

        gsap.fromTo(
          '.running-statement-scroll',
          { x: 0 },
          {
            x: () => -window.innerWidth * 0.14,
            ease: 'none',
            scrollTrigger: {
              trigger: '.running-statement-section',
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.6,
              invalidateOnRefresh: true,
              onUpdate: self => {
                const boost = Math.min(Math.abs(self.getVelocity()) / 900, 1.4);
                gsap.to(marquee, {
                  timeScale: 1 + boost,
                  duration: 0.3,
                  overwrite: true,
                  onComplete: () => {
                    gsap.to(marquee, { timeScale: 1, duration: 0.8 });
                  },
                });
              },
            },
          }
        );
      }

      // Section 4 (#services): Full-Frame Stacking Cards Animation
      const stackCards = gsap.utils.toArray<HTMLElement>('.stack-service-card');
      stackCards.forEach((card, index) => {
        const nextCard = stackCards[index + 1];
        const inner = card.querySelector<HTMLElement>('.stack-card-inner');
        if (nextCard && inner) {
          gsap.to(inner, {
            y: -45,
            opacity: 0.35,
            ease: 'none',
            scrollTrigger: {
              trigger: nextCard,
              start: 'top bottom',
              end: 'top top',
              scrub: 0.5,
              invalidateOnRefresh: true,
            },
          });
        }

        // Inner card isometric layer parallax on scroll
        const layers = card.querySelectorAll<SVGElement>('.iso-layer-2, .iso-layer-3, .iso-layer-4');
        if (layers.length) {
          gsap.fromTo(
            layers,
            { y: 24, opacity: 0.35 },
            {
              y: 0,
              opacity: 1,
              stagger: 0.1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 78%',
                end: 'top 25%',
                scrub: 0.45,
                invalidateOnRefresh: true,
              },
            }
          );
        }
      });

      gsap.fromTo('.process-track span', { scaleY: 0 }, { scaleY: 1, ease: 'none', scrollTrigger: { trigger: '.steps', start: 'top 65%', end: 'bottom 70%', scrub: true } });

      // Section 6 (#process): Horizontal scroll + Dynamic SVG wave line on all viewports
      const processSection = document.querySelector<HTMLElement>('.process-hscroll-section');
      const processTrack = document.querySelector<HTMLElement>('.process-hscroll-track');
      const processWaveSvg = document.querySelector<SVGSVGElement>('.process-wave-svg');
      const processWavePath = document.querySelector<SVGPathElement>('.process-wave-path');
      if (processSection && processTrack) {
        let waveLength = 4800;

        const updateProcessWave = () => {
          if (!processWaveSvg || !processWavePath) return;
          const trackW = processTrack.scrollWidth;
          const trackH = processTrack.clientHeight || 620;
          processWaveSvg.setAttribute('viewBox', `0 0 ${trackW} ${trackH}`);

          const isMobile = window.innerWidth <= 800;
          const introEl = processTrack.querySelector<HTMLElement>('.process-hscroll-intro');
          const stepCards = gsap.utils.toArray<HTMLElement>('.process-hstep-card', processTrack);
          const introW = introEl ? introEl.offsetWidth : window.innerWidth;

          const c0 = stepCards[0]
            ? stepCards[0].offsetLeft + stepCards[0].offsetWidth * (isMobile ? 0.5 : 0.22)
            : introW + 240;
          const c1 = stepCards[1]
            ? stepCards[1].offsetLeft + stepCards[1].offsetWidth * (isMobile ? 0.5 : 0.42)
            : c0 + 680;
          const c2 = stepCards[2]
            ? stepCards[2].offsetLeft + stepCards[2].offsetWidth * (isMobile ? 0.5 : 0.42)
            : c1 + 680;
          const c3 = stepCards[3]
            ? stepCards[3].offsetLeft + stepCards[3].offsetWidth * (isMobile ? 0.5 : 0.45)
            : c2 + 680;

          const x0 = -120;
          const y0 = trackH * (isMobile ? 0.62 : 0.66);

          const x1 = isMobile ? introW * 0.5 : introW * 0.42;
          const y1 = trackH * (isMobile ? 0.18 : 0.13);

          const x2 = c0;
          const y2 = trackH * (isMobile ? 0.82 : 0.79);

          const x3 = c1;
          const y3 = trackH * (isMobile ? 0.18 : 0.14);

          const x4 = c2;
          const y4 = trackH * (isMobile ? 0.82 : 0.81);

          const x5 = c3;
          const y5 = trackH * (isMobile ? 0.18 : 0.14);

          const x6 = trackW + 120;
          const y6 = trackH * 0.56;

          const d = [
            `M ${x0} ${y0}`,
            `C ${x0 + (x1 - x0) * 0.34} ${y0 - (y0 - y1) * 0.62}, ${x1 - (x1 - x0) * 0.42} ${y1}, ${x1} ${y1}`,
            `C ${x1 + (x2 - x1) * 0.44} ${y1}, ${x2 - (x2 - x1) * 0.4} ${y2}, ${x2} ${y2}`,
            `C ${x2 + (x3 - x2) * 0.42} ${y2}, ${x3 - (x3 - x2) * 0.42} ${y3}, ${x3} ${y3}`,
            `C ${x3 + (x4 - x3) * 0.42} ${y3}, ${x4 - (x4 - x3) * 0.42} ${y4}, ${x4} ${y4}`,
            `C ${x4 + (x5 - x4) * 0.42} ${y4}, ${x5 - (x5 - x4) * 0.42} ${y5}, ${x5} ${y5}`,
            `C ${x5 + (x6 - x5) * 0.45} ${y5}, ${x6 - (x6 - x5) * 0.28} ${y6 - (y6 - y5) * 0.35}, ${x6} ${y6}`,
          ].join(' ');

          processWavePath.setAttribute('d', d);
          waveLength = processWavePath.getTotalLength();
          processWavePath.style.strokeDasharray = `${waveLength}`;
        };

        updateProcessWave();
        ScrollTrigger.addEventListener('refreshInit', updateProcessWave);

        gsap.to(processTrack, {
          x: () => -Math.max(0, processTrack.scrollWidth - window.innerWidth),
          ease: 'none',
          scrollTrigger: {
            trigger: processSection,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.55,
            invalidateOnRefresh: true,
          },
        });

        // Dynamic background spectrum transition across Steps 01 to 04
        const processSticky = processSection.querySelector<HTMLElement>('.process-hscroll-sticky');
        const bgTargets = processSticky ? [processSection, processSticky] : [processSection];

        const bgTl = gsap.timeline({
          scrollTrigger: {
            trigger: processSection,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.55,
            invalidateOnRefresh: true,
          },
        });

        bgTl
          .fromTo(
            bgTargets,
            { backgroundColor: '#FFFFFF' },
            {
              backgroundColor: '#FFE77D',
              duration: 0.25,
              ease: 'power1.inOut',
            }
          )
          .to(bgTargets, {
            backgroundColor: '#FFC48C',
            duration: 0.25,
            ease: 'power1.inOut',
          })
          .to(bgTargets, {
            backgroundColor: '#CEF478',
            duration: 0.25,
            ease: 'power1.inOut',
          })
          .to(bgTargets, {
            backgroundColor: '#86F0BF',
            duration: 0.25,
            ease: 'power1.inOut',
          });

        if (processWavePath) {
          bgTl
            .fromTo(
              processWavePath,
              { stroke: '#FFC700' },
              {
                stroke: '#DE9000',
                duration: 0.25,
                ease: 'power1.inOut',
              },
              0
            )
            .to(
              processWavePath,
              {
                stroke: '#D95B1E',
                duration: 0.25,
                ease: 'power1.inOut',
              },
              0.25
            )
            .to(
              processWavePath,
              {
                stroke: '#589B08',
                duration: 0.25,
                ease: 'power1.inOut',
              },
              0.50
            )
            .to(
              processWavePath,
              {
                stroke: '#0D9488',
                duration: 0.25,
                ease: 'power1.inOut',
              },
              0.75
            );
        }

        if (processWavePath) {
          const waveTl = gsap.timeline({
            scrollTrigger: {
              trigger: processSection,
              start: 'top 78%',
              end: 'bottom bottom',
              scrub: 0.55,
              invalidateOnRefresh: true,
            },
          });

          waveTl
            .fromTo(
              processWavePath,
              { strokeDashoffset: () => waveLength },
              {
                strokeDashoffset: () => waveLength * 0.72,
                duration: 0.24,
                ease: 'none',
              }
            )
            .to(processWavePath, {
              strokeDashoffset: 0,
              duration: 0.76,
              ease: 'none',
            });
        }
      }
    });
    mm.add('(min-width: 801px) and (prefers-reduced-motion: no-preference)', () => {
      gsap.utils.toArray<HTMLElement>('.case-study-gallery [data-parallax]').forEach(el => gsap.fromTo(el, { y: 15 }, { y: -15, ease: 'none', scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: 0.6 } }));
    });
    mm.add('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)', () => {
      const dot = cursor.current;
      if (!dot) return;
      const x = gsap.quickTo(dot, 'x', { duration: 0.25, ease: 'power3.out' });
      const y = gsap.quickTo(dot, 'y', { duration: 0.25, ease: 'power3.out' });
      const move = (event: PointerEvent) => {
        x(event.clientX); y(event.clientY);
        const target = event.target instanceof Element ? event.target : null;
        const badge = target?.closest<HTMLElement>('[data-cursor]');
        dot.textContent = badge?.dataset.cursor ?? '';
        dot.classList.toggle('cursor-label', Boolean(badge));
        dot.style.opacity = target?.closest('input, textarea, dialog, [contenteditable]') ? '0' : '1';
      };
      const hide = () => { dot.style.opacity = '0'; };
      document.addEventListener('pointermove', move);
      document.documentElement.addEventListener('pointerleave', hide);
      window.addEventListener('blur', hide);
      const cleanups: (() => void)[] = [];
      document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach(el => {
        const mx = gsap.quickTo(el, 'x', { duration: 0.35, ease: 'power2.out' });
        const my = gsap.quickTo(el, 'y', { duration: 0.35, ease: 'power2.out' });
        const onMove = (event: PointerEvent) => { const box = el.getBoundingClientRect(); mx(gsap.utils.clamp(-6, 6, (event.clientX - box.left - box.width / 2) * 0.08)); my(gsap.utils.clamp(-6, 6, (event.clientY - box.top - box.height / 2) * 0.08)); };
        const reset = () => { mx(0); my(0); };
        el.addEventListener('pointermove', onMove); el.addEventListener('pointerleave', reset);
        cleanups.push(() => { el.removeEventListener('pointermove', onMove); el.removeEventListener('pointerleave', reset); mx.tween.kill(); my.tween.kill(); gsap.set(el, { clearProps: 'transform' }); });
      });
      return () => { document.removeEventListener('pointermove', move); document.documentElement.removeEventListener('pointerleave', hide); window.removeEventListener('blur', hide); x.tween.kill(); y.tween.kill(); hide(); cleanups.forEach(fn => fn()); };
    });
    let disposed = false;
    const timer = window.setTimeout(() => { if (!disposed) ScrollTrigger.refresh(); }, 250);
    document.fonts.ready.then(() => { if (!disposed) ScrollTrigger.refresh(); });
    return () => { disposed = true; window.clearTimeout(timer); mm.revert(); };
  }, []);
  return <div ref={cursor} className="cursor" aria-hidden="true" />;
}
