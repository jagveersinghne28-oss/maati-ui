import { useState } from 'react';
import { Input, App } from 'antd';
import { motion } from 'framer-motion';
import s from '../styles/pages.module.scss';

const fade = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.7 } };

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const { message } = App.useApp();
  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return message.error('Please complete the form.');
    message.success('Thank you. We will be in touch soon.');
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className={s.page}>
      <div className={s.pageHead}>
        <div className={s.eyebrow}>Contact</div>
        <h1>Say hello</h1>
        <p>For orders, custom commissions or studio visits — we would love to hear from you.</p>
      </div>
      <div className={s.contact}>
        <motion.div {...fade} className={s.contactInfo}>
          <div className={s.eyebrow}>Reach the studio</div>
          <h2>Maati</h2>
          <p>A ZerOne Enterprises Brand. Handcrafted ceramic pieces, shipped across India.</p>
          <div className={s.block}>
            <h5>Phone</h5>
            <a href="tel:+917017735070">+91 7017735070</a>
          </div>
          <div className={s.block}>
            <h5>Email</h5>
            <a href="mailto:hello@maati.in">hello@maati.in</a>
          </div>
          <div className={s.block}>
            <h5>Business Hours</h5>
            <p>Monday — Saturday<br />10:00 AM — 7:00 PM IST</p>
          </div>
          <div className={s.block}>
            <h5>Follow</h5>
            <div className={s.social}>
              <a href="#">Instagram</a><a href="#">Pinterest</a><a href="#">Facebook</a>
            </div>
          </div>
        </motion.div>
        <motion.div {...fade} className={s.contactForm}>
          <h3>Send a message</h3>
          <form onSubmit={submit}>
            <div className={s.grid}>
              <Input size="large" placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              <Input size="large" placeholder="Email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              <div className={s.full}><Input size="large" placeholder="Subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} /></div>
              <div className={s.full}><Input.TextArea rows={5} placeholder="Your message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} /></div>
            </div>
            <button type="submit" className={s.btn}>Send message</button>
          </form>
        </motion.div>
      </div>
      <div className={s.map}>
        <iframe title="Maati Studio Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.354!2d77.5945627!3d28.6139391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sIndia!5e0!3m2!1sen!2sin!4v1700000000000" loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" />
      </div>
    </div>
  );
}
