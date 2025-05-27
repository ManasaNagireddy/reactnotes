import { Carousel } from "antd";
import slider1 from '/src/assets/sliders/slider1.png';


const SliderComponent = () => {
    return (
        <Carousel autoplay infinite={true} dots={true} >
            <div>
               <img src="assets/sliders/slider1.png" alt="Organic Food" />

            </div>
            <div>
                <h3 style={{lineHeight: "160px", color: "#fff", background: "#364d79", textAlign: "center"}}>
                    Slide 2
                </h3>
            </div>
            <div>
                <h3 style={{lineHeight: "160px", color: "#fff", background: "#364d79", textAlign: "center"}}>
                    Slide 3
                </h3>
            </div>
            <div>
                <h3 style={{lineHeight: "160px", color: "#fff", background: "#364d79", textAlign: "center"}}>
                    Slide 4
                </h3>
            </div>
        </Carousel>
    );
}
export default SliderComponent;