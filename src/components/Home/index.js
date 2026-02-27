import React from "react";
import ProductList from "./TopSeller";
import "./style.scss";
import Hero from "./Hero";
import FeaturedCategories from "./FeaturedCategories";
import OurClients from "./OurClients";
import PriceRanges from "../PriceRange";
import CategoryShowcase from "../CategoryShowcase";

const Home = () => {
  return (
    <>
    <Hero />
    <PriceRanges />
    {/* <FeaturedCategories /> */}
    <CategoryShowcase />
    <ProductList />
    <OurClients />
    </>
  );
};

export default Home;

