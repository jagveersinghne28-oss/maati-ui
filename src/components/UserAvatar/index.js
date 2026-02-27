import { Avatar, Dropdown, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "./style.scss";

const UserAvatar = ({ name = "Guest", imageUrl = "" }) => {
  const menu = (
    <Menu>
      <Menu.Item key="profile">Profile</Menu.Item>
      <Menu.Item key="orders">My Orders</Menu.Item>
      <Menu.Item key="logout">Logout</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <div className="user-avatar">
        <Avatar
          size="large"
          src={imageUrl || null}
          icon={!imageUrl && <UserOutlined />}
          className="user-avatar__circle"
        />
        {/* <span className="user-avatar__name">{name}</span> */}
      </div>
    </Dropdown>
  );
};

export default UserAvatar;
