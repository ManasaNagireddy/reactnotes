import FoodComponent from "./FoodComponent";
import React, { useEffect,useState } from "react";
const FooListComponent = ({ listProducts }) => {
    	const [products, setProducts] = useState(listProducts);
	    const [allProducts, setAllProducts] = useState(listProducts); // Original products
return(
	<>
		<button className="btn" onClick={() => {
			const sortedProducts = [...products].sort((a, b) => b.rating - a.rating);
			setProducts(sortedProducts);
		}}>Sort By Rating </button>

		<button className="btn" onClick={() => {
			const sortedProducts = [...products].sort((a, b) => a.caloriesPerServing - b.caloriesPerServing);
			setProducts(sortedProducts);
		}}>Sort By Calories</button>	

		<button className="btn" onClick={() => {
			const sortedProducts = [...products].sort((a, b) => a.reviewCount - b.reviewCount);
			setProducts(sortedProducts);
		}}>Sort By Review Count</button>

		<button className="btn" onClick={() => {
			const sortedProducts = [...products].sort((a, b) => a.name.localeCompare(b.name));
			setProducts(sortedProducts);
		}}>Sort By Name</button>	

		<button className="btn" onClick={() => {
			const filteredProducts = products.filter((product) => product.reviewCount > 60);
			setProducts(filteredProducts);
		}}>
			Filter By Review Count 60
		</button>
		<button className="btn" onClick={() => {	
			setProducts(allProducts);
		}}>
			All Products
		</button>

		<div className="food-list">
			{products.map ((product) => (
				<FoodComponent
					key={product.id}
					id={product.id}
					name={product.name}
					logo={product.image}
					reviewCount={product.reviewCount}
					rating={product.rating}
					caloriesPerServing={product.caloriesPerServing}
				/>
			))}
		</div>
	</>
)
   }

   export default FooListComponent;