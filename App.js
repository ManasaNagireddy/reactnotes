// File: App.js
// Description: This is a simple React application that renders a header, menu, and content area.

import ReactDOM from "react-dom/client";
import HeaderComponent from "./src/components/common/HeaderComponent";

import SearchComponent from "./src/components/SearchComponent";

import FooterComponent from "./src/components/common/FooterComponent";
import { LOGO_URL } from "./src/components/utils/Contains";	
import React, { useEffect,useState } from "react";


import mockData from "./src/components/utils/MockData";
import FooListComponent from "./src/components/FoodListComponent";
import MenuComponent from "./src/components/MenuComponent";
import ErrorComponent from "./src/components/ErrorComponent";
import { createBrowserRouter,RouterProvider,Outlet  } from "react-router-dom";
import AboutusComponent from "./src/components/AboutusComponent";
import ContactusComponent from "./src/components/ContactusComponent";
import HomeComponent from "./src/components/HomeComponent";

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
				<Outlet/>
			</div>
			
			<FooterComponent/>
		</div>
	);
}

var links = createBrowserRouter([
	{
		path : "/",
		element : <AppLayout/>,
		children : [
			{
				path : "/",
				element : <HomeComponent/>,
			},
			{
				path : "/about",
				element : <AboutusComponent/>,
			},
			{
				path : "/contact",
				element : <ContactusComponent/>,
			},
			{
				path : "/error",
				element : <ErrorComponent/>,
			},
			{
				path : "*",
				element : <ErrorComponent/>,
			},
		]
	},
	
]); 

var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider  router={links}/>);