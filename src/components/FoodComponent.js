import { Card } from 'antd';
const { Meta } = Card;

const FoodComponent = ({id,thumbnail,reviewCount,name,rating,caloriesPerServing}) => {

	return (
		<>
		
		<Card className="food-card"  title={name} key={id}
			hoverable
    cover={<img alt={name} src={thumbnail} />}
  >
			
			<p>Review Count: {reviewCount}</p>
			<p>Rating: {rating}</p>
			<p>Calories Per Serving: {caloriesPerServing}</p>
		</Card>

		</>
	);
};
export default FoodComponent;