import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Flex, Card } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addToCart,removeFromCart } from "./utils/CartSlice.js"; 
import CarouselComponent from "./common/CarouselComponent"; 
import ReviewComponent from "./common/ReviewComponent.js";
const ProductDetailComponent = () => {
  const { productid } = useParams();
  const [info, setInfo] = useState(null);
  const cart = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch(); // ✅ Move useDispatch to top-level

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${productid}`);
        const data = await response.json();
        setInfo(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    if (productid) {
      fetchProductDetails();
    }
  }, [productid]);

  const addtoCartItem = (pinfo) => {
    if (pinfo) {
      dispatch(addToCart(pinfo)); // ✅ Proper usage
    }
  };

  return (
    <>
    <Card>
      <Flex wrap="wrap" justify="center" style={{ margin: "20px 0", position: "relative", zIndex: 0 }}>
        <Flex style={{ width: '50%', zIndex: 0 }}>
          <CarouselComponent items={info ? info.images : []} />
        </Flex>
        <Flex style={{ width: '50%', padding: '20px', zIndex: 1 }}>
          {info ? (
            <div>
              <h2>{info.title}</h2>
              <p>{info.description}</p>
              <p><strong>Price:</strong> ${info.price}</p>
              <button onClick={() => addtoCartItem(info)}>Add to Cart</button>
            </div>
          ) : (
            <p>Loading product details...</p>
          )}
        </Flex>
      </Flex>
    </Card>
    <Card style={{ marginTop: "2px" }}>
        <ReviewComponent initialReviews={info?.reviews || [] } />
    

      </Card>
    </>
  );
};

export default ProductDetailComponent;