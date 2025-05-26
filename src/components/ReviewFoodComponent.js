import { Card,Affix,Button } from 'antd';
import FoodComponent from './FoodComponent';
const { Meta } = Card;

const ReviewFoodComponent = (props) => {
  const  { id,image,reviewCount,name,rating,caloriesPerServing } = props;

    return (
        <>
        

      {/* Floating Button Label */}
      <div style={{ position: 'absolute', top: 50, left: 0, zIndex: 1 }}>
        <Button type="primary" size="small">
          Promoted
        </Button>
      </div>
       <FoodComponent {...props} />
      
        </>
    );
};
export default ReviewFoodComponent;