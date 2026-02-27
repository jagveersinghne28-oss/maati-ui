import React, { useState } from "react";
import { Button, message } from "antd";
import { ShoppingCartOutlined, CheckOutlined } from "@ant-design/icons";
import "./../styles/AddToCartButton.scss";

const AddToCartButton = ({ product,  addToCart}) => {
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    // TODO: Replace with actual cart context or API call
    setAdded(true);
    message.success(`${product.name} added to cart!`);
     addToCart(product);
  };

  return (
    <Button
      type={added ? "default" : "primary"}
      size="large"
      icon={added ? <CheckOutlined /> : <ShoppingCartOutlined />}
      onClick={handleAddToCart}
      className="add-to-cart-btn"
    >
      {added ? "Added" : "Add to Cart"}
    </Button>
  );
};

export default AddToCartButton;