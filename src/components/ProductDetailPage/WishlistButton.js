import React, { useState } from "react";
import { Button, message } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import "./../styles/WishlistButton.scss";

const WishlistButton = ({ product,  addToWishlist}) => {
  const [wishlisted, setWishlisted] = useState(false);

  const handleWishlist = () => {
    // TODO: Replace with actual wishlist context or API call
    setWishlisted(!wishlisted);
    if (!wishlisted) {
      message.success(`${product.name} added to wishlist!`);
      addToWishlist(product);
    } else {
      message.info(`${product.name} removed from wishlist!`);
    }

  };

  return (
    <Button
      size="large"
      icon={wishlisted ? <HeartFilled style={{ color: "red" }} /> : <HeartOutlined />}
      onClick={handleWishlist}
      className="wishlist-btn"
    >
      {wishlisted ? "Wishlisted" : "Add to Wishlist"}
    </Button>
  );
};

export default WishlistButton;
