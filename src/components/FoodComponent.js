const FoodComponent = ({id,logo,reviewCount,name,rating,caloriesPerServing}) => {

	return (
		<div className="food-card" key={id}>
			<p>{name}</p>
			<img className="food-image"  src={logo} alt="Food" />
			<p>Review Count: {reviewCount}</p>
			<p>Rating: {rating}</p>
			<p>Calories Per Serving: {caloriesPerServing}</p>
		</div>
	);
};
export default FoodComponent;