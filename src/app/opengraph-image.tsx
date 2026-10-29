import { ImageResponse } from 'next/og';
export const alt = 'One Ok Studio — Design that works. Built to ship.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export default function Image() {
  return new ImageResponse(<div style={{ background: '#0C0C0C', color: '#F3F2ED', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 70, width: '100%', height: '100%' }}><div style={{ display: 'flex', fontSize: 25 }}>ONE OK STUDIO ↗</div><div style={{ display: 'flex', flexDirection: 'column', fontSize: 85, letterSpacing: -5 }}><span>Design that works.</span><span style={{ color: '#FFC700' }}>Built to ship.</span></div><div style={{ display: 'flex', fontSize: 20 }}>DESIGN & DEVELOPMENT · INDONESIA / WORLDWIDE</div></div>, size);
}
