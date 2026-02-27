import React from "react";
import CategoryCard from "./CategoryCard.js";
import IconCard from "./IconCard.js";
import "./styles.scss";

const largeCategories = [
  {
    id: 1,
    label: "Appliances",
    image: "https://imgmediagumlet.lbb.in/media/2021/05/60995a7200e9e605ee4becdf_1620662898234.jpg",
  },
  {
    id: 2,
    label: "Dinnerware",
    image: "https://imgmediagumlet.lbb.in/media/2020/07/5f04958798ad80626b9751ae_1594135943213.jpg",
  },
  {
    id: 3,
    label: "Serveware",
    image: "https://m.media-amazon.com/images/I/71-PCTeOfYL._UF1000,1000_QL80_.jpg",
  },
  {
    id: 4,
    label: "Storage",
    image: "https://imgmediagumlet.lbb.in/media/2021/05/60995a7200e9e605ee4becdf_1620662898234.jpg",
  },
  {
    id: 5,
    label: "Drinkware",
    image: "https://imgmediagumlet.lbb.in/media/2020/07/5f04958798ad80626b9751ae_1594135943213.jpg",
  },
];

const smallCategories = [
  {
    id: 1,
    label: "Larah Gifting",
    icon: require("../../assets/category/Icons_appliances.png"),
  },
  {
    id: 2,
    label: "Exclusive",
    icon: require("../../assets/category/Icons_appliances.png"),
  },
  {
    id: 3,
    label: "Personalise Bottles",
    icon: require("../../assets/category/Icons_appliances.png"),
  },
  {
    id: 4,
    label: "Personalise Glass Jars",
    icon: require("../../assets/category/Icons_appliances.png"),
  },
  {
    id: 5,
    label: "Larah",
    icon: require("../../assets/category/Icons_appliances.png"),
  },
  {
    id: 6,
    label: "Lunch Bags",
    icon: require("../../assets/category/Icons_appliances.png"),
  },
  {
    id: 7,
    label: "Build Your Own Dinnerware",
    icon: require("../../assets/category/Icons_appliances.png"),
  },
  {
    id: 8,
    label: "Premia",
    icon: require("../../assets/category/Icons_appliances.png"),
  },
  {
    id: 9,
    label: "Corporate Program",
    icon: require("../../assets/category/Icons_appliances.png"),
  },
];

const CategoryShowcase = () => {
  return (
    <section className="category-showcase">
      <h2 className="showcase-title">Shop by Category</h2>

      {/* Large category cards */}
      <div className="large-grid">
        {largeCategories.map((cat) => (
          <CategoryCard key={cat.id} image={cat.image} label={cat.label} />
        ))}
      </div>

      {/* Pagination dots */}
      {/* <div className="pagination-dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div> */}

      {/* Small icon cards */}
      <div className="small-grid">
        {smallCategories.map((cat) => (
          <IconCard key={cat.id} icon={cat.icon} label={cat.label} />
        ))}
      </div>
    </section>
  );
};

export default CategoryShowcase;
