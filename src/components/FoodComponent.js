import {
  Card,
  Button,
  Tooltip,
  Row,
  Col,
  Typography,
  Space,
  Divider,
  MessageOutlined,
  message
} from 'antd';
import {
  HeartOutlined,
  ShoppingCartOutlined,
  SyncOutlined,
  DollarOutlined,
  PercentageOutlined,
  StarOutlined,
  FireOutlined,
  MessageOutlined,
} from '@ant-design/icons';

import { useDispatch } from 'react-redux';
import { addToCart } from './utils/CartSlice';
import { useNavigate } from 'react-router-dom';
const { Text } = Typography;
const { Meta } = Card;

const FoodComponent = ({
  id,
  thumbnail,
  reviewCount,
  title,
  rating,
  caloriesPerServing,
  price,
  discountPercentage,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    dispatch(addToCart({ id, title, thumbnail, price }));
    message.success(`${title} added to cart!`);
  };

  const handleWishlist = (e) => {
    e.stopPropagation();
    message.success(`${title} added to wishlist!`);
  };

  const handleCompare = (e) => {
    e.stopPropagation();
    message.success(`${title} added to compare!`);
  };

  const handleNavigate = () => {
    navigate(`/product/${id}`);
  };
  return (
    <Card
      className="food-card"
      key={id}
       onClick={handleNavigate}
      hoverable
      cover={
        <div className="image-container" style={{ position: 'relative' }}>
          <img
            alt={title}
            src={thumbnail}
            style={{ width: '100%', height: '200px', objectFit: 'cover' }}
          />
          <Tooltip title="Add to Wishlist">
            <HeartOutlined
              className="wishlist-icon"
                onClick={handleWishlist}
              style={{
                position: 'absolute',
                top: 10,
                right: 10,
                fontSize: '20px',
                color: '#f5222d',
                background: '#fff',
                borderRadius: '50%',
                padding: '5px',
              }}
            />
          </Tooltip>
        </div>
      }
    >
      <Meta title={title} />
      <Divider style={{ margin: '10px 0' }} />
      <Space direction="vertical" size="small" style={{ width: '100%' }}>
        <Text strong>
          <DollarOutlined /> Price: <Text type="success">${price}</Text>
        </Text>
        <Text strong>
          <PercentageOutlined /> Discount:{' '}
          <Text type="danger">{discountPercentage}%</Text>
        </Text>
        <Text strong>
          <MessageOutlined /> Reviews: <Text>{reviewCount}</Text>
        </Text>
        <Text strong>
          <StarOutlined /> Rating:{' '}
          <Text type="warning">{rating} / 5</Text>
        </Text>
        <Text strong>
          <FireOutlined /> Calories: <Text>{caloriesPerServing} kcal</Text>
        </Text>
      </Space>

      <Row gutter={10} style={{ marginTop: 10 }}>
        <Col>
          <Tooltip title="Compare">
            <Button icon={<SyncOutlined />} />
          </Tooltip>
        </Col>
        <Col>
          <Tooltip title="Add to Cart">
            <Button
              type="primary"
              icon={<ShoppingCartOutlined />}
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          </Tooltip>
        </Col>
      </Row>
    </Card>
  );
};

export default FoodComponent;
