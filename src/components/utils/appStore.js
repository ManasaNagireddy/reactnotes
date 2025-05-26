import { configureStore } from "@reduxjs/toolkit";
import cartReducer from  "./CartSlice"; // Adjust the import path as necessary
export const store= configureStore ({
    reducer : {
       cart: cartReducer
    }
});