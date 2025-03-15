import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Card } from "react-bootstrap";


export function CarouselImages({items}) {
    return (
        <Carousel indicators={false} interval={3000} className="pb-5">
            {items.map((item, index) => (
                <Carousel.Item key={index} className="text-center">
                    <Card className="border-0 mx-auto" style={{ width: "104%", height: "250px"  }}>
                        <Card.Img variant="top" src={item.image} className="rounded" />
                    
                    </Card>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default CarouselImages;
