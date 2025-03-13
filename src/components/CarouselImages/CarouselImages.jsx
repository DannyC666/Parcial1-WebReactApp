import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Card } from "react-bootstrap";


export function CarouselImages({items}) {
    return (
        <Carousel indicators={false} interval={3000} className="p-4">
            {items.map((item, index) => (
                <Carousel.Item key={index} className="text-center">
                    <Card className="border-0 mx-auto" style={{ width: "1000px", height: "200px"  }}>
                        <Card.Img variant="top" src={item.image} className="rounded" />
                    
                    </Card>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default CarouselImages;
