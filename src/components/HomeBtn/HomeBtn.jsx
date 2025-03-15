import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "react-bootstrap";

export function HomeBtn({ buttonTitle, route, imageRoute, onClick }) {
    return (
      <div onClick={onClick} style={{ cursor: "pointer" }}>
        <Card className="p-4 text-center border-0" style={{ backgroundColor: "transparent" }}>
            <Card.Img
              src={imageRoute}
              className="img-fluid"
            />
            <Card.Body>
              <Card.Title className="mt-3 " style={{ color: "white", fontSize:"50px" }} >{buttonTitle}</Card.Title>
            </Card.Body>
        </Card>
      </div>
    );
}

export default HomeBtn;