import {Link} from 'react-router-dom';
const MenuComponent = () => {
	return (
		<div>
			<ul className="menu">
				<li><Link to="/">Home</Link></li>
				<li><Link to="/about">About</Link></li>
				<li><Link to="/contact">Contact</Link></li>
			</ul>
		</div>
	);
};	
export default MenuComponent;