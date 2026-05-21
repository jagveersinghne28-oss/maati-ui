import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { App } from 'antd';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard/ProductCard';
import { getProductBySlug, products } from '../data/products';
import { addToCart } from '../store/slices/cartSlice';
import { toggleWishlist } from '../store/slices/wishlistSlice';
import { openCart } from '../store/slices/uiSlice';
import s from '../styles/pages.module.scss';

export default function Product() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const dispatch = useDispatch();
  const { message } = App.useApp();
  const wished = useSelector((st) => product && st.wishlist.items.some((i) => i.id === product.id));
  const [active, setActive] = useState(0);
  const [qty, setQty] = useState(1);

  if (!product) return <div className={s.page}><div className={s.empty}><h3>Piece not found.</h3><Link to="/collections">Back to collections</Link></div></div>;

  const add = () => {
    dispatch(addToCart({ id: product.id, slug: product.slug, name: product.name, price: product.price, image: product.images[0], qty }));
    dispatch(openCart());
  };
  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className={s.page}>
      <div className={s.crumb}><Link to="/">Home</Link> / <Link to={`/collections/${product.category}`}>{product.category}</Link> / {product.name}</div>
      <div className={s.pdp}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className={s.gallery}>
          <div className={s.thumbs}>
            {product.images.map((img, i) => (
              <button key={i} className={i === active ? s.active : ''} onClick={() => setActive(i)}>
                <img src={img} alt="" />
              </button>
            ))}
          </div>
          <div className={s.mainImg}><img src={product.images[active]} alt={product.name} /></div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className={s.details}>
          <div className={s.cat}>{product.category}{product.badge ? ` · ${product.badge}` : ''}</div>
          <h1>{product.name}</h1>
          <div className={s.price}>
            ₹{product.price.toLocaleString('en-IN')}
            {product.oldPrice && <span className={s.old}>₹{product.oldPrice.toLocaleString('en-IN')}</span>}
          </div>
          <p className={s.desc}>{product.description}</p>
          <div className={s.qtyRow}>
            <div className={s.qty}>
              <button onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
              <span>{qty}</span>
              <button onClick={() => setQty(qty + 1)}>+</button>
            </div>
            <button className={s.btnPrimary} onClick={add}>Add to bag</button>
            <button onClick={() => { dispatch(toggleWishlist({ id: product.id, slug: product.slug, name: product.name, price: product.price, image: product.images[0] })); message.success(wished ? 'Removed from wishlist' : 'Added to wishlist'); }} aria-label="Wishlist" style={{ width: 48, height: 48, border: '1px solid #1C1C1C', color: '#1C1C1C', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              {wished ? <HeartFilled /> : <HeartOutlined />}
            </button>
          </div>
          <button className={s.btnBuy} onClick={add}>Buy it now</button>
          <div className={s.specs}>
            <h5>Specifications</h5>
            <dl>
              {Object.entries(product.specs || {}).map(([k, v]) => (
                <span key={k} style={{ display: 'contents' }}>
                  <dt>{k.charAt(0).toUpperCase() + k.slice(1)}</dt>
                  <dd>{v}</dd>
                </span>
              ))}
            </dl>
          </div>
          <div className={s.specs}>
            <h5>Handmade Notes</h5>
            <p style={{ fontSize: 14 }}>Each piece is shaped, fired and finished by hand. Tiny irregularities are evidence of the maker — never defects.</p>
          </div>
          <div className={s.specs}>
            <h5>Shipping</h5>
            <p style={{ fontSize: 14 }}>Free shipping on orders above ₹2,500. Pieces ship within 3–5 business days, securely packed in recyclable materials.</p>
          </div>
        </motion.div>
      </div>

      <div className={s.related}>
        <div className={s.pageHead}><div className={s.eyebrow}>You may also love</div><h2>Related pieces</h2></div>
        <div className={s.grid}>
          {related.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
        </div>
      </div>
    </div>
  );
}
