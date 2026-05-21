import { Drawer, Input } from 'antd';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useMemo, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { closeSearch } from '../../store/slices/uiSlice';
import { products } from '../../data/products';
import s from './SearchDrawer.module.scss';

export default function SearchDrawer() {
  const dispatch = useDispatch();
  const open = useSelector((st) => st.ui.searchOpen);
  const [q, setQ] = useState('');

  const results = useMemo(() => {
    if (!q.trim()) return [];
    return products.filter((p) => p.name.toLowerCase().includes(q.toLowerCase()) || p.category.includes(q.toLowerCase())).slice(0, 6);
  }, [q]);

  return (
    <Drawer placement="top" height="100vh" open={open} onClose={() => dispatch(closeSearch())} closable={true} title={null} styles={{ body: { padding: 0 } }}>
      <div className={s.wrap}>
        <div className={s.box}>
          <Input prefix={<SearchOutlined />} placeholder="Search ceramic products..." size="large" value={q} onChange={(e) => setQ(e.target.value)} autoFocus variant="borderless" className={s.input} />
        </div>
        {!q && (
          <div className={s.suggest}>
            <h5>Popular searches</h5>
            <div className={s.tags}>
              {['Dinner Plate', 'Vase', 'Tea Set', 'Handmade', 'Bowl'].map((t) => <button key={t} onClick={() => setQ(t)}>{t}</button>)}
            </div>
          </div>
        )}
        {q && (
          <div className={s.results}>
            {results.length === 0 ? <p className={s.empty}>No results for "{q}"</p> : results.map((p) => (
              <Link key={p.id} to={`/products/${p.slug}`} className={s.result} onClick={() => dispatch(closeSearch())}>
                <img src={p.images[0]} alt={p.name} />
                <div>
                  <div className={s.name}>{p.name}</div>
                  <div className={s.cat}>{p.category} · ₹{p.price.toLocaleString('en-IN')}</div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </Drawer>
  );
}
