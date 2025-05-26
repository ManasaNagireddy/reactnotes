// File: App.js
// Description: This is a simple React application that renders a header, menu, and content area.
import ReactDOM from "react-dom/client";
import HeaderComponent from "./src/components/common/HeaderComponent";
import FooterComponent from "./src/components/common/FooterComponent";
import { LOGO_URL } from "./src/components/utils/Contains";	
import ErrorComponent from "./src/components/ErrorComponent";
import { createBrowserRouter,RouterProvider,Outlet  } from "react-router-dom";
import AboutusComponent from "./src/components/AboutusComponent";
import ContactusComponent from "./src/components/ContactusComponent";
import LoginComponent from "./src/components/auth/LoginComponent";
import HomeComponent from "./src/components/HomeComponent";
import { Layout } from 'antd';
import { Header, Footer, Sider, Content } from 'antd/lib/layout/layout';
import CartComponent from "./src/components/CartComponent";
import { Provider } from "react-redux";
import { store } from "./src/components/utils/appStore";
import ProductDetailComponent from "./src/components/ProductDetailComponent";


const AppLayout = () => {
	
	return (
		<>
		<Provider store={store}>
		<Layout>
			<Header>
				<HeaderComponent logo={LOGO_URL}/>
			</Header>
			<Layout>
				<Content>
					<Outlet/>
				</Content>
			</Layout>
			<Footer>
				<FooterComponent/>
			</Footer>
		</Layout>
		</Provider>
		</>
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
				path : "/login",
				element : <LoginComponent/>,
			},
			{
				path : "/cart",
				element : <CartComponent/>
			},
			{
				path : "/product/:productid",
				element : <ProductDetailComponent/>,
			},
			{
				path : "/home",
				element : <HomeComponent/>,
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