import React, { useEffect, useState } from "react";
import "./styles/main.scss";
import Header from "./components/Header";
import MainRoute from "./MainRoute";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShrink(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      <Header className={shrink ? "shrink" : ""} />
      <MainRoute />
      <Footer />
    </div>
  );
};

export default App;

