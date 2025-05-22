// File: App.js
// Description: This is a simple React application that renders a header, menu, and content area.
import React from "react";
import ReactDOM from "react-dom/client";
//HederComponent
//BodyComponent
//FooterComponent
const HeaderComponent = () => {
    return (
        <div>
            <img className="logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Noodles.png" alt="Manasa-Logo" />
        </div>
    );
};
const MenuComponent = () => {
    return (
        <div>
            <ul className="menu">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    );
};	
const FooterComponent = () => {
    return (
        <div className="footer">
            <p>Copyright @ 2025</p>
        </div>
    );
};
const Allproducts = () => {


}
const FoodComponent = ({logo,price,rating,deliverytime}) => {
    //const {logo, price, rating, deliverytime} = props;
    return (
        <div className="food-card">
            <p>Mefial Restruent</p>
            <img className="food-image" src="{logo}" alt="Food" />
            <p>Price: {price}</p>
            <p>Rating: {rating}</p>
            <p>Delivery Time: {deliverytime}</p>
        </div>
    );
};
const SearchComponent = () => {
    return (

        <div className="search">
            <input type="text" placeholder="Search for food" />
            <button>Search</button>
        </div>
    );
}
const AppLayout = () => {
    return (
        <div>
            <div className="header">
                <HeaderComponent />
                <MenuComponent />
            </div>
            <div className="content">
                <SearchComponent/>
                <div className="food-list">

                <FoodComponent logo="" price="12" rating="3"/>
                
                </div>
            </div>
            <FooterComponent/>
        </div>
    );
}
var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);