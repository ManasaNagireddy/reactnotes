import ReactDOM from "react-dom/client";
import HeaderComponent from "./common/HeaderComponent";

import SearchComponent from "./SearchComponent";




import mockData from "./utils/MockData";
import FooListComponent from "./FoodListComponent";

//HederComponent
//BodyComponent
const HomeComponent = () => {
	return (
		
			
			<div className="content">
				<SearchComponent/>

				<FooListComponent listProducts = {mockData.recipes}/>
				
			</div>

		
	);
}
export default HomeComponent;