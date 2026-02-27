import React from "react";
import { Card } from "antd";
import "./../../styles/TopSeller.scss";

const { Meta } = Card;

const TopSeller = () => {
  const products = [
    { 
      id: 1, 
      name: "Porcelain Dinner Set", 
      price: 12000, 
      image: "https://imgmediagumlet.lbb.in/media/2021/05/60995a7200e9e605ee4becdf_1620662898234.jpg" 
    },
    { 
      id: 2, 
      name: "Handcrafted Ceramic Vase", 
      price: 8500, 
      image: "https://m.media-amazon.com/images/I/71-PCTeOfYL._UF1000,1000_QL80_.jpg" 
    },
    { 
      id: 3, 
      name: "Luxury Tea Set Collection", 
      price: 9500, 
      image: "https://imgmediagumlet.lbb.in/media/2020/07/5f04958798ad80626b9751ae_1594135943213.jpg" 
    },
    { 
      id: 4, 
      name: "Artisan Ceramic Bowl", 
      price: 7000, 
      image: "https://imgmediagumlet.lbb.in/media/2021/05/60995a7200e9e605ee4becdf_1620662898234.jpg" 
    },
    { 
      id: 5, 
      name: "Premium Serving Platter", 
      price: 11000, 
      image: "https://m.media-amazon.com/images/I/71-PCTeOfYL._UF1000,1000_QL80_.jpg" 
    },
  ];

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(price);
  };

  return (
    <section className="top-seller">
      <div className="heading">
        <h2>Our Top Seller Products</h2>
      </div>
      <div className="products">
        {products.map((product) => (
          <Card
            key={product.id}
            className="product-card"
            hoverable
            cover={<img alt={product.name} src={product.image} />}
          >
            <Meta title={product.name} description={formatPrice(product.price)} />
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TopSeller;
