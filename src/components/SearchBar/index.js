import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./style.scss";

const SearchBar = ({ onSearch }) => {
  const handleSearch = (value) => {
    if (onSearch && value.trim() !== "") {
      onSearch(value.trim());
    }
  };

  return (
    <div className="search-bar">
      <Input
        placeholder="Search products..."
        allowClear
        onPressEnter={(e) => handleSearch(e.target.value)}
        suffix={<SearchOutlined />}
        className="search-bar__input"
      />
    </div>
  );
};

export default SearchBar;
