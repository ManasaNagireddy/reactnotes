import React, { useEffect, useState, useContext } from "react";
import { Row, Col, Spin } from "antd";
import { Link } from "react-router-dom";
import HomeProductsContext from "./contexts/HomeProductsContext";
import FoodComponent from "./FoodComponent";
import ReviewFoodComponent from "./ReviewFoodComponent";

const FooListComponent = () => {
  const { products, allProducts } = useContext(HomeProductsContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (allProducts.length > 0) {
      setLoading(false);
    }
  }, [allProducts]);

  return (
    <Spin spinning={loading}>
      <Row gutter={[16, 24]} className="food-list" style={{ padding: 16 }}>
        {products.map((product) => (
          <Col
            xs={24}
            sm={12}
            md={8}
            lg={6}
            xl={4}
            key={product.id}
            className="food-col"
          >
          
              {product.rating > 4 ? (
                <ReviewFoodComponent {...product} />
              ) : (
                <FoodComponent {...product} />
              )}
          
          </Col>
        ))}
      </Row>
    </Spin>
  );
};

export default FooListComponent;