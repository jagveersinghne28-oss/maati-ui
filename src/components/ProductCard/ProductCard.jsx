import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import { App } from 'antd';
import { motion } from 'framer-motion';
import { addToCart } from '../../store/slices/cartSlice';
import { toggleWishlist } from '../../store/slices/wishlistSlice';
import { openCart } from '../../store/slices/uiSlice';
import s from './ProductCard.module.scss';

export default function ProductCard({ product, index = 0 }) {
  const dispatch = useDispatch();
  const { message } = App.useApp();
  const wished = useSelector((st) => st.wishlist.items.some((i) => i.id === product.id));

  const handleAdd = (e) => {
    e.preventDefault(); e.stopPropagation();
    dispatch(addToCart({ id: product.id, slug: product.slug, name: product.name, price: product.price, image: product.images[0] }));
    dispatch(openCart());
  };
  const handleWish = (e) => {
    e.preventDefault(); e.stopPropagation();
    dispatch(toggleWishlist({ id: product.id, slug: product.slug, name: product.name, price: product.price, image: product.images[0] }));
    message.success(wished ? 'Removed from wishlist' : 'Added to wishlist');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.08 }}
    >
      <Link to={`/products/${product.slug}`} className={s.card}>
        <div className={s.imageWrap}>
          {product.badge && (
            <span className={`${s.badge} ${product.oldPrice ? s.badgeSale : ''}`}>
              {product.oldPrice ? 'Sale' : product.badge}
            </span>
          )}
          <div className={s.actions}>
            <button className={`${s.iconBtn} ${wished ? s.active : ''}`} onClick={handleWish} aria-label="Wishlist">
              {wished ? <HeartFilled /> : <HeartOutlined />}
            </button>
          </div>
          <img src={product.images[0]} alt={product.name} className={s.img} loading="lazy" />
          {product.images[1] && <img src={product.images[1]} alt="" className={`${s.img} ${s.imgAlt}`} loading="lazy" />}
          <button className={s.quickAdd} onClick={handleAdd}>Quick Add</button>
        </div>
        <div className={s.info}>
          <div className={s.cat}>{product.category}</div>
          <div className={s.name}>{product.name}</div>
          <div className={s.price}>
            ₹{product.price.toLocaleString('en-IN')}
            {product.oldPrice && <span className={s.old}>₹{product.oldPrice.toLocaleString('en-IN')}</span>}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
