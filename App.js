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
import HomeComponent from "./src/components/HomeComponent";
import { Layout } from 'antd';
import { Header, Footer, Sider, Content } from 'antd/lib/layout/layout';



const AppLayout = () => {
	
	return (
		<>
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
				path : "*",
				element : <ErrorComponent/>,
			},
		]
	},
	
]); 

var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider  router={links}/>);