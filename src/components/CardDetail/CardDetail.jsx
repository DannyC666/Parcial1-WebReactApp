
import styles from './CardDetail.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from "react-bootstrap";


export function CardDetail({ imageUrl, titulo }) {
 
    return (
      //./assets/logo512.png
      <div>
        <Card className="border-0 mx-auto" style={{ width: "200px" }}>
            <Card.Img variant="top" src={imageUrl} className="rounded" />
            <Card.Body className="bg-teal text-center">
                  <Card.Title>{titulo}</Card.Title>
            </Card.Body>
        </Card>


       
      </div>


      
      
    );
  }
  
  export default CardDetail;


