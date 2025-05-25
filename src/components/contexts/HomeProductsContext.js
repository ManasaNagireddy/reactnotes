import { createContext } from "react";
const HomeProductsContext = createContext({
    products: [],
    allProducts: []
});
export default HomeProductsContext;