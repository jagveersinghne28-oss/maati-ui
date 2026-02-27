import React from "react";
import CategoryPage from "../CategoryPage";
import { DINNERWARE } from "../../utils/constant";
const Dinnerware = () => {
  return (
    <div className="sub-collection">
      {/* <h2>Luxury Dinnerware</h2>
      <p>Handcrafted Dinnerware to enhance your dining experience.</p> */}
      <CategoryPage title="Luxury Dinnerware" products={DINNERWARE} />
    </div>
  );
};

export default Dinnerware;
