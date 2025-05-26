import FoodComponent from "./FoodComponent";
import React, { useEffect,useState,useContext } from "react";
import { Row,Col,Spin  } from "antd";
import HomeProductsContext from "./contexts/HomeProductsContext";
import ReviewFoodComponent from "./ReviewFoodComponent";
import { useState } from "react";
import { Link } from "react-router-dom";
const FooListComponent = () => {
		const { products , allProducts} = useContext(HomeProductsContext); // Assuming listProducts is passed as a prop
		const [loading, setLoading] = useState(true);
		useEffect(() => {
			if (allProducts.length > 0) {
				setLoading(false);
			}
		}, [allProducts]);
		
return(	
	<>
		<Spin spinning={loading}>
			<Row  gutter={[16, 24]} className="food-list">
				{products.map ((product) => (					
					<Col span={4} key={product.id} className="food-col">
						<Link to={`/product/${product.id}`} key={product.id} className="food-link">
								{product.reviewCount > 60 ? (
									<ReviewFoodComponent {...product} />
								) : 	<FoodComponent {...product}	/>}
						</Link>
					</Col>					
				))}
			</Row>
		</Spin>
	</>
)

   }

   export default FooListComponent;