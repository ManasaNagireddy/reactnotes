import FoodComponent from "./FoodComponent";
import React, { useEffect,useState,useContext } from "react";
import { Row,Col } from "antd";
import HomeProductsContext from "./contexts/HomeProductsContext";
const FooListComponent = () => {
		const { products , allProducts} = useContext(HomeProductsContext); // Assuming listProducts is passed as a prop

return(
	
	<>
	{console.log("products", allProducts)}
		<Row gutter={[16, 24]} className="food-list">
			{products.map ((product) => (
				 <Col span={4} key={product.id} className="food-col">
				<FoodComponent {...product}	/>
				</Col>
			))}
		</Row>
	</>
)

   }

   export default FooListComponent;