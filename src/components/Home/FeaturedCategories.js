import React from "react";
import { Card, Row, Col } from "antd";
import { motion } from "framer-motion";
import "./../../styles/TopSeller.scss";

const { Meta } = Card;

const FeaturedCategories = () => {
const products = [
  { 
    id: 1, 
    name: "Luxury Dinner Set", 
    price: 1200, 
    image: "https://imgmediagumlet.lbb.in/media/2021/05/60995a7200e9e605ee4becdf_1620662898234.jpg" 
  },
  { 
    id: 2, 
    name: "Handcrafted Vase", 
    price: 5000, 
    image: "https://imgmediagumlet.lbb.in/media/2020/07/5f04958798ad80626b9751ae_1594135943213.jpg" 
  },
  { 
    id: 3, 
    name: "Tea Pot", 
    price: 800, 
    image: "https://m.media-amazon.com/images/I/71-PCTeOfYL._UF1000,1000_QL80_.jpg" 
  },
];




  return (
    <section className="top-seller">
      <div className="heading">
        <h2>✨ Featured Categories</h2>
      </div>
      <Row gutter={[24, 24]} justify="center">
        {products.map((product) => (
          <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <Card
                className="product-card"
                hoverable
                cover={<img alt={product.name} src={product.image} />}
              >
                <Meta 
                  title={product.name} 
                  description={`₹${product.price.toLocaleString("en-IN")}`} 
                />
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default FeaturedCategories;
