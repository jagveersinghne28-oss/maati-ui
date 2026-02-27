import React from "react";
import PriceRangeCard from "./PriceRangeCard";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";

const items = [
  { variant: "brown", amount: "₹299" },
  { variant: "red", amount: "₹499" },
  { variant: "dark", amount: "₹799" },
  { variant: "green", amount: "₹999" },
];

const PriceRanges = () => {
  return (
        <section className="top-seller">
      <div className="heading">
        <h3>Shop Your Price Range</h3>
      </div>
      <div className="products">
        {items.map((client) => (
          // <Card
          //   key={client.id}
          //   className="product-card"
          //   hoverable
          //   // cover={
          //   //   <img
          //   //     alt={product.name}
          //   //     src={product.image}
          //   //   />
          //   // }
          // >
          //   <Meta description={client.name} />
          // </Card>
          <PriceRangeCard variant={client.variant} amount={client.amount} />
        ))}
      </div>
    </section>
  );
};

export default PriceRanges;