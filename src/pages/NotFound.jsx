import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 16, fontFamily: 'Cormorant Garamond, serif' }}>
      <h1 style={{ fontSize: 96, margin: 0 }}>404</h1>
      <p style={{ color: '#666' }}>This page seems to have wandered off.</p>
      <Link to="/" style={{ padding: '16px 36px', background: '#1C1C1C', color: '#F8F5F1', fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase' }}>Return Home</Link>
    </div>
  );
}
