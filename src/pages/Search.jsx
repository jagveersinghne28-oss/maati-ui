import { useMemo, useState, useEffect } from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard/ProductCard';
import s from '../styles/pages.module.scss';

export default function Search() {
  const [q, setQ] = useState('');
  const [history, setHistory] = useState([]);
  useEffect(() => {
    try { setHistory(JSON.parse(localStorage.getItem('maati_search') || '[]')); } catch {}
  }, []);
  const results = useMemo(() => !q.trim() ? [] : products.filter((p) => p.name.toLowerCase().includes(q.toLowerCase()) || p.category.includes(q.toLowerCase())), [q]);

  const onSearch = () => {
    if (!q.trim()) return;
    const next = [q, ...history.filter((h) => h !== q)].slice(0, 6);
    setHistory(next);
    localStorage.setItem('maati_search', JSON.stringify(next));
  };

  return (
    <div className={s.page}>
      <div className={s.pageHead}>
        <div className={s.eyebrow}>Search</div>
        <h1>Find your piece</h1>
      </div>
      <div style={{ maxWidth: 700, margin: '0 auto 48px', borderBottom: '1px solid #1C1C1C' }}>
        <Input prefix={<SearchOutlined />} placeholder="Try 'vase' or 'tea set'..." size="large" value={q} onChange={(e) => setQ(e.target.value)} onPressEnter={onSearch} variant="borderless" style={{ fontSize: 22, fontFamily: "'Cormorant Garamond', serif", padding: '16px 0' }} />
      </div>
      {!q && history.length > 0 && (
        <div style={{ maxWidth: 700, margin: '0 auto 48px' }}>
          <h5 style={{ fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#8B6B4A', marginBottom: 12 }}>Recent</h5>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {history.map((h) => <button key={h} onClick={() => setQ(h)} style={{ padding: '10px 20px', background: '#EEE5DA', fontSize: 13 }}>{h}</button>)}
          </div>
        </div>
      )}
      {q && results.length > 0 && (
        <div className={s.grid}>
          {results.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
        </div>
      )}
      {q && results.length === 0 && <p style={{ textAlign: 'center', color: '#666' }}>No pieces found for "{q}".</p>}
    </div>
  );
}
