import React from "react";
import { Layout, Menu, Input, Avatar, Badge } from "antd";
import {
  ShoppingCartOutlined,
  SearchOutlined,
  UserOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./../styles/Header.scss";

const { Header: AntHeader } = Layout;

const Header = () => {
  const handleSearch = (value) => {
    console.log("Searching for:", value);
  };

  return (
    <AntHeader className="header">
      {/* Top row: logo, large search, actions */}
      <div className="header-top">
        <div className="logo">
          <Link to="/">Maati Ceramics</Link>
        </div>

        <div className="search-wrap">
          <Input
            className="search-input"
            placeholder="Search for products, categories and more"
            prefix={<SearchOutlined />}
            onPressEnter={(e) => handleSearch(e.target.value)}
            aria-label="Search products"
          />
        </div>

        <div className="actions">
          <Link to="/contact" className="action contact">
            <PhoneOutlined />
            <span className="action-text">Contact</span>
          </Link>

          <Link to="/cart" className="action cart">
            <Badge count={0} offset={[0, 6]}>
              <ShoppingCartOutlined className="cart-icon" />
            </Badge>
            <span className="action-text">Cart (0)</span>
          </Link>

          <Link to="/account" className="action account">
            <Avatar size="large" icon={<UserOutlined />} />
          </Link>
        </div>
      </div>

      {/* Bottom row: category nav */}
      <div className="header-bottom">
        <Menu mode="horizontal" className="category-menu" selectable={false}>
          <Menu.Item key="appliances">
            <Link to="/collections/appliances">Appliances</Link>
          </Menu.Item>
          <Menu.Item key="dinnerware">
            <Link to="/collections/dinnerware">Dinnerware</Link>
          </Menu.Item>
          <Menu.Item key="serveware">
            <Link to="/collections/serveware">Serveware</Link>
          </Menu.Item>
          <Menu.Item key="storage">
            <Link to="/collections/storage">Storage</Link>
          </Menu.Item>
          <Menu.Item key="drinkware">
            <Link to="/collections/drinkware">Drinkware</Link>
          </Menu.Item>
          <Menu.Item key="bottles">
            <Link to="/collections/bottles">Bottles</Link>
          </Menu.Item>
          <Menu.Item key="lunchboxes">
            <Link to="/collections/lunchboxes">Lunchboxes</Link>
          </Menu.Item>
          <Menu.Item key="cookware">
            <Link to="/collections/cookware">Cookware</Link>
          </Menu.Item>
          <Menu.Item key="homedecor">
            <Link to="/collections/home-decor">Home Decor</Link>
          </Menu.Item>
          <Menu.Item key="spareparts">
            <Link to="/collections/spare-parts">Spare Parts</Link>
          </Menu.Item>

          {/* Deals styled specially */}
          <Menu.Item key="deals" className="deals">
            <Link to="/deals">Deals</Link>
          </Menu.Item>
        </Menu>
      </div>
    </AntHeader>
  );
};

export default Header;
