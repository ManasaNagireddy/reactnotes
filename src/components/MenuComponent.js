import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'antd';

const MenuComponent = () => {
  const location = useLocation(); // Get current URL path
  const selectedKey = location.pathname; // E.g. "/about"

  // Map menuItems with JSX labels containing Link
  const menuItems = [
    { key: '/', label: <Link to="/">Home</Link> },
    { key: '/about', label: <Link to="/about">About</Link> },
    { key: '/contact', label: <Link to="/contact">Contact</Link> },
  ];

  return (
    <Menu
      mode="horizontal"
      theme="dark"
      selectedKeys={[selectedKey]}
      items={menuItems}
    />
  );
};

export default MenuComponent;
