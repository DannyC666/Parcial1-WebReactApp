import { Container, Card, Row, Col} from "react-bootstrap";
import {InputCard} from "../components/InputCard"
import styles from "./pageStyles/FormPage.css"
import { FormattedMessage } from "react-intl";


export function FormPage() {
    return (
      <div >
      <Container className="form-container" >
        <Row>
          <Col sm={8} className="left-section ">
            <Card className="text-center border-0 left-container-section">
              <Card.Img
                src="./assets/foodVector.png" 
                className="food-vector-image"
              />
              <Card.Body>
                <leftLayer/> 

                <Card.Title className="title-brand-food " >TOO GOOD TO GO</Card.Title>
                <Card.Subtitle className="m-2 text-brand-food">
                <FormattedMessage id="welcome"/>
                </Card.Subtitle>
                <Card.Img
                src="https://news.mit.edu/sites/default/files/images/202312/MIT_Food-Diabetes-01.jpg" 
                className="img-brand-login"
              />
              </Card.Body>
            </Card>
          </Col>

          <Col sm={4} className="right-section">
            <InputCard/>
          </Col>
        </Row>
        
      </Container>

      </div>
      
    );
  }



  export default FormPage;


          