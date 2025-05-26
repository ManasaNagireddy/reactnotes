import { Link, useLocation } from 'react-router-dom';
import { Menu,Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';

const MenuComponent = () => {
  const location = useLocation(); // Get current URL path
  const selectedKey = location.pathname; // E.g. "/about"
  const cart = useSelector((state) => state.cart.cartItems); // Access cart items from Redux store
  console.log(cart.length); // Log the cart items to the console for debugging
  // Ensure cart is an array and get its length
  const cartCount = cart.length; // Get the count of items in the cart

  // Map menuItems with JSX labels containing Link
  const menuItems = [
    { key: '/', label: <Link to="/">Home</Link> },
    { key: '/about', label: <Link to="/about">About</Link> },
    { key: '/contact', label: <Link to="/contact">Contact</Link> },
    { key : '/cart' , label : <Link to="/cart">Cart{cartCount ? `(${cartCount})`:''}</Link>},
    { key: '/login', label: <Link to="/login">
       <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
      <Button variant="link"
  style={{
    color: '#45b30f',
    borderColor: '#45b30f'
  }} icon={<UserOutlined  />} iconPosition={"left"}>
            Login
          </Button>
          </div>
    </Link> },
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
