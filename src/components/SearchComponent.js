import { Input,Button,Flex } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import HomeProductsContext from './contexts/HomeProductsContext';
import  { useContext } from 'react';
const SearchComponent = () => {
	const { products, setProducts, allProducts, setAllProducts } = useContext(HomeProductsContext);
	return (
		<Flex justify="space-between" align="flex-end" className="search-component"  style={{ padding: 10 }}>  		
			<div className="search-bar">
				<Input
					placeholder="Search for food"
					style={{ width: 300 }}
				/>
				<Button type="primary" icon={<SearchOutlined />}>
					Search
				</Button>
			</div>
		<Flex gap={10} className="sort-buttons">
		<Button  color="orange"  variant="solid"   onClick={() => {
			const sortedProducts = [...products].sort((a, b) => b.rating - a.rating);
			setProducts(sortedProducts);
		}}>Sort By Rating </Button>

		<Button color="#4f57cd" variant="solid" onClick={() => {
			const sortedProducts = [...products].sort((a, b) => a.caloriesPerServing - b.caloriesPerServing);
			setProducts(sortedProducts);
		}}>Sort By Calories</Button>	

		<Button color="green"  variant="solid"   onClick={() => {
			const sortedProducts = [...products].sort((a, b) => a.reviewCount - b.reviewCount);
			setProducts(sortedProducts);
		}}>Sort By Review Count</Button>

		<Button  color="danger"  variant="solid"   onClick={() => {
			const sortedProducts = [...products].sort((a, b) => a.name.localeCompare(b.name));
			setProducts(sortedProducts);
		}}>Sort By Name</Button>	

		<Button  variant="solid" color="warning" onClick={() => {
			const filteredProducts = products.filter((product) => product.reviewCount > 4);
			setProducts(filteredProducts);
		}}>
			Filter By Review Count 60
		</Button>
		<Button  variant="solid"  color="dark" onClick={() => {	
			setProducts(allProducts);
		}}>
			All Products
		</Button>
		</Flex>
		</Flex>
	);
}
export default SearchComponent;