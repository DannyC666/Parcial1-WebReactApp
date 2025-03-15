
import styles from './CardDetail.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "react-bootstrap";


export function CardDetail({ imageUrl, titulo }) {
 
    return (
      <div>
        <Card className="border-0 mx-auto" style={{ width: "200px" }}>
            <Card.Img variant="top" src={imageUrl} className="rounded" style={{ width: "200px", height: "200px"  }}/>
            <Card.Body className="bg-teal text-center" style={{ backgroundColor:"#0a6368",  color:"white" }}>
                  <Card.Title>{titulo}</Card.Title>
            </Card.Body>
        </Card>
      </div>
      
    );
  }
  
  export default CardDetail;


