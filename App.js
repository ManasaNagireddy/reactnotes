// File: App.js
// Description: This is a simple React application that renders a header, menu, and content area.

import ReactDOM from "react-dom/client";
import HeaderComponent from "./src/components/HeaderComponent";
import MenuComponent from "./src/components/MenuComponent";
import SearchComponent from "./src/components/SearchComponent";
import FoodComponent from "./src/components/FoodComponent";
import FooterComponent from "./src/components/FooterComponent";
import { LOGO_URL } from "./src/components/utils/Contains";	
import React, { useEffect,useState } from "react";
import { use } from "react";

import mockData from "./src/components/utils/MockData";
import FooListComponent from "./src/components/FoodListComponent";
//HederComponent
//BodyComponent
const AppLayout = () => {
	return (
		<div>
			
			<div className="header">
				<HeaderComponent logo={LOGO_URL} />
				<MenuComponent />
			</div>
			<div className="content">
				<SearchComponent/>

				<FooListComponent listProducts = {mockData.recipes}/>
				
			</div>
			
			<FooterComponent/>
		</div>
	);
}
var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);