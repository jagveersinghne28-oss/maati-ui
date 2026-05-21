import { Link, useParams } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { Select, Checkbox } from 'antd';
import ProductCard from '../components/ProductCard/ProductCard';
import { products, categories } from '../data/products';
import s from '../styles/pages.module.scss';

export default function Category() {
  const { category } = useParams();
  const [sort, setSort] = useState('featured');
  const [materials, setMaterials] = useState([]);

  const cat = categories.find((c) => c.slug === category);
  const items = useMemo(() => {
    let list = category === 'new' ? products.filter((p) => p.badge === 'New')
      : category === 'bestsellers' ? products.filter((p) => p.badge === 'Bestseller')
      : products.filter((p) => p.category === category);
    if (materials.length) list = list.filter((p) => materials.includes(p.specs?.material));
    if (sort === 'price-asc') list = [...list].sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') list = [...list].sort((a, b) => b.price - a.price);
    if (sort === 'name') list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    return list;
  }, [category, sort, materials]);

  const title = cat?.name || (category === 'new' ? 'New Arrivals' : category === 'bestsellers' ? 'Bestsellers' : category);

  return (
    <div className={s.page}>
      <div className={s.crumb}><Link to="/">Home</Link> / <Link to="/collections">Collections</Link> / {title}</div>
      <div className={s.pageHead}>
        <div className={s.eyebrow}>Collection</div>
        <h1>{title}</h1>
        {cat && <p>{cat.description}</p>}
      </div>
      <div className={s.plp}>
        <aside className={s.filters}>
          <div className={s.group}>
            <h5>Material</h5>
            <Checkbox.Group value={materials} onChange={(v) => setMaterials(v)} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <Checkbox value="Stoneware">Stoneware</Checkbox>
              <Checkbox value="Terracotta">Terracotta</Checkbox>
              <Checkbox value="Earthenware">Earthenware</Checkbox>
            </Checkbox.Group>
          </div>
          <div className={s.group}>
            <h5>Price Range</h5>
            {['Under ₹1,000', '₹1,000 — ₹2,500', '₹2,500 — ₹5,000', 'Above ₹5,000'].map((r) => (
              <label key={r}><Checkbox /> {r}</label>
            ))}
          </div>
          <div className={s.group}>
            <h5>Availability</h5>
            <label><Checkbox /> In stock</label>
            <label><Checkbox /> Handmade only</label>
          </div>
        </aside>
        <div>
          <div className={s.plpHead}>
            <span className={s.count}>{items.length} pieces</span>
            <Select value={sort} onChange={setSort} style={{ width: 200 }} variant="borderless" options={[
              { value: 'featured', label: 'Featured' },
              { value: 'name', label: 'Alphabetical' },
              { value: 'price-asc', label: 'Price · Low to High' },
              { value: 'price-desc', label: 'Price · High to Low' },
            ]} />
          </div>
          <div className={s.grid}>
            {items.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
          </div>
          {items.length === 0 && <div className={s.empty}><h3>No pieces match.</h3><p>Try adjusting your filters.</p></div>}
        </div>
      </div>
    </div>
  );
}
