'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { bookingUrl, navigation } from '@/data/studio';

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const [compact, setCompact] = useState(false);
  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const dialog = useRef<HTMLDialogElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      const marker = Math.min(window.innerHeight * 0.3, 240);
      let current = '';
      for (const item of navigation) {
        const section = document.querySelector(item.href);
        if (section && section.getBoundingClientRect().top <= marker) current = item.href;
      }
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 8) current = '#contact';
      setActive(current);
      frame = 0;
    };
    const schedule = () => { if (!frame) frame = window.requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, []);
  useEffect(() => {
    if (!open) return;
    const el = dialog.current;
    const trigger = toggle.current;
    const previous = document.body.style.overflow;
    el?.showModal();
    document.body.style.overflow = 'hidden';
    const media = window.matchMedia('(min-width: 801px)');
    const closeOnDesktop = () => { if (media.matches) setOpen(false); };
    const trapFocus = (event: KeyboardEvent) => {
      if (event.key !== 'Tab' || !el) return;
      const items = Array.from(el.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'));
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    };
    el?.addEventListener('keydown', trapFocus);
    media.addEventListener('change', closeOnDesktop);
    return () => { el?.removeEventListener('keydown', trapFocus); el?.close(); document.body.style.overflow = previous; media.removeEventListener('change', closeOnDesktop); trigger?.focus(); };
  }, [open]);
  return <header className={`header header-v2${compact ? ' is-compact' : ''}`}><div className="nav-shell">
    <a href="#home" className="brand" aria-label="One Ok Studio home"><Image src="/brand/wordmark.svg" width={180} height={36} alt="One Ok Studio" priority /></a>
    <nav className="desktop-nav" aria-label="Main navigation">{navigation.map(item => <a key={item.href} href={item.href} aria-current={active === item.href ? 'location' : undefined}>{item.label}</a>)}</nav>
    <a className="nav-cta" href={bookingUrl} target="_blank" rel="noreferrer" data-magnetic>Let’s talk <span aria-hidden="true">↗</span></a>
    <button ref={toggle} className="menu-toggle" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(true)}>Menu <span aria-hidden="true">☰</span></button>
    </div><dialog id="mobile-menu" ref={dialog} className="mobile-menu" onCancel={() => setOpen(false)} aria-label="Navigation menu">
      <div className="menu-top"><span>ONE OK STUDIO</span><button onClick={() => setOpen(false)} aria-label="Close navigation">Close ×</button></div>
      <nav aria-label="Mobile navigation">{navigation.map((item, i) => <a key={item.href} href={item.href} onClick={() => setOpen(false)}><small>0{i + 1}</small>{item.label}<span aria-hidden="true">↗</span></a>)}</nav>
      <a className="button yellow" href={bookingUrl} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>Start a project ↗</a>
      <p>Based in Indonesia. Working worldwide.</p>
    </dialog>
  </header>;
}
