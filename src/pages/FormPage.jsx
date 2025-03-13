import { Container, Card, Row, Col} from "react-bootstrap";
import {InputCard} from "../components/InputCard"
import styles from "./FormPage.css"
export function leftLayer(){
  return (
    <div>

      
      

    </div>


  )
}


export function FormPage() {
    return (
      <div className="">

      <Container>
        <Row>
          <Col className="left-section ">
          <Card className="p-4 text-center border-0">
            <Card.Img
              //src="https://static.vecteezy.com/system/resources/previews/008/040/403/original/restaurant-logo-icon-design-template-free-vector.jpg" 
              className="img-fluid"
            />
            <Card.Body>
              <Card.Title className="mt-3">TOO GOOD TO GO</Card.Title>
              <Card.Subtitle className="text-muted">
                FOOD WASTING SOLUTION
              </Card.Subtitle>
              <Card.Img
              src="https://news.mit.edu/sites/default/files/images/202312/MIT_Food-Diabetes-01.jpg" 
              className="img"
            />
            </Card.Body>
          </Card>
          </Col>
          <Col className="right-section">
          <InputCard/>
          
          </Col>
        </Row>
        
      </Container>

      </div>
      
    );
  }




  
  export default FormPage;


  // <Col md={6} className="left-section">
          