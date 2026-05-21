import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { App } from 'antd';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import ProductCard from '../components/ProductCard/ProductCard';
import { products, categories, bestSellers, newArrivals } from '../data/products';
import s from './Home.module.scss';

const heroSlides = [
  { img: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=1920&q=80', eyebrow: 'Autumn Collection 2025', title: 'Vessels shaped by earth, fire and patient hands.', sub: 'Handcrafted ceramics for slow mornings and quiet meals.', cta: 'Discover collection', to: '/collections' },
  { img: 'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=1920&q=80', eyebrow: 'Handmade in India', title: 'Objects with the weight of memory.', sub: 'Each piece carries the gentle imprint of the maker.', cta: 'Explore handmade', to: '/collections/handmade' },
  { img: 'https://images.unsplash.com/photo-1567459169668-95d355371bda?w=1920&q=80', eyebrow: 'New Arrivals', title: 'Quiet luxury for the everyday table.', sub: 'Serveware and dining pieces in earthen tones.', cta: 'Shop new', to: '/collections/dining' },
];

const fade = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-80px' }, transition: { duration: 0.8 } };

export default function Home() {
  const { message } = App.useApp();
  const onSub = (e) => { e.preventDefault(); message.success('Welcome to Maati.'); e.currentTarget.reset(); };

  return (
    <>
      <section className={s.hero}>
        <Swiper modules={[Autoplay, EffectFade, Pagination]} effect="fade" loop autoplay={{ delay: 5500, disableOnInteraction: false }} pagination={{ clickable: true }} className={s.heroSwiper}>
          {heroSlides.map((sl, i) => (
            <SwiperSlide key={i}>
              <div className={s.slide}>
                <img src={sl.img} alt="" />
                <div className={s.heroContent}>
                  <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}>
                    <div className={s.eyebrow}>{sl.eyebrow}</div>
                    <h1 className={s.heroTitle}>{sl.title}</h1>
                    <p className={s.heroSub}>{sl.sub}</p>
                    <Link to={sl.to} className={s.btnLight}>{sl.cta}</Link>
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className={s.section}>
        <motion.div {...fade} className={s.sectionHead}>
          <div className={s.eyebrow}>Featured Collections</div>
          <h2>Crafted with intention</h2>
          <p>Four collections built around moments of slowness — dining, serving, decorating, and ritual.</p>
        </motion.div>
        <div className={s.featured}>
          {categories.map((c, i) => (
            <motion.div key={c.slug} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.1 }}>
              <Link to={`/collections/${c.slug}`} className={s.featuredCard}>
                <img src={c.image} alt={c.name} loading="lazy" />
                <div className={s.label}><span>0{i + 1}</span><h4>{c.name}</h4></div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className={s.section} style={{ background: '#EEE5DA' }}>
        <div className={s.craft}>
          <motion.div {...fade} className={s.craftImg}>
            <img src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=1200&q=80" alt="Artisan shaping clay" loading="lazy" />
          </motion.div>
          <motion.div {...fade} className={s.craftText}>
            <div className={s.eyebrow} style={{ marginBottom: 16 }}>The Craft</div>
            <h2>Slow craft, in service of beauty.</h2>
            <p>Maati pieces begin with raw earth pulled from regions across India. Wedged, thrown, trimmed and fired across many days, each object carries quiet asymmetries — proof of the hand.</p>
            <p>We work with small studios of artisans who treat ceramic-making as a meditative practice. No two pieces are alike.</p>
            <Link to="/about" style={{ display: 'inline-block', marginTop: 16, padding: '16px 36px', background: '#1C1C1C', color: '#F8F5F1', fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase' }}>Our story</Link>
          </motion.div>
        </div>
      </section>

      <section className={s.section}>
        <motion.div {...fade} className={s.sectionHead}>
          <div className={s.eyebrow}>Bestsellers</div>
          <h2>Loved by our community</h2>
        </motion.div>
        <div className={s.products}>
          {bestSellers.concat(products.slice(0, 4)).slice(0, 4).map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
        </div>
      </section>

      <section className={s.section} style={{ paddingTop: 0 }}>
        <motion.div {...fade} className={s.sectionHead}>
          <div className={s.eyebrow}>New Arrivals</div>
          <h2>Just out of the kiln</h2>
        </motion.div>
        <div className={s.products}>
          {newArrivals.concat(products.slice(4, 8)).slice(0, 4).map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
        </div>
      </section>

      <section className={s.section} style={{ paddingTop: 0 }}>
        <motion.div {...fade} className={s.sectionHead}>
          <div className={s.eyebrow}>Shop by Category</div>
          <h2>Find your form</h2>
        </motion.div>
        <div className={s.cats}>
          {categories.map((c) => (
            <Link key={c.slug} to={`/collections/${c.slug}`} className={s.cat}>
              <div className={s.ring}><img src={c.image} alt={c.name} loading="lazy" /></div>
              <h5>{c.name}</h5><span>Shop now</span>
            </Link>
          ))}
        </div>
      </section>

      <section className={s.story}>
        <div className={s.storyInner}>
          <motion.div {...fade} className={s.storyText}>
            <div className={s.eyebrow} style={{ color: '#D9C2A7' }}>Our Story</div>
            <h2>Maati means earth.</h2>
            <p>Born from a love for slow making and the warm, imperfect beauty of fired clay, Maati is a meditation on the moments we share with everyday objects.</p>
            <p>A brand by ZerOne Enterprises, built by Jagveer, Sarthak Karnwal and Vishal Singh.</p>
            <Link to="/about" className={s.btnLight} style={{ background: '#F8F5F1', color: '#1C1C1C', borderColor: '#F8F5F1' }}>Read our story</Link>
          </motion.div>
          <motion.div {...fade} className={s.storyImg}>
            <img src="https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?w=1200&q=80" alt="Maati craftsmanship" loading="lazy" />
          </motion.div>
        </div>
      </section>

      <section className={s.section}>
        <div className={s.promo}>
          <motion.div {...fade} className={s.promoCard}>
            <img src="https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=1920&q=80" alt="Decor collection" loading="lazy" />
            <div className={s.body}>
              <div className={s.eyebrow} style={{ color: '#D9C2A7' }}>The Decor Edit</div>
              <h2>Sculptural objects for quieter rooms.</h2>
              <p>Vases, planters and bud holders in clay, terracotta and stoneware.</p>
              <Link to="/collections/decor" className={s.btnLight}>Shop decor</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className={s.section} style={{ paddingTop: 0 }}>
        <motion.div {...fade} className={s.sectionHead}>
          <div className={s.eyebrow}>@maati.ceramics</div>
          <h2>From the studio</h2>
        </motion.div>
        <div className={s.insta}>
          {[
            'photo-1610701596007-11502861dcfa', 'photo-1565193566173-7a0ee3dbe261',
            'photo-1612196808214-b8e1d6145a8c', 'photo-1610701596061-2ecf227e85b2',
            'photo-1567459169668-95d355371bda', 'photo-1556910633-5099dc3971e3',
          ].map((id, i) => (
            <a key={i} href="#" className={s.instaItem}>
              <img src={`https://images.unsplash.com/${id}?w=500&q=80`} alt="" loading="lazy" />
            </a>
          ))}
        </div>
      </section>

      <section className={s.section} style={{ paddingTop: 0 }}>
        <motion.div {...fade} className={s.sectionHead}>
          <div className={s.eyebrow}>Kind Words</div>
          <h2>Voices from our home</h2>
        </motion.div>
        <div className={s.testis}>
          {[
            { q: 'Holding a Maati piece feels like holding stillness. The weight, the warmth — it changes the meal.', who: 'Ananya R. · Mumbai' },
            { q: 'I bought one bowl. I now own seven. There is nothing quite like ceramic from the hand.', who: 'Karan M. · Bangalore' },
            { q: 'The packaging alone is a moment. Each piece feels carefully sent into the world.', who: 'Priya S. · Delhi' },
          ].map((t, i) => (
            <motion.div key={i} {...fade} transition={{ duration: 0.7, delay: i * 0.1 }} className={s.testi}>
              <p className={s.quote}>"{t.q}"</p>
              <div className={s.who}>{t.who}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className={s.news}>
        <div className={s.newsInner}>
          <div className={s.eyebrow}>The Maati Letter</div>
          <h2>Receive new pieces in your inbox</h2>
          <p>Quiet notes on craft, kiln releases, and slow living.</p>
          <form onSubmit={onSub}>
            <input type="email" required placeholder="Your email address" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>
    </>
  );
}
