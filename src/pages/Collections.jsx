import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { categories } from '../data/products';
import s from '../styles/pages.module.scss';

export default function Collections() {
  return (
    <div className={s.page}>
      <div className={s.crumb}><Link to="/">Home</Link> / Collections</div>
      <div className={s.pageHead}>
        <div className={s.eyebrow}>The Collections</div>
        <h1>Pieces for slow living</h1>
        <p>Browse ceramic vessels and decor across four curated collections, each rooted in earth.</p>
      </div>
      <div className={s.cats}>
        {categories.map((c, i) => (
          <motion.div key={c.slug} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }}>
            <Link to={`/collections/${c.slug}`} className={s.catCard}>
              <img src={c.image} alt={c.name} loading="lazy" />
              <div className={s.label}>
                <h3>{c.name}</h3>
                <p>{c.description}</p>
                <span>Shop now —</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
