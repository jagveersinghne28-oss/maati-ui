// Maati — ceramic catalog (unique imagery per piece)
const u = (id, w = 800) => `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`;

// Each product gets two distinct hero images so hover-swap and PLPs feel different.
export const categories = [
  { slug: 'dining',    name: 'Dining',             description: 'Plates, bowls and dinnerware crafted in earthen tones.', image: u('photo-1610701596007-11502861dcfa') },
  { slug: 'serveware', name: 'Serveware',          description: 'Platters and serving vessels for slow gatherings.',      image: u('photo-1567459169668-95d355371bda') },
  { slug: 'decor',     name: 'Decor',              description: 'Sculptural vases and objects for the modern home.',      image: u('photo-1612196808214-b8e1d6145a8c') },
  { slug: 'handmade',  name: 'Handmade Ceramics',  description: 'One-of-a-kind pieces shaped by artisan hands.',           image: u('photo-1565193566173-7a0ee3dbe261') },
];

export const products = [
  // Dining
  { id: 'p1', slug: 'terra-dinner-plate',  name: 'Terra Dinner Plate',  category: 'dining', price: 1450, oldPrice: 1850, badge: 'Bestseller',
    images: [u('photo-1610701596007-11502861dcfa'), u('photo-1603199506016-b9a594b593c0')],
    description: 'Hand-thrown stoneware in matte clay finish. Each plate carries the gentle imprint of the maker.',
    specs: { material: 'Stoneware', diameter: '26 cm', finish: 'Matte glaze', safe: 'Microwave & dishwasher safe' } },
  { id: 'p2', slug: 'sand-pasta-bowl',     name: 'Sand Pasta Bowl',     category: 'dining', price: 1250,
    images: [u('photo-1610701596061-2ecf227e85b2'), u('photo-1578749556568-bc2c40e68b61')],
    description: 'Wide-rimmed bowl finished in a soft sand glaze.',
    specs: { material: 'Stoneware', diameter: '24 cm', finish: 'Soft sand', safe: 'Dishwasher safe' } },
  { id: 'p9', slug: 'noor-side-plate',     name: 'Noor Side Plate',     category: 'dining', price: 890,
    images: [u('photo-1603199506016-b9a594b593c0'), u('photo-1610701596007-11502861dcfa')],
    description: 'A small plate with a quiet, sand-toned glaze.',
    specs: { material: 'Stoneware', diameter: '20 cm', finish: 'Matte' } },
  { id: 'p13', slug: 'kaya-cereal-bowl',   name: 'Kaya Cereal Bowl',    category: 'dining', price: 1090, badge: 'New',
    images: [u('photo-1530973428-5bf2db2e4d71'), u('photo-1610701596061-2ecf227e85b2')],
    description: 'A deep cereal bowl in toasted oat glaze.',
    specs: { material: 'Earthenware', diameter: '15 cm', finish: 'Toasted oat' } },

  // Serveware
  { id: 'p3', slug: 'ember-serving-platter', name: 'Ember Serving Platter', category: 'serveware', price: 2890, badge: 'New',
    images: [u('photo-1567459169668-95d355371bda'), u('photo-1581375383680-903ac6386f1b')],
    description: 'Oval platter built for slow meals and warm light.',
    specs: { material: 'Earthenware', length: '40 cm', finish: 'Reactive glaze' } },
  { id: 'p4', slug: 'kiln-tea-set',          name: 'Kiln Tea Set',          category: 'serveware', price: 3450, oldPrice: 3990, badge: 'Bestseller',
    images: [u('photo-1556910633-5099dc3971e3'), u('photo-1545239351-1141bd82e8a6')],
    description: 'Pot and four cups in volcanic stoneware.',
    specs: { material: 'Stoneware', pieces: '5', finish: 'Volcanic ash' } },
  { id: 'p10', slug: 'rooh-carafe',          name: 'Rooh Carafe',           category: 'serveware', price: 1950, badge: 'New',
    images: [u('photo-1551024709-8f23befc6f87'), u('photo-1567459169668-95d355371bda')],
    description: 'A water carafe shaped for the dinner table.',
    specs: { material: 'Stoneware', volume: '1.1 L', finish: 'Speckled' } },
  { id: 'p14', slug: 'aatma-gravy-boat',     name: 'Aatma Gravy Boat',      category: 'serveware', price: 1690,
    images: [u('photo-1581375383680-903ac6386f1b'), u('photo-1556910633-5099dc3971e3')],
    description: 'Hand-poured gravy vessel with a long, easy spout.',
    specs: { material: 'Stoneware', volume: '400 ml', finish: 'Matte cream' } },

  // Decor
  { id: 'p5', slug: 'maati-vase-tall',     name: 'Maati Vase — Tall',   category: 'decor', price: 4200, badge: 'Handmade',
    images: [u('photo-1612196808214-b8e1d6145a8c'), u('photo-1602143407151-7111542de6e8')],
    description: 'Sculptural vase thrown on the wheel and left unglazed at the foot.',
    specs: { material: 'Terracotta', height: '42 cm', finish: 'Half-glazed' } },
  { id: 'p6', slug: 'clay-incense-holder', name: 'Clay Incense Holder', category: 'decor', price: 690,
    images: [u('photo-1582582494700-7f3acdf57b86'), u('photo-1612196808214-b8e1d6145a8c')],
    description: 'A small ritual object for quiet mornings.',
    specs: { material: 'Terracotta', height: '6 cm', finish: 'Unglazed' } },
  { id: 'p11', slug: 'mitti-planter',      name: 'Mitti Planter',       category: 'decor', price: 1490,
    images: [u('photo-1602143407151-7111542de6e8'), u('photo-1604762524889-3e2fcc145683')],
    description: 'An unglazed planter that breathes with your plants.',
    specs: { material: 'Terracotta', diameter: '22 cm', finish: 'Unglazed' } },
  { id: 'p15', slug: 'dhara-candle-holder', name: 'Dhara Candle Holder', category: 'decor', price: 980, badge: 'New',
    images: [u('photo-1604762524889-3e2fcc145683'), u('photo-1582582494700-7f3acdf57b86')],
    description: 'A grooved holder for taper candles and quiet light.',
    specs: { material: 'Stoneware', height: '8 cm', finish: 'Smoke grey' } },

  // Handmade
  { id: 'p7', slug: 'artisan-mug-pair',    name: 'Artisan Mug — Pair',  category: 'handmade', price: 1690, badge: 'Bestseller',
    images: [u('photo-1565193566173-7a0ee3dbe261'), u('photo-1556910633-5099dc3971e3')],
    description: 'Two mugs, never identical. Shaped by hand on the wheel.',
    specs: { material: 'Stoneware', volume: '280 ml', finish: 'Wax resist' } },
  { id: 'p8', slug: 'wabi-bowl-set',       name: 'Wabi Bowl Set',       category: 'handmade', price: 2390,
    images: [u('photo-1545239351-1141bd82e8a6'), u('photo-1565193566173-7a0ee3dbe261')],
    description: 'A set of four nesting bowls in mixed earth tones.',
    specs: { material: 'Stoneware', pieces: '4', finish: 'Mixed glazes' } },
  { id: 'p12', slug: 'studio-bud-vase',    name: 'Studio Bud Vase',     category: 'handmade', price: 780,
    images: [u('photo-1602143407151-7111542de6e8'), u('photo-1612196808214-b8e1d6145a8c')],
    description: 'A tiny vase for a single stem.',
    specs: { material: 'Stoneware', height: '12 cm', finish: 'Brushed' } },
  { id: 'p16', slug: 'rasa-ceremonial-cup', name: 'Rasa Ceremonial Cup', category: 'handmade', price: 1290, badge: 'Handmade',
    images: [u('photo-1556910633-5099dc3971e3'), u('photo-1545239351-1141bd82e8a6')],
    description: 'A small, footed cup for tea ceremonies.',
    specs: { material: 'Stoneware', volume: '120 ml', finish: 'Iron oxide' } },
];

export const getProductBySlug = (slug) => products.find((p) => p.slug === slug);
export const getProductsByCategory = (cat) => products.filter((p) => p.category === cat);
export const bestSellers = products.filter((p) => p.badge === 'Bestseller');
export const newArrivals = products.filter((p) => p.badge === 'New');
