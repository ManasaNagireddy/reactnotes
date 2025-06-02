import ReactDOM from "react-dom/client";
import HeaderComponent from "./common/HeaderComponent";
import SearchComponent from "./SearchComponent";
import FoodListComponent from "./FoodListComponent";
import HomeProductsContext from "./contexts/HomeProductsContext";
import React, { useEffect, useState } from "react";
import SliderComponent from "./common/SliderComponent";
import { useSelector } from 'react-redux';


const HomeComponent = () => {
    const [products, setProducts] = useState([]);
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/products`);
                const data = await response.json();
                setProducts(data.products);
                setAllProducts(data.products);
            } catch (error) {
                console.error("Error fetching product details:", error);
            }
        };

        fetchProducts();
    }, []);
    const cart = useSelector((store) => store.cart);


    const handletoaddcart = () => {
        console.log(this);
    }
    return (
        <div>
            <SliderComponent />
            <HomeProductsContext.Provider value={{ products, allProducts, setProducts, setAllProducts }}>
                <div className="content">
                    <SearchComponent />
                    <FoodListComponent />
                </div>
            </HomeProductsContext.Provider>
        </div>
    );
};

export default HomeComponent;
