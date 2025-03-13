import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";



export function HomeBtn({ buttonTitle, route, imageRoute }) {
    return (
        <Link to={route} style={{ textDecoration: 'none' }}>
            <Card className="p-4 text-center border-0">
                <Card.Img
                  src={imageRoute}
                  className="img-fluid"
                />
                <Card.Body>
                  <Card.Title className="mt-3">{buttonTitle}</Card.Title>
                </Card.Body>
            </Card>
        </Link>
    );
}

export default HomeBtn;