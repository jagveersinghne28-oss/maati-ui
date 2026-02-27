import React from "react";
import { Row, Col, Card } from "antd";
import "./../../styles/TopSeller.scss";

const { Meta } = Card;

const OurClients = () => {
  const clients = [
    { id: 1, name: "User 1", comment: "Since you're planning to build the website yourself, I can generate a starter template with a React frontend and a Node.js backend for your e-commerce website." },
    { id: 2, name: "User 1", comment: "Since you're planning to build the website yourself, I can generate a starter template with a React frontend and a Node.js backend for your e-commerce website." },
    { id: 3, name: "User 1", comment: "Since you're planning to build the website yourself, I can generate a starter template with.." },
    { id: 4, name: "User 1", comment: "Since you're planning to build the website yourself, React frontend and a Node.js backend for your e-commerc" },
  ];

  // generate a soft pastel color per id (deterministic)
  const pastelForId = (id) => {
    // use golden-angle-ish spacing so ids map to different hues
    const hue = (id * 137) % 360;
    // use high lightness for a soft background
    return `hsl(${hue} 65% 90%)`;
  };

  return (
    <section className="top-seller">
      <div className="heading">
        <h2>Our Trusted Clients</h2>
      </div>
      <div className="products">
        {clients.map((client) => {
          const bg = pastelForId(client.id);
          const textColor = "#222"; // dark text for contrast on soft bg
          return (
            <Card
              key={client.id}
              className="product-card"
              hoverable
              style={{ backgroundColor: bg, color: textColor }}
            >
              <Meta
                title={<span style={{ color: textColor }}>{client.name}</span>}
                description={<span style={{ color: textColor }}>{client.comment}</span>}
              />
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default OurClients;
