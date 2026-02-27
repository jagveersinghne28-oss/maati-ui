import React from "react";
import { Row, Col, Card, Button, Dropdown, Menu, Tag, Rate } from "antd";
import { DownOutlined, HeartOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "./../styles/CategoryPage.scss";

const CategoryPage = ({ title, products }) => {
  const navigate = useNavigate();

  const filters = [
    { name: "Availability", options: ["In Stock", "Out of Stock"] },
    { name: "Price", options: ["Low to High", "High to Low"] },
    { name: "Color", options: ["White", "Black", "Blue", "Gold"] },
    { name: "Product Type", options: ["Plates", "Vases", "Mugs", "Tea Pots"] },
  ];

  const sortOptions = ["Featured", "Price: Low to High", "Price: High to Low"];

  const menu = (options) => (
    <Menu>
      {options.map((opt, idx) => (
        <Menu.Item key={idx}>{opt}</Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div className="category-page">
      <h1 className="category-title">{title}</h1>

      {/* Filters and Sort */}
      <div className="filter-sort-bar">
        <div className="filters">
          {filters.map((filter) => (
            <Dropdown
              key={filter.name}
              overlay={menu(filter.options)}
              trigger={["click"]}
            >
              <Button className="filter-btn">
                {filter.name} <DownOutlined />
              </Button>
            </Dropdown>
          ))}
        </div>

        <div className="sort">
          <Dropdown overlay={menu(sortOptions)} trigger={["click"]}>
            <Button className="sort-btn">
              Sort by: Featured <DownOutlined />
            </Button>
          </Dropdown>
        </div>
      </div>

      {/* Product Grid */}
      <Row gutter={[24, 24]} className="product-grid">
        {products.map((product) => (
          <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              cover={
                <img
                  alt={product.name}
                  src={product.image}
                  className="product-img"
                  onClick={() => navigate(`/product/${product.id}`)} // Image click works
                />
              }
              className="product-card"
              onClick={() => navigate(`/product/${product.id}`)} // Card click works
            >
              {product.discount && (
                <Tag className="discount-tag">{product.discount}% OFF</Tag>
              )}

              <h3
                className="product-name"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                {product.name}
              </h3>

              <Rate
                disabled
                defaultValue={product.rating || 4}
                className="rating-stars"
              />

              <div className="product-price">
                {product.originalPrice && (
                  <span className="old-price">₹{product.originalPrice}</span>
                )}
                <span className="new-price">₹{product.price}</span>
              </div>

              <div className="card-actions">
                <Button
                  type="primary"
                  className="add-cart-btn"
                  onClick={(e) => {
                    e.stopPropagation(); // ⛔ Prevent card navigation
                    console.log("Added to cart:", product.id);
                  }}
                >
                  Add to Cart
                </Button>
                <Button
                  icon={<HeartOutlined />}
                  className="wishlist-btn"
                  onClick={(e) => {
                    e.stopPropagation(); // ⛔ Prevent card navigation
                    console.log("Added to wishlist:", product.id);
                  }}
                />
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CategoryPage;
