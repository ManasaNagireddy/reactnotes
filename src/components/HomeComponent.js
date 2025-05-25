import ReactDOM from "react-dom/client";
import HeaderComponent from "./common/HeaderComponent";
import SearchComponent from "./SearchComponent";
import mockData from "./utils/MockData";
import FoodListComponent from "./FoodListComponent";
import HomeProductsContext from "./contexts/HomeProductsContext";
import React, { useState } from "react";

//HederComponent
//BodyComponent
const HomeComponent = () => {
	const homeproducts = mockData.recipes;
	const [products, setProducts] = useState(homeproducts);
	const [allProducts, setAllProducts] = useState(homeproducts); // Original products
	console.log("homeproducts", allProducts);
	console.log(products);
	return (	
			<HomeProductsContext.Provider value={{ products , allProducts , setProducts, setAllProducts}}>
				<div className="content">
					<SearchComponent />
					<FoodListComponent />
				</div>
			</HomeProductsContext.Provider>
	);
}
export default HomeComponent;