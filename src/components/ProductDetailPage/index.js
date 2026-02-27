import React, { useState } from "react";
import { Row, Col, Card, Button, Rate, Tabs, Tag } from "antd";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import "./../styles/ProductDetailPage.scss";
import { DINNERWARE } from "../../utils/constant";
import { useParams } from "react-router-dom";
import AddToCartButton from "./AddToCartButton";
import WishlistButton from "./WishlistButton";
import { useCart } from "../../context/CartContext";

const { TabPane } = Tabs;

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = DINNERWARE.find((prd) => prd.id == id);
  const { addToCart, addToWishlist } = useCart();

  // Maintain selected image state
  const [selectedImage, setSelectedImage] = useState(product.image);

  return (
    <div className="product-detail-page">
      <Row gutter={[32, 32]}>
        {/* Left: Images */}
        <Col xs={24} md={10} className="image-section">
          <Card className="main-image-card">
            <img
              src={selectedImage}
              alt={product.name}
              className="main-image"
            />
            {product.discount && (
              <Tag className="discount-tag">{product.discount}% OFF</Tag>
            )}
          </Card>

          {/* Thumbnail Images */}
          <div className="thumbnail-row">
            {[product.image, ...(product.additionalImages || [])].map(
              (img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`thumb-${idx}`}
                  className={`thumbnail ${
                    selectedImage === img ? "active" : ""
                  }`}
                  onClick={() => setSelectedImage(img)}
                />
              )
            )}
          </div>
        </Col>

        {/* Right: Product Info */}
        <Col xs={24} md={14} className="info-section">
          <h1 className="product-name">{product.name}</h1>
          <p className="short-desc">{product.shortDescription}</p>

          <div className="rating-section">
            <Rate disabled defaultValue={product.rating} />
            <span className="rating-text">
              {product.rating} / 5 ({product.totalRatings} ratings)
            </span>
          </div>

          {/* Price */}
          <div className="price-section">
            {product.originalPrice && (
              <span className="old-price">₹{product.originalPrice}</span>
            )}
            <span className="new-price">₹{product.price}</span>
          </div>

          {/* Action Buttons */}
          <div className="action-buttons">
            <AddToCartButton product={product} addToCart={addToCart}/>
            <WishlistButton product={product} addToWishlist={addToWishlist}/>
          </div>

          {/* Tabs for Details & Reviews */}
          <Tabs defaultActiveKey="1" className="product-tabs">
            <TabPane tab="Description" key="1">
              <div style={{ height: "15rem", overflow: "auto" }}>
                <p>{product.description}</p>
              </div>
            </TabPane>
            <TabPane tab="Customer Reviews" key="2">
              <div style={{ height: "15rem", overflow: "auto" }}>
                {product.reviews?.map((rev, idx) => (
                  <div key={idx} className="review-card">
                    <h4>{rev.name}</h4>
                    <Rate disabled defaultValue={rev.rating} />
                    <p>{rev.comment}</p>
                  </div>
                ))}
              </div>
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetailPage;
