import { Card } from 'antd';
const { Meta } = Card;

const FoodComponent = ({id,image,reviewCount,name,rating,caloriesPerServing}) => {

	return (
		<>
		<Card gap="0">		
			<h2><Meta title={name} /></h2>
		<Card className="food-card" key={id}
			hoverable
    cover={<img alt={name} src={image} />}
  >
			
			<p>Review Count: {reviewCount}</p>
			<p>Rating: {rating}</p>
			<p>Calories Per Serving: {caloriesPerServing}</p>
		</Card>
		</Card>

		</>
	);
};
export default FoodComponent;