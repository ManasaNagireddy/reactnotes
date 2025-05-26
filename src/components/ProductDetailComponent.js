import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Flex,Carousel } from "antd";

const ProductDetailComponent = () => {
    const { productid } = useParams();
    const [info, setInfo] = useState(null);

    useEffect(() => {
        // Fetch product details using productid
        const fetchProductDetails = async () => {
            try {
                console.log(`Fetching details for product ID: ${productid}`);
                const response = await fetch(`https://dummyjson.com/products/${productid}`);
                const data = await response.json();
                console.log(data);
                setInfo(data);
            } catch (error) {
                console.error("Error fetching product details:", error);
            }
        };

        if (productid) {
            fetchProductDetails();
        }
    }, [productid]);

    return (
        <div>
            <Flex justify="center" style={{ margin: "20px 0" }}>
                <Flex direction="column" style={{ width: '50%' }}>
                <Carousel>
                    {info?.images && info.images.length > 0 ? (
                        <img src={info.images[0]} alt={info.title} style={{ width: '80%' }}  />
                    ) : (
                        <p>No image available</p> 
                    )}
                </Carousel>
                </Flex>
                <Flex direction="column" style={{ width: '50%', padding: '20px' }}>
        
            {info ? (
                <div>
                    <h2>{info.title}</h2>
                    <p>{info.description}</p>
                    <p><strong>Price:</strong> ${info.price}</p>
                    <img src={info.thumbnail} alt={info.title} width="200" />
                </div>

            ) : (
                <p>Loading product details...</p>
            )}
            </Flex>
            </Flex>
        </div>
    );
};

export default ProductDetailComponent;
