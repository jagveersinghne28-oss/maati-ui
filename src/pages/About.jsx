import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import s from '../styles/pages.module.scss';

const fade = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8 } };

export default function About() {
  return (
    <div>
      <div className={s.aboutHero}>
        <img src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=1920&q=80" alt="Maati craftsmanship" />
        <div className={s.label}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <div className={s.eyebrow}>Our Story</div>
            <h1>From earth, with patience and intention.</h1>
          </motion.div>
        </div>
      </div>

      <section className={s.aboutSection}>
        <div className={s.aboutTwo}>
          <motion.div {...fade}>
            <div className={s.eyebrow}>The Brand</div>
            <h2>Maati means earth.</h2>
            <p>In many Indian languages, <em>maati</em> is the soil beneath our feet — the raw, grounding material that shapes everything we eat from, drink from, and live with. We borrowed the name as a reminder.</p>
            <p>Maati is a premium handcrafted ceramic brand under <strong>ZerOne Enterprises</strong>. Every piece we make begins with raw earth, is shaped by hand, and emerges from the kiln carrying the quiet imprint of its maker.</p>
            <p>We exist for the people who notice the weight of a cup, the warmth of a glaze, the small asymmetries that make an object truly alive.</p>
          </motion.div>
          <motion.div {...fade} className={s.img}>
            <img src="https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?w=1200&q=80" alt="" loading="lazy" />
          </motion.div>
        </div>
      </section>

      <section className={s.aboutSection}>
        <div className={s.pageHead}>
          <div className={s.eyebrow}>The Founders</div>
          <h2>Three people, one quiet vision.</h2>
          <p>Maati was built by founders who share a love for craft, for India, and for the slow work of making something well.</p>
        </div>
        <div className={s.founders}>
          {[
            { name: 'Jagveer', role: 'Co-founder', img: 'photo-1507003211169-0a1dd7228f2d' },
            { name: 'Sarthak Karnwal', role: 'Co-founder', img: 'photo-1500648767791-00dcc994a43e' },
            { name: 'Vishal Singh', role: 'Co-founder', img: 'photo-1472099645785-5658abf4ff4e' },
          ].map((f, i) => (
            <motion.div key={f.name} className={s.founder} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.1 }}>
              <div className={s.ring}><img src={`https://images.unsplash.com/${f.img}?w=600&q=80`} alt={f.name} loading="lazy" /></div>
              <h4>{f.name}</h4>
              <span>{f.role}</span>
            </motion.div>
          ))}
        </div>
      </section>

      <section className={s.aboutSection}>
        <div className={s.aboutTwo}>
          <motion.div {...fade} className={s.img}>
            <img src="https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=1200&q=80" alt="" loading="lazy" />
          </motion.div>
          <motion.div {...fade}>
            <div className={s.eyebrow}>The Craft</div>
            <h2>The shape of slow.</h2>
            <p>Every Maati piece passes through many hands and many days. Clay is wedged to remove air. It is centered on the wheel, pulled into a wall, trimmed at leather-hard, dried, bisque-fired, glazed, then fired again — sometimes a third time for reactive finishes.</p>
            <p>Nothing is rushed. The kiln decides its own time.</p>
          </motion.div>
        </div>
      </section>

      <section className={s.aboutSection}>
        <div className={s.pageHead}>
          <div className={s.eyebrow}>Why We Do This</div>
          <h2>Mission &amp; vision</h2>
        </div>
        <div className={s.values}>
          {[
            { n: '01', t: 'Honour the earth', d: 'Use raw materials with respect. Make pieces that last generations.' },
            { n: '02', t: 'Honour the maker', d: 'Pay artisans fairly and let them sign their work. Craft is community.' },
            { n: '03', t: 'Honour the home', d: 'Build objects that elevate the everyday — not decorations, but companions.' },
          ].map((v) => (
            <motion.div key={v.n} {...fade} className={s.value}>
              <div className={s.num}>{v.n}</div>
              <h4>{v.t}</h4>
              <p>{v.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className={s.aboutSection}>
        <div className={s.pageHead}><div className={s.eyebrow}>From the studio</div><h2>Made by hand, fired by fire</h2></div>
        <div className={s.gallery2}>
          {['photo-1610701596007-11502861dcfa', 'photo-1565193566173-7a0ee3dbe261', 'photo-1612196808214-b8e1d6145a8c', 'photo-1610701596061-2ecf227e85b2', 'photo-1567459169668-95d355371bda', 'photo-1556910633-5099dc3971e3', 'photo-1602143407151-7111542de6e8', 'photo-1604762524889-3e2fcc145683'].map((id, i) => (
            <div key={i} className={s.item}><img src={`https://images.unsplash.com/${id}?w=600&q=80`} alt="" loading="lazy" /></div>
          ))}
        </div>
      </section>

      <section style={{ background: '#8B6B4A', color: '#F8F5F1', padding: '96px 0', textAlign: 'center' }}>
        <div style={{ maxWidth: 640, margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{ color: '#F8F5F1', marginBottom: 16 }}>Bring earth into your home.</h2>
          <p style={{ color: 'rgba(248,245,241,0.8)', marginBottom: 32 }}>Discover our latest ceramic pieces.</p>
          <Link to="/collections" style={{ display: 'inline-block', padding: '16px 36px', background: '#F8F5F1', color: '#1C1C1C', fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase' }}>Shop the collections</Link>
        </div>
      </section>
    </div>
  );
}
